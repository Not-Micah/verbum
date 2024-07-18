"use client";

import { useState, useEffect } from "react";
import EntryField from "./EntryField";
import { BeatLoader } from "react-spinners";

const Dialogue = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [userHistory, setUserHistory] = useState<
    { role: string; parts: { text: string }[] }[]
  >([]);
  const [sending, setSending] = useState(false);

  const promptHandler =
    "A christian is asking you this question. So answer it in a Christian's POV (obviously not using first person...). Do not try to be more casual though, stay professional.";

  const handleRequest = async () => {
    setSending(true);

    if (!userPrompt) {
      throw new Error("No value entered...");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: userHistory,
          message: userPrompt 
        //   + promptHandler,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

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

  useEffect(() => {}, [userHistory]);

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] mt-[8rem]
    w-full max-sm:mt-[3rem]">
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
            <div className="max-w-[60%] bg-gray-300 rounded-lg
            px-4 py-1">
                <BeatLoader size={15} color="black" />
            </div>
          </div>
        )}
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
