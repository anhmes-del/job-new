import { useState } from 'react';
import Layout from '../components/Layout';
import ScoreGauge from '../components/ScoreGauge';
import { useAuth } from '../hooks/useAuth';
import api from '../lib/api';

export default function CVDiagnostic() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await api.post('/candidate/cv-diagnostic', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResult(res.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="section-title gradient-text">CV Diagnostic</h1>
          <p className="section-subtitle">
            Upload your resume and get instant AI-powered feedback
          </p>
        </div>

        <div className="card mb-8">
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-indigo-400 transition-colors duration-300">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="text-6xl mb-4">📄</div>
              <p className="text-lg text-gray-600 mb-2">
                {file ? file.name : 'Click to upload your resume'}
              </p>
              <p className="text-sm text-gray-400">PDF, DOCX supported</p>
            </label>
          </div>
          
          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Analyzing...' : 'Analyze Resume'}
          </button>
        </div>

        {result && (
          <div className="card animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">Analysis Results</h2>
            <div className="flex justify-center mb-8">
              <ScoreGauge score={result.ats_score} />
            </div>
            {result.issues?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">Issues Found:</h3>
                <ul className="space-y-2">
                  {result.issues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <span className="text-red-500">⚠️</span>
                      <span className="text-gray-700">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}