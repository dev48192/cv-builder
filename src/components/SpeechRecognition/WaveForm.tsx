import React, { useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import waveformAnimation from '../../assets/waveform-animation.json';
import './style.scss';

const WaveForm: React.FC = () => {
    const animationRef = useRef<LottieRefCurrentProps>(null);
    useEffect(()=>{
        animationRef?.current?.setSpeed?.(0.5);
    },[])
    return (
        <Lottie animationData={waveformAnimation} loop={true} lottieRef={animationRef} className='animation-container'/> 
    );
}

export default WaveForm;