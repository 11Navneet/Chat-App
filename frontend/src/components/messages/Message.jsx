import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { MdDeleteOutline } from "react-icons/md";

const Message = ({ message }) => {
  // const [modalOpen, setModalOpen] = useState(false);
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  // const handleContextMenu = (e) => {
  //   e.preventDefault(); // Prevent the default context menu from appearing
  //   setModalOpen(!modalOpen);
  // };

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
        style={{whiteSpace: "pre-wrap", wordWrap: "break-word", overflowWrap: "break-word", maxWidth: "150px"}}
        // onContextMenu={handleContextMenu}
        // tabIndex={0}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-80 text-xs flex gap-1 items-center text-white">
        {formattedTime}
      </div>
      {/* {modalOpen && (
        <>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-neutral-950 rounded-box w-25"
          >
            <li>
              <MdDeleteOutline />
            </li>
            <li>
              <a>Copy Message</a>
            </li>
          </ul>
        </>
      )} */}
    </div>
  );
};
export default Message;
