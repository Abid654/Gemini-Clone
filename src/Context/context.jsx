import React, { useState } from "react";
import { createContext } from "react";
import run from "../Config/gemini";


export const Context = createContext();

const ContextProvider = (props) => {

const [input, setInput] = useState("")
const [recentPrompt, setRecentPrompt] = useState("")
const [prevPrompt, setprevPrompt] = useState([])
const [showResult, setShowResult] = useState(false)
const [loading, setLoading] = useState(false)
const [resultData, setResultData] = useState("")



  const onSent = async (prompt) => {
    await run(prompt)
  }

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setprevPrompt,
    showResult,
    loading,
    resultData,
    onSent,

  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}
export default ContextProvider
