export default function RightBanner() {
  return (
    <div className="text-white border-l-[1px] h-full   border-dotted">
      <div className="px-4 md:px-6 bg-[#2b2922]  text-white rounded-lg max-w-md mx-auto">
        <form className="space-y-4 border-2 border-white rounded-lg p-3">
          <label className="block text-sm font-semibold  text-white mb-2">
            Search
          </label>
          <div className="flex">
            <input
              type="text"
              className="bg-[#2b2922] text-white block w-3/5 py-4 px-3 border 
              shadow-sm focus:outline-none sm:text-sm"
            />
            <button
              type="submit"
              className="w-2/5 bg-[#ffb80c] text-black font-semibold py-4 px-4 rounded-m d shadow 
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Recent News */}
      <div className="px-4 md:px-6 py-2">
        <h6 className="text-xl font-normal mb-2">Recent Posts</h6>
        <hr className="border-dotted " />
        <hr className="border-dotted mt-1 mb-8 " />
        <ul>
          <li className="my-4  cursor-pointer hover:text-red-400">
            এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন
          </li>
          <hr className="border-dotted " />
          <li className="my-4  cursor-pointer hover:text-red-400">
            কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?
          </li>
          <hr className="border-dotted " />
          <li className="my-4  cursor-pointer hover:text-red-400">
            ভেল্কি সাইট
          </li>
          <hr className="border-dotted " />
          <li className="my-4  cursor-pointer hover:text-red-400">
            একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
          </li>
          <hr className="border-dotted " />
          <li className="my-4  cursor-pointer hover:text-red-400">
            WINPBU তে কিভাবে লেনদেন করবেন?
          </li>
        </ul>
      </div>

      {/* Recent Comments */}
      <div className=" p-4 md:p-6">
        <h6 className="text-xl font-normal mb-2 ">Recent Comments</h6>
        <hr className="border-dotted " />
        <hr className="border-dotted mt-1 mb-4 " />
        <ul>
          <li>No comments to show.</li>
        </ul>
      </div>
    </div>
  );
}
