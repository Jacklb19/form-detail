import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen justify-center items-center grid bg-gray-100">
      <main className="rounded-2xl shadow-2xl flex flex-col m-8 bg-white w-[550px]">
        
        <div className="m-5">
          <h1 className="font-bold text-xl text-gray-800">Appearance</h1>
          <p className="text-gray-400">
            Set or customize your preferences for the system
          </p>
        </div>

        <div className="border border-gray-200 mx-4"></div>

        <div className="m-5 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-gray-800">Language</h1>
            <p className="text-gray-400">
              Select the language of the platform
            </p>
          </div>
          <div className="relative border rounded-2xl px-4 py-2 flex items-center justify-between w-40">
            <p className="text-gray-600">English</p>
            <svg
              className="h-4 w-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="border border-gray-200 mx-4"></div>

        <div className="m-5">
          <h1 className="font-bold text-gray-800">Interface theme</h1>
          <p className="text-gray-400 mb-3">
            Customize your application appearance
          </p>
          <div className="flex gap-14 items-center justify-center">
            <div className="px-4 py-3 flex flex-col items-center w-28">
              <div className="border rounded-xl w-34 h-26 bg-gradient-to-r from-purple-200 to-purple-400"></div>
              <p className="text-gray-600 mt-2">Auto</p>
            </div>
            <div className="px-4 py-3 flex flex-col items-center w-28">
              <div className="relative border-2 border-purple-600 rounded-xl w-34 h-26 bg-white shadow">
                <div className="absolute bottom-1 left-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  ✓
                </div>
              </div>
              <p className="text-purple-600 mt-2">Light</p>
            </div>
            <div className="px-4 py-3 flex flex-col items-center w-28">
              <div className="border rounded-xl w-34 h-26 bg-gray-800"></div>
              <p className="text-gray-600 mt-2">Dark</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 mx-4"></div>

        <div className="m-5 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-gray-800">Accent color</h1>
            <p className="text-gray-400 mb-3">
              Pick your platform&apos;s main color
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
            <div className="w-6 h-6 bg-green-400 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
          </div>
        </div>

        <div className="border border-gray-200 mx-4"></div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">✨</span>
              <p className="text-gray-800">Reduce motion</p>
            </div>
            <div className="w-11 h-6 bg-purple-500 rounded-full flex items-center p-1">
              <div className="w-4 h-4 bg-white rounded-full translate-x-5"></div>
            </div>
          </div>
          <div className="border border-gray-200 mx-4"></div>
          <div className="flex justify-between items-center px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">▶️</span>
              <p className="text-gray-800">Auto play</p>
            </div>
            <div className="w-11 h-6 bg-purple-500 rounded-full flex items-center p-1">
              <div className="w-4 h-4 bg-white rounded-full translate-x-5"></div>
            </div>
          </div>
          <div className="border border-gray-200 mx-4"></div>
          <div className="flex justify-between items-center px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">🖼️</span>
              <p className="text-gray-800">High quality photo</p>
            </div>
            <div className="w-11 h-6 bg-gray-300 rounded-full flex items-center p-1">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 mx-4"></div>

        <div className="m-5 flex justify-between items-center">
          <button className="text-gray-500">Reset to default</button>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border border-gray-300 text-gray-600">
              Cancel
            </button>
            <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 text-white">
              Save Preferences
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
