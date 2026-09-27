export default function ContributionGraph({ data }: { data: { date: string; count: number }[] }) {
  const max = Math.max(...data.map(d => d.count), 1);
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Contributions</h3>
      <div className="flex gap-1 items-end h-24">
        {data.slice(-30).map((d, i) => (
          <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${(d.count / max) * 100}%` }} title={`${d.date}: ${d.count} commits`}/>
        ))}
      </div>
    </div>
  );
}
