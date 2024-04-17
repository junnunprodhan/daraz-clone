import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#2e2e54] py-10">
      <div className="container">
        <div className="grid grid-cols-8">
          <div className="lg:col-span-2 col-span-4">
            {/* help */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-white text-xl  my-2">Customer Care</h2>
                <div className="flex flex-col">
                  <Link className="text-sm text-white" href="/">
                    Help Center
                  </Link>
                  <Link className="text-sm text-white" href="/">
                    How to Buy
                  </Link>
                  <Link className="text-sm text-white" href="/">
                    Returns & Refunds
                  </Link>
                  <Link className="text-sm text-white" href="/">
                    Contact Us
                  </Link>
                  <Link className="text-sm text-white" href="/">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-white text-xl my-2">Earn With Daraz</h2>
                <div className="flex flex-col">
                  <Link className="text-sm text-white" href="/">
                    Daraz University
                  </Link>
                  <Link className="text-sm text-white" href="/">
                    Sell on Daraz
                  </Link>
                  <Link className="text-sm text-white" href="/">
                    Code of Conduct
                  </Link>
                  <Link className="text-sm text-white" href="/">
                    Join the Daraz Affiliate Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-4">
            <h2 className="text-white text-xl my-2">Daraz</h2>
            <ul>
              <li className="text-white text-sm">About Daraz</li>
              <li className="text-white text-sm">Digital Payments</li>
              <li className="text-white text-sm">Daraz Blog</li>
              <li className="text-white text-sm">Daraz Cares</li>
              <li className="text-white text-sm">Daraz Mart</li>
              <li className="text-white text-sm">Privacy Policy</li>
              <li className="text-white text-sm">Daraz App</li>
              <li className="text-white text-sm">Daraz Exclusives</li>
              <li className="text-white text-sm">Hungrynaki Food Delivery</li>
              <li className="text-white text-sm">Daraz Donates</li>
              <li className="text-white text-sm">Daraz BPL Live</li>
            </ul>
          </div>
          <div className="lg:col-span-4 col-span-8">
            <Image
                priority={true}
              src={"/images/footer.jpg"}
              alt="footer"
              width={500}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Footer;
