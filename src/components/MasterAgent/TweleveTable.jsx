/* eslint-disable no-unused-vars */

import useMasterAgents from "../../hooks/useMasterAgents";
import AgentTable from "./AgentTable";

export default function TweleveTable({ agentRefs, searchId }) {
  const [agents, setAgents, loading] = useMasterAgents(); // Get setAgents

  return (
    <div>
      <h4 className="mt-4 mb-2 text-[15px] md:text-[21px] font-bold text-center text-black">
        সাব এডমিন 13 এর অধীনে সুপার এজেন্ট 218 এর অধীনে সর্বমোট মাস্টার এজেন্ট
        আছে 22 জন{" "}
      </h4>

      <div className="p-4 flex flex-col justify-center items-center">
        <div className="w-full md:w-auto">
          <AgentTable
            agents={agents}
            sliceStart={203}
            sliceEnd={210}
            searchId={searchId}
            agentRefs={agentRefs}
          />
        </div>
      </div>
    </div>
  );
}
