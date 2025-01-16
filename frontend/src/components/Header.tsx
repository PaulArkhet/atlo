import logo from "/arkhet-logo-white.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-screen">
      <div className="bg-gradient-to-r from-[#8778D7] via-[#2F5D5D] to-[#2A3349] h-[67px] w-screen">
        <div className="bg-[#242424] text-white p-3 md:flex">
          <div className="flex">
            <img src={logo} alt="" />
            <div className="nunitofont p-2">ARKHET</div>
          </div>
          <div className="nunitofont p-2">HOW IT WORKS</div>
          <div className="nunitofont p-2">BENEFITS</div>
          <div className="nunitofont p-2">RESOURCES</div>
          <div className="nunitofont p-2">PRICING</div>
          <div className="nunitofont p-2">LOGIN</div>
          <div className="nunitofont p-2">SIGN UP</div>
          <button id="hamburger-menu" className="text-3xl md:hidden">
            &#x2630;
          </button>
        </div>
      </div>
    </header>
  );
}
