import { SmartAppStateType, Actions } from "./types"
import { SmartAppActions } from "./actions";

export const initialSmartAppState: SmartAppStateType = {
    isListening: false,
}

export const smartAppReducer = (state: SmartAppStateType, action: Actions) => {
    switch(action.type){
        case SmartAppActions.UPDATE_LISTENING_STATE:
            return {
                ...state,
                isListening: action.isListening,
            }
        default:
            return {
                ...state,
            };
    }
}