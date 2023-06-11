import React from 'react';
import WaveForm from './WaveForm';
import './style.scss';
import { Alert } from 'react-bootstrap';

interface SpeechRecognitionComponentProps {
    transcript: string;
    appSupported?: boolean;
}
const SpeechRecognitionComponent: React.FC<SpeechRecognitionComponentProps> = ({
    transcript,
    appSupported = false
}) => {
    return (
        <div className='wrapper'>
            <div className='transcript-text'>
                {appSupported ? (
                    <div>{transcript}</div>
                ) : (
                    <Alert variant={'warning'}>
                        Sorry, our app is not supported for this browser. 
                    </Alert>
                )}     
            </div>
            <WaveForm/>
        </div>
    );
}

export default SpeechRecognitionComponent;