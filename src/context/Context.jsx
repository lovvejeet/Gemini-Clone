import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultDate, setResultDate] = useState("");

  const onSent = async (prompt) => {
    setResultDate("");
    setLoading(true);
    setShowResult(true);
    const response = await runChat(input);
    setResultDate(response);
    setLoading(false);
    setInput("");
    
  };
  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultDate,
    input,
    setInput,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
