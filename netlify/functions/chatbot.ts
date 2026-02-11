import fs from "fs";
import path from "path";

export const handler = async (event: any) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ reply: "Mensaje vacío" }),
      };
    }

    const { message } = JSON.parse(event.body);
    const filePath = path.join(
      process.cwd(),
      "src",
      "knowledge",
      "info.txt"
    );

const knowledge = fs.readFileSync(filePath, "utf-8");

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
        Eres un chatbot de ayuda para una página web.
        
        INFORMACIÓN DE LA PÁGINA:
        ${knowledge}
        
        REGLAS:
        - Responde SOLO usando la información anterior
        - Si la pregunta no está relacionada con la página, responde:
          "Solo puedo responder preguntas relacionadas con esta página."
        - Responde en español, claro y amigable
        
        PREGUNTA DEL USUARIO:
        ${message}
        
        RESPUESTA:
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
