import { NavLink, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Instagram,
  Shield,
  CheckCircle,
  Users,
  Building,
  Briefcase,
  HeartHandshake,
  Zap,
  Send
} from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "IT Staffing", icon: Zap },
    { name: "Executive Search", icon: Users },
    { name: "Contract Hiring", icon: Briefcase },
    { name: "Career Counseling", icon: HeartHandshake }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" }
  ];

  const features = [
    { icon: CheckCircle, text: "95% Success Rate" },
    { icon: CheckCircle, text: "48h Average Response" },
    { icon: CheckCircle, text: "500+ Companies" },
    { icon: CheckCircle, text: "10K+ Professionals" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white" style={location.pathname === "/404" ? { display: "none" } : {}}>
      {/* Main Footer Content */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          {/* Newsletter Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Send className="w-6 h-6 text-blue-400" />
                  <span className="font-semibold text-blue-400">STAY UPDATED</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  Get the Latest
                  <span className="text-blue-400"> Job Insights</span>
                </h3>
                <p className="text-blue-100 text-lg">
                  Subscribe to our newsletter for industry trends, job market insights, and career opportunities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center gap-2 justify-center">
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl">Hireflux Technologies</div>
                  <div className="text-blue-300 text-sm">Talent That Drives Growth</div>
                </div>
              </div>

              <p className="text-blue-200 mb-6 leading-relaxed">
                Connecting exceptional talent with forward-thinking companies across the globe.
                We're revolutionizing the staffing industry with innovative solutions and personalized service.
              </p>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-green-400" />
                    <span className="text-blue-200 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className=" text-blue-200 hover:text-white transition-colors duration-200 hover:translate-x-1 transform flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-blue-200 group hover:text-white transition-colors duration-200 hover:cursor-pointer">
                    <service.icon className="w-4 h-4" />
                    <span style={{ userSelect: "none" }}>{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3 group">
                  <div className="min-w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-5 h-5 text-blue-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">Email</div>
                    <div className="text-white font-medium text-[14px]">info@hirefluxtech.com</div>
                  </div>
                </div>

                <div className="flex gap-3 group">
                  <div className="min-w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-5 h-5 text-blue-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">Phone</div>
                    <div className="text-white font-medium text-[14px]">+91 9296532804</div>
                  </div>
                </div>

                <div className="flex gap-3 group">
                  <div className="min-w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">Location</div>
                    <div className="text-white font-medium text-[14px]">1457 Bedford Ave, Brooklyn, NY 11216, USA.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-white">Trusted & Secure</span>
                </div>
                <p className="text-blue-200 text-sm">
                  Your data is protected with enterprise-grade security and privacy measures.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { label: "SSL Secured", icon: Shield },
                  { label: "GDPR Compliant", icon: CheckCircle },
                  { label: "24/7 Support", icon: Users }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-blue-200">
                    <badge.icon className="w-4 h-4 text-green-400" />
                    <span className="text-sm">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-blue-300 text-sm text-center lg:text-left">
              © {new Date().getFullYear()} Hireflux Technologies. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-blue-300 text-sm">
              <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
              <NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;