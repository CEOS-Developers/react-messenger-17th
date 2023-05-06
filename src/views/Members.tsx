import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import FriendsComponent from '../components/friends/FriendList';
function Members(): JSX.Element {

	return (
		<>
			<Header name="상담원" />
			<FriendsComponent />
			<Footer name="상담원" />
		</>
	)
}

export default Members;