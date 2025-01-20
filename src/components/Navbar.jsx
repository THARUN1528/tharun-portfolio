import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-8" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tharun-h-38990a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        <a href="https://github.com/THARUN1528"><FaGithub /></a>
        <a href=""><FaSquareXTwitter /></a>
        <a href="https://www.instagram.com/_tharun2004?igsh=MXE3anlhN2R4OThidw=="><FaInstagram /></a>
        
      </div>
    </nav>
  )
}

export default Navbar


