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
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">CV </span>
            <span className="gradient-gold">Diagnostic</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tải lên CV và nhận phản hồi tức thì từ AI
          </p>
        </div>

        <div className="card-dark mb-8">
          <div className="border-2 border-dashed border-navy-lighter rounded-2xl p-12 text-center hover:border-yellow-400 transition-colors duration-300">
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
            className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Analyzing...' : 'Analyze Resume'}
          </button>
        </div>

        {result && (
          <div className="card-dark animate-slide-up">
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