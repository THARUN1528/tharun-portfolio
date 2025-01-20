import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 whileInView={{opacity:1,y: 0}} initial={{opacity:0, y: -100}} transition={{duration:0.5}} className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p whileInView={{opacity:1,x: 0}} initial={{opacity:0, x: -100}} transition={{duration:0.5}} className="my-4">{CONTACT.address}</motion.p>
            <div>
            <motion.a href="https://wa.me/916374388118" whileInView={{opacity:1,x: 0}} initial={{opacity:0, x: 100}} transition={{duration:0.5}} className="my-4">{CONTACT.phoneNo}</motion.a>
            </div>
            <a href="mailto:tharunharikrishnan2004@gmail.com">tharunharikrishnan2004@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact