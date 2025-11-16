import { NavLink } from "react-router-dom";
import {
  FileText,
  Scale,
  UserCheck,
  AlertTriangle,
  Shield,
  ArrowLeft,
  CheckCircle,
  XCircle,
  BookOpen
} from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: BookOpen,
      title: "Acceptance of Terms",
      content: "By accessing and using Hireflux Technologies' services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service."
    },
    {
      icon: UserCheck,
      title: "User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use our services."
    },
    {
      icon: Shield,
      title: "Service Usage",
      content: "Our services are provided for legitimate staffing and recruitment purposes. You agree not to misuse our platform, including spamming, fraud, or unauthorized access."
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: "All content, trademarks, and data on our platform are the property of Hireflux Technologies or our licensors. You may not reproduce, distribute, or create derivative works without permission."
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: "You may not engage in discriminatory practices, provide false information, or use our services for any illegal purposes. We reserve the right to terminate accounts for violations."
    }
  ];

  const userResponsibilities = [
    "Provide accurate and complete information",
    "Maintain account security",
    "Use services for intended purposes only",
    "Respect intellectual property rights",
    "Comply with applicable laws"
  ];

  const companyRights = [
    "Modify or discontinue services",
    "Terminate accounts for violations",
    "Update terms and policies",
    "Monitor platform usage",
    "Refuse service to anyone"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Scale className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">Terms of Service</h1>
              <p className="text-xl text-blue-200">Effective: December 2024</p>
            </div>
          </div>

          <p className="text-lg text-blue-100 leading-relaxed">
            Please read these Terms of Service carefully before using Hireflux Technologies'
            services. These terms govern your access to and use of our platform.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement Overview</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            These Terms of Service constitute a legally binding agreement between you and
            Hireflux Technologies regarding your use of our staffing, recruitment, and
            career services platform.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Important Notice</h3>
                <p className="text-slate-700 text-sm">
                  By creating an account or using our services, you acknowledge that you have
                  read, understood, and agree to be bound by these terms. If you do not agree
                  with any part of these terms, you may not access our services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">User Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {userResponsibilities.map((responsibility, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{responsibility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Rights */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Company Rights & Discretion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {companyRights.map((right, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <Shield className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span className="text-slate-700">{right}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Terms Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prohibited Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Prohibited Content & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "False or misleading information",
              "Discriminatory job postings",
              "Spam or unsolicited messages",
              "Unauthorized data collection",
              "Impersonation of others",
              "Illegal or fraudulent activities"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Liability & Disclaimer */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Hireflux Technologies provides services on an "as-is" basis. We do not guarantee
            job placement, candidate quality, or uninterrupted service access. To the extent
            permitted by law, we are not liable for indirect, incidental, or consequential damages.
          </p>
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <p className="text-sm text-slate-700">
              <strong>Note:</strong> We act as an intermediary between job seekers and employers.
              We are not responsible for employment decisions, workplace conditions, or the
              actions of third parties using our platform.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination</h2>
          <p className="text-slate-700 leading-relaxed">
            Either party may terminate these terms at any time by providing notice. We reserve
            the right to suspend or terminate your account immediately for violations of these
            terms or applicable laws.
          </p>
        </div>

        {/* Contact & Updates */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Questions & Updates</h2>
          <p className="text-blue-100 mb-6">
            For questions about these Terms of Service or to report violations, please contact us.
            We may update these terms periodically, and continued use of our services constitutes
            acceptance of updated terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:legal@hirefluxtech.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center"
            >
              <FileText className="w-5 h-5" />
              Contact Legal Team
            </a>
            <NavLink to="/privacy" className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 justify-center">
              <Shield className="w-5 h-5" />
              View Privacy Policy
            </NavLink>
          </div>
        </div>

        {/* Governing Law */}
        <div className="text-center mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-slate-700">
            <strong>Governing Law:</strong> These Terms shall be governed by the laws of the State of New York,
            without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;