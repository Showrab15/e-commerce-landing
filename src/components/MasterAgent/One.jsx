import { useState,useEffect,useContext } from "react";
import useMasterAgents from "./../../hooks/useMasterAgents";
import { AuthContext } from './../../Providers/AuthProvider';
import useUsers from './../../hooks/useUsers';
export default function One() {
  const [agents, setAgents] = useMasterAgents(); // Get agents and setAgents
  const [isSaving, setIsSaving] = useState(false); // Track saving state
  const [whatsappLinks, setWhatsappLinks] = useState(["", "", "", ""]); // Manage WhatsApp links
  const [linksSaved, setLinksSaved] = useState(false); // Track if WhatsApp links are saved
  const [changesSaved, setChangesSaved] = useState(false); // Track if all changes are saved
  const masterAgentsApi = import.meta.env.VITE_masterAgentApi;
  // const whatsappLinkApi = import.meta.env.VITE_whatsappLinksApi;
  const [isAdmin, setIsAdmin] = useState(false);
  // https://wa.me/+12892779369
  // https://wa.me/+15798044647
  // https://wa.me/+17787433510
  // https://wa.me/+12892749371
  const { user } = useContext(AuthContext);
  const [users] = useUsers(); // Assuming this fetches all users from MongoDB


  useEffect(() => {
        if (user?.email) {
          const currentUser = users.find(
            (u) => u.email === user.email && u.role === "admin"
          );
          setIsAdmin(!!currentUser); // Set isAdmin based on role match
        }
      }, [user, users]);
    

     
    






  // Handle input change for WhatsApp links
  const handleInputChange = (index, value) => {
    setWhatsappLinks((prev) => {
      const updatedLinks = [...prev];
      updatedLinks[index] = value;
      return updatedLinks;
    });
  };

  // Save WhatsApp links to backend
  const saveWhatsAppLinks = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("https://velkii-server.vercel.app/api/whatsapp-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ links: whatsappLinks }),
      });

      if (response.ok) {
        alert("WhatsApp links saved successfully!");
        setLinksSaved(true);
      } else {
        alert("Failed to save WhatsApp links.");
      }
    } catch (error) {
      console.error("Error saving WhatsApp links:", error);
      alert("An error occurred while saving WhatsApp links.");
    } finally {
      setIsSaving(false);
    }
  };

  // Apply the WhatsApp links in sequence
  const applyWhatsAppLinks = () => {
    setAgents((prev) =>
      prev.map((agent, index) => ({
        ...agent,
        link: whatsappLinks[index % whatsappLinks.length], // Cycle through links
      }))
    );
  };

  // Save changes to the server
  const saveChanges = async () => {
    try {
      setIsSaving(true);

      const updateResults = await Promise.allSettled(
        agents.map((agent) =>
          fetch(`${masterAgentsApi}/${agent._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ link: agent.link }),
          })
        )
      );

      const failedUpdates = updateResults.filter(
        (result) => result.status === "rejected"
      );

      if (failedUpdates.length > 0) {
        alert("Some updates failed. Check console for details.");
        console.error("Failed updates:", failedUpdates);
      } else {
        alert("All changes saved successfully!");
        setChangesSaved(true); // Set changesSaved to true
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("An error occurred while saving changes.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <h4 className="mt-10 mb-10 text-[21px] md:text-[21px] font-bold text-center text-black">
EDIT ALL THE AGENTS LINK NUMBERS BY EASILY      </h4>




      {isAdmin && (
  <>
    {/* Admin Bulk Edit Controls */}
    {!linksSaved && (
      <>
        {whatsappLinks.map((link, index) => (
          <input
            key={index}
            type="text"
            value={link}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`WhatsApp Link ${index + 1}`}
            className="border p-2 m-2 w-80"
          />
        ))}
        <button
          onClick={saveWhatsAppLinks}
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded my-4"
        >
          Save WhatsApp Links
        </button>
      </>
    )}

    {linksSaved && !changesSaved && (
      <>
        <button
          onClick={applyWhatsAppLinks}
          className="bg-green-500 text-white px-4 py-2 rounded ml-4 my-4 "
        >
          Apply WhatsApp Links
        </button>
        <button
          onClick={saveChanges}
          className="bg-indigo-500 text-white px-4 py-2 rounded ml-4 my-4"
        >
          Save All Changes
        </button>
      </>
    )}

    {isSaving && (
      <div className="text-center mt-4 my-10">
        <span className="text-yellow-500 font-medium text-lg">Saving changes...</span>
      </div>
    )}
  </>
)}



     

      {/* Table */}
      <div className="p-4 flex flex-col justify-center items-center">
        <div className="w-full md:w-auto">
          <table className="font-extrabold table-fixed border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 md:px-2 md:py-2    md:text-[16px]   text-[8px] md:w-[25%] w-[20%] bg-[#fff6f3]">
                  ID NO
                </th>
                <th className="border border-gray-400 md:px-2 md:py-2   md:text-[16px]   text-[8px] md:w-[25%] w-[20%] bg-[#fff6f3]">
                  AGENT
                </th>
                <th className="border border-gray-400 md:px-2 md:py-2   md:text-[16px]   text-[8px] md:w-[50%] w-[40%] bg-[#fff6f3]">
                  APP
                </th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, index) => (
                <tr
                  key={agent.id}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-[#efefef]" : "bg-[#fff6f3]"
                  }`}
                >
                  <td className="border border-gray-300">{agent.id}</td>
                  <td className="border border-gray-300">
                    {agent.agent}
                  </td>
                  <td className="border border-gray-300">
                    <a
                      href={agent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline text-[10px] md:text-[16px]"
                    >
                      {agent.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
