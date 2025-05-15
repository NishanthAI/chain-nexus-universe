
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const dapps = [
  {
    id: 1,
    name: "DeFi Exchange",
    description: "Decentralized trading platform for cryptocurrencies with automated market making.",
    category: "Finance",
    blockchain: "Ethereum",
    image: "https://source.unsplash.com/photo-1460925895917-afdab827c52f",
    rating: 4.8
  },
  {
    id: 2,
    name: "SupplyTracker",
    description: "Track products across the global supply chain with immutable blockchain records.",
    category: "Supply Chain",
    blockchain: "Hyperledger",
    image: "https://source.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    rating: 4.6
  },
  {
    id: 3,
    name: "IdentityVault",
    description: "Secure digital identity solution with self-sovereign identity principles.",
    category: "Identity",
    blockchain: "Solana",
    image: "https://source.unsplash.com/photo-1498050108023-c5249f4df085",
    rating: 4.9
  },
  {
    id: 4,
    name: "GameFi World",
    description: "Play-to-earn game with NFT assets and decentralized governance.",
    category: "Gaming",
    blockchain: "Polygon",
    image: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
    rating: 4.7
  }
];

const DAppsPreview = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blockchain-purple font-semibold tracking-wide uppercase">
            DApp Directory
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Decentralized Applications
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our curated collection of blockchain-powered applications
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {dapps.map((dapp) => (
            <div key={dapp.id} className="group relative">
              <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={dapp.image}
                  alt={dapp.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link to={`/dapps/${dapp.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dapp.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{dapp.category}</p>
                </div>
                <Badge variant="secondary" className="bg-blockchain-light-gray text-blockchain-purple">
                  {dapp.blockchain}
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500 line-clamp-2">{dapp.description}</p>
              </div>
              <div className="mt-3 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(dapp.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.934l-6.18 3.254 1.18-6.875L.083 7.396l6.895-1.003L10 0l3.022 6.393 6.895 1.003-4.917 4.917 1.18 6.875L10 15.934z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-gray-500">{dapp.rating}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/dapps">
            <Button className="bg-blockchain-purple hover:bg-blockchain-light-purple text-white">
              Browse All DApps
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DAppsPreview;
