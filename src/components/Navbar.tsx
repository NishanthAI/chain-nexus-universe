
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blockchain-purple font-bold text-xl">Blockchain</span>
              <span className="text-blockchain-teal font-bold text-xl">Hub</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blockchain-purple px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-600 group-hover:text-blockchain-purple px-3 py-2 text-sm font-medium inline-flex items-center">
                Use Cases
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <Link to="/use-cases/finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blockchain-light-gray">Finance</Link>
                <Link to="/use-cases/supply-chain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blockchain-light-gray">Supply Chain</Link>
                <Link to="/use-cases/identity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blockchain-light-gray">Identity Verification</Link>
              </div>
            </div>
            <Link to="/dapps" className="text-gray-600 hover:text-blockchain-purple px-3 py-2 text-sm font-medium">
              DApp Directory
            </Link>
            <Link to="/smart-contracts" className="text-gray-600 hover:text-blockchain-purple px-3 py-2 text-sm font-medium">
              Smart Contracts
            </Link>
            <Link to="/explorer" className="text-gray-600 hover:text-blockchain-purple px-3 py-2 text-sm font-medium">
              Explorer
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link to="/login">
              <Button variant="outline" className="mr-3">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blockchain-purple hover:bg-blockchain-light-purple text-white">Sign Up</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-600 hover:text-blockchain-purple">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blockchain-purple hover:bg-blockchain-light-gray">
              Home
            </Link>
            <div className="px-3 py-2 rounded-md text-base font-medium text-gray-600">
              Use Cases
              <div className="pl-4 pt-2 space-y-1">
                <Link to="/use-cases/finance" className="block py-2 text-sm text-gray-500 hover:text-blockchain-purple">
                  Finance
                </Link>
                <Link to="/use-cases/supply-chain" className="block py-2 text-sm text-gray-500 hover:text-blockchain-purple">
                  Supply Chain
                </Link>
                <Link to="/use-cases/identity" className="block py-2 text-sm text-gray-500 hover:text-blockchain-purple">
                  Identity Verification
                </Link>
              </div>
            </div>
            <Link to="/dapps" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blockchain-purple hover:bg-blockchain-light-gray">
              DApp Directory
            </Link>
            <Link to="/smart-contracts" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blockchain-purple hover:bg-blockchain-light-gray">
              Smart Contracts
            </Link>
            <Link to="/explorer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blockchain-purple hover:bg-blockchain-light-gray">
              Explorer
            </Link>
            <div className="pt-4 flex flex-col space-y-2 px-3">
              <Link to="/login">
                <Button variant="outline" className="w-full justify-center">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full justify-center bg-blockchain-purple hover:bg-blockchain-light-purple text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
