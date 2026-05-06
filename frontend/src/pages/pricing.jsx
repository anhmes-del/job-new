export default function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', features: ['1 CV Diagnostic', 'Basic ATS Score', '3 Job Matches'] },
    { name: 'Pro', price: '$29', features: ['Unlimited CV Diagnostics', 'ATS Optimizer', 'Interview Copilot', 'Priority Support'], popular: true },
    { name: 'Executive', price: '$99', features: ['Everything in Pro', '1-on-1 Coaching', 'LinkedIn Branding', 'Salary Negotiation'] },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="section-title gradient-text">Simple, Transparent Pricing</h1>
          <p className="section-subtitle">Choose the plan that fits your career goals</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`card relative ${plan.popular ? 'ring-2 ring-indigo-600 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}<span className="text-lg text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}