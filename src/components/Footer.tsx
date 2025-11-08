import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl mb-4 text-accent">
            St. Augustine Publications, Inc.
          </h3>
          <p className="leading-relaxed opacity-90">
            Facilitating effective teaching and learning processes through quality educational materials.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl mb-4 text-accent">Quick Links</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <Link to="/" className="text-white no-underline transition-colors opacity-90 hover:text-accent hover:opacity-100">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/products" className="text-white no-underline transition-colors opacity-90 hover:text-accent hover:opacity-100">
                Our Products
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/news" className="text-white no-underline transition-colors opacity-90 hover:text-accent hover:opacity-100">
                News & Updates
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="text-white no-underline transition-colors opacity-90 hover:text-accent hover:opacity-100">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl mb-4 text-accent">Contact Us</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">Email: info@staugustinepublications.com</li>
            <li className="mb-2">Phone: +63 (2) 1234-5678</li>
            <li className="mb-2">
              <Link to="/contact" className="text-white no-underline transition-colors opacity-90 hover:text-accent hover:opacity-100">
                Contact Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-primary-dark mt-8 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center flex-wrap gap-4">
          <p className="m-0 opacity-80">
            Copyright © St. Augustine Publications Inc. {currentYear}. All Rights Reserved.
          </p>
          <div className="flex gap-4 items-center">
            <Link to="/terms" className="text-white no-underline transition-colors opacity-90 hover:text-accent hover:opacity-100">
              Terms of Use
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/privacy" className="text-white no-underline transition-colors opacity-90 hover:text-accent hover:opacity-100">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

