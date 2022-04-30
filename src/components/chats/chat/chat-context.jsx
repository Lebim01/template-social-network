import { createContext, useState, useContext } from "react";
export const ChatContext = createContext({
  recording: false,
  setRecording: () => {},
  recording: null,
  setMessageFocused: () => {},
});

const ChatContextProvider = (props) => {
  const [recording, setRecording] = useState(false);
  const [messageFocused, setMessageFocused] = useState(null);

  return (
    <ChatContext.Provider
      value={{
        recording,
        setRecording,
        messageFocused,
        setMessageFocused,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export function useChat() {
  return useContext(ChatContext);
}

export default ChatContextProvider;
