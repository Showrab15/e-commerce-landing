/* eslint-disable no-unused-vars */

import useMasterAgents from "../../hooks/useMasterAgents";
import AgentTable from "./AgentTable";
export default function FirstTable({ agentRefs, searchId }) {
  const [agents, setAgents, loading] = useMasterAgents(); // Get setAgents

  return (
    <div>
      <div className="md:p-0 p-4 flex flex-col justify-center items-center">
        <div className="w-full md:w-auto">
          <AgentTable
            agents={agents}
            sliceStart={0}
            sliceEnd={206}
            searchId={searchId}
            agentRefs={agentRefs}
          />
        </div>
      </div>
    </div>
  );
}
