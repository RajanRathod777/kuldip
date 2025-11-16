import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Rocket,
  Target,
  Zap,
  Award,
  Star,
  RefreshCw,
  Building,
  HeartHandshake,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Quote,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Home = () => {
  useEffect(() => {
    // Scroll animation effect
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Floating animated shapes */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float-fast"></div>

          {/* Additional animated elements */}
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl animate-ping-slow"></div>
          <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse-delayed"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20 shadow-lg animate-pulse-gentle">
              <Star className="w-4 h-4 text-yellow-400 animate-spin-slow" />
              <span className="text-white/90 text-sm font-medium">
                Trusted by 500+ Companies
              </span>
            </div>

            {/* Horizontal Slider for Headlines */}
            <div className="h-40 overflow-hidden">
              <Splide
                options={{
                  type: "loop",
                  autoplay: true,
                  interval: 7000,
                  pauseOnHover: false,
                  speed: 2000,
                  arrows: false,
                  pagination: false,
                  gap: "1rem"
                }}
                className="h-full"
              >
                <SplideSlide>
                  <div className="h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      <span className="block animate-typewriter overflow-hidden whitespace-nowrap pr-1">
                        Talent That
                      </span>
                      <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x mt-2">
                        Drives Growth
                      </span>
                    </h1>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      <span className="block">Find Your</span>
                      <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x mt-2">
                        Dream Team
                      </span>
                    </h1>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      <span className="block">Connect With</span>
                      <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x mt-2">
                        Top Talent
                      </span>
                    </h1>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      <span className="block">Build The</span>
                      <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x mt-2">
                        Future Together
                      </span>
                    </h1>
                  </div>
                </SplideSlide>
              </Splide>
            </div>

            {/* Horizontal Description Slider */}
            <div className="h-30 overflow-hidden">
              <Splide
                options={{
                  type: "loop",
                  autoplay: true,
                  interval: 7000,
                  pauseOnHover: false,
                  speed: 2000,
                  arrows: false,
                  pagination: false,
                  gap: "1rem"
                }}
                className="h-full"
              >
                <SplideSlide>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    At Hireflux Technologies, we connect innovative companies
                    with exceptional talent. Transform your business with the
                    right people and unlock new opportunities.
                  </p>
                </SplideSlide>

                <SplideSlide>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    Streamline your hiring process with our AI-powered matching
                    technology. Find candidates that align with your company
                    culture and technical requirements.
                  </p>
                </SplideSlide>

                <SplideSlide>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    Join thousands of companies that have reduced hiring time by
                    70% while improving candidate quality and retention rates.
                  </p>
                </SplideSlide>

                <SplideSlide>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    Our platform offers 360° recruitment solutions - from
                    sourcing to onboarding, we handle everything so you can
                    focus on growth.
                  </p>
                </SplideSlide>
              </Splide>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delayed-2">
              <Link
                to="/schedule"
                className="group relative bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:no-underline hover:bg-gray-50 transition-all duration-300 transform shadow-2xl flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Schedule
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8 animate-fade-in-up-delayed-3">
              {[
                {
                  icon: Rocket,
                  title: "Fast Hiring",
                  desc: "48h average response",
                },
                {
                  icon: Target,
                  title: "Precision Match",
                  desc: "95% success rate",
                },
                {
                  icon: Users,
                  title: "10K+ Placed",
                  desc: "Professionals hired",
                },
                {
                  icon: Award,
                  title: "Quality",
                  desc: "Vetted candidates",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {item.title}
                    </div>
                    <div className="text-white/60 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Horizontal Testimonials Slider */}
          <div className="animate-fade-in-right relative">
            <Splide
              options={{
                type: "loop",
                autoplay: true,
                interval: 7000,
                pauseOnHover: true,
                speed: 2000,
                arrows: false,
                pagination: true,
                gap: "1rem"
              }}
              className="h-full"
            >
              {/* Testimonial 1 */}
              <SplideSlide>
                <div className="bg-white/10 mt-5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                      alt="Sarah Johnson"
                      className="w-16 h-16 rounded-full border-4 border-white/20"
                    />
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Sarah Johnson
                      </h3>
                      <p className="text-blue-200 text-sm">
                        CTO at TechInnovate
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    "Hireflux transformed our hiring process. We found 3 senior
                    developers in just 2 weeks. The quality of candidates is
                    exceptional!"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </SplideSlide>

              {/* Testimonial 2 */}
              <SplideSlide>
                <div className="bg-white/10 mt-5 backdrop-blur-lg rounded-3xl p-8 border border-white/20  transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                      alt="Michael Chen"
                      className="w-16 h-16 rounded-full border-4 border-white/20"
                    />
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Michael Chen
                      </h3>
                      <p className="text-blue-200 text-sm">
                        HR Director at GrowthLabs
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    "The platform's matching algorithm is incredible. 90% of the
                    candidates sent were perfect fits for our company culture
                    and technical needs."
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </SplideSlide>

              {/* Testimonial 3 */}
              <SplideSlide>
                <div className="bg-white/10 mt-5 backdrop-blur-lg rounded-3xl p-8 border border-white/20  transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                      alt="Emily Rodriguez"
                      className="w-16 h-16 rounded-full border-4 border-white/20"
                    />
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Emily Rodriguez
                      </h3>
                      <p className="text-blue-200 text-sm">
                        Product Manager at StartupXYZ
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    "As a startup, we needed to move fast. Hireflux delivered
                    qualified candidates within 48 hours. Their service is a
                    game-changer!"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </SplideSlide>

              {/* Testimonial 4 */}
              <SplideSlide>
                <div className="bg-white/10 mt-5 backdrop-blur-lg rounded-3xl p-8 border border-white/20  transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                      alt="David Kim"
                      className="w-16 h-16 rounded-full border-4 border-white/20"
                    />
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        David Kim
                      </h3>
                      <p className="text-blue-200 text-sm">
                        Engineering Lead at DataCorp
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    "The quality of technical talent through Hireflux is
                    outstanding. We've reduced our time-to-hire by 65% while
                    improving candidate quality."
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </header>
      <StatsSection />
      <WhyChoose />
      <ServicesSlider />
      <IndustriesWeServe />
      <TestimonialSlider />
      <FAQSection />
      <CTASection />
    </>
  );
};


const StatsSection = () => {

  const stats = [
    {
      number: "500+",
      label: "Companies Served",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      number: "10K+",
      label: "Candidates Placed",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      number: "48h",
      label: "Average Response",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      delay: 0.4,
    },
  ];


  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Static Background Elements (no continuous animation) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative text-center p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 group"
            >
              {/* Hover Effect Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <div
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div
                  className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div
                  className="text-gray-600 font-medium text-sm lg:text-base group-hover:text-gray-900 transition-colors duration-300"
                >
                  {stat.label}
                </div>
              </div>

              {/* Subtle border animation on hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            </div>
          ))}
        </div>

        {/* Additional Decorative Elements */}
        <div
          className="text-center mt-12"
        >
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Trusted by industry leaders worldwide for exceptional recruitment
            solutions and unparalleled service quality.
          </p>
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const points = [
    {
      icon: Target,
      title: "Tailored Solutions",
      text: "Customized hiring strategies that align with your company culture and specific requirements.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      text: "Rapid candidate matching and placement without compromising on quality or cultural fit.",
    },
    {
      icon: HeartHandshake,
      title: "Candidate-First",
      text: "Comprehensive support including interview coaching and career guidance for job seekers.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      text: "Deep sector knowledge across IT, healthcare, finance, engineering, and more.",
    },
    {
      icon: Star,
      title: "Quality Focus",
      text: "Rigorous vetting process for technical skills, soft skills, and cultural alignment.",
    },
    {
      icon: RefreshCw,
      title: "Continuous Support",
      text: "Ongoing relationship management to ensure long-term success and satisfaction.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hireflux?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We blend cutting-edge technology with human expertise to deliver
            staffing solutions that drive meaningful business growth and career
            advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSlider = () => {
  const services = [
    {
      title: "Permanent Staffing",
      description:
        "Long-term hiring solutions with comprehensive candidate vetting and cultural fit assessment.",
      icon: Users,
      features: [
        "90-day guarantee",
        "Cultural fit analysis",
        "Competitive pricing",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible staffing solutions for project-based work and temporary position filling.",
      icon: RefreshCw,
      features: ["Quick onboarding", "Flexible terms", "Managed payroll"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Executive Search",
      description:
        "Specialized recruitment for leadership roles with discreet and thorough search process.",
      icon: Target,
      features: [
        "Confidential search",
        "Leadership assessment",
        "Market intelligence",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "RPO Solutions",
      description:
        "End-to-end recruitment process outsourcing for high-volume hiring needs.",
      icon: TrendingUp,
      features: [
        "Dedicated team",
        "Process optimization",
        "Technology integration",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive staffing solutions designed to meet your unique
            business requirements and drive organizational success.
          </p>
        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "2rem",
            pagination: false,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
          className="services-slider"
        >
          {services.map((service, index) => (
            <SplideSlide key={index}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 h-full border border-gray-200 hover:shadow-2xl transition-all duration-500 group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

const IndustriesWeServe = () => {
  const industries = [
    {
      name: "Technology",
      icon: "💻",
      count: "2K+ placements",
      color: "bg-blue-500",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      count: "1.5K+ placements",
      color: "bg-green-500",
    },
    {
      name: "Finance",
      icon: "💰",
      count: "1.2K+ placements",
      color: "bg-yellow-500",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      count: "800+ placements",
      color: "bg-red-500",
    },
    {
      name: "Retail",
      icon: "🛒",
      count: "700+ placements",
      color: "bg-purple-500",
    },
    {
      name: "Education",
      icon: "🎓",
      count: "500+ placements",
      color: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With deep expertise across multiple sectors, we understand the
            unique staffing challenges and opportunities in each industry.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h3 className="font-bold text-xl text-white mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-400">{industry.count}</p>
              <div
                className={`w-12 h-1 ${industry.color} rounded-full mx-auto mt-4 group-hover:w-20 transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote:
        "Hireflux helped us hire a full engineering team in under 6 weeks — excellent screening and communication throughout the process.",
      author: "Jane Doe",
      position: "CTO, TechInnovate Inc.",
      avatar: "👩‍💼",
    },
    {
      quote:
        "The quality of candidates from Hireflux is consistently outstanding. They truly understand our culture and technical requirements.",
      author: "John Smith",
      position: "VP of Engineering, CloudScale",
      avatar: "👨‍💼",
    },
    {
      quote:
        "As a candidate, Hireflux provided exceptional support and guidance. They found me the perfect role that matched my career goals.",
      author: "Sarah Johnson",
      position: "Senior Developer, placed at DataCorp",
      avatar: "👩‍🔬",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from companies and candidates
            who have experienced the Hireflux difference.
          </p>
        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 2,
            perMove: 1,
            gap: "2rem",
            pagination: true,
            breakpoints: {
              768: { perPage: 1 },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 h-full border border-gray-200">
                <Quote className="w-12 h-12 text-blue-500/20 mb-6" />
                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What IT positions do you recruit for?",
    answer: "We specialize in recruiting for a wide range of IT roles including software developers, data scientists, cybersecurity specialists, network engineers, DevOps professionals, AI/ML engineers, and IT project managers.",
  },
  {
    question: "How do you ensure candidate quality for IT roles?",
    answer: "Our rigorous vetting process includes technical assessments, coding challenges, behavioral interviews, and reference checks. We use AI-powered matching to ensure candidates align with your technical stack and company culture.",
  },
  {
    question: "What is the average time-to-hire for IT positions?",
    answer: "For IT roles, our average time-to-hire is 3-4 weeks, significantly faster than industry standards, thanks to our extensive talent pool and streamlined processes.",
  },
  {
    question: "Do you offer specialized services for tech startups?",
    answer: "Yes, we provide tailored solutions for startups including equity-based recruitment, rapid scaling support, and access to our network of venture-backed talent.",
  },
  {
    question: "How do you handle remote IT hiring?",
    answer: "We have extensive experience in remote hiring, including time zone matching, virtual interview coordination, and compliance with international labor laws for distributed teams.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="group mb-4 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-6 text-left font-bold text-xl text-gray-900 hover:bg-gradient-to-br from-gray-50 to-blue-50 duration-300 group-hover:scale-[1.01] transition-transform"
      >
        {question}
        <ChevronDown className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:scale-110`} />
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            IT Company{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Common questions about our IT recruitment services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ lineHeight: "100%" }}>
          Ready to Transform Your
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ lineHeight: "150%" }}>
            Hiring or Career?
          </span>
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of companies and professionals who have found success
          with Hireflux Technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/employers"
            className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:no-underline hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex items-center gap-2 justify-center"
          >
            Job Schedule
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p className="text-blue-200 text-sm mt-8 flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4" />
          Get started in minutes • No commitment required • 24/7 Support
        </p>
      </div>
    </section>
  );
};

export default Home;