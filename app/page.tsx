import { getTranslations } from 'next-intl/server';
import {
  ArrowRight,
  Construction,
  HardHat,
  ShieldCheck,
  Users,
  Building2,
  Briefcase,
  Target,
  Trophy
} from 'lucide-react';
import Image from 'next/image';

export default async function Home() {
  const t = await getTranslations('Home');

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-neutral-900/60" />

        {/* Placeholder for Background Image/Video */}
        <div className="absolute inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="container relative z-10 px-6 mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Engineering the <span className="text-blue-500">Foundation</span> <br />
            of Tomorrow
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-10 leading-relaxed">
            Delivering innovative geotechnical solutions and engineering excellence for global infrastructure projects. We turn technical challenges into sustainable realities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2 group">
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all border border-white/30">
              View Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="py-24 bg-white dark:bg-neutral-900">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                Our Identity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Decades of Engineering Precision and Innovation
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Founded with a vision to redefine geotechnical engineering, Al-Bashir Modern International has grown into a leading force in the construction sector. We combine deep technical expertise with state-of-the-art technology to provide solutions that are both robust and efficient.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Our team consists of industry veterans and innovators who specialize in complex terrain analysis, foundation design, and sustainable infrastructure development. Every project we undertake is a testament to our commitment to safety, quality, and client satisfaction.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">Precision</h4>
                    <p className="text-sm text-neutral-500">Digtial terrain mapping</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">Reliability</h4>
                    <p className="text-sm text-neutral-500">ISO Certified Safety</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
              <div className="aspect-[4/3] rounded-xl bg-neutral-200 dark:bg-neutral-800 overflow-hidden shadow-2xl transition-all duration-300">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO SECTION */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-800/50">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              Core Expertise & Specialized Services
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              We provide a comprehensive suite of geotechnical and engineering services tailored to meet the rigorous demands of modern construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Geotechnical Investigation",
                desc: "Comprehensive soil analysis and site characterization to ensure groundwork stability.",
                icon: HardHat
              },
              {
                title: "Foundation Design",
                desc: "Expert structural engineering for deep and shallow foundations in complex environments.",
                icon: Building2
              },
              {
                title: "Site Engineering",
                desc: "Precise engineering support for large-scale industrial and commercial developments.",
                icon: Construction
              },
              {
                title: "Quality Monitoring",
                desc: "Rigorous material testing and seismic monitoring for project longevity.",
                icon: ShieldCheck
              },
              {
                title: "Project Management",
                desc: "End-to-end oversight ensuring timelines, budget, and safety protocols are met.",
                icon: Briefcase
              },
              {
                title: "Infrastructure Support",
                desc: "Specialized solutions for roads, bridges, and underground utility networks.",
                icon: Target
              }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-100 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group shadow-sm hover:shadow-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center rounded-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE / STATS SECTION */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        {/* Subtle geometric pattern placeholder */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:40px_40px]" />

        <div className="container px-6 mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { label: "Years of Excellence", value: "25+", icon: Trophy },
              { label: "Completed Projects", value: "850+", icon: Building2 },
              { label: "Global Clients", value: "120+", icon: Users },
              { label: "Awards Won", value: "15+", icon: Target }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-3 bg-white/5 rounded-full mb-6 group-hover:bg-blue-600 transition-colors">
                  <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{stat.value}</div>
                <div className="text-neutral-400 font-medium uppercase text-sm tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-[2rem] bg-blue-600 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">
              Ready to build the foundation for your next project?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Contact our expert engineering team today for a comprehensive consultation and geotechnical assessment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <button className="px-10 py-5 bg-white text-blue-600 hover:bg-neutral-100 font-bold rounded-xl transition-all shadow-lg hover:scale-105">
                Contact Our Team
              </button>
              <button className="px-10 py-5 bg-blue-700/50 hover:bg-blue-700 text-white font-bold rounded-xl transition-all border border-blue-400/30">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
