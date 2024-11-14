import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

 const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}

export default animateWithGsap