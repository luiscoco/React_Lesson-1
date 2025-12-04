import { BookOpen } from 'lucide-react';
import MyFirstComponent from './components/MyFirstComponent';
import Page from './components/Page';
import Profile from './components/Profile';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Learning React
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive guide to understanding React components
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Understanding React and the UI</h2>
              <p className="text-gray-600">React is a JavaScript library for building user interfaces. It lets you create components that are reusable pieces of UI.</p>
            </div>
            <MyFirstComponent />
          </section>

          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Components: UI Building Blocks</h2>
              <p className="text-gray-600">React lets you create custom tags that can be reused multiple times throughout your application.</p>
            </div>
            <Page />
          </section>

          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">3. Defining a Component</h2>
              <p className="text-gray-600">A React component is a JavaScript function that returns UI markup. This markup uses JSX, a syntax that looks like HTML but runs inside JavaScript.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Example Component</h3>
              <div className="flex justify-center mb-6">
                <Profile />
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Key Points About Components:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Component names must start with a capital letter (e.g., Profile, not profile)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Components are JavaScript functions that return JSX</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>JSX looks like HTML but has some differences (like className instead of class)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Multi-line JSX should be wrapped in parentheses</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Using a Component</h2>
              <p className="text-gray-600">Once a component is defined, you can use it inside another component to build complex UIs.</p>
            </div>
            <Gallery />
          </section>

          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">1.</span>
                <span>React components are reusable pieces of UI code</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">2.</span>
                <span>Components are JavaScript functions that return JSX</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">3.</span>
                <span>Components can be nested inside other components</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">4.</span>
                <span>You can reuse the same component multiple times</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
