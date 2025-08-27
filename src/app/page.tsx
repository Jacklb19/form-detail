import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen justify-center items-center grid bg-white">
      <main className="rounded-lg shadow-2xl flex flex-col m-8">

        <div className="m-5 justify-start">

          <h1 className="font-bold text-xl text-gray-800"> Appereance </h1>

          <p className="text-gray-400">
            Set or custimoze your preferences for the system
          </p>

        </div>
        
        
        <div className="border-t-2 border-gray-300 my-1 mx-4"></div>

        <div className="m-5 justify-star flex items-center gap-4">
          <div className="flex flex-col">
                      
            <h1 className="font-bold text-gray-800"> Language </h1>

            <p className="text-gray-400">
              Select the language of the platform 
            </p>
          </div>

          
          <div className="relative border-2 rounded-2xl px-4 py-2 flex items-center justify-between w-40 ml-20">
            <p className="text-gray-600 justify-star">English</p>

            <svg
              className="h-4 w-4 text-gray-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 my-1 mx-4"></div>
        
        <div className="m-5">
          <h1 className="font-bold text-gray-800"> Interface theme </h1>
          <p className="text-gray-400 mb-3">
            Customize your application appearance
          </p>

          <div className="flex gap-10 items-center justify-center">
            <div className=" px-4 py-3 flex flex-col items-center w-28">
              <div className="border-2 rounded-xl w-30 h-20 bg-gradient-to-r from-purple-200 to-purple-400 "></div>
              <p className="text-gray-600 mt-2">Auto</p>
            </div>

            <div className="rounded-xl px-4 py-3 flex flex-col items-center w-28">
              <div className="border-1 rounded-xl w-30 h-20 bg-white border-indigo-900 shadow shadow-indigo-700"></div>
              <p className="text-indigo-600 mt-2">Light</p>
            </div>

            <div className=" rounded-xl px-4 py-3 flex flex-col items-center w-28">
              <div className="border-2 rounded-xl w-30 h-20 bg-gray-800"></div>
              <p className="text-gray-600 mt-2">Dark</p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 my-1 mx-4"></div>

        <div className="m-4 flex items-center gap-4 ">

          <div>
            <h1 className="font-bold text-gray-800"> Accent color </h1>
            <p className="text-gray-400 mb-3">
              Pick your platform's main color
            </p>
          </div>

          <div className="flex gap-3 ml-20">
            <div className="w-6 h-6 bg-red-400 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
            <div className="w-6 h-6 bg-green-400 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 mx-4"></div>

        <div className="m-5 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-800">Reduce motion</p>
            <div className="w-10 h-5 bg-purple-500 rounded-full flex items-center">
              <div className="w-4 h-4 bg-white rounded-full ml-5"></div>
            </div>
          </div>

        <div className="border-t-2 border-gray-300 mx-4"></div>

          <div className="flex justify-between items-center">
            <p className="text-gray-800">Auto play</p>
            <div className="w-10 h-5 bg-purple-500 rounded-full flex items-center">
              <div className="w-4 h-4 bg-white rounded-full ml-5"></div>
            </div>
          </div>

        <div className="border-t-2 border-gray-300 mx-4"></div>

          <div className="flex justify-between items-center">
            <p className="text-gray-800">High quality photo</p>
            <div className="w-10 h-5 bg-gray-300 rounded-full flex items-center">
              <div className="w-4 h-4 bg-white rounded-full ml-1"></div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 my-1 mx-4"></div>

        <div className="m-5 flex justify-between">
          <button className="text-gray-500">Reset to default</button>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border-2 border-gray-300 text-gray-600">
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-600 text-white">
              Save Preferences
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
