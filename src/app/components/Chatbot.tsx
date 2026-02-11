import { useState } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/chatbot", {
        method: "POST",
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();

      const botMessage: Message = {
        sender: "bot",
        text: data.reply ?? "Error al responder 😢",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error de conexión 😢" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 rounded-xl bg-zinc-900 text-white shadow-lg flex flex-col">
      <div className="p-3 font-bold border-b border-zinc-700">
        🤖 Chatbot
      </div>

      <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[85%] ${
              msg.sender === "user"
                ? "ml-auto bg-blue-600"
                : "mr-auto bg-zinc-700"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-xs text-zinc-400">Escribiendo…</div>
        )}
      </div>

      <div className="flex gap-2 p-2 border-t border-zinc-700">
        <input
          className="flex-1 rounded-md bg-zinc-800 p-2 text-sm outline-none"
          placeholder="Escribe un mensaje…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="rounded-md bg-blue-600 px-3 text-sm hover:bg-blue-500"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
