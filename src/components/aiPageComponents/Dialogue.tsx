"use client";

import { useState, useEffect, useRef } from "react";
import EntryField from "./EntryField";
import { BeatLoader } from "react-spinners";

const Dialogue = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [userHistory, setUserHistory] = useState<
    { role: string; parts: { text: string }[] }[]
  >([]);
  const [sending, setSending] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);

  const promptHandler = `
Please assist users by answering their questions from a Christian standpoint. Follow these guidelines:

1. If the question is related to Christianity or religion:
   - Begin by displaying a Bible verse (New Living Translation - NLT) that addresses or relates to the question.
   - Provide a clear and thoughtful explanation of the verse, connecting it to the user's question in a concise and respectful manner.

2. If the user greets or sends a casual message (e.g., "Hi", "How are you?"):
   - Respond in a friendly and conversational tone, acknowledging their greeting.

3. If the question is not related to Christianity or religion:
   - Politely mention that your primary purpose is to assist with religious or Christian-related questions and offer to help if they have any such inquiries.

**Additional Instructions**:
- Keep the tone respectful, warm, and aligned with Christian values.
- Use bold text for emphasis where necessary.
- Insert line breaks between logical sections for clarity.
  `;

  const handleRequest = async () => {
    if (!userPrompt) {
      return;
    }
    try {
      setSending(true);

      const options = {
        method: "POST",
        body: JSON.stringify({
          history: userHistory,
          message: userPrompt + promptHandler,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      //https://verbum-beta.vercel.app/api/ai
      //http://localhost:3000/api/ai
      const response = await fetch("https://verbum-beta.vercel.app/api/ai", options);
      const data = await response.text();

      setUserHistory((oldUserHistory) => [
        ...oldUserHistory,
        {
          role: "user",
          parts: [{ text: userPrompt }],
        },
        {
          role: "model",
          parts: [{ text: JSON.parse(data).message }],
        },
      ]);

      setUserPrompt("");
      setSending(false);
    } catch (error) {
      console.log(error);
      setSending(false);
    }
  };

  const formatResponse = (text: string) => {
    const paragraphs = text.split("\n").filter((line) => line.trim() !== "");
    return paragraphs.map((para, index) => (
      <p key={index} className="mb-2">
        {para.split("**").map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i}>{part}</strong>
          ) : (
            part
          )
        )}
      </p>
    ));
  };

  useEffect(() => {
    if (anchorRef.current && userHistory.length !== 0) {
      anchorRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [userHistory]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-grow overflow-y-auto pt-4">
        {userHistory &&
          userHistory.map((d, index) => (
            <div
              key={index}
              className={`${
                d.role === "user" ? "justify-start" : "justify-end"
              } w-full flex items-center p-2`}
            >
              <div
                className={`${
                  d.role === "user" ? "bg-soft-pink/50" : "bg-gray-200/50"
                } max-w-[60%] p-2 rounded-lg shadow-sm dynamic-label`}
              >
                {d.role === "model" ? formatResponse(d.parts[0].text) : d.parts[0].text}
              </div>
            </div>
          ))}
        {sending && (
          <div className="w-full flex items-center justify-end p-2">
            <div className="max-w-[60%] bg-gray-200/50 rounded-lg px-4 h-[35px] flex justify-center items-center">
              <BeatLoader 
              size={15} 
              className="opacity-50" />
            </div>
          </div>
        )}
        <div ref={anchorRef} className="w-full h-[10px]"></div>
      </div>
      <EntryField
        sending={sending}
        handleRequest={handleRequest}
        setUserPrompt={setUserPrompt}
        userPrompt={userPrompt}
        setUserHistory={setUserHistory}
      />
    </div>
  );
};

export default Dialogue;