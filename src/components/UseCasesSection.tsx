
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UseCasesSection = () => {
  return (
    <div className="bg-blockchain-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blockchain-purple font-semibold tracking-wide uppercase">
            Use Cases
          </h2>
          <p className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Real-World Applications
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Explore how businesses are implementing blockchain solutions today
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/15 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Financial Services</h3>
              <p className="text-gray-300 mb-4">
                From digital currencies to automated compliance, discover how blockchain is reshaping financial institutions.
              </p>
              <Link to="/use-cases/finance">
                <Button variant="outline" className="mt-2 border-blockchain-purple text-blockchain-purple hover:bg-blockchain-purple hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/15 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7l4-4m0 0l4 4m-4-4v18" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Supply Chain</h3>
              <p className="text-gray-300 mb-4">
                Track goods from production to delivery with transparent, tamper-proof blockchain records.
              </p>
              <Link to="/use-cases/supply-chain">
                <Button variant="outline" className="mt-2 border-blockchain-purple text-blockchain-purple hover:bg-blockchain-purple hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/15 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Identity Verification</h3>
              <p className="text-gray-300 mb-4">
                Secure, portable digital identities that give users control over their personal information.
              </p>
              <Link to="/use-cases/identity">
                <Button variant="outline" className="mt-2 border-blockchain-purple text-blockchain-purple hover:bg-blockchain-purple hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/use-cases">
            <Button className="bg-blockchain-purple hover:bg-blockchain-light-purple text-white">
              View All Use Cases
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
