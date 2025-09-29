import wp from "../../assets/halal-whatsapp.png";

const AgentTable = ({
  agents,
  sliceStart = 0,
  sliceEnd = 6,
  searchId,
  agentRefs,
}) => {
  return (
    <table
      className="font-extrabold text-center table-fixed border-collapse border border-gray-300 
     mx-auto w-full"
    >
      <thead>
        <tr>
          <th
            className="border border-gray-400 bg-[#ffffff] md:w-[10%]  w-[10%] md:text-[12px]
           md:align-middle align-top  py-2 text-center text-[10px]"
          >
            ID <br className="md:hidden block" />{" "}
            <br className="md:hidden block" /> NO
          </th>
          <th className="border border-gray-400 bg-[#ffffff] md:w-[15%] w-[16%] md:text-[12px] md:align-middle align-top  py-2 text-center text-[10px]">
            AGENT TYPE
          </th>
          <th className="border border-gray-400 bg-[#ffffff] md:w-[18%] w-[12%] md:text-[12px] md:align-middle align-top  py-2 text-center text-[10px]">
            WHATSAPP Number
          </th>

          <th className="border border-gray-400 bg-[#ffffff] md:w-[20%] w-[38%] md:text-[12px] md:align-middle align-top  py-2 text-center text-[10px]">
            PHONE <br className="md:hidden block" />{" "}
            <br className="md:hidden block" /> NUMBER
          </th>
          <th className="border border-gray-400 bg-[#ffffff] md:w-[22%] w-[24%] md:text-[12px] md:align-middle align-top  py-2 text-center text-[10px]">
            GIVE COMPLAIN
          </th>
        </tr>
      </thead>
      <tbody>
        {agents.slice(sliceStart, sliceEnd).map((agent, rowIndex) => (
          <tr
            key={agent._id}
            ref={agentRefs.current[agent.id]?.ref} // Assign ref from the dictionary
            className={`text-center ${
              rowIndex % 2 === 0 ? "bg-[#ebf0f2]" : "bg-[#ffffff ]"
            } ${searchId === agent.id.toString() ? "bg-yellow-300" : ""}`}
          >
            <td className="text-[12px] md:text-[12px] border border-gray-400 py-2">
              <a
                href={agent.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {agent.id}
              </a>
            </td>
            <td className="text-[15px] md:text-[12px] border border-gray-400">
              <a
                href={agent.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {agent.agent}
              </a>
            </td>
            <td className="text-[15px] md:text-[12px] border border-gray-400  w-[10%]">
              <a
                href={agent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <img
                  style={{
                    fontSize: "12px", // Adjust the icon size
                    verticalAlign: "middle", // Ensure vertical alignment
                    padding: 0, // Remove unwanted padding
                    display: "inline-block", // Make icon inline within the table cell
                  }}
                  src={wp}
                  className="w-[25px] h-[25px] mx-auto -ml-1 md:-ml-0 flex justify-center"
                  alt="wp-icon"
                />
              </a>
            </td>

            <td className="text-[15px] md:text-[12px] border border-gray-400  text-[#b90000] text-center">
              <a
                href={agent.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {agent.phone}
              </a>
            </td>
            <td className="text-[15px] md:text-[12px] border border-gray-400 text-[#b90000]">
              <a
                href={agent.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {agent.complain}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AgentTable;
