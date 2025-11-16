import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Mail,
  Server,
  FileText,
  CheckCircle
} from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including name, email, phone number, resume details, and professional background when you use our services."
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      content: "We use your information to provide staffing services, match candidates with opportunities, communicate with you, and improve our services. We never sell your personal data."
    },
    {
      icon: Shield,
      title: "Data Protection",
      content: "We implement industry-standard security measures to protect your data, including encryption, access controls, and regular security audits."
    },
    {
      icon: Server,
      title: "Data Sharing",
      content: "We only share your information with potential employers when you explicitly consent to specific job applications or when using our matching services."
    },
    {
      icon: Eye,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal data. You can also object to processing and request data portability."
    },
    {
      icon: Mail,
      title: "Communication",
      content: "We may send you service-related communications and marketing emails. You can opt-out of marketing communications at any time."
    }
  ];

  const dataTypes = [
    "Personal identification information",
    "Professional background and resume data",
    "Communication records",
    "Usage data and analytics",
    "Job preferences and search criteria"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-xl text-blue-200">Last updated: December 2024</p>
            </div>
          </div>

          <p className="text-lg text-blue-100 leading-relaxed">
            At Hireflux Technologies, we are committed to protecting your privacy and ensuring
            the security of your personal information. This policy explains how we collect,
            use, and safeguard your data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Your privacy is our priority. This Privacy Policy describes how Hireflux Technologies
            collects, uses, and protects your personal information when you use our staffing and
            recruitment services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <Lock className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-slate-700 font-medium">Data Encrypted</span>
            </div>
          </div>
        </div>

        {/* Data Collection Types */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Types of Data We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
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

        {/* Cookies & Tracking */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies & Tracking</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your experience,
            analyze site usage, and assist in our marketing efforts. You can control
            cookie preferences through your browser settings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="font-semibold text-slate-900 mb-1">Essential Cookies</div>
              <div className="text-slate-600">Required for site functionality</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="font-semibold text-slate-900 mb-1">Analytics Cookies</div>
              <div className="text-slate-600">Help us improve our services</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="font-semibold text-slate-900 mb-1">Marketing Cookies</div>
              <div className="text-slate-600">Personalize your experience</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 mt-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-blue-100 mb-6">
            If you have any questions about this Privacy Policy or how we handle your data,
            please contact our Data Protection Officer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:privacy@hirefluxtech.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              Email Privacy Team
            </a>
            <a
              href="mailto:dpo@hirefluxtech.com"
              className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 justify-center"
            >
              <Shield className="w-5 h-5" />
              Contact DPO
            </a>
          </div>
        </div>

        {/* Update Notice */}
        <div className="text-center mt-12 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
          <p className="text-slate-700">
            <strong>Note:</strong> We may update this Privacy Policy from time to time.
            We will notify you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;