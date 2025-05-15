
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blockchain-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Discover the Power of</span>
                <span className="block text-blockchain-purple">Blockchain Technology</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Explore specialized applications leveraging blockchain across finance, supply chain, 
                identity verification, and decentralized applications.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/use-cases">
                    <Button className="w-full flex items-center justify-center px-8 py-3 md:py-4 bg-blockchain-purple hover:bg-blockchain-light-purple text-white text-base font-medium">
                      Explore Use Cases
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/dapps">
                    <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 md:py-4 text-blockchain-purple border-blockchain-purple hover:bg-blockchain-light-gray">
                      Browse DApps
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-tr from-blockchain-dark-blue to-blockchain-purple opacity-90 flex items-center justify-center">
          <div className="text-white p-8">
            <div className="grid grid-cols-2 gap-6 p-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-pulse-slow">
                <div className="h-2 bg-white/70 rounded w-3/4 mb-3"></div>
                <div className="h-2 bg-white/60 rounded w-1/2 mb-3"></div>
                <div className="h-2 bg-white/60 rounded w-2/3"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-pulse-slow delay-300">
                <div className="h-2 bg-white/70 rounded w-1/2 mb-3"></div>
                <div className="h-2 bg-white/60 rounded w-3/4 mb-3"></div>
                <div className="h-2 bg-white/60 rounded w-1/3"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-pulse-slow delay-500">
                <div className="h-2 bg-white/70 rounded w-2/3 mb-3"></div>
                <div className="h-2 bg-white/60 rounded w-1/2 mb-3"></div>
                <div className="h-2 bg-white/60 rounded w-3/4"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-pulse-slow delay-700">
                <div className="h-2 bg-white/70 rounded w-1/4 mb-3"></div>
                <div className="h-2 bg-white/60 rounded w-2/3 mb-3"></div>
                <div className="h-2 bg-white/60 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
