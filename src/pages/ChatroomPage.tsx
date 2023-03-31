import { Link } from "react-router-dom";

import chatData from "../json/chatRoom.json";
import { getRoomMembers } from "../common/Custom";
import { ProfileImage } from "../common/StyledComponent";

const ChatroomPage = () => {
  const chatrooms = chatData.rooms;

  return (
    <div>
      {chatrooms.map((room) => (
        <Link to={`/chatrooms/${room.roomId}`}>
          <div>
            시작 페이지는 다음 과제에..! :)
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatroomPage;