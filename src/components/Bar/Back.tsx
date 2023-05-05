import {IoIosArrowBack} from "react-icons/io";

const backStyle = {
    color: 'white',
    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.3))',
    fontSize: '30px',
    cursor: 'pointer'
  }

const goBack = () => {
    window.history.go(-1);
  }
  

  function Back(){
    return(
          <IoIosArrowBack style={backStyle} onClick={goBack}/>
    );
}

export default Back;