import styled from 'styled-components';
import userList from '../../json/users.json';
import { useState } from 'react';

const NotSearch = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  const handleModal = (userId: number) => {
    setIsModal(true);
    setModalId(userId);
  };

  return (
    <Container>
      {isModal ? (
        <Modal modalId={modalId}>
          <div
            className="modal-user"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + `/images/${modalId + 10}.jpg`
              })`,
              backgroundSize: 'cover',
            }}
          >
            <Modalmage src={`/images/${modalId}.jpg`} />
            <ModalName>{userList[modalId].userName}</ModalName>
            <ModalMessage>{userList[modalId].userMessage}</ModalMessage>
          </div>
          <RemoveModal onClick={() => setIsModal(false)}>{'x'}</RemoveModal>
        </Modal>
      ) : (
        <></>
      )}
      {userList.map((user, index) => (
        <>
          {index == 0 ? (
            <>
              <User onClick={() => handleModal(user.userId)}>
                <MyImage src={`/images/${user.userId}.jpg`} />
                <div className="text">
                  <MyName>{user.userName}</MyName>
                  <Message>{user.userMessage}</Message>
                </div>
              </User>
              <Line>
                <div>{'친구(6)'}</div>
              </Line>
            </>
          ) : (
            <User onClick={() => handleModal(user.userId)}>
              <PartImage src={`/images/${index}.jpg`} />
              <div className="text">
                <PartName>{user.userName}</PartName>
                <Message>{user.userMessage}</Message>
              </div>
            </User>
          )}
        </>
      ))}
    </Container>
  );
};
const Modal = styled.div<{ modalId: number }>`
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: absolute;

  .modal-user {
    display: block;
    width: 14rem;
    height: 20rem;
    margin: 8rem 0 0 1.4rem;
    text-align: center;
  }
`;
const Modalmage = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 1rem;
  margin: 12.3rem 0 0 0;
`;
const ModalName = styled.div`
  font-size: 1rem;
  color: white;
`;
const ModalMessage = styled.div`
  font-size: 0.8rem;
  color: white;
`;
const RemoveModal = styled.button`
  height: 1rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  color: rgb(69 68 68);
  margin: 6rem 0 0 15rem;

  :hover {
    color: rgb(229 229 229);
    cursor: pointer;
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const User = styled.div`
  display: flex;
  align-items: center;

  :hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  .text {
    display: block;
    margin: 1.1rem 0 0 0.5rem;
    height: 3rem;
  }
`;
const MyImage = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 1.2rem;
`;
const MyName = styled.div`
  font-size: 1rem;
`;
const Message = styled.div`
  font-size: 0.75rem;
  padding: 0.2rem 0 0 0.1rem;
  color: #4d4d4d;
`;
const Line = styled.div`
  border-top: 1px solid #cccccc;
  margin: 0.2rem 1rem 0 1rem;

  div {
    font-size: 0.7rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
`;
const PartImage = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 2.7rem;
  width: 2.7rem;
  border-radius: 1rem;
`;
const PartName = styled.div`
  font-size: 0.85rem;
`;
export default NotSearch;
