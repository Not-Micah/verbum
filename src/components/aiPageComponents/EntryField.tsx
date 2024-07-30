import { FaEraser } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

interface EntryFieldProps {
  handleRequest: Function;
  setUserPrompt: Function;
  userPrompt: string;
  sending: boolean;
  setUserHistory: Function;
}

const EntryField: React.FC<EntryFieldProps> = ({
  handleRequest,
  setUserPrompt,
  userPrompt,
  sending,
  setUserHistory,
}) => {
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-row gap-x-2 
        h-[3rem] w-full overflow-x-hidden shadow-lg rounded-full px-4 py-2 bg-gray-100"
        onSubmit={(e) => {
          e.preventDefault();
          handleRequest();
        }}
      >
        <input
          type="text"
          className="flex-grow bg-gray-100 outline-none w-full"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="Enter Prompt..."
        />
        <button
          disabled={sending}
          className={`bg-blue-200 py-2 px-8 rounded-full outline-none
            flex justify-center items-center
            max-md:px-3 ${
            sending ? "bg-gray-300" : ""
          }`}
          type="submit"
        >
          <IoSend />
        </button>
        <button
          disabled={sending}
          type="button"
          onClick={() => {
            setUserHistory([]);
            setUserPrompt("");
          }}
          className="bg-blue-200 py-2 px-8 rounded-full outline-none
          flex justify-center items-center max-md:px-3"
        >
          <FaEraser />
        </button>
      </form>
    </div>
  );
};

export default EntryField;
