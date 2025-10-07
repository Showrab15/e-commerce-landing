import { useState } from "react";

const HeaderForm = ({ onSearch }) => {
  const [agentType, setAgentType] = useState("Master Agent");
  const [agentId, setAgentId] = useState("");

  const handleAgentTypeChange = (e) => {
    setAgentType(e.target.value);
  };

  const handleAgentIdChange = (e) => {
    setAgentId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(agentId); // Call the onSearch prop with the entered agent ID
  };

  return (
    <div>
      <div className="mt-4 p-4 bg-[#2b2922]  text-white rounded-lg max-w-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border-2 border-white rounded-lg p-3"
        >
          <div>
            <label className="block text-sm font-medium  mb-2">
              Agent Type
            </label>
            <select
              value={agentType}
              onChange={handleAgentTypeChange}
              className="block w-full py-2 px-3 border bg-[#1e1e1e] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option>Master Agent</option>
              <option>Super Agent</option>
              <option>Sub Admin</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium  text-white mb-2">
              Agent ID
            </label>
            <input
              type="text"
              value={agentId}
              onChange={handleAgentIdChange}
              placeholder="Enter Agent ID"
              className="bg-[#1e1e1e] text-white block w-full py-2 px-3 border 
             rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className=" bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow 
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
      </div>
      {/* <div className="hidden md:block m-10 border-l-4 border-white h-full">
        <h3 className="text-white font-semibold text-base md:text-lg md:ml-4 ml-0">
          এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!{" "}
        </h3>{" "}
        <br />
        <h6 className="text-white font-semibold text-base md:text-lg md:ml-4 ml-0">
          **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন WINPBU.COM
          **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা
          যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। **এজেন্ট পাসোয়ার্ড পরিবর্তন করে
          দিলে – আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট
          যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই
          দিবেন না – সে যেই হউক না কেন। **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে
          কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার WINPBU নিবে না।
          **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে
          লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন
          করে সেহেতু এই তথ্য জানা জরুরী। **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে
          এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসঅ্যাপ নাম্বার
          আসবে – তাকে অভিযোগ করতে হবে।
        </h6>
      </div>
      <h3 className="md:hidden block text-white font-bold text-md ml-4">
        এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!{" "}
      </h3>{" "}
      <br />
      <h6 className="md:hidden block text-white font-bold text-md ml-4">
        **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন WINPBU.COM **হোয়াটসঅ্যাপ
        ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা
        গ্রহনযোগ্য হবে না। **এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে – আপনি একাউন্টে
        ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার
        পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না – সে যেই হউক না
        কেন। **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা
        পাঠায় – অই টাকার দায়ভার WINPBU নিবে না। **প্রতিবার এজেন্ট এর কাছ থেকে
        পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু
        এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। **এজেন্ট
        এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক
        করলে যে হোয়াটসঅ্যাপ নাম্বার আসবে – তাকে অভিযোগ করতে হবে।
      </h6> */}
    </div>
  );
};

export default HeaderForm;
