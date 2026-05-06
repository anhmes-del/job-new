import Layout from '../components/Layout';

export default function AtsOptimizer() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="section-title gradient-text">ATS Optimizer</h1>
          <p className="section-subtitle">
            Optimize your resume for Applicant Tracking Systems
          </p>
        </div>
        
        <div className="card">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Paste Job Description</h3>
            <textarea
              className="input-field h-40 resize-none"
              placeholder="Paste the job description here to optimize your resume..."
            />
          </div>
          
          <button className="btn-primary w-full">
            Optimize Resume
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: 'Keyword Match', desc: 'See which keywords match', icon: '🔍' },
            { title: 'Missing Skills', desc: 'Identify skill gaps', icon: '📋' },
            { title: 'Score Boost', desc: 'Get improvement tips', icon: '🚀' },
          ].map((item, i) => (
            <div key={i} className="card text-center hover:border-indigo-300">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}