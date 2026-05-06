export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="gradient-bg text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your AI-Powered
            <span className="block text-yellow-300">Career Operating System</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Transform your job search with AI-driven CV diagnostics, ATS optimization, 
            and personalized career insights.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center gradient-text">Powerful Features</h2>
          <p className="section-subtitle text-center">
            Everything you need to land your dream job
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'CV Diagnostic', desc: 'AI-powered resume analysis with actionable insights' },
              { title: 'ATS Optimizer', desc: 'Beat the applicant tracking systems' },
              { title: 'Interview Copilot', desc: 'Real-time interview preparation assistance' },
            ].map((feature, i) => (
              <div key={i} className="card hover:border-indigo-300 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}