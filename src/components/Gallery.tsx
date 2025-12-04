import Profile from './Profile';

export default function Gallery() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Notable Scientists</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Profile />
        <Profile />
        <Profile />
      </div>
      <p className="mt-8 text-gray-600 text-center">
        Here we're using the same Profile component three times.
        This demonstrates component reusability in React!
      </p>
    </div>
  );
}
