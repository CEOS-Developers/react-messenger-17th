// import styled from "styled-components";
// import userData from "../../json/userData.json"

// const Modal = ({userId}: {userId: number}) => {
//     const user = userData.users.find((u) => u.id === userId);
//     return (
//       <ModalWrapper>
//             <ModalImage>
//               <img src={user?.profileImage}/>
//             </ModalImage>
//             <ModalName>{user?.name}</ModalName>
//             <ModalMessage>{user?.message}</ModalMessage>
//       </ModalWrapper>
//     );
//   };
// export default Modal;

import styled from "styled-components";
import userData from "../../json/userData.json"

interface ModalProps {
  userId: number;
  closeModal: () => void;
}

const Modal = ({ userId, closeModal }: ModalProps) => {
  const user = userData.users.find((u) => u.id === userId);

  return (
    <ModalOverlay>
      <ModalWrapper>
        <button onClick={closeModal}>X</button>
        <ModalContent>
          <ProfileImg>
            <img src={user?.profileImage}></img>
          </ProfileImg>
          <h1 style={{marginBottom: "5px"}}>{user?.name}</h1>
          <h3>{user?.message}</h3>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 3.5rem;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 20rem;
  height: 30em;
  background-color: #B5C9FF;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;


const ProfileImg = styled.div`
  width: 10rem;
  object-fill: cover;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 25%;
  }
`;
