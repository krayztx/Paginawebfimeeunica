export const handler = async (event: any) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ reply: "Mensaje vacío" }),
      };
    }

    const { message } = JSON.parse(event.body);
    const systemPrompt = `
    Eres un chatbot de ayuda para una página web específica.
    
    Información de la página:
    - Esta página es un proyecto académico la cual fue creada para brindar todo tipo de ayuda e informacion de la FIMEE UNICA.
    - El sitio informa y ayuda a los usuarios a entender el contenido de la página.
    - Responde SOLO preguntas relacionadas con la página.
    
    Reglas:
    - Si el usuario pregunta algo que no tiene relación con la página, responde:
      "Solo puedo responder preguntas relacionadas con esta página."
    - Responde en español.
    - Sé claro, breve y amigable.
    `;


    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
         body: JSON.stringify({
          inputs: `
        ${systemPrompt}
        
        Usuario: ${message}
        Asistente:
        `,
          options: { wait_for_model: true },
        }),
      }
    );

    const data = await response.json();

    console.log("HF RAW RESPONSE:", JSON.stringify(data));

    let reply = "";

    // Caso más común: array
    if (Array.isArray(data) && data[0]?.generated_text) {
      reply = data[0].generated_text;
    }

    // Caso alternativo
    if (!reply && data?.generated_text) {
      reply = data.generated_text;
    }

    // Limpieza: quitar prompt si viene incluido
    if (reply.includes("Asistente:")) {
      reply = reply.split("Asistente:").pop()!.trim();
    }

    // Fallback seguro
    if (!reply || reply.length < 2) {
      reply = "🤖 Hola, estoy listo para ayudarte.";
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: "⚠️ Error interno del chatbot",
      }),
    };
  }
};
