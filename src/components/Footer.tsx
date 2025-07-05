import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sage-green-50 mt-20 border-t border-forest-green-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DD</span>
              </div>
              <span className="font-bold text-lg text-forest-green-800">Dingdong Loans</span>
            </div>
            <p className="text-forest-green-600 text-sm">
              Platform pinjaman untuk UMKM dengan jaminan crypto yang aman dan
              terpercaya.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-forest-green-800">Produk</h3>
            <ul className="space-y-2 text-sm text-forest-green-600">
              <li>
                <Link
                  to="#"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Pinjaman IDRX
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Jaminan Crypto
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-forest-green-800">Dukungan</h3>
            <ul className="space-y-2 text-sm text-forest-green-600">
              <li>
                <Link
                  to="/whitepaper"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Tutorial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-forest-green-800">Legal</h3>
            <ul className="space-y-2 text-sm text-forest-green-600">
              <li>
                <Link
                  to="#"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-lime-green-500 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-green-700 mt-8 pt-8 text-center text-sm text-forest-green-600">
          <p>&copy; 2024 Dingdong Loans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;