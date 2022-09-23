import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSmartAppState } from '../states';
import { SmartAppActions } from '../states/actions';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SpeechRecognitionComponent from './SpeechRecognition';
import './style.scss';

const Home = () => {
    const {
        smartAppState:{
            isListening,
        },
        dispatchSmartAppState
    } = useSmartAppState();

    const {
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const handleListening = () => {
        dispatchSmartAppState({
            type: SmartAppActions.UPDATE_LISTENING_STATE,
            isListening: true,
        });
        SpeechRecognition.startListening({continuous: true});
    }
    return (
        <>
            {isListening?(
                 <SpeechRecognitionComponent transcript={transcript}/>
            ):(
                <div className='button-container'>
                    <Button variant="primary" className='start-button' onClick={handleListening}>
                        <div className='btn-text'>Start</div>
                    </Button>
                </div>
            )}
            
        </>
    );
}

export default React.memo(Home);