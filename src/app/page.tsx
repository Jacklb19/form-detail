
export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-100">
      <main className="rounded-2xl shadow-2xl flex flex-col m-8 bg-white w-[550px] p-3">
        
        <header className="px-5 py-3">
          <h1 className="font-bold text-xl text-gray-800">Appearance</h1>
          <p className="text-gray-400">
            Set or customize your preferences for the system
          </p>
        </header>

        <hr className="border-gray-200 mx-4" />

        <section className="m-5 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-800">Language</h2>
            <p className="text-gray-400">Select the language of the platform</p>
          </div>
          <button className="relative border rounded-2xl px-4 py-2 flex items-center justify-between w-40">
            <span className="text-gray-600">English</span>
            <svg
              className="h-4 w-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </section>

        <hr className="border-gray-200 mx-4" />

        <section className="m-5">
          <h2 className="font-bold text-gray-800">Interface theme</h2>
          <p className="text-gray-400 mb-3">Customize your application appearance</p>
          <div className="flex gap-14 items-center justify-center">
            <div className="px-4 py-3 flex flex-col items-center w-28">
              <div className="border rounded-xl w-34 h-26 bg-gradient-to-r from-purple-200 to-purple-400"></div>
              <p className="text-gray-600 mt-2">Auto</p>
            </div>
            <div className="px-4 py-3 flex flex-col items-center w-28">
              <div className="relative border-2 border-purple-600 rounded-xl w-34 h-26 bg-white shadow">
                <span className="absolute bottom-1 left-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  ✓
                </span>
              </div>
              <p className="text-purple-600 mt-2">Light</p>
            </div>
            <div className="px-4 py-3 flex flex-col items-center w-28">
              <div className="border rounded-xl w-34 h-26 bg-gray-800"></div>
              <p className="text-gray-600 mt-2">Dark</p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 mx-4" />

        <section className="m-5 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-800">Accent color</h2>
            <p className="text-gray-400 mb-3">Pick your platform&apos;s main color</p>
          </div>
          <div className="flex gap-3">
            <span className="w-6 h-6 bg-pink-400 rounded-full"></span>
            <span className="w-6 h-6 bg-yellow-400 rounded-full"></span>
            <span className="w-6 h-6 bg-green-400 rounded-full"></span>
            <span className="w-6 h-6 bg-blue-400 rounded-full"></span>
            <span className="w-6 h-6 bg-purple-400 rounded-full"></span>
          </div>
        </section>

        <hr className="border-gray-200 mx-4" />

        <section className="flex flex-col">
          {[
            { icon: "✨", label: "Reduce motion", active: true },
            { icon: "▶️", label: "Auto play", active: true },
            { icon: "🖼️", label: "High quality photo", active: false },
          ].map(({ icon, label, active }, index) => (
            <div key={index}>
              <div className="flex justify-between items-center px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">{icon}</span>
                  <p className="text-gray-800">{label}</p>
                </div>
                <div
                  className={`w-11 h-6 rounded-full flex items-center p-1 ${
                    active ? "bg-purple-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transform transition ${
                      active ? "translate-x-5" : ""
                    }`}
                  ></div>
                </div>
              </div>
              {index < 2 && <hr className="border-gray-200 mx-4" />}
            </div>
          ))}
        </section>

        <hr className="border-gray-200 mx-4" />

        <footer className="m-5 flex justify-between items-center">
          <button className="text-gray-500">Reset to default</button>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border border-gray-300 text-gray-600">
              Cancel
            </button>
            <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 text-white">
              Save Preferences
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
