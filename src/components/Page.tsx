function TableOfContents() {
  return (
    <nav className="bg-slate-100 rounded-lg p-4">
      <h3 className="font-bold text-lg mb-3 text-gray-800">Table of Contents</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">• Introduction to React</li>
        <li className="hover:text-blue-600 cursor-pointer">• Understanding Components</li>
        <li className="hover:text-blue-600 cursor-pointer">• Working with JSX</li>
        <li className="hover:text-blue-600 cursor-pointer">• Props and State</li>
      </ul>
    </nav>
  );
}

export default function Page() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn React</h2>
      <TableOfContents />
      <p className="mt-6 text-gray-600">
        The TableOfContents component above is nested inside the Page component,
        demonstrating how React components can be composed together.
      </p>
    </div>
  );
}
