import { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import api from '../lib/api';

export default function JobEvaluator() {
  const [jdText, setJdText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const handleEvaluate = async () => {
    if (!jdText.trim()) return;
    setLoading(true);
    try {
      const res = await api.post('/candidate/job-evaluator/evaluate', 
        { jd_text: jdText },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResult(res.data);
    } catch (error) {
      console.error('Evaluation failed:', error);
    }
    setLoading(false);
  };

  const getScoreColor = (score) => {
    if (score >= 4.5) return 'text-green-500';
    if (score >= 4.0) return 'text-blue-500';
    if (score >= 3.5) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="section-title gradient-text">AI Job Evaluator</h1>
          <p className="section-subtitle">
            Paste a job description for A-F evaluation with legitimacy check
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Job Description</h3>
            <textarea
              className="input-field h-64 resize-none mb-4"
              placeholder="Paste the job description here..."
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
            />
            <button
              onClick={handleEvaluate}
              disabled={!jdText.trim() || loading}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? 'Evaluating...' : 'Evaluate Job'}
            </button>
          </div>

          {result && (
            <div className="card animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Evaluation Results</h3>
                <div className={`text-4xl font-bold ${getScoreColor(result.global_score)}`}>
                  {result.global_score}/5
                </div>
              </div>

              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold">Archetype:</span> {result.archetype}
              </div>

              <div className="mb-4">
                <h4 className="font-bold mb-2">Recommendation</h4>
                <p className="text-gray-700">{result.recommendation}</p>
              </div>

              {result.block_b && (
                <div className="mb-4">
                  <h4 className="font-bold mb-2">CV Match Score: {result.block_b.cv_match_score}/5</h4>
                  {result.block_b.gaps?.length > 0 && (
                    <div>
                      <p className="font-semibold text-sm mb-1">Gaps:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {result.block_b.gaps.map((gap, i) => <li key={i}>{gap}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}