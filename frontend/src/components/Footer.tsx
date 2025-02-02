import { Link } from "@tanstack/react-router";
import logo from "/arkhet-logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-black opacity-90 text-white p-10 text-center xl:text-left z-50">
      <div className="xl:flex">
        <div className="pb-10 md:pb-0">
          <div className="flex">
            <img
              src={logo}
              alt="Arkhet logo"
              className="w-[30px] h-[30px] mt-1"
            />
            <div className="nunitofont p-2 text-xl">A R K H E T</div>
          </div>
          <div className="py-2">
            <div className="lg:w-[250px] 2xl:w-[350px]">
              Create software prototypes in minutes using generative AI—no
              design or technical expertise required.
            </div>
          </div>
          <Link to="/register" className="font-bold">
            Register now
          </Link>
        </div>
        <div className="pb-10 md:pb-0 lg:px-10 2xl:px-20">
          <div className="font-bold py-2">Product</div>
          <div className="py-2">
            <Link to="/howitworks">How it works</Link>
          </div>
          <div className="py-2">
            <Link to="/schedule" className="py-2">
              Book a Demo
            </Link>
          </div>
          <div className="py-2">
            <Link to="/pricing" className="py-2">
              Pricing
            </Link>
          </div>
        </div>
        <div className="pb-10 md:pb-0 lg:px-10 2xl:px-20">
          <div className="font-bold py-2">Resources</div>
          <div className="py-2">
            <Link to="/faq" className="py-2">
              FAQ
            </Link>
          </div>
          <div className="py-2">
            <Link to="/resources" className="py-2">
              Blog
            </Link>
          </div>
          <div className="py-2">
            <Link to="/about" className="py-2">
              About
            </Link>
          </div>
          <div className="py-2">
            <Link to="/join" className="py-2">
              Join
            </Link>
          </div>
        </div>
        <div className="pb-10 md:pb-0 lg:px-10 2xl:px-20">
          <div className="font-bold py-2">Privacy</div>
          <div className="py-2">Privacy Policy</div>
          <div className="py-2">Terms and Conditions</div>
        </div>
        <div className="lg:px-10 2xl:px-20">
          <div className="font-bold py-2">Connect</div>
          <div className="py-2">Contact us</div>
          <div className="py-2">LinkedIn</div>
          <div className="py-2">
            <Link to="/subscribe" className="py-2">
              Mailing list
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
