export default function RepoList({ repos }: { repos: any[] }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Repositories</h3>
      <div className="space-y-3">
        {repos.map(repo => (
          <div key={repo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="font-semibold text-blue-600 hover:underline">{repo.name}</a>
              <p className="text-sm text-gray-500">{repo.description}</p>
            </div>
            <div className="flex gap-3 text-sm text-gray-500">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">{repo.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
