export const handler = async (event: any) => {
  console.log("Function invoked");

  try {
    console.log("Raw body:", event.body);

    if (!event.body) {
      console.log("No body received");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No body received" }),
      };
    }

    const { message } = JSON.parse(event.body);
    console.log("User message:", message);

    console.log("API KEY exists:", !!process.env.OPENAI_API_KEY);

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "Responde de forma clara y corta." },
            { role: "user", content: message },
          ],
        }),
      }
    );

    console.log("OpenAI status:", response.status);

    const data = await response.json();
    console.log("OpenAI response:", JSON.stringify(data));

    if (!response.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "OpenAI error",
          details: data,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: data.choices?.[0]?.message?.content ?? "Sin respuesta",
      }),
    };
  } catch (error: any) {
    console.log("CATCH ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server error",
        details: error.message,
      }),
    };
  }
};
