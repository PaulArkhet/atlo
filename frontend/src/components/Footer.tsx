import logo from "/arkhet-logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-black opacity-90 text-white p-10 text-center xl:text-left">
      <div className="xl:flex">
        <div className="">
          <div className="flex">
            <img
              src={logo}
              alt="Arkhet logo"
              className="w-[30px] h-[30px] mt-1"
            />
            <div className="nunitofont p-2 text-xl">A R K H E T</div>
          </div>
          <div className="py-2">
            <div>Create software prototypes in minutes using </div>
            <div>generative AI—no design or technical expertise</div>
            <div> required.</div>
          </div>
          <div>Register now</div>
        </div>
        <div className="xl:px-20">
          <div className="font-bold py-2">Product</div>
          <div className="py-2">How it works</div>
          <div className="py-2">Book a Demo</div>
          <div className="py-2">Pricing</div>
        </div>
        <div className="xl:px-20">
          <div className="font-bold py-2">Resources</div>
          <div className="py-2">FAQ</div>
          <div className="py-2">Blog</div>
          <div className="py-2">About</div>
          <div className="py-2">Join</div>
        </div>
        <div className="xl:px-20">
          <div className="font-bold py-2">Privacy</div>
          <div className="py-2">Privacy Policy</div>
          <div className="py-2">Terms and Conditions</div>
        </div>
        <div className="xl:px-20">
          <div className="font-bold py-2">Connect</div>
          <div className="py-2">Contact us</div>
          <div className="py-2">LinkedIn</div>
          <div className="py-2">Mailing list</div>
        </div>
      </div>
    </footer>
  );
}
