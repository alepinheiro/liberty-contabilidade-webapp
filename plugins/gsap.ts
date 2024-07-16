import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from 'gsap/Draggable'
// import { InertiaPlugin } from 'gsap/InertiaPlugin'
// import { Observer } from 'gsap/Observer'
//
export default defineNuxtPlugin(() => {
  //   gsap.registerPlugin(ScrollToPlugin)

  if (import.meta.client) {
    gsap.registerPlugin(ScrollToPlugin);
  }

  return {
    provide: {
      gsap,
      //   ScrollToPlugin,
      //   Observer,
      //   ScrollTrigger,
      //   Draggable
    },
  };
});
