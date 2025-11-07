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
      
    </div>
  );
};

export default HeaderForm;
