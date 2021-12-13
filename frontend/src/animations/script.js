import gsap, { Expo } from 'gsap';

export const annimWelcomeScreen = () => {
    var t1 = gsap.timeline();

    t1.to('.welcome-title', {opacity:1, duration: 1, ease: Expo.easeInOut});
    t1.to('.welcome-sub-title', {opacity: 1, duration: 0.5, ease: Expo.easeInOut});
    t1.to('.welcome-rules', {opacity: 1, duration: 0.5, ease: Expo.easeInOut});
    t1.to('.start-button', {opacity: 1, duration: 0.5, ease: Expo.easeInOut});

    t1.play();
}