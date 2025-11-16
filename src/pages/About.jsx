import React from "react";
import {
  Target,
  Users,
  Zap,
  HeartHandshake,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Lightbulb,
  Rocket,
  Star,
  MapPin,
  Clock,
  Building,
  ArrowRight,
  CheckCircle,
  Quote,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  Calendar
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest, transparent partnerships built on trust and ethical practices",
      color: "blue"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every placement and service delivery",
      color: "green"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Modern, data-driven approaches to revolutionize staffing",
      color: "purple"
    },
    {
      icon: HeartHandshake,
      title: "Partnership",
      description: "Long-term relationships valued over transactional engagements",
      color: "red"
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to transform staffing" },
    { year: "2021", event: "First 100 Placements", description: "Reached milestone of 100 successful hires" },
    { year: "2022", event: "500+ Companies", description: "Expanded to serve 500+ business partners" },
    { year: "2023", event: "10K Professionals", description: "Helped 10,000+ professionals find roles" },
    { year: "2024", event: "AI Platform Launch", description: "Introduced AI-powered matching technology" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former HR Director with 15+ years in talent acquisition",
      avatar: "SJ",
      specialties: ["Strategy", "Leadership", "Innovation"]
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech entrepreneur passionate about AI and people solutions",
      avatar: "MC",
      specialties: ["Technology", "AI", "Product Development"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Talent",
      bio: "Recruitment expert with deep industry connections",
      avatar: "ER",
      specialties: ["Talent Acquisition", "Relationships", "Matching"]
    },
    {
      name: "David Kim",
      role: "Operations Director",
      bio: "Process optimization specialist focused on client success",
      avatar: "DK",
      specialties: ["Operations", "Efficiency", "Client Success"]
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Professionals Placed" },
    { icon: Building, value: "500+", label: "Partner Companies" },
    { icon: MapPin, value: "25+", label: "Countries Served" },
    { icon: Award, value: "95%", label: "Client Satisfaction" },
    { icon: Clock, value: "48h", label: "Average Response Time" },
    { icon: TrendingUp, value: "150%", label: "YoY Growth" }
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
                <span className="text-sm font-medium">Transforming Staffing Since 2020</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Revolutionizing
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Talent Acquisition
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Founded with a vision to bridge the gap between exceptional talent and
                forward-thinking companies, Hireflux Technologies is reshaping the future of work.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex items-center gap-2">
                  Our Story
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Meet Our Team
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <Target className="w-8 h-8 text-blue-400 mb-3" />
                    <div className="text-white font-semibold">Mission Driven</div>
                    <div className="text-blue-200 text-sm">Transform businesses through talent</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <Zap className="w-8 h-8 text-green-400 mb-3" />
                    <div className="text-white font-semibold">Fast & Efficient</div>
                    <div className="text-blue-200 text-sm">48h average placement time</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <Globe className="w-8 h-8 text-purple-400 mb-3" />
                    <div className="text-white font-semibold">Global Reach</div>
                    <div className="text-blue-200 text-sm">25+ countries served</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <Users className="w-8 h-8 text-pink-400 mb-3" />
                    <div className="text-white font-semibold">10K+ Placed</div>
                    <div className="text-blue-200 text-sm">Professionals hired</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Our
                  <span className="text-blue-600"> Purpose</span>
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h3>
                      <p className="text-slate-600 leading-relaxed">
                        To transform businesses through strategic talent acquisition and change lives
                        by connecting professionals with meaningful career opportunities that drive
                        growth and innovation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h3>
                      <p className="text-slate-600 leading-relaxed">
                        To create a world where every company has access to exceptional talent and
                        every professional finds work that brings purpose and fulfillment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <blockquote className="text-xl text-slate-700 italic leading-relaxed">
                      "We believe that the right talent can transform organizations and shape the future.
                      Our commitment is to make those transformative connections happen."
                    </blockquote>
                    <div className="mt-6">
                      <div className="font-semibold text-slate-900">Sarah Johnson</div>
                      <div className="text-slate-600">CEO & Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              By The
              <span className="text-blue-600"> Numbers</span>
            </h2>
            <p className="text-xl text-slate-600">
              Our impact in transforming businesses and careers through strategic talent solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core
              <span className="text-blue-600"> Values</span>
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide every decision we make and every partnership we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 mx-auto mb-6 bg-${value.color}-100 rounded-2xl flex items-center justify-center group-hover:bg-${value.color}-200 transition-colors`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-blue-400">Journey</span>
            </h2>
            <p className="text-xl text-blue-200">
              From startup to industry leader - milestones that shaped our growth and impact.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500/30 h-full hidden md:block"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0
                      ? "md:pr-20 md:text-right"
                      : "md:pl-20 md:text-left"
                      }`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                      <p className="text-blue-100">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white top-1/2 md:top-auto mt-8 md:mt-0"></div>

                  {/* Year */}
                  <div
                    className={`text-blue-300 font-bold text-lg mt-6 md:mt-0 ${index % 2 === 0 ? "md:text-left md:ml-[20px]" : "md:text-right md:mr-[20px]"}`}
                  >
                    <div className="hidden md:block">{milestone.year}</div>

                    {/* Mobile year (simple centered) */}
                    <div className="md:hidden text-center text-blue-400 font-semibold">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Meet Our
              <span className="text-blue-600"> Leadership</span>
            </h2>
            <p className="text-xl text-slate-600">
              The passionate team driving innovation and excellence in talent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200">
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-3 mt-4">
                  <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform
              <span className="text-blue-600"> Your Team?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust Hireflux for their talent needs.
              Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center gap-2 justify-center">
                <Phone className="w-5 h-5" />
                Contact Our Team
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 justify-center">
                <Users className="w-5 h-5" />
                View Open Roles
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;