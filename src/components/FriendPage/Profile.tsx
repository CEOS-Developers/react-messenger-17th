import styled from "styled-components";
import { useState } from "react";
import { User } from "../../common/interface";
import Modal from "../FriendPage/Modal"

interface ProfileProps {
  users: User[];
}

const Profile = ({users} : ProfileProps) => {

    const [modal, setModal] = useState(false);
    const [modalUserId, setModalUserId] = useState<number | null>(null);

    const openModal = (userId: number) => {
      setModal(true);
      setModalUserId(userId);
    }

    const closeModal = () => {
      setModal(false);
      setModalUserId(null);
    }

    return (
        <div>
        {modal && modalUserId !== null && <Modal userId={modalUserId} closeModal={closeModal} />}
        {users.map(user => (
        <ProfileWrapper key={user.id}>
            <ProfileImg onClick={() => openModal(user.id)}>
                <img src={user.profileImage}></img>
            </ProfileImg>
            <ProfileInfo>
            <h3 style={{marginBottom: '0px'}}>{user.name}</h3>
            <p style={{marginTop: '5px'}}>{user.message}</p>
            </ProfileInfo>
        </ProfileWrapper>           
        ))}
        </div>
    );
  };
export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  gap: 15px;
  :hover {
    background-color: #ffecd8;
  }
`;

const ProfileImg = styled.div`
  width: 3rem;
  object-fill: cover;
  margin-left: 0.8rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid #D9D9D9;
    cursor: pointer;
  }
`;

const ProfileInfo = styled.div`
  font-size: 0.9rem;
  height: 6rem;
`;

