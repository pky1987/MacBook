import React from 'react'
import { useEffect,useRef } from 'react';
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const videoRef = useRef();

    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate=2;
    },[]);


  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title"/>
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay loop muted playsInline preload='auto'/>
        <button>Buy Now</button>
        <p>From €600 or €60/mon for 10 months </p>
    </section>
  )
}

export default Hero
