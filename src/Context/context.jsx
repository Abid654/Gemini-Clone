import React from "react";
import { createContext } from "react";
import run from "../Config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await run(prompt)
  }


    onSent("Suggest top 10 webs for learning")
  const contextValue = {}

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}
export default ContextProvider
