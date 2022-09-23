import React from 'react';
import WaveForm from './WaveForm';

interface SpeechRecognitionComponentProps {
    transcript: string;
}
const SpeechRecognitionComponent: React.FC<SpeechRecognitionComponentProps> = ({
    transcript,
}) => {
    return (
        <>
            <div>{transcript}</div>
            <WaveForm/>
        </>
    );
}

export default SpeechRecognitionComponent;