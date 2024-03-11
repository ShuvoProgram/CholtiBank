import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import ThemeWiseImageLoader from "@/components/Utility/ThemeWiseImageLoader";
import lightThemeLogo from "@/assets/Navbar/Light/choltiBank.png";
import darkThemeLogo from "@/assets/Navbar/Dark/choltiBank_dark_1.png";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-gray-100 dark:from-gray-900 via-yellow-50 dark:via-slate-700 to-yellow-100 dark:to-slate-800 mt-20">
      <div className=" mx-auto max-w-screen-2xl px-4 lg:px-16  pt-12 pb-5 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div
            data-aos="zoom-in-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          >
            <Link href="#" className="mr-5">
              <ThemeWiseImageLoader
                srcLight={lightThemeLogo}
                srcDark={darkThemeLogo}
                alt="logo"
                width={150}
                height={35}
              />
            </Link>
            <p className="max-w-xs mt-4 text-sm ">
              Welcome to Cholti Bank, where your financial journey begins.
              Discover seamless banking experiences, cutting-edge security, and
              a range of services designed to empower your financial goals.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-800 dark:text-gray-100">
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Linkedin </span>
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Youtube </span>
                <FaYoutube />
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <FaInstagram />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <FaXTwitter />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div
              data-aos="zoom-in-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link className="hover:opacity-75" href="#">
                  About
                </Link>
                <Link className="hover:opacity-75" href="#">
                  Meet the Team
                </Link>
                <Link className="hover:opacity-75" href="#">
                  History
                </Link>
                <Link className="hover:opacity-75" href="#">
                  Careers
                </Link>
              </nav>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link className="hover:opacity-75" href="#">
                  1on1 Coaching
                </Link>
                <Link className="hover:opacity-75" href="#">
                  Company Review
                </Link>
                <Link className="hover:opacity-75" href="#">
                  Accounts Review
                </Link>
                <Link className="hover:opacity-75" href="#">
                  HR Consulting
                </Link>
              </nav>
            </div>
            <div
              data-aos="zoom-in-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link className="hover:opacity-75" href="#">
                  Contact
                </Link>
                <Link className="hover:opacity-75" href="#">
                  FAQs
                </Link>
                <Link className="hover:opacity-75" href="#">
                  Live Chat
                </Link>
              </nav>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link className="hover:opacity-75" href="#">
                  Privacy Policy
                </Link>
                <Link className="hover:opacity-75" href="#">
                  Terms &amp; Conditions
                </Link>
                <Link className="hover:opacity-75" href="#">
                  Returns Policy
                </Link>
                <Link className="hover:opacity-75" href="#">
                  Accessibility
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div
          className="mt-8 text-sm text-center text-gray-800 dark:text-gray-100"
         
        >
          © 2023{" "}
          <Link
            className=" font-bold text-primary dark:text-yellow-500"
            href="https://github.com/git-sujon"
          >
            CholtiBank
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
