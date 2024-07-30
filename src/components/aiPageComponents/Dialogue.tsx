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

  const promptHandler =
    `Respond to this from a Christian point of view (biblcle evidence/research). If the user is just saying 'Hi', respond normally.
    DO NOT use any text formatting in your response such as '*'.`;

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

      const response = await fetch("http://localhost:3000/api/ai", options);
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

  useEffect(() => {
    if (anchorRef.current && userHistory.length !== 0) {
      anchorRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [userHistory]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-grow overflow-y-auto pt-4">
        {userHistory &&
          userHistory.map((d, index) => {
            return (
              <div
                key={index}
                className={`${
                  d.role === "user" ? "justify-start" : "justify-end"
                } w-full flex items-center p-2`}
              >
                <div
                  className={`${
                    d.role === "user" ? "bg-soft-pink/50" : "bg-gray-200/50"
                  } max-w-[60%] w-full p-2 rounded-lg shadow-sm dynamic-label`}
                >
                  {d.parts[0].text}
                </div>
              </div>
            );
          })}
        {sending && (
          <div className="w-full flex items-center justify-end p-2">
            <div className="max-w-[60%] bg-gray-200/50 rounded-lg px-4 h-[35px] flex justify-center items-center">
              <BeatLoader size={15} className="text-black/10" />
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
