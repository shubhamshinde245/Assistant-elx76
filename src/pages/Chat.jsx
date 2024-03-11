import React, { useState } from "react";
import {
  useQuery,
  useAction,
  createConversation,
  getConversations,
} from "wasp/client/operations";

const ChatPage = () => {
  const { data: conversations, isLoading, error } = useQuery(getConversations);
  const createConversationFn = useAction(createConversation);
  const [question, setQuestion] = useState("");

  if (isLoading) return "Loading...";
  if (error) return "Error: " + error;

  const handleAskQuestion = () => {
    createConversationFn({ question, response: "Response from GPT-3.5" });
    setQuestion("");
  };

  return (
    <div className="p-4">
      <div className="flex gap-x-4 py-5 fixed bottom-7 items-center w-3/4">
        <input
          type="text"
          placeholder="Ask a question"
          className="px-1 py-2 border rounded text-lg items-center w-3/4"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          onClick={handleAskQuestion}
          className="bg-blue-500 hover:bg-blue-700 px-2 py-2 items-center text-white font-bold rounded-md w-16"
        >
          Ask
        </button>
      </div>
      <div>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="py-2 px-2 flex items-center hover:bg-gray-100 gap-x-2 rounded bg-clip-padding"
          >
            <p>
              <strong>Question:</strong> {conv.question}
            <br />
              <strong>Response:</strong> {conv.response}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
