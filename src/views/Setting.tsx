import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SettingComponent from '../components/setting/Setting';
function Setting(): JSX.Element {

  return (
    <>
      <Header name = "설정"/>
      <SettingComponent/>
      <Footer name = "설정"/>
    </>
  )
}

export default Setting;