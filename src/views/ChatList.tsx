import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ChatListComponent from '../components/chat/ChatListComponent';
function Members(): JSX.Element {
  return (
    <>
      <Header name = "상담목록"/>
      <ChatListComponent/>
      <Footer name = "상담목록"/>
    </>
  )
}

export default Members;