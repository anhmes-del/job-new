import { useState } from 'react';
import Layout from '../components/Layout';
import ScoreGauge from '../components/ScoreGauge';
import { useAuth } from '../hooks/useAuth';
import api from '../lib/api';

export default function CVDiagnostic() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState(null);
  const { token } = useAuth();

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const res = await api.post('/candidate/cv-diagnostic', formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setResult(res.data);
  };

  return (
    <Layout>
      <div className="p-6 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">CV Diagnostic</h1>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button onClick={handleUpload} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          Analyze
        </button>
        {result && (
          <div className="mt-6">
            <ScoreGauge score={result.ats_score} />
            <div className="mt-4">
              <h3 className="font-semibold">Issues:</h3>
              <ul>{result.issues.map((issue, i) => <li key={i}>⚠️ {issue}</li>)}</ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}