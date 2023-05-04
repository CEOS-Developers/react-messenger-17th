import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import FriendsComponent from '../components/friends/Friends';
function Members(): JSX.Element {

  return (
    <>
      <Header name = "친구"/>
      <FriendsComponent/>
      <Footer name = "친구"/>
    </>
  )
}

export default Members;