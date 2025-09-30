const AgentTable = ({
  agents,
  sliceStart = 0,
  sliceEnd = 6,
  searchId,
  agentRefs,
}) => {
  return (
    <table
      className="text-white font-extrabold text-center table-fixed border-collapse
     border border-gray-300  mx-auto w-full"
    >
      <thead>
        <tr>
          <th
            className="border border-gray-400 bg-[#2b2922] md:w-[10%]  w-[10%] md:text-[14px]
           md:align-middle align-top  py-2 text-center text-[12px]"
          >
            ID <br className="md:hidden block" />{" "}
            <br className="md:hidden block" /> NO
          </th>
          <th
            className="border border-gray-400 bg-[#2b2922] md:w-[17%] w-[18%] md:text-[14px]
           md:align-middle align-top  py-2 text-center text-[12px]"
          >
            AGENT TYPE
          </th>
          <th
            className="border border-gray-400 bg-[#2b2922] md:w-[20%] w-[22%] md:text-[14px]
           md:align-middle align-top  py-2 text-center text-[12px]"
          >
            SITE
          </th>
          <th
            className="border border-gray-400 bg-[#2b2922] md:w-[22%] w-[30%] md:text-[14px]
           md:align-middle align-top  py-2 text-center text-[12px]"
          >
            PHONE <br className="md:hidden block" />{" "}
            <br className="md:hidden block" /> NUMBER
          </th>
          <th
            className="border border-gray-400 bg-[#2b2922] md:w-[16%] w-[24%] md:text-[14px]
           md:align-middle align-top  py-2 text-center text-[12px]"
          >
            COMPLAIN
          </th>
        </tr>
      </thead>
      <tbody>
        {agents.slice(sliceStart, sliceEnd).map((agent, rowIndex) => (
          <tr
            key={agent.id}
            ref={agentRefs.current[agent.id]?.ref} // Assign ref from the dictionary
            className={`text-center ${
              rowIndex % 2 === 0 ? "bg-[#2b2922]" : "bg-[#2b2922]"
            } ${searchId === agent.id.toString() ? "bg-yellow-300" : ""}`}
          >
            <td className="text-[12px] md:text-[14px] border border-gray-400 py-2">
              <a href={agent.link} target="_blank" rel="noopener noreferrer">
                {agent.id}
              </a>
            </td>
            <td className="text-[12px] md:text-[14px] border border-gray-400">
              <a href={agent.link} target="_blank" rel="noopener noreferrer">
                {agent.agent} এজেন্ট
              </a>
            </td>
            {/* <td className="text-[12px] md:text-[1 6px] border border-gray-400 ">
              || VELKI ✅
            </td> */}
            <td className="font-semibold text-[12px] md:text-[14px] border border-gray-400 ">
              <a href={agent.link} target="_blank" rel="noopener noreferrer">
                {(rowIndex + 1) % 5 === 0
                  ? "|| VELKI BAJIWALA ✅"
                  : "|| VELKI ✅"}
              </a>
            </td>

            <td className="text-[12px] md:text-[14px] border border-gray-400  text-white text-center">
              <a href={agent.link} target="_blank" rel="noopener noreferrer">
                {agent.phone}
              </a>
            </td>
            <td className="text-[12px] md:text-[14px] border border-gray-400 text-white">
              <a
                href={agent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp- link"
              >
                {agent.complain}
              </a>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AgentTable;
