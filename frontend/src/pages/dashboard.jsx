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
      <div className="container-max section-padding">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Bảng điều khiển </span>
            <span className="gradient-gold">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300">Theo dõi tiến trình tìm việc của bạn</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="card-dark hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                <span className="text-yellow-400 text-xl">📊</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-dark">
            <h3 className="text-xl font-bold mb-4 text-white">Hoạt động gần đây</h3>
            <div className="space-y-3">
              {['Applied to Senior Developer at TechCorp', 'CV Diagnostic completed', 'Interview scheduled with StartupX'].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card-dark">
            <h3 className="text-xl font-bold mb-4 text-white">Hành động nhanh</h3>
            <div className="space-y-3">
              {[
                { label: 'Upload New CV', href: '/cv-diagnostic', color: 'bg-indigo-600' },
                { label: 'Optimize for ATS', href: '/ats-optimizer', color: 'bg-purple-600' },
                { label: 'Practice Interview', href: '/interview-copilot', color: 'bg-blue-600' },
              ].map((action, i) => (
                <a key={i} href={action.href} className="block bg-yellow-400 text-gray-900 p-4 rounded-lg hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 font-bold">
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