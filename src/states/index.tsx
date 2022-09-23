import React, { createContext, useContext, useReducer } from "react";
import { initialSmartAppState, smartAppReducer } from "./reducers";
import { Actions, SmartAppStateType } from "./types";

export interface StateContextType {
    smartAppState: SmartAppStateType;
    dispatchSmartAppState: React.Dispatch<React.SetStateAction<Actions>>;
  }

export const SmartAppContext = createContext<StateContextType>(null!);

export const SmartAppProvider: React.FC<React.PropsWithChildren<{children?: React.ReactNode}>> = (props) => {
    const [smartAppState, dispatchSmartAppState] = useReducer(smartAppReducer, initialSmartAppState);

    const contextValue = {
        smartAppState,
        dispatchSmartAppState
    } as StateContextType;

    return <SmartAppContext.Provider value={contextValue}>{props.children}</SmartAppContext.Provider>
}

export const useSmartAppState = () => {
    const context = useContext(SmartAppContext);
    if(!context){
        throw new Error('useSmartAppState must be used within the SmartAppProvider');
    }
    return context;
}