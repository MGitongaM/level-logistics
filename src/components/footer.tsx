export default function Footer() {
  return (
    <>
      <footer className="conatiner px-4 py-20">
        <div className="flex justify-between items-center bg-green-800 rounded-xl px-8 py-10">
          <div className="w-4/12 space-y-4">
            <p className="text-5xl leading-12">
              Your Trusted Partner in Logistics Solutions
            </p>
            <p className="text-xs">
              Delivery excellence in trucking and transportation for the
              petroleum industry
            </p>
          </div>
          <div className="flex justify-between items-start gap-x-8">
            <div className="c">
              <ul className="list-none space-y-4">
                <li className="c">About us</li>
                <li className="c">Our Services</li>
                <li className="c">Testimonials</li>
                <li className="c">Get a Quote</li>
              </ul>
            </div>
            <div className="c">
              <ul className="list-none space-y-4">
                <li className="c">FAQS</li>
                <li className="c">Contact Us</li>
                <li className="c">Safety Standards</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 px-2 pt-4">
          <div className="c">
            <p>
              &#169; {new Date().getFullYear()} Levels Logistics. All rights
              reserved
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="underline">Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}
