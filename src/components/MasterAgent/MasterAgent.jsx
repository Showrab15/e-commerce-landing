import { createRef, useEffect, useRef, useState } from "react";
import useAgents from "./../../hooks/useAgents";
import HeaderForm from "./../HeaderForm/HeaderForm";
import EightTable from "./EightTable";
import EleventhTable from "./EleventhTable";
import FifthTable from "./FifthTable";
import FirstTable from "./FirstTable";
import FourthTable from "./FourthTable";
import NinthTable from "./NithTable";
import SecondTable from "./SecondTable";
import SeventhTable from "./SeventhTable";
import SixthTable from "./SixthTable";
import Tenth from "./TenthTable";
import ThirdTable from "./ThirdTable";
import TweleveTable from "./TweleveTable";

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
      <h1 className="mt-6  text-2xl md:text-4xl font-medium text-center text-white">
        এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
      </h1>

      <HeaderForm onSearch={handleSearch} />
      <div className="mt-10 py-4 border-[1px] mx- md:mx-14">
        <SeventhTable searchId={searchId} agentRefs={agentRefs} />
        <EightTable searchId={searchId} agentRefs={agentRefs} />
        <NinthTable searchId={searchId} agentRefs={agentRefs} />

        <ThirdTable searchId={searchId} agentRefs={agentRefs} />
        <FourthTable searchId={searchId} agentRefs={agentRefs} />
        <FifthTable searchId={searchId} agentRefs={agentRefs} />
        <SixthTable searchId={searchId} agentRefs={agentRefs} />
        <SecondTable searchId={searchId} agentRefs={agentRefs} />

        <Tenth searchId={searchId} agentRefs={agentRefs} />
        <FirstTable searchId={searchId} agentRefs={agentRefs} />
        <EleventhTable searchId={searchId} agentRefs={agentRefs} />
        <TweleveTable searchId={searchId} agentRefs={agentRefs} />
      </div>
    </>
  );
}
