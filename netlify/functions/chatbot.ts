export const handler = async (event: any) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ reply: "Mensaje vacío" }),
      };
    }

    const { message } = JSON.parse(event.body);

    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: message,
          options: { wait_for_model: true },
        }),
      }
    );

    const data = await response.json();

    // 🧠 Manejar todos los formatos posibles
    let reply =
      data?.[0]?.generated_text ??
      data?.generated_text ??
      (typeof data === "string" ? data : null);

    if (!reply) {
      reply = "🤖 Estoy pensando… intenta de nuevo en unos segundos.";
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
