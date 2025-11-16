import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-Hireflux-preview.png";
import {
  Menu,
  X,
  Briefcase,
  Users,
  Phone,
  ChevronDown,
  Sparkles,
  CalendarCheck
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    {
      name: "Home",
      href: "/",
      icon: Sparkles,
      badge: null
    },
    {
      name: "Services",
      href: "/services",
      icon: Briefcase,
      badge: null,
    },
    {
      name: "About",
      href: "/about",
      icon: Users,
      badge: null
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
      badge: null
    },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav className={`w-full bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b transition-all duration-500 ${isScrolled
        ? "border-gray-200/80 shadow-lg"
        : "border-transparent shadow-sm"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-3 hover:no-underline group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                {/* bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl */}
                <div className="w-12 h-12  flex items-center justify-center font-bold  group-hover:scale-105 transition-all duration-300 group-hover:rotate-3">
                  <Sparkles className="w-6 h-6" />
                  <img src={logo} alt="" srcSet="" />
                </div>
                {/* <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div> */}
              </div>
              <div className="hidden sm:block transform transition-all duration-300 group-hover:translate-x-1">
                <div className="font-bold text-xl leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Hireflux
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wide">TECHNOLOGIES</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 relative group ${isActiveLink(item.href)
                      ? "text-blue-600 bg-blue-50/80 shadow-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                      }`}
                  >
                    <item.icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActiveLink(item.href) ? "text-blue-600" : ""
                      }`} />
                    <span className="relative">
                      {item.name}
                      {item.badge && (
                        <span className="absolute -top-3 -right-6 px-1.5 py-0.5 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs rounded-full animate-bounce">
                          {item.badge}
                        </span>
                      )}
                    </span>

                    {/* Active/Hover underline animation */}
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${isActiveLink(item.href)
                      ? "w-full bg-blue-600"
                      : "group-hover:w-full bg-blue-600"
                      }`}></div>
                  </Link>

                  {/* Services Dropdown */}
                  {item.dropdown && isServicesOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/80 py-4 animate-in fade-in-50 slide-in-from-top-1 duration-300"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="px-4 py-2 border-b border-gray-200/50 mb-2">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Our Services</div>
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50/50 hover:text-blue-600 transition-all duration-200 mx-2 rounded-xl group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <dropdownItem.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{dropdownItem.name}</div>
                            <div className="text-xs text-gray-500 group-hover:text-blue-500">
                              {dropdownItem.description}
                            </div>
                          </div>
                          <ChevronDown className="w-4 h-4 transform -rotate-90 text-gray-400 group-hover:text-blue-600" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/employers" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
                <CalendarCheck className="w-4 h-4" />
                Schedule
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100/80 transition-all duration-300 hover:scale-105"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-in spin-in-90 duration-200" />
              ) : (
                <Menu className="w-6 h-6 animate-in fade-in duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-200/80 shadow-2xl animate-in slide-in-from-top-1 duration-300">
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-4 text-left text-base font-medium text-gray-900 rounded-xl hover:bg-blue-50/50 transition-all duration-200 group"
                      >
                        <span className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                          <span className="relative">
                            {item.name}
                            {item.badge && (
                              <span className="absolute -top-2 -right-8 px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </span>
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-blue-600" : "text-gray-400"
                            }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 space-y-1 bg-gray-50/50 rounded-xl p-3 animate-in fade-in-50 duration-300">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 group"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              <dropdownItem.icon className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                              <div>
                                <div className="font-medium">{dropdownItem.name}</div>
                                <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-4 text-base font-medium rounded-xl transition-all duration-200 group ${isActiveLink(item.href)
                        ? "text-blue-600 bg-blue-50/80 shadow-sm"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${isActiveLink(item.href) ? "text-blue-600" : ""
                        }`} />
                      <span className="relative">
                        {item.name}
                        {item.badge && (
                          <span className="absolute -top-2 -right-8 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-200/50 mt-4 space-y-3">
                <Link
                  to="/employers"
                  className="flex items-center justify-center gap-2 w-full px-4 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <CalendarCheck className="w-5 h-5" />
                  Schedule
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;