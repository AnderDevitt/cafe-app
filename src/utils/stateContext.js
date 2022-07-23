import { createContext, useContext } from "react"

// create a wrapper for using globale state
export const StateContext = createContext()

// make global state available all around the app
export const useGlobalState = () => useContext(StateContext)