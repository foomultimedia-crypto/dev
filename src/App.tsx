import { motion } from "motion/react";
import { 
  Keyboard, 
  Monitor, 
  BookOpen, 
  Award, 
  Users, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    {
      title: "Typewriting Classes",
      description: "English & Tamil (Junior/Senior levels) with dedicated practice sessions for Govt. Technical Examinations.",
      icon: <Keyboard className="w-8 h-8 text-indigo-600" />,
      tag: "Govt. Recognized"
    },
    {
      title: "COA Training",
      description: "Computer on Office Automation (COA) training with modern computer lab facilities and hands-on practice.",
      icon: <Monitor className="w-8 h-8 text-indigo-600" />,
      tag: "Top Choice"
    },
    {
      title: "Tally Prime & GST",
      description: "Master accounting with real ledger examples, GST filing, and financial management in Tally Prime.",
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      tag: "Professional"
    },
    {
      title: "Stenography",
      description: "Structured dictation and corrections by experienced instructors for shorthand mastery.",
      icon: <Monitor className="w-8 h-8 text-indigo-600" />,
      tag: "Specialized"
    }
  ];

  const features = [
    { text: "15+ Years of Educational Excellence", icon: <Award /> },
    { text: "Placement Support & Guidance", icon: <Users /> },
    { text: "Modern Computer Lab Facilities", icon: <CheckCircle2 /> },
    { text: "Authorized Training Center", icon: <Award /> }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <span className="text-white font-bold text-2xl tracking-tighter uppercase font-display">ECG</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight uppercase tracking-tight text-slate-950 md:block hidden font-display">Typewriting &</span>
                <span className="font-semibold text-xs leading-none text-neutral-500 uppercase md:block hidden tracking-widest text-nowrap">Computer Education</span>
              </div>
              <span className="font-bold text-xl text-slate-950 md:hidden block font-display">ECG EDUCATION</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-neutral-600">
              <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
              <a href="#courses" className="hover:text-indigo-600 transition-colors">Courses</a>
              <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
              <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 cursor-pointer">
                Join Now
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b p-4 space-y-4 flex flex-col items-center"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="font-medium">Home</a>
            <a href="#courses" onClick={() => setIsMenuOpen(false)} className="font-medium">Courses</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-medium">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-medium">Contact</a>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">Join Now</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-100 uppercase tracking-wide">
              <Award className="w-4 h-4" />
              Empowering Pennagaram Since 2010
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-950 leading-[1.1] tracking-tight font-display">
              Master Your Skills, <br />
              <span className="text-indigo-600">Build Your Career</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dharmapuri's leading institute for professional typewriting, COA, and job-oriented training with placement support.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group cursor-pointer">
                Explore Courses
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-950 border border-neutral-200 rounded-2xl font-bold text-lg hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000" 
                alt="Computer Education" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-neutral-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-950 font-display">5,000+</div>
                  <div className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Students Trained</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-20">
            <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm font-display">Professional Learning</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight font-display">Our Specialized Courses</h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-neutral-50 rounded-3xl border border-neutral-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {course.icon}
                </div>
                <span className="block mb-2 text-xs font-bold text-indigo-600 uppercase tracking-widest">{course.tag}</span>
                <h3 className="text-xl font-bold text-slate-950 mb-4 font-display">{course.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-6 h-24">{course.description}</p>
                <button className="flex items-center gap-2 text-indigo-600 font-bold group-hover:gap-3 transition-all">
                  Course Details <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Banner */}
      <section id="about" className="py-20 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-6 text-white text-lg font-medium">
              <div className="bg-white/10 p-3 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                {feature.icon && <div className="text-indigo-400">{feature.icon}</div>}
              </div>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Typing Student" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-950 tracking-tight font-display">Why ECG is the Best Choice for Your Career</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Award className="w-7 h-7 text-indigo-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-950 mb-2 font-display">Recognized Certification</h4>
                  <p className="text-neutral-600 leading-relaxed">Our certificates are valid for state and central govt. job applications.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Clock className="w-7 h-7 text-indigo-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-950 mb-2 font-display">Flexible Timings</h4>
                  <p className="text-neutral-600 leading-relaxed">Early morning and evening batches available for students and working professionals.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <BookOpen className="w-7 h-7 text-indigo-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-950 mb-2 font-display">Practical Learning</h4>
                  <p className="text-neutral-600 leading-relaxed">Hands-on experience with modern systems and real-world accounting examples.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section id="contact" className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-sm border border-neutral-200">
              <h3 className="text-3xl font-bold text-slate-950 mb-8 font-display">Send us an Inquiry</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-500 uppercase">Your Name</label>
                  <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-600 transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-500 uppercase">Phone Number</label>
                  <input type="tel" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-600 transition-colors" placeholder="6361977049" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-neutral-500 uppercase">Select Course</label>
                  <select className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-600 transition-colors appearance-none">
                    <option>Typewriting (English/Tamil)</option>
                    <option>COA (Office Automation)</option>
                    <option>Tally Prime & GST</option>
                    <option>Stenography</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-neutral-500 uppercase">Message</label>
                  <textarea rows={4} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-600 transition-colors" placeholder="Your questions..."></textarea>
                </div>
                <button className="md:col-span-2 bg-indigo-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 cursor-pointer">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-indigo-900 rounded-3xl p-10 text-white space-y-12 shadow-2xl relative overflow-hidden">
               <div className="space-y-8 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-nowrap font-display">Visit Our Center</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10 h-fit">
                      <MapPin className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-200 font-bold uppercase mb-1 tracking-widest">Main Location</p>
                      <p className="text-lg leading-relaxed">Near Arun Ice Cream, <br />Pennagaram, Tamil Nadu</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10 h-fit">
                      <Phone className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-200 font-bold uppercase mb-1 tracking-widest">Contact Phone</p>
                      <p className="text-lg">+91 63619 77049</p>
                      <p className="text-lg">+91 98426 67285</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10 h-fit">
                      <Mail className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-200 font-bold uppercase mb-1 tracking-widest">Email Address</p>
                      <p className="text-lg text-nowrap">info@vasancomputer.com</p>
                    </div>
                  </div>
                </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <span className="text-white font-bold text-2xl tracking-tighter uppercase font-display">ECG</span>
              </div>
              <span className="text-2xl font-bold tracking-tight font-display">ECG EDUCATION</span>
            </div>
            <p className="text-indigo-200/80 leading-relaxed italic">வாசன் கணினி பயிற்சி</p>
            <p className="text-indigo-200/60 leading-relaxed text-sm">Providing high-quality vocational computer training and skill development in Pennagaram since 2010.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-display text-indigo-400">Courses</h4>
            <ul className="space-y-4 text-indigo-200/60 font-medium">
              <li>English Typing</li>
              <li>Tamil Typing</li>
              <li>COA Training</li>
              <li>Stenography</li>
              <li>Tally Prime</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-display text-indigo-400">Institute</h4>
            <ul className="space-y-4 text-indigo-200/60 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Catalog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-display text-indigo-400">Follow Us</h4>
            <div className="flex gap-4">
               <div className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-indigo-900 transition-all cursor-pointer">
                 <Facebook className="w-5 h-5" />
               </div>
               <div className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-indigo-900 transition-all cursor-pointer">
                 <Instagram className="w-5 h-5" />
               </div>
               <div className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-indigo-900 transition-all cursor-pointer">
                 <Linkedin className="w-5 h-5" />
               </div>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-white/5 text-center text-indigo-200/40 text-sm font-medium">
          <p>© 2026 ECG Typewriting and Computer Education (Vasan Computer). All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}


