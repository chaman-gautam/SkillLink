// StudentDash.jsx
import React, { useState, useRef } from "react";

const StudentDash = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeWallet, setActiveWallet] = useState("Ethereum");
  const [accordions, setAccordions] = useState({
    preferences: false,
    wallet: false,
    security: false,
  });
  const [notification, setNotification] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef(null);

  const toggleAccordion = (accordion) => {
    setAccordions((prev) => ({
      ...prev,
      [accordion]: !prev[accordion],
    }));
  };

  const handleSave = () => {
    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      setNotification(true);

      setTimeout(() => {
        setNotification(false);
      }, 3000);
    }, 1500);
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const wallets = [
    { icon: "fab fa-bitcoin", name: "Bitcoin", symbol: "BTC" },
    { icon: "fab fa-ethereum", name: "Ethereum", symbol: "ETH", active: true },
    { icon: "fas fa-wallet", name: "MetaMask", symbol: "Web3" },
    { icon: "fas fa-coins", name: "Coinbase", symbol: "Exchange" },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center p-5 bg-gradient-to-br from-[#0a192f] to-[#112240]">
      {/* Notification */}
      {notification && (
        <div className="fixed top-8 right-8 px-6 py-4 bg-[#0d192a] border-l-4 border-[#64ffda] rounded-lg shadow-lg flex items-center gap-4 z-50 animate-slide-in-right">
          <i className="fas fa-check-circle text-[#64ffda] text-xl"></i>
          <span>Your settings have been saved successfully!</span>
        </div>
      )}

      <div className="w-full max-w-4xl bg-[#0d192a] backdrop-blur-md rounded-2xl p-8 relative overflow-hidden border border-[#00a2ff66] shadow-2xl shadow-[#00d4ff66] inset-shadow-lg">
        {/* Animated Background */}
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-circle animate-rotate-background pointer-events-none"></div>

        <h1 className="text-3xl font-bold text-center mb-8 text-[#64ffda] text-shadow-glow relative z-10">
          <i className="fas fa-cogs mr-3"></i>
          Advanced Settings
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Profile Section */}
          <div className="bg-[#0a192f99] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-[#64ffda] mb-4 flex items-center gap-3">
              <i className="fas fa-user w-8 h-8 flex items-center justify-center bg-[#00d4ff33] rounded-full"></i>
              Profile Information
            </h2>

            <div className="flex justify-center mb-6">
              <div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-[#233554] to-[#0a192f] border-2 border-[#00d4ff] shadow-glow flex items-center justify-center relative overflow-hidden cursor-pointer"
                onClick={handleAvatarClick}
              >
                <i className="fas fa-user text-4xl text-[#64ffda]"></i>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-2 text-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <i className="fas fa-camera"></i>
                </div>
              </div>
              <input type="file" ref={fileInputRef} className="hidden" />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                  <i className="fas fa-user-tag text-[#00d4ff]"></i>
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0d192a] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                  <i className="fas fa-envelope text-[#00d4ff]"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0d192a] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none transition-all"
                />
              </div>

              <div className="relative">
                <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                  <i className="fas fa-lock text-[#00d4ff]"></i>
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0d192a] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none transition-all"
                />
                <button
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-11 text-[#a8b2d1] hover:text-[#00d4ff] transition-colors"
                >
                  <i
                    className={`fas ${
                      passwordVisible ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>

              <div>
                <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                  <i className="fas fa-info-circle text-[#00d4ff]"></i>
                  Bio
                </label>
                <textarea
                  placeholder="Tell us about yourself"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0d192a] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none transition-all resize-vertical"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-[#0a192f99] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-[#64ffda] mb-4 flex items-center gap-3">
              <i className="fas fa-sliders-h w-8 h-8 flex items-center justify-center bg-[#00d4ff33] rounded-full"></i>
              Preferences
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-xl bg-[#0d192a] hover:bg-[#0d192acc] transition-colors">
                <span className="text-[#a8b2d1] flex items-center gap-2">
                  <i className="fas fa-globe text-[#00d4ff]"></i>
                  Auto-detect language
                </span>
                <label className="relative inline-block w-16 h-8">
                  <input type="checkbox" className="opacity-0 w-0 h-0" />
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#0d192a] border-2 border-[#00a2ff99] rounded-full transition-all before:absolute before:content-[''] before:h-5 before:w-5 before:left-1 before:bottom-1 before:bg-[#64ffda] before:rounded-full before:shadow-glow before:transition-all"></span>
                </label>
              </div>

              <div>
                <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                  <i className="fas fa-language text-[#00d4ff]"></i>
                  Select Language
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0d192a] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="jp">Japanese</option>
                </select>
              </div>

              {[
                { icon: "fa-bell", text: "Notifications", checked: true },
                {
                  icon: "fa-moon",
                  text: "Dark Mode",
                  checked: darkMode,
                  onChange: setDarkMode,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-xl bg-[#0d192a] hover:bg-[#0d192acc] transition-colors"
                >
                  <span className="text-[#a8b2d1] flex items-center gap-2">
                    <i className={`fas ${item.icon} text-[#00d4ff]`}></i>
                    {item.text}
                  </span>
                  <label className="relative inline-block w-16 h-8">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => item.onChange?.(!item.checked)}
                      className="opacity-0 w-0 h-0"
                    />
                    <span
                      className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all before:absolute before:content-[''] before:h-5 before:w-5 before:left-1 before:bottom-1 before:rounded-full before:transition-all before:shadow-glow ${
                        item.checked
                          ? "bg-[#00a2ff66] shadow-glow before:bg-[#00d4ff] before:translate-x-7"
                          : "bg-[#0d192a] border-2 border-[#00a2ff99] before:bg-[#64ffda]"
                      }`}
                    ></span>
                  </label>
                </div>
              ))}

              <div
                className="flex justify-between items-center p-4 rounded-xl bg-[#0d192a] cursor-pointer mt-4 hover:bg-[#00a2ff25] hover:shadow-glow transition-all"
                onClick={() => toggleAccordion("preferences")}
              >
                <span className="text-[#64ffda] flex items-center gap-2">
                  <i className="fas fa-cog"></i>
                  Advanced Preferences
                </span>
                <i
                  className={`fas ${
                    accordions.preferences ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  accordions.preferences ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-[#0d192a] rounded-xl space-y-4">
                  {[
                    { icon: "fa-history", text: "Auto-save", checked: true },
                    {
                      icon: "fa-share-alt",
                      text: "Share analytics",
                      checked: false,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-xl bg-[#0a192f] hover:bg-[#0a192fcc] transition-colors"
                    >
                      <span className="text-[#a8b2d1] flex items-center gap-2">
                        <i className={`fas ${item.icon} text-[#00d4ff]`}></i>
                        {item.text}
                      </span>
                      <label className="relative inline-block w-16 h-8">
                        <input
                          type="checkbox"
                          defaultChecked={item.checked}
                          className="opacity-0 w-0 h-0"
                        />
                        <span
                          className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all before:absolute before:content-[''] before:h-5 before:w-5 before:left-1 before:bottom-1 before:rounded-full before:transition-all before:shadow-glow ${
                            item.checked
                              ? "bg-[#00a2ff66] shadow-glow before:bg-[#00d4ff] before:translate-x-7"
                              : "bg-[#0a192f] border-2 border-[#00a2ff99] before:bg-[#64ffda]"
                          }`}
                        ></span>
                      </label>
                    </div>
                  ))}

                  <div>
                    <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                      <i className="fas fa-sync-alt text-[#00d4ff]"></i>
                      Refresh Rate
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0a192f] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none">
                      <option value="5">5 minutes</option>
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">60 minutes</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wallet Section */}
          <div className="bg-[#0a192f99] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-[#64ffda] mb-4 flex items-center gap-3">
              <i className="fas fa-wallet w-8 h-8 flex items-center justify-center bg-[#00d4ff33] rounded-full"></i>
              Wallet Connection
            </h2>

            <p className="text-[#a8b2d1] mb-4">
              Connect your wallet to access all features
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {wallets.map((wallet, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 text-center cursor-pointer transition-all ${
                    activeWallet === wallet.name
                      ? "border-[#00d4ff] bg-[#00a2ff40] shadow-glow"
                      : "border-[#00a2ff66] bg-[#0d192a] hover:border-[#00d4ff] hover:shadow-glow"
                  }`}
                  onClick={() => setActiveWallet(wallet.name)}
                >
                  <i
                    className={`${wallet.icon} text-3xl text-[#64ffda] mb-2`}
                  ></i>
                  <p className="font-medium text-[#a8b2d1]">{wallet.name}</p>
                  <small className="text-[#a8b2d1]">{wallet.symbol}</small>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                <i className="fas fa-key text-[#00d4ff]"></i>
                Wallet Address
              </label>
              <input
                type="text"
                placeholder="Enter your wallet address"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0d192a] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none transition-all"
              />
            </div>

            <div
              className="flex justify-between items-center p-4 rounded-xl bg-[#0d192a] cursor-pointer hover:bg-[#00a2ff25] hover:shadow-glow transition-all"
              onClick={() => toggleAccordion("wallet")}
            >
              <span className="text-[#64ffda] flex items-center gap-2">
                <i className="fas fa-cog"></i>
                Advanced Wallet Settings
              </span>
              <i
                className={`fas ${
                  accordions.wallet ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                accordions.wallet ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 bg-[#0d192a] rounded-xl space-y-4">
                <div>
                  <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                    <i className="fas fa-network-wired text-[#00d4ff]"></i>
                    Network
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0a192f] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none">
                    <option value="mainnet">Mainnet</option>
                    <option value="ropsten">Ropsten Testnet</option>
                    <option value="kovan">Kovan Testnet</option>
                    <option value="rinkeby">Rinkeby Testnet</option>
                  </select>
                </div>

                {[
                  {
                    icon: "fa-plug",
                    text: "Auto-connect wallet",
                    checked: true,
                  },
                  {
                    icon: "fa-receipt",
                    text: "Show transaction details",
                    checked: true,
                  },
                  {
                    icon: "fa-shield-alt",
                    text: "Enhanced security",
                    checked: false,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-xl bg-[#0a192f] hover:bg-[#0a192fcc] transition-colors"
                  >
                    <span className="text-[#a8b2d1] flex items-center gap-2">
                      <i className={`fas ${item.icon} text-[#00d4ff]`}></i>
                      {item.text}
                    </span>
                    <label className="relative inline-block w-16 h-8">
                      <input
                        type="checkbox"
                        defaultChecked={item.checked}
                        className="opacity-0 w-0 h-0"
                      />
                      <span
                        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all before:absolute before:content-[''] before:h-5 before:w-5 before:left-1 before:bottom-1 before:rounded-full before:transition-all before:shadow-glow ${
                          item.checked
                            ? "bg-[#00a2ff66] shadow-glow before:bg-[#00d4ff] before:translate-x-7"
                            : "bg-[#0a192f] border-2 border-[#00a2ff99] before:bg-[#64ffda]"
                        }`}
                      ></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="bg-[#0a192f99] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-[#64ffda] mb-4 flex items-center gap-3">
              <i className="fas fa-user-shield w-8 h-8 flex items-center justify-center bg-[#00d4ff33] rounded-full"></i>
              Privacy & Security
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: "fa-user-lock",
                  text: "Private account",
                  checked: false,
                },
                {
                  icon: "fa-location-arrow",
                  text: "Location tracking",
                  checked: true,
                },
                { icon: "fa-cookie", text: "Allow cookies", checked: true },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-xl bg-[#0d192a] hover:bg-[#0d192acc] transition-colors"
                >
                  <span className="text-[#a8b2d1] flex items-center gap-2">
                    <i className={`fas ${item.icon} text-[#00d4ff]`}></i>
                    {item.text}
                  </span>
                  <label className="relative inline-block w-16 h-8">
                    <input
                      type="checkbox"
                      defaultChecked={item.checked}
                      className="opacity-0 w-0 h-0"
                    />
                    <span
                      className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all before:absolute before:content-[''] before:h-5 before:w-5 before:left-1 before:bottom-1 before:rounded-full before:transition-all before:shadow-glow ${
                        item.checked
                          ? "bg-[#00a2ff66] shadow-glow before:bg-[#00d4ff] before:translate-x-7"
                          : "bg-[#0d192a] border-2 border-[#00a2ff99] before:bg-[#64ffda]"
                      }`}
                    ></span>
                  </label>
                </div>
              ))}

              <div>
                <label className="block text-[#a8b2d1] mb-2 flex items-center gap-2">
                  <i className="fas fa-database text-[#00d4ff]"></i>
                  Data Retention
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[#00a2ff66] bg-[#0d192a] text-white focus:border-[#00d4ff] focus:shadow-glow outline-none">
                  <option value="30">30 days</option>
                  <option value="90">90 days</option>
                  <option value="365">1 year</option>
                  <option value="forever">Forever</option>
                </select>
              </div>

              <div
                className="flex justify-between items-center p-4 rounded-xl bg-[#0d192a] cursor-pointer mt-4 hover:bg-[#00a2ff25] hover:shadow-glow transition-all"
                onClick={() => toggleAccordion("security")}
              >
                <span className="text-[#64ffda] flex items-center gap-2">
                  <i className="fas fa-shield-alt"></i>
                  Advanced Security
                </span>
                <i
                  className={`fas ${
                    accordions.security ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  accordions.security ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-[#0d192a] rounded-xl space-y-4">
                  {[
                    {
                      icon: "fa-fingerprint",
                      text: "Two-factor authentication",
                      checked: false,
                    },
                    {
                      icon: "fa-envelope",
                      text: "Email verification",
                      checked: true,
                    },
                    {
                      icon: "fa-exclamation-triangle",
                      text: "Security alerts",
                      checked: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-xl bg-[#0a192f] hover:bg-[#0a192fcc] transition-colors"
                    >
                      <span className="text-[#a8b2d1] flex items-center gap-2">
                        <i className={`fas ${item.icon} text-[#00d4ff]`}></i>
                        {item.text}
                      </span>
                      <label className="relative inline-block w-16 h-8">
                        <input
                          type="checkbox"
                          defaultChecked={item.checked}
                          className="opacity-0 w-0 h-0"
                        />
                        <span
                          className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all before:absolute before:content-[''] before:h-5 before:w-5 before:left-1 before:bottom-1 before:rounded-full before:transition-all before:shadow-glow ${
                            item.checked
                              ? "bg-[#00a2ff66] shadow-glow before:bg-[#00d4ff] before:translate-x-7"
                              : "bg-[#0a192f] border-2 border-[#00a2ff99] before:bg-[#64ffda]"
                          }`}
                        ></span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className={`w-56 mx-auto mt-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
            saving
              ? "bg-[#64ffda33] text-[#64ffda] cursor-not-allowed"
              : "bg-[#00a2ff66] text-white hover:bg-[#00a2ff99] hover:scale-105 shadow-glow animate-pulse"
          }`}
        >
          {saving ? (
            <>
              <i className="fas fa-circle-notch animate-spin"></i>
              Saving...
            </>
          ) : (
            <>
              <i className="fas fa-save"></i>
              Save Settings
            </>
          )}
        </button>
      </div>

      <style jsx>{`
        .bg-radial-circle {
          background: radial-gradient(
            circle,
            rgba(0, 212, 255, 0.1) 0%,
            transparent 70%
          );
        }

        .animate-rotate-background {
          animation: rotateBackground 20s linear infinite;
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .inset-shadow-lg {
          box-shadow: inset 0 0 20px rgba(0, 153, 255, 0.3);
        }

        .text-shadow-glow {
          text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out;
        }

        @keyframes rotateBackground {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(150%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default StudentDash;
