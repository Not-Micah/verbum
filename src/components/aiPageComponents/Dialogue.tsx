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
Answer questions from a Christian perspective, starting with a Bible verse (NLT) when applicable, 
followed by a clear and respectful explanation. For casual messages like greetings, respond warmly. 
If the question is unrelated to Christianity or religion, politely explain that your focus is on religious 
topics and invite them to ask faith-related questions.
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
            <div className="max-w-[60%] min-w-[150px] bg-gray-200/50 rounded-lg px-4 h-[35px] flex justify-center items-center">
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