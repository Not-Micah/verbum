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
        className="flex flex-row gap-x-2 h-[2.5rem] w-full mx-auto mb-4 overflow-x-hidden"
        onSubmit={(e) => {
          e.preventDefault();
          handleRequest();
        }}
      >
        <input
          type="text"
          className="flex-grow border-2 border-gray-200 rounded-md px-2 py-1 outline-none
          shadow-sm dynamic-label"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="Enter Prompt..."
        />
        <button
          disabled={sending}
          className={`px-3 py-2 bg-gray-200 rounded-md shadow-sm dynamic-label ${
            sending ? "bg-gray-300" : ""
          }`}
          type="submit"
        >
          Enter
        </button>
        <button
          disabled={sending}
          type="button"
          onClick={() => {
            setUserHistory([]);
            setUserPrompt("");
          }}
          className="px-3 py-2 bg-gray-300 rounded-md dynamic-label
          shadow-sm"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default EntryField;
