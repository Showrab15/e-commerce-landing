// import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles
import message from "../../assets/message.png";
import "./Message.css";
const Message = () => {
  return (
    <div
      className="wpicon-animation bg-[#7d0096] rounded-full font-medium font-serif cursor-pointer 
  fixed right-[20px] bottom-[70px] md:bottom-[130px] md:right-[25px] flex
  gap-3 justify-center items-center p-1 hover:p-2"
    >
      <a
        href={`https://wa.me/+60183267235`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <img className="w-6 h-6" src={message} alt="" />
      </a>
    </div>
  );
};

export default Message;
