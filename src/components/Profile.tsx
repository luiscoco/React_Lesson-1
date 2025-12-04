export default function Profile() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md max-w-sm">
      <img
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
        alt="Profile"
      />
      <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Katherine Johnson</h3>
      <p className="text-center text-gray-600 text-sm">
        Mathematician and space scientist who calculated trajectories for NASA missions
      </p>
    </div>
  );
}
