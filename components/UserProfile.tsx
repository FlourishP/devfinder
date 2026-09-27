export default function UserProfile({ user }: { user: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex items-start gap-6">
      <img src={user.avatar_url} alt={user.name} className="w-24 h-24 rounded-full border-4 border-blue-100"/>
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
        <p className="text-gray-500 mb-2">@{user.login}</p>
        <p className="text-gray-700 mb-3">{user.bio}</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>📍 {user.location || 'N/A'}</span>
          <span>🔗 {user.blog || 'N/A'}</span>
          <span>🏢 {user.company || 'N/A'}</span>
        </div>
        <div className="flex gap-6 mt-4 text-sm">
          <span><strong>{user.public_repos}</strong> repos</span>
          <span><strong>{user.followers}</strong> followers</span>
          <span><strong>{user.following}</strong> following</span>
        </div>
      </div>
    </div>
  );
}
