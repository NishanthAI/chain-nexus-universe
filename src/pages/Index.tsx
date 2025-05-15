
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import DAppsPreview from "@/components/DAppsPreview";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <UseCasesSection />
        <DAppsPreview />
        
        {/* CTA Section */}
        <div className="bg-blockchain-light-gray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Ready to start your blockchain journey?
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-gray-500">
                    Create an account to explore our full range of blockchain applications and services.
                  </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
                  <a
                    href="/signup"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blockchain-purple hover:bg-blockchain-light-purple"
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
