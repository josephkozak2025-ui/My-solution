import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Target, Zap, Menu, X } from 'lucide-react';

export default function MomentumLanding() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      console.log('Email submitted:', email);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Momentum
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition">How It Works</a>
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
              <a href="#story" className="text-gray-600 hover:text-indigo-600 transition">Our Story</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition">Pricing</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#how-it-works" className="block text-gray-600 hover:text-indigo-600">How It Works</a>
              <a href="#features" className="block text-gray-600 hover:text-indigo-600">Features</a>
              <a href="#story" className="block text-gray-600 hover:text-indigo-600">Our Story</a>
              <a href="#pricing" className="block text-gray-600 hover:text-indigo-600">Pricing</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
            Built by someone who gets it
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop staring at blank pages.<br/>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Start making progress.
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If you're stuck in procrastination, drowning in self-doubt, or frozen by decisions—I've been exactly where you are. This platform is the system I wish I'd had.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-lg"
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>

          {submitted && (
            <p className="text-green-600 font-semibold animate-pulse">
              ✓ You're on the list! Check your email soon.
            </p>
          )}

          <p className="text-sm text-gray-500">
            Free 7-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            You're not lazy. You're just stuck.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl">
              <Clock className="text-red-500 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">The Procrastination Loop</h3>
              <p className="text-gray-600">
                You know what you need to do, but you can't start. Hours disappear. Guilt builds. Tomorrow, you promise yourself. Again.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <Target className="text-blue-500 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Decision Paralysis</h3>
              <p className="text-gray-600">
                Every choice feels overwhelming. You research endlessly, second-guess everything, and end up making no decision at all.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <Zap className="text-purple-500 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Self-Doubt Spiral</h3>
              <p className="text-gray-600">
                That voice in your head says you're not good enough, smart enough, ready enough. So you don't even try.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            A system that actually works
          </h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center md:text-left">
                <div className="inline-block bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3">Brain Dump & Clarity</h3>
                <p className="text-gray-600">
                  AI helps you untangle the chaos in your head. Get everything out, then organize it into what actually matters.
                </p>
              </div>
              <div className="md:w-2/3 bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic">"I need to study, but also finish that project, and my room is a mess, and..."</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-indigo-600 font-semibold mb-2">AI Response:</p>
                    <p className="text-sm text-gray-600">"Let's break this down. What has a deadline? What will take 5 minutes? What can wait?"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3 text-center md:text-left">
                <div className="inline-block bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3">Micro-Goals That Build</h3>
                <p className="text-gray-600">
                  No more "write essay." Instead: "Open document. Write one bad sentence." Momentum comes from tiny wins.
                </p>
              </div>
              <div className="md:w-2/3 bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg flex items-center gap-3 shadow-sm">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-gray-700">Open laptop ✓</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center gap-3 shadow-sm">
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-gray-700">Create new document ✓</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center gap-3 shadow-sm border-2 border-indigo-500">
                    <div className="w-6 h-6 rounded-full border-2 border-indigo-500"></div>
                    <span className="text-gray-700 font-semibold">Write one sentence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center md:text-left">
                <div className="inline-block bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3">Daily Check-Ins</h3>
                <p className="text-gray-600">
                  Morning intention. Evening reflection. The AI adapts to you, celebrates progress, and helps you course-correct.
                </p>
              </div>
              <div className="md:w-2/3 bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-2">Evening Check-In:</p>
                  <p className="text-gray-600 mb-4">You completed 2 of 3 goals today—that's real progress! What got in the way of the third?</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition">
                      Got distracted
                    </button>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition">
                      Too ambitious
                    </button>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition">
                      Lost motivation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Everything you need to break through
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'AI Coaching', desc: 'Context-aware guidance that understands your patterns and adapts to your struggles' },
              { title: 'Decision Framework', desc: 'Step-by-step tool to unstick yourself when choices feel impossible' },
              { title: 'Progress Tracking', desc: 'Visual momentum builder that shows how far you\'ve come, even on hard days' },
              { title: 'Accountability System', desc: 'Optional daily check-ins that keep you moving without feeling like pressure' },
              { title: 'Emergency Unstuck Mode', desc: 'Feeling paralyzed right now? Get immediate, actionable next steps' },
              { title: 'Community (Coming Soon)', desc: 'Connect with others who get it—share wins, struggles, and strategies' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why I built this
          </h2>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-12 rounded-2xl">
            <p className="text-lg text-gray-700 mb-4">
              I'm not a productivity expert or psychologist. I'm someone who spent months trapped in the cycle of knowing exactly what I needed to do but being completely unable to start.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              I tried every app, every method, every piece of advice. Nothing worked because nothing addressed the real problem: the fear, the overwhelm, the voice that said I'd fail anyway.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              So I built the system I needed—one that starts with compassion, breaks things into steps so small they feel impossible to fail, and celebrates every tiny win.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              If you're reading this and feeling stuck right now, I want you to know: it's not your fault, and there is a way through.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Simple, honest pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Free Trial</h3>
              <p className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-500">/7 days</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Full access to all features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>AI coaching & daily check-ins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>No credit card required</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
                Start Free Trial
              </button>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold mb-2">Full Access</h3>
              <p className="text-4xl font-bold mb-6">$19<span className="text-lg opacity-90">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Everything in free trial</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Unlimited AI conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Advanced progress insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Early access to new features</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition">
                Get Started Now
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            30-day money-back guarantee. If it doesn't help, you get a full refund—no questions asked.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to stop being stuck?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join people who are finally making progress on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-lg"
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Momentum
          </div>
          <p className="mb-6">Built with empathy for people who feel stuck.</p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
