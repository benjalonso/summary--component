import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-green-700 mt-8 h-[15vh] text-green-50 dark:bg-slate-800 dark:text-slate-50">
      <div className="mx-auto grid grid-flow-col w-32 pt-2">
        <AiOutlineHome className="mx-auto " />
        <span className="text-xs">Santiago, Chile</span>
      </div>
      <div className="mx-auto grid grid-flow-col w-48 my-1">
        <AiOutlineMail className="mx-auto" />
        <span className="text-xs">alonsobenjaminlb@gmail.com</span>
      </div>
      <div className="grid grid-cols-3 place-items-center w-28 mx-auto">
        <a href="http://www.instagram.com/bemjadev/" target="_blank">
          <AiOutlineInstagram className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/benjam%C3%ADn-alonso-larenas-bravo-23129220a/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/benjalonso" target="_blank">
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
