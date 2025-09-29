/* eslint-disable react/prop-types */
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
    <div className="p-10 bg-gray-100 rounded-lg max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Agent Type
          </label>
          <select
            value={agentType}
            onChange={handleAgentTypeChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          >
            <option>Master Agent</option>
            <option>Super Agent</option>
            <option>Sub Admin</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Agent ID
          </label>
          <input
            type="text"
            value={agentId}
            onChange={handleAgentIdChange}
            placeholder="Enter Agent ID"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default HeaderForm;
