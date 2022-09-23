import React from 'react';
import WaveForm from './WaveForm';
import './style.scss';

interface SpeechRecognitionComponentProps {
    transcript: string;
}
const SpeechRecognitionComponent: React.FC<SpeechRecognitionComponentProps> = ({
    transcript,
}) => {
    return (
        <div className='wrapper'>
            <div className='transcript-text'>{transcript}</div>
            <WaveForm/>
        </div>
    );
}

export default SpeechRecognitionComponent;