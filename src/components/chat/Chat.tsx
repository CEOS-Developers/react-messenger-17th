import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
import { useParams } from "react-router-dom";
function Main(): JSX.Element {
	const room = useParams();
	const roomId = Number(room.roomid!);

	return (
		<>
			<ChatHeader />
			<ChatContent roomid={roomId} />
			<ChatInput roomid={roomId} />
		</>
	)
}

export default Main;