import Layout from '../components/Layout';

export default function Dashboard() {
  const stats = [
    { label: 'CV Score', value: '85%', color: 'from-green-400 to-emerald-500' },
    { label: 'Applications', value: '24', color: 'from-blue-400 to-indigo-500' },
    { label: 'Interviews', value: '8', color: 'from-purple-400 to-pink-500' },
    { label: 'Offers', value: '2', color: 'from-yellow-400 to-orange-500' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6 animate-fade-in">
        <h1 className="section-title gradient-text">Dashboard</h1>
        <p className="text-gray-600 mb-8">Track your job search progress</p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="card hover:transform hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                <span className="text-white text-xl">📊</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {['Applied to Senior Developer at TechCorp', 'CV Diagnostic completed', 'Interview scheduled with StartupX'].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { label: 'Upload New CV', href: '/cv-diagnostic', color: 'bg-indigo-600' },
                { label: 'Optimize for ATS', href: '/ats-optimizer', color: 'bg-purple-600' },
                { label: 'Practice Interview', href: '/interview-copilot', color: 'bg-blue-600' },
              ].map((action, i) => (
                <a key={i} href={action.href} className={`block ${action.color} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300`}>
                  {action.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}