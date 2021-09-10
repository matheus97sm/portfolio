import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function contentScroll() {
  const projectInside = document.querySelector('.projeto-inside-img'); 

  if (!projectInside) return;

  gsap.to(projectInside, {
    scrollTrigger: {
      trigger: projectInside,
      start: '200px 200px',
      scrub: 1,
    },
    scale: .85,
    ease: 'none',
    duration: 1.5
  })

  gsap.to('.header', {
    scrollTrigger: {
      trigger: '.header',
      start: '150px 150px',
      scrub: 1,
    },
    backgroundColor: '#131313',
    duration: 1
  });
}
