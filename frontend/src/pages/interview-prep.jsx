import { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import api from '../lib/api';

export default function InterviewPrep() {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const handlePrep = async () => {
    if (!company || !role) return;
    setLoading(true);
    try {
      const res = await api.post('/interview-prep', 
        { company, role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResult(res.data);
    } catch (error) {
      console.error('Prep failed:', error);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="section-title gradient-text">Interview Co-pilot</h1>
          <p className="section-subtitle">
            Generate STAR+R stories and company-specific interview prep
          </p>
        </div>

        <div className="card mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                className="input-field"
                placeholder="e.g., Anthropic"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <input
                type="text"
                className="input-field"
                placeholder="e.g., Senior AI Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handlePrep}
            disabled={!company || !role || loading}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? 'Preparing...' : 'Generate Interview Prep'}
          </button>
        </div>

        {result && (
          <div className="card animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Interview Preparation</h3>
            {result.star_stories?.map((story, i) => (
              <div key={i} className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg mb-2">STAR Story {i+1}</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Situation:</span> {story.situation}</p>
                  <p><span className="font-semibold">Task:</span> {story.task}</p>
                  <p><span className="font-semibold">Action:</span> {story.action}</p>
                  <p><span className="font-semibold">Result:</span> {story.result}</p>
                  <p><span className="font-semibold">Reflection:</span> {story.reflection}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}