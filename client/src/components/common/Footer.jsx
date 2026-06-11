import {
  MapPin,
  Mail,
  Phone,
  Globe,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Top Section */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand */}

          <div className="lg:col-span-4">

            <div className="flex items-center gap-4 mb-5">

              <div className="h-14 w-14 rounded-full bg-blue-700 shrink-0"></div>

              <div>
                <h2 className="font-bold text-xl">
                  Smart Village Portal
                </h2>

                <p className="text-slate-400 text-sm">
                  CSIR-CBRI Roorkee
                </p>
              </div>

            </div>

            <p className="text-slate-300 leading-relaxed max-w-xs">
              Empowering rural communities through technology,
              sustainable development, innovation, and
              knowledge-driven transformation.
            </p>

          </div>

          {/* Quick Links */}

          <div className="lg:col-span-2">

            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <a href="#mission" className="hover:text-white">
                  Mission
                </a>
              </li>

              <li>
                <a href="#cbri" className="hover:text-white">
                  CSIR-CBRI
                </a>
              </li>

              <li>
                <a href="#updates" className="hover:text-white">
                  Updates
                </a>
              </li>

              <li>
                <a href="#policies" className="hover:text-white">
                  Policies
                </a>
              </li>

            </ul>

          </div>

          {/* Villages */}

 <div className="lg:col-span-3">

            <h3 className="font-semibold text-lg mb-5">
              Featured Villages
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li className="flex items-center gap-2">
                <ArrowRight size={16} />
                Village One
              </li>

              <li className="flex items-center gap-2">
                <ArrowRight size={16} />
                Village Two
              </li>

              <li className="flex items-center gap-2">
                <ArrowRight size={16} />
                Village Three
              </li>

              <li className="flex items-center gap-2">
                <ArrowRight size={16} />
                Village Four
              </li>

            </ul>

          </div>

          {/* Contact */}
<div className="lg:col-span-3">

            <h3 className="font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  CSIR-CBRI, Roorkee, Uttarakhand
                </span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>
                  smartvillage@cbri.res.in
                </span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <span>
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex gap-3">
                <Globe size={18} />
                <span>
                  www.cbri.res.in
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-slate-400 text-sm">
            © 2026 Smart Village Management Portal
          </p>

          <p className="text-slate-400 text-sm">
            Developed for CSIR-CBRI Roorkee
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;