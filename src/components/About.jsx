import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About
          <span className="text-neutral-500"> Me</span></h2>
          <div className="flex flex-wrap">
            <motion.div whileInView={{opacity:1,x: 0}}
            initial={{opacity:0, x: -100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImg} alt="about" />
            </div>
            </motion.div>
            <motion.div whileInView={{opacity:1,x: 0}}
            initial={{opacity:0, x: 100}}
            transition={{duration:0.5}}  className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="text-center"  >
              <p className="text-transform: capitalize my-2 font-light py-6 text-justify">{ABOUT_TEXT}</p>
            </div>
            </motion.div>
          </div>
    </div>
  )
}

export default About;