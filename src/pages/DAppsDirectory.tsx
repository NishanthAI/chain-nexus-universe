
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

// Sample DApps data
const dappsData = [
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
  },
  {
    id: 5,
    name: "NFT Marketplace",
    description: "Marketplace for creating, buying, and selling digital collectibles as NFTs.",
    category: "NFTs",
    blockchain: "Ethereum",
    image: "https://source.unsplash.com/photo-1461749280684-dccba630e2f6",
    rating: 4.5
  },
  {
    id: 6,
    name: "DecentralVote",
    description: "Secure voting platform using blockchain for elections and governance.",
    category: "Governance",
    blockchain: "Solana",
    image: "https://source.unsplash.com/photo-1518770660439-4636190af475",
    rating: 4.3
  },
  {
    id: 7,
    name: "InsuranceChain",
    description: "Decentralized insurance platform with automated claims processing via smart contracts.",
    category: "Insurance",
    blockchain: "Ethereum",
    image: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    rating: 4.4
  },
  {
    id: 8,
    name: "RealEstateTokens",
    description: "Tokenized real estate assets for fractional ownership and investment.",
    category: "Real Estate",
    blockchain: "Polygon",
    image: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
    rating: 4.2
  },
];

const DAppsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [blockchainFilter, setBlockchainFilter] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredDApps = dappsData.filter((dapp) => {
    const matchesSearch = dapp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         dapp.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "" || dapp.category === categoryFilter;
    const matchesBlockchain = blockchainFilter === "" || dapp.blockchain === blockchainFilter;
    
    return matchesSearch && matchesCategory && matchesBlockchain;
  });

  // Extract unique categories and blockchains for filters
  const categories = [...new Set(dappsData.map((dapp) => dapp.category))];
  const blockchains = [...new Set(dappsData.map((dapp) => dapp.blockchain))];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blockchain-dark-blue to-blockchain-purple text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-center">DApp Directory</h1>
            <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
              Explore our curated collection of decentralized applications built on various blockchain platforms.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search DApps..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={blockchainFilter} onValueChange={setBlockchainFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Blockchain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Blockchains</SelectItem>
                    {blockchains.map((blockchain) => (
                      <SelectItem key={blockchain} value={blockchain}>
                        {blockchain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredDApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDApps.map((dapp) => (
                <div key={dapp.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={dapp.image}
                      alt={dapp.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900">{dapp.name}</h3>
                      <Badge className="bg-blockchain-light-gray text-blockchain-purple">
                        {dapp.blockchain}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="mt-2">
                      {dapp.category}
                    </Badge>
                    <p className="mt-3 text-gray-600">{dapp.description}</p>
                    
                    <div className="mt-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
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
                      <span className="ml-2 text-gray-600">{dapp.rating}/5</span>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full bg-blockchain-purple hover:bg-blockchain-light-purple text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-700">No DApps found matching your criteria</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("");
                  setBlockchainFilter("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DAppsDirectory;
