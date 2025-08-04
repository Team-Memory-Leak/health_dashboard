// File: components/Footer.tsx
import Link from "next/link";
import Image from "next/image";


import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-10 py-12 text-sm text-gray-800">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

        {/* FOLLOW US Section */}
        <div>
          <h2 className="mb-4 font-semibold tracking-widest">FOLLOW US</h2>
          <div className="mb-4 flex gap-4 text-xl">
            {/* 🔧 Replace these icons or wrap them in <Link href="your-social-link"> if you want them clickable */}
            <a href="https://www.facebook.com/HARCData" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/harcdata" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/harc-inc/about/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/harcdata/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-1 text-sm">
            <p className="font-semibold">HARC, Inc.</p>
            <div className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              <p>
                41550 Eclectic Street<br />
                Palm Desert, CA 92260
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone />
              <p>760-404-1945</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              {/* 🔧 Make sure this email address is accurate */}
              <a href="mailto:staff@HARCdata.org" className="text-blue-600 hover:underline">
                staff@HARCdata.org
              </a>
            </div>
          </div>
        </div>

        {/* RESOURCES Section */}
        <div>
          <h2 className="mb-4 font-semibold tracking-widest">RESOURCES</h2>
          <ul className="space-y-2">
            {/* 🔧 Replace "#" with actual page links (e.g. "/media", "/donate") */}
            {[
  { label: "Media", href: "https://harcdata.org/media/" },
  { label: "Infographics", href: "https://harcdata.org/infographics/" },
  { label: "News Articles", href: "https://harcdata.org/news-articles/" },
  { label: "Donate", href: "https://harcdata.org/donate/" },
  { label: "Contact Us", href: "https://harcdata.org/contact-us/" },
].map(({ label, href }) => (
  <li key={label}>
    <Link href={href} className="hover:underline">
      {label}
    </Link>
  </li>
))}
          </ul>
        </div>

        {/* EMAIL SIGNUP Section */}
        <div>
          <h2 className="mb-4 font-semibold tracking-widest">HARC EMAIL LIST</h2>
          {/* 🔧 Hook this up to an email service like Mailchimp, Google Forms, or API endpoint */}
          <form className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-1/2 rounded border border-gray-300 px-2 py-1"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-1/2 rounded border border-gray-300 px-2 py-1"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full rounded border border-gray-300 px-2 py-1"
            />
            <button
              type="submit"
              className="w-full rounded bg-blue-900 px-4 py-2 font-semibold text-white"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* SEAL + BACK TO TOP */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="mb-4 text-center font-semibold tracking-widest md:text-right">
            GUIDESTAR CANDID<br />PLATINUM SEAL OF<br />TRANSPARENCY
          </h2>
          
          <Image src={"/images/candid.png"} alt="Candid Seal" width={200} height={200}/>
        

          <a href="#top" className="mt-4 text-sm text-gray-700 hover:underline">
            ↑ BACK TO TOP
          </a>
        </div>
      </div>

      {/* Footer legal line */}
      <div className="mt-10 text-center text-xs text-gray-500">
        {/* 🔧 Update EIN or remove if not needed */}
        EIN: 20-5719074 <br />
        © 2025 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

