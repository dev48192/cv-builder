import { SmartAppActions } from "./actions";

export interface SmartAppStateType {
    isListening: boolean,
}
interface UpdateListening {
    type: SmartAppActions.UPDATE_LISTENING_STATE;
    isListening: SmartAppStateType['isListening'];
}
export type Actions = UpdateListening;

