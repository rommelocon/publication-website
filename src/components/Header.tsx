import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center flex-wrap">
        <div className="logo">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="St. Augustine Publications Logo" 
                className="h-14 w-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-accent">
                St. Augustine Publications
              </span>
              <span className="text-xs text-accent font-medium uppercase tracking-wider">
                Quality Educational Materials
              </span>
            </div>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-8 list-none m-0 p-0">
            <li>
              <Link 
                to="/" 
                className="text-white no-underline font-medium transition-colors py-2 hover:text-accent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="text-white no-underline font-medium transition-colors py-2 hover:text-accent"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link 
                to="/news" 
                className="text-white no-underline font-medium transition-colors py-2 hover:text-accent"
              >
                News & Updates
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white no-underline font-medium transition-colors py-2 hover:text-accent"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-white no-underline font-medium transition-colors py-2 hover:text-accent"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

