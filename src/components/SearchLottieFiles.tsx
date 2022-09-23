import React, { useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import waveformAnimation from '../assets/waveform-animation.json';
import './style.scss';

export const SearchLottieFiles = () => {
    const animationRef = useRef<LottieRefCurrentProps>(null);
    useEffect(()=>{
        animationRef?.current?.setSpeed(0.5);
    },[])
    return (
        <>
            <div className='button-container'>
                <Button variant="primary" className='start-button'>
                    <div className='btn-text'>Start</div>
                </Button>
            </div>
            <Lottie animationData={waveformAnimation} loop={true} lottieRef={animationRef}/>
        </>
    );
}
