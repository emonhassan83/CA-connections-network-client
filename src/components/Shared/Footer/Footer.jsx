import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoDropbox } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <div className="bg_primary text-white">
   
    <footer className="footer p-10 bg_primary text-base-content">
      <aside>
      <div className="flex items-center justify-center gap-1 w-40 h-20">
          <IoLogoDropbox className="text-3xl -ml-8 mt-2"/>
            <h2 className="text-xl font-bold">logoipsum</h2>
          </div>
        <p>
        India's first platform dedicated to <br /> simplifying partner search
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <hr />
    </footer>
    <div className="border-t-2 w-full">
      <div className="sm:flex items-center justify-between py-8 mx-8">
      <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
      <div className="flex items-center gap-3 text-2xl">
        <BsFacebook/>
        <AiOutlineInstagram/>
        <BiLogoLinkedin/>
        <AiOutlineWhatsApp/>
      </div>
      </div>
    </div>
    </div>

  );
};

export default Footer;
