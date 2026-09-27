import { useState } from 'react';
import UserProfile from '../components/UserProfile';
import RepoList from '../components/RepoList';
import ContributionGraph from '../components/ContributionGraph';

export default function Home() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [contributions, setContributions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const search = async () => {
    setLoading(true); setError('');
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`/api/github/user?username=${username}`),
        fetch(`/api/github/repos?username=${username}&per_page=12`)
      ]);
      if (!userRes.ok) throw new Error('User not found');
      setUser(await userRes.json());
      setRepos(await reposRes.json());
      const contribRes = await fetch(`/api/github/contributions?username=${username}`);
      if (contribRes.ok) setContributions(await contribRes.json());
    } catch (e: any) { setError(e.message); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">DevFinder</h1>
        <div className="flex gap-2 mb-8">
          <input className="flex-1 border rounded-lg px-4 py-2" placeholder="Enter GitHub username" value={username} onChange={e=>setUsername(e.target.value)} onKeyDown={e=>e.key==='Enter'&&search()}/>
          <button onClick={search} disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50">Search</button>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {user && <UserProfile user={user} />}
        {contributions.length > 0 && <ContributionGraph data={contributions} />}
        {repos.length > 0 && <RepoList repos={repos} />}
      </div>
    </div>
  );
}
