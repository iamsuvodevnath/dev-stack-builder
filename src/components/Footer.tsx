import logo from "../assets/logos/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Block */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="mt-3 text-sm text-slate-500 max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-4 flex gap-4 text-xs font-medium text-slate-500">
              <a href="https://github.com/iamsuvodevnath" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="https://x.com/iamsuvodevnath" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/iamsuvodevnath/" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Product
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-6 flex justify-between text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
