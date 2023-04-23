import { userInterface } from "../interfaces/interface";
import styled from "styled-components";
import { Close } from "./icons/Close";

interface ProfileModalProps {
  userInfo: userInterface;
  setIsProfileModal: (value: boolean) => void;
}

const ProfileModal = ({ userInfo, setIsProfileModal }: ProfileModalProps) => {
  return (
    <Dialog>
      <IconWrapper onClick={() => setIsProfileModal(false)}>
        <Close width={10} height={10} color="white" />
      </IconWrapper>
      <img src={userInfo.profileImage} alt="프로필 사진"></img>
      <span>{userInfo.userName}</span>
      <Status>{userInfo.statusMessage}</Status>
    </Dialog>
  );
};

const Dialog = styled.dialog`
  width: 90%;
  height: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  color: white;
  background-color: #848b91;
  opacity: 0.95;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid gray;
    margin: 1rem 0;
  }

  span {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const IconWrapper = styled.div`
  margin: 0 0 auto auto;
  cursor: pointer;
`;

const Status = styled.span`
  font-size: 0.8rem;
  margin: 0.5rem 0 2rem 0;
`;

export default ProfileModal;
