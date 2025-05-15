
import {
  Code,
  Database,
  FileText,
  Link,
  ShieldCheck,
  Truck
} from "lucide-react";

const features = [
  {
    name: 'DeFi Solutions',
    description: 'Explore decentralized finance applications that revolutionize lending, borrowing, and investing.',
    icon: Database,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    name: 'Supply Chain Tracking',
    description: 'Track products from origin to consumer with transparent, immutable blockchain records.',
    icon: Truck,
    color: 'bg-green-100 text-green-600'
  },
  {
    name: 'Identity Verification',
    description: 'Secure and portable digital identity solutions across platforms and services.',
    icon: ShieldCheck,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    name: 'Smart Contracts',
    description: 'Self-executing contracts with terms directly written into code, eliminating intermediaries.',
    icon: Code,
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    name: 'Decentralized Applications',
    description: 'Browse our directory of DApps built on various blockchain platforms.',
    icon: Link,
    color: 'bg-red-100 text-red-600'
  },
  {
    name: 'Transaction Explorer',
    description: 'Real-time monitoring and analytics for blockchain transactions and network activity.',
    icon: FileText,
    color: 'bg-indigo-100 text-indigo-600'
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blockchain-purple font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blockchain Solutions for Every Industry
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover how blockchain technology is transforming businesses across sectors
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="h-full border border-gray-200 rounded-lg p-6 flex flex-col transition-all duration-200 hover:shadow-lg hover:border-blockchain-purple">
                  <div>
                    <span className={`inline-flex p-3 rounded-md ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blockchain-purple transition-colors">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-6 flex text-sm font-medium text-blockchain-purple">
                    <a href="#" className="hover:text-blockchain-light-purple mt-auto">
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
