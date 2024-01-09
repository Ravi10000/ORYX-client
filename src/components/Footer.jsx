import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[#10172b] sm:w-auto w-full text-white xl:px-44 md:px-16 px-4  h-auto py-20 box-border">
      <div className="sm:grid md:grid-rows-1 md:grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 md:gap-5 flex flex-col gap-5">
        <div>
          {/* <div className="logo h-full center">
              <img
                src="https://oryx.maxocart.com/assets/dream2earn/Oryx.png"
                className="w-28"
                alt="logo"
              />
            </div> */}

          <address className="flex flex-col">
            <span>Oryx.io LTD</span> <span>Intershore Chambers</span>
            <span>Road Town, Tortola</span>
            <span>British Virgin Islands</span>
          </address>

          <div className="py-5">info@email.com</div>
        </div>
        <div>
          <h1 className="footer-h1">Product</h1>
          <div className="flex flex-col gap-4 mt-4">
            <p>How Does It Work?</p>
            <p>What Is a Real Estate NFT?</p>
            <p>Real Estate NFT Calculator</p>
            <p>Key Risks</p>
            <p>FAQ</p>
          </div>
        </div>
        <div>
          <h1 className="footer-h1">Company</h1>
          <div className="flex flex-col gap-4 mt-4">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Why Oryx?</p>
          </div>
        </div>
        <div>
          <h1 className="footer-h1">Legal</h1>
          <div className="flex flex-col gap-4 mt-4">
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>

      <div className="grid mt-8 xl:grid-cols-2 grid-rows-2 gap-4">
        <h2 className="footer-h1">
          Subscribe to get exciting updates and offers!
        </h2>
        <form className="relative">
          <input
            type="email"
            className="py-5 w-full rounded-md px-6 placeholder:text-red-700 outline-none focus:ring-1 text-black"
            placeholder="Enter email address"
            required
          />

          <div className={"absolute right-3 top-[-7px] w-fit"}>
            <Button type={"submit"} className={"w-fit px-6"}>Submit</Button>
          </div>
        </form>
      </div>

      <div className="my-6">
        <span className="text-red-600 font-semibold">RISK WARNING :</span>
        &nbsp; Oryx.io LTD (“Oryx”) operates a website at Oryx.io (the
        “Platform”). By using the Platform, you accept our Terms of Service,
        Privacy Policy, and Cookie Policy. Buying NFTs involves risk and may
        result in partial or total loss. Past performance is no guarantee of
        future results. Any historical returns, expected returns, or probability
        projections may not reflect actual future performance. Although the data
        we use from third parties is believed to be reliable, we cannot ensure
        the accuracy or completeness of data provided by third parties. This is
        not financial advice, and you should conduct your own due diligence
        before purchasing NFTs.
      </div>

      <div className="flex justify-end">
        © 2022 Oryx.io LTD | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
