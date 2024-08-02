export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100
    md:bg-green-100 h-screen flex items-center justify-center p-5 ">
      <div className="bg-white shadow-lg p-5 
      rounded-3xl w-full max-w-screen-sm flex
      flex-col md:flex-row gap-2 ">
        <input 
          className="w-full rounded-full h-10
          bg-gray-200 pl-5 outline-none ring
          ring-transparent focus:ring-orange-500
          focus:ring-offest-2 transition-shadow"
          type="text"
          placeholder="Search here..." 
        />
        <button className="bg-black bg-opacity-50 text-white py-2
        rounded-full active:scale-90 focus:scale-90
        transition-transform font-medium 
        outline-none md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
