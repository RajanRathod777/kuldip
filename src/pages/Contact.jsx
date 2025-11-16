import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageCircle,
  ArrowRight,
  Star,
  Zap,
  Users,
  Shield
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Contact form:", form);
    setSent(true);
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      setSent(false);
    }, 5000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 9296532804",
      subtitle: "Mon-Fri from 9am to 6pm",
      color: "blue",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "info@hirefluxtech.com",
      subtitle: "We reply within 24 hours",
      color: "green",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "1457 Bedford Ave, Brooklyn, NY 11216, USA.",
      subtitle: "Headquarters",
      color: "purple",
      action: "Get Directions"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "48h average response time"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated specialists"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected"
    },
    {
      icon: Star,
      title: "95% Satisfaction",
      description: "Client satisfaction rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Start
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Conversation
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Whether you're an employer seeking talent or a professional searching for your next role,
              our team is ready to help you achieve your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-[6px]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm">{feature.title}</div>
                    <div className="text-blue-200 text-xs">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${method.color}-100 rounded-2xl`}>
                      <method.icon className={`w-6 h-6 text-${method.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                      <p className="text-slate-900 font-medium text-lg mb-1">{method.description}</p>
                      <p className="text-slate-600 text-sm mb-3">{method.subtitle}</p>
                      <button className={`text-${method.color}-600 font-medium text-sm hover:text-${method.color}-700 transition-colors flex items-center gap-1`}>
                        {method.action}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-2xl">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Office Hours</h3>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-slate-400">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Our support team is here to help you with urgent inquiries.
                </p>
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center">
                  <MessageCircle className="w-5 h-5" />
                  Live Chat Support
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                  <p className="text-blue-100">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="p-6">
                  {sent ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent Successfully!</h3>
                      <p className="text-slate-600 mb-6 max-w-md mx-auto">
                        Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-3 outline-0 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-3 outline-0 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                              required
                              type="email"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 000-0000"
                              className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-3 outline-0 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Company / Job Title
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your company or profession"
                              className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-3 outline-0 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-3 outline-0 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          required
                        >
                          <option value="" selected hidden>Select a subject</option>
                          <option value="hiring">I want to hire talent</option>
                          <option value="job-seeking">I'm looking for a job</option>
                          <option value="partnership">Partnership opportunity</option>
                          <option value="general">General inquiry</option>
                          <option value="support">Technical support</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <div className="relative">
                          <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us how we can help you..."
                            className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-3 outline-0 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                            rows={6}
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 justify-center ${isSubmitting
                          ? 'bg-slate-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1 shadow-lg hover:shadow-xl'
                          } text-white`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-slate-500 text-sm text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked
              <span className="text-blue-600"> Questions</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond within 2-4 hours during business hours, and always within 24 hours."
              },
              {
                question: "Do you offer international placement services?",
                answer: "Yes, we serve clients and candidates across 25+ countries with localized support."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We cover technology, healthcare, finance, manufacturing, and professional services."
              },
              {
                question: "Is there a cost for job seekers?",
                answer: "No, our services are completely free for professionals seeking new opportunities."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;