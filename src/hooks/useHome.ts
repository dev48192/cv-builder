import { useSmartAppState } from '../states';
import { SmartAppActions } from '../states/actions';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const useHome = () => {
    const { dispatchSmartAppState } = useSmartAppState();

    const {
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const stopListening = async () => {
        setTimeout(()=>{
            SpeechRecognition.stopListening();
            dispatchSmartAppState({
                type: SmartAppActions.UPDATE_LISTENING_STATE,
                isListening: false,
            });
            resetTranscript();
        },10000)
    }

    const handleListening = () => {
        dispatchSmartAppState({
            type: SmartAppActions.UPDATE_LISTENING_STATE,
            isListening: true,
        });
        SpeechRecognition.startListening({continuous: true, language: 'en-IN'});
        stopListening();
    }

    return {
        model:{
            transcript,
            browserSupportsSpeechRecognition,
        },
        operations:{
            handleListening,
        }
    }

}