import React from 'react';
import { useSmartAppState } from '../../states';
import { Button } from 'react-bootstrap';
import SpeechRecognitionComponent from './SpeechRecognition';
import './style.scss';
import { useHome } from '../../hooks/useHome';

const Home = () => {
    const {
        smartAppState:{
            isListening,
        }, 
    } = useSmartAppState();
    const {
        model:{
            transcript,
            browserSupportsSpeechRecognition,
        },
        operations:{
            handleListening,
        }
    } = useHome();
    return (
        <>
            {isListening?(
                 <SpeechRecognitionComponent
                    transcript={transcript} 
                    appSupported={browserSupportsSpeechRecognition}
                />
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