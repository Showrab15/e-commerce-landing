import { Facebook } from "lucide-react";
import logo from "../../assets/logo.png";
const footerLinks = {
  company: [
    { label: "About Us", href: "/pages/about-us" },
    { label: "রিটার্ন পলিসি", href: "/pages/refund-and-returns-policy" },
    {
      label: "রিফান্ড পলিসি",
      href: "/pages/%E0%A6%B0%E0%A6%BF%E0%A6%AB%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A6%E0%A6%BE%E0%A6%A8",
    },
  ],
  quickHelp: [
    { label: "গ্রাহক সেবা", href: "/pages/customer-care" },
    { label: "Contact", href: "/pages/contact" },
  ],
};

const FooterSection = ({ title, links }) => (
  <div className="w  mb-6 lg:mb-0 lg:mt-0 mt-4">
    <h3 className="font-semibold mb-4 text-base">{title}</h3>
    <ul className="space-y-2 ">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.href} className="hover:underline text-gray-700 text-sm">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-800">
      {/* Top Content */}
      <div
        className="lg:place-items-center max-w-7xl items-center justify-center mx-auto px-6 py-10 
        grid grid-cols-1
       lg:grid-cols-3 "
      >
        {/* Logo + About */}
        <div className="lg:col-span-1">
          <img src={logo} alt="Ghorer Bazar Logo" className="mb-4 w-28" />
          <p className="text-sm leading-6">
            <strong>
              Ghorer Bazar: Your Trusted Source for Safe & Organic Food
            </strong>
            <br />
            <br />
            Ghorer Bazar is a leading e-commerce platform committed to
            delivering safe, healthy, and organic food products across
            Bangladesh. We offer mustard oil, ghee, organic honey, dates, chia
            seeds, and more — all carefully sourced for purity.
          </p>
        </div>

        {/* Menus */}
        <FooterSection title="COMPANY" links={footerLinks.company} />
        <FooterSection title="QUICK HELP" links={footerLinks.quickHelp} />

        {/* Extra Info */}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-8">
        <div className="\mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Socials */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/Ghorerbazarbd.comm"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-600 transition"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Copyright */}
          <span className="text-sm text-gray-600">© Online Store 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
