import { createRef, useEffect, useRef, useState } from "react";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import useAgents from "./../../hooks/useAgents";
import HeaderForm from "./../HeaderForm/HeaderForm";
import FirstTable from "./FirstTable";

export default function MasterAgent() {
  const [agents] = useAgents();
  const [searchId, setSearchId] = useState("");

  // Create a dictionary of refs based on agent IDs
  const agentRefs = useRef({});

  const MasterAgent = agents.filter((item) => item.type === "master-agent");

  // Populate refs dictionary with agent IDs on initial load or agent updates
  useEffect(() => {
    MasterAgent.forEach((agent) => {
      if (!agentRefs.current[agent.id]) {
        agentRefs.current[agent.id] = { ref: createRef() };
      }
    });
  }, [MasterAgent]);

  const handleSearch = (id) => {
    setSearchId(id);
    const targetElement = agentRefs.current[id]?.ref.current;

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <>
      <HeaderTitle />

      <HeaderForm onSearch={handleSearch} />
      <div className="mt-6 sm:mt-0  md:mx-14">
        <FirstTable searchId={searchId} agentRefs={agentRefs} />
      </div>
    </>
  );
}
