import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DE NATURE</h3>
            <p className="text-sm">
              Providing nutritious and delicious meals for children in Sydney.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-green-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-green-200">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Sophie</li>
              <li>Phone: 0410 811 935</li>
              <li>Email: info@denature.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-200"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-200"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-600 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DE NATURE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 