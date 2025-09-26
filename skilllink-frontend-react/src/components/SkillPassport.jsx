import React, { useState, useEffect } from "react";
import {
  FaLink,
  FaAward,
  FaProjectDiagram,
  FaCertificate,
  FaDownload,
  FaSpinner,
  FaShieldCheck,
  FaEthereum,
  FaFingerprint,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";

const SkillPassport = () => {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  // Simulate fetching data from blockchain
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock data
      const mockSkills = [
        {
          id: 1,
          name: "Solidity Development",
          level: "Advanced",
          verified: "2023-10-15",
          txHash: "0x8a3b7c...e5f2a1",
        },
        {
          id: 2,
          name: "Smart Contract Security",
          level: "Expert",
          verified: "2023-09-22",
          txHash: "0x4b9c2d...f7e1a3",
        },
        {
          id: 3,
          name: "Web3.js Integration",
          level: "Advanced",
          verified: "2023-11-05",
          txHash: "0x7d2e5f...a9c3b1",
        },
        {
          id: 4,
          name: "DeFi Protocols",
          level: "Intermediate",
          verified: "2023-08-30",
          txHash: "0x3c8a5d...e2f7b9",
        },
        {
          id: 5,
          name: "NFT Marketplace Development",
          level: "Advanced",
          verified: "2023-12-10",
          txHash: "0x9b4c7a...d5e1f3",
        },
        {
          id: 6,
          name: "DAO Governance",
          level: "Intermediate",
          verified: "2024-01-18",
          txHash: "0x2e5f8a...c7b3d9",
        },
      ];

      const mockProjects = [
        {
          id: 1,
          name: "Decentralized Voting System",
          date: "2023-11-20",
          txHash: "0x4a7b2c...d9e1f5",
          description: "A transparent voting system built on Ethereum",
        },
        {
          id: 2,
          name: "NFT Art Marketplace",
          date: "2023-09-05",
          txHash: "0x8b3c9d...f2a4e7",
          description: "Platform for artists to mint and sell NFTs",
        },
        {
          id: 3,
          name: "DeFi Yield Farming Platform",
          date: "2024-01-12",
          txHash: "0x2e5f8a...c7b3d9",
          description: "Yield optimization protocol for DeFi investors",
        },
      ];

      setSkills(mockSkills);
      setProjects(mockProjects);
      setLastUpdated(new Date().toLocaleDateString());
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleDownloadCertificate = () => {
    // Simulate certificate generation
    const button = document.getElementById("download-certificate");
    const originalText = button.innerHTML;

    button.innerHTML =
      '<FaSpinner className="animate-spin" /> Generating Certificate...';
    button.disabled = true;

    setTimeout(() => {
      alert(
        "Certificate downloaded successfully! Your certificate has been saved with blockchain verification data."
      );
      button.innerHTML = originalText;
      button.disabled = false;
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-cyan-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6 border-b border-cyan-500/30 mb-8">
          <div className="flex items-center gap-3">
            <FaLink className="text-4xl text-cyan-400 neon-text" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              SkillLink
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-gray-900 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30">
              JD
            </div>
            <div>
              <div className="font-bold">John Doe</div>
              <div className="text-sm text-cyan-300">Blockchain Developer</div>
            </div>
          </div>
        </header>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent py-2">
          Blockchain Skill Passport
        </h1>

        {/* Verified Skills Section */}
        <section className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-cyan-500/30">
            <FaAward className="text-cyan-400" />
            Verified Skills
          </h2>

          {isLoading ? (
            <div className="text-center py-8">
              <FaSpinner className="animate-spin text-4xl text-cyan-400 mb-4 mx-auto" />
              <p className="text-cyan-300">
                Fetching skills from blockchain...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <FaShieldCheck className="text-2xl text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                      <div className="flex justify-between text-sm text-cyan-200 mb-2">
                        <span>Level: {skill.level}</span>
                        <span>Verified: {skill.verified}</span>
                      </div>
                      <div className="text-xs text-purple-300 flex items-center gap-1">
                        <FaLink className="text-xs" />
                        TX: {skill.txHash}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Projects Section */}
        <section className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-cyan-500/30">
            <FaProjectDiagram className="text-purple-400" />
            Verified Projects
          </h2>

          {isLoading ? (
            <div className="text-center py-8">
              <FaSpinner className="animate-spin text-4xl text-purple-400 mb-4 mx-auto" />
              <p className="text-purple-300">Loading project data...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{project.name}</h3>
                      <p className="text-cyan-100 mb-2">
                        {project.description}
                      </p>
                      <div className="text-sm text-purple-300">
                        Completed: {project.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm bg-gray-900/50 px-3 py-2 rounded-lg">
                      <FaLink className="text-cyan-400" />
                      <span className="text-cyan-300">
                        TX: {project.txHash}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Certificate Section */}
        <section className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 justify-center pb-3 border-b border-cyan-500/30">
            <FaCertificate className="text-yellow-400" />
            Skill Certificate
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-cyan-100">
            Download your verified skill certificate with blockchain validation.
            This certificate is tamper-proof and can be verified by anyone using
            the blockchain transaction ID.
          </p>
          <button
            id="download-certificate"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-gray-900 font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto hover:from-cyan-400 hover:to-purple-500 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
            onClick={handleDownloadCertificate}
          >
            <FaDownload />
            Download Certificate
          </button>
        </section>

        {/* Blockchain Info Section */}
        <section className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-cyan-500/30">
            <FaLink className="text-cyan-400" />
            Blockchain Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
              <FaEthereum className="text-5xl text-cyan-400 mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Ethereum Network</h3>
              <p className="text-cyan-100 text-sm">
                Skills are verified and stored on the Ethereum blockchain for
                maximum security and transparency.
              </p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
              <FaFingerprint className="text-5xl text-purple-400 mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Immutable Records</h3>
              <p className="text-cyan-100 text-sm">
                Once verified, your skills cannot be altered or removed,
                creating a permanent record of your achievements.
              </p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
              <FaShieldAlt className="text-5xl text-green-400 mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Tamper-Proof</h3>
              <p className="text-cyan-100 text-sm">
                Blockchain technology ensures that your skill credentials are
                secure and cannot be falsified.
              </p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
              <FaGlobe className="text-5xl text-pink-400 mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Global Verification</h3>
              <p className="text-cyan-100 text-sm">
                Your skills can be verified by anyone, anywhere in the world,
                without relying on a central authority.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 mt-8 border-t border-cyan-500/30 text-cyan-200">
          <p>
            SkillLink Blockchain Passport • All skills verified on the Ethereum
            blockchain
          </p>
          <p className="mt-2 text-sm">
            Transaction Hash: 0x8a3b7c...e5f2a1 • Last Updated: {lastUpdated}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SkillPassport;
