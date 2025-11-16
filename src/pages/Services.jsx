import { useState } from "react";
import {
  Users,
  Clock,
  Target,
  Zap,
  Award,
  HeartHandshake,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Shield,
  MessageCircle,
  Calendar,
  Phone,
  Globe,
  FileText
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("employers");

  const employerServices = [
    {
      icon: Users,
      title: "IT Staffing",
      description: "Permanent, contract, and remote IT talent for your technology needs.",
      features: ["Software Engineers", "DevOps Specialists", "Data Scientists", "IT Support"],
      color: "blue",
      popular: true
    },
    {
      icon: Building,
      title: "Non-IT Staffing",
      description: "Operations, finance, HR, sales, marketing, and administrative professionals.",
      features: ["Finance & Accounting", "Sales & Marketing", "HR & Recruitment", "Operations"],
      color: "green"
    },
    {
      icon: Clock,
      title: "Contract Hiring",
      description: "Flexible staffing solutions for projects, seasonal needs, and special initiatives.",
      features: ["Project-based Teams", "Seasonal Staffing", "Interim Management", "Specialized Skills"],
      color: "purple"
    },
    {
      icon: Target,
      title: "Executive Search",
      description: "C-level and leadership talent acquisition for strategic roles.",
      features: ["C-Level Executives", "Directors & VPs", "Department Heads", "Strategic Roles"],
      color: "red",
      popular: true
    }
  ];

  const jobSeekerServices = [
    {
      icon: FileText,
      title: "Resume & Interview Prep",
      description: "Comprehensive support to help you land your dream role with confidence.",
      features: ["Resume Optimization", "Interview Coaching", "Portfolio Reviews", "Salary Negotiation"],
      color: "blue"
    },
    {
      icon: HeartHandshake,
      title: "Career Counseling",
      description: "Personalized guidance for career growth and professional development.",
      features: ["Career Planning", "Skill Assessment", "Growth Strategies", "Goal Setting"],
      color: "green",
      popular: true
    },
    {
      icon: Zap,
      title: "Job Matching",
      description: "AI-powered matching to connect you with ideal opportunities.",
      features: ["Smart Matching", "Priority Applications", "Company Insights", "Culture Fit"],
      color: "purple"
    },
    {
      icon: Globe,
      title: "Remote Opportunities",
      description: "Access to global remote positions and flexible work arrangements.",
      features: ["Remote Roles", "Flexible Hours", "Global Companies", "Work-Life Balance"],
      color: "red"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Needs Assessment",
      description: "We deeply understand your requirements and objectives",
      icon: MessageCircle
    },
    {
      step: "02",
      title: "Talent Sourcing",
      description: "Our AI platform identifies and screens ideal candidates",
      icon: Users
    },
    {
      step: "03",
      title: "Quality Screening",
      description: "Rigorous vetting and technical assessments",
      icon: Shield
    },
    {
      step: "04",
      title: "Perfect Match",
      description: "We present you with pre-vetted, ideal candidates",
      icon: CheckCircle
    }
  ];

  const stats = [
    { icon: Zap, value: "48h", label: "Average Time to First Candidate" },
    { icon: Award, value: "95%", label: "Client Satisfaction Rate" },
    { icon: Users, value: "10K+", label: "Successful Placements" },
    { icon: Building, value: "500+", label: "Partner Companies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Rocket className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Comprehensive Staffing Solutions</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Expert
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Staffing Services
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                From IT professionals to executive leadership, we provide tailored staffing solutions
                that drive growth and success for both employers and job seekers.
              </p>

              <div className="flex flex-wrap gap-6">
                <button onClick={() => setActiveTab("employers")} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-transparent hover:border-2 border-white hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  For Employers
                </button>
                <button onClick={() => setActiveTab("jobSeekers")} className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  For Job Seekers
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105">
                    <Zap className="w-8 h-8 text-blue-400 mb-3" />
                    <div className="text-white font-semibold">Fast Hiring</div>
                    <div className="text-blue-200 text-sm">48h average response</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105">
                    <Target className="w-8 h-8 text-green-400 mb-3" />
                    <div className="text-white font-semibold">Precision Match</div>
                    <div className="text-blue-200 text-sm">95% success rate</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105">
                    <Award className="w-8 h-8 text-purple-400 mb-3" />
                    <div className="text-white font-semibold">Quality First</div>
                    <div className="text-blue-200 text-sm">Vetted professionals</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105">
                    <Shield className="w-8 h-8 text-pink-400 mb-3" />
                    <div className="text-white font-semibold">Guaranteed</div>
                    <div className="text-blue-200 text-sm">90-day placement guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive
              <span className="text-blue-600"> Solutions</span>
            </h2>
            <p className="text-xl text-slate-600">
              Tailored services designed to meet the unique needs of employers and job seekers alike.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200">
              <div className="flex flex-wrap gap-2 justify-around">
                <button
                  onClick={() => setActiveTab("employers")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${activeTab === "employers"
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <Building className="w-5 h-5" />
                  For Employers
                </button>
                <button
                  onClick={() => setActiveTab("jobSeekers")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${activeTab === "jobSeekers"
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <Users className="w-5 h-5" />
                  For Job Seekers
                </button>
              </div>
            </div>
          </div>

          {/* Services Content */}
          <div className="transition-all duration-500">
            {activeTab === "employers" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {employerServices.map((service, index) => (
                  <div key={index} className={`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    {service.popular && (
                      <div className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold text-center">
                        <Star className="w-4 h-4 inline mr-2" />
                        Most Popular
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 bg-${service.color}-100 rounded-2xl`}>
                          <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-slate-900">What's Included:</h4>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className={`w-5 h-5 text-${service.color}-600`} />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className={`w-full bg-${service.color}-600 text-white py-3 rounded-xl font-semibold hover:bg-${service.color}-700 transition-colors flex items-center gap-2 justify-center`}>
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "jobSeekers" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {jobSeekerServices.map((service, index) => (
                  <div key={index} className={`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    {service.popular && (
                      <div className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold text-center">
                        <Star className="w-4 h-4 inline mr-2" />
                        Most Popular
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 bg-${service.color}-100 rounded-2xl`}>
                          <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-slate-900">What's Included:</h4>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className={`w-5 h-5 text-${service.color}-600`} />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className={`w-full bg-${service.color}-600 text-white py-3 rounded-xl font-semibold hover:bg-${service.color}-700 transition-colors flex items-center gap-2 justify-center`}>
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How We
              <span className="text-blue-600"> Deliver</span>
            </h2>
            <p className="text-xl text-slate-600">
              Our proven process ensures quality matches and successful outcomes every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking to hire exceptional talent or find your dream job,
              we're here to help you succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-transparent hover:border-2 border-white hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 justify-center">
                <Phone className="w-5 h-5" />
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;