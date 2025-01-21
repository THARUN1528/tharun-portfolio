import {HERO_CONTENT} from "../constants";
import profilepic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react";

const container = (delay) => ({
    hidden: { x: -100, opacity:0 },
    visible: {
        x:0,
        opacity: 1,
        transition: { duration:0.5, delay: delay },
    },
});

const iconVariants = (duration) => ({
    initial: {y:-10 },
    animate: {
      y: [10,-10 ],
      transition:{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  });

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="my-2 flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className=" text-6xl font-light trackimg-tight lg:mt-16 lg:text-7xl">THARUN</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-10 max-w-xl py-6 font-light text-justify tracking-tighter ">{HERO_CONTENT}</motion.p>
                    <motion.button variants={container(1.3)} initial="hidden" animate="visible" class="py-1 px-5 my-4 flex justify-center items-center bg-transparent hover:bg-purple-400 focus:ring-offset-purple-200 text-white w-auto hover:text-black text-center text-base font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"  >
                      <a className="flex" href="https://1drv.ms/w/c/4d6805158167de06/EX6BsBGLyrhIt1RlkpPLREEBLQxlUjlJ72FkapJFBjY9qA?e=YNww9v" >Resume<img className="py-1 mx-1 "  width="15"  src="https://img.icons8.com/ios-filled/100/up-right-arrow.png" alt="up-right-arrow"/></a></motion.button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img initial={{ x:100, opacity: 0}} animate={{ x:0, opacity:1}} transition={{duration:1, delay:1.3}} src= {profilepic} alt="profile" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero