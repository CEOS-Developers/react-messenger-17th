import { memo } from "react";
import { userInterface } from "../../types/interfaces";
import styled from "styled-components";
import { Close } from "../icons/Close";

interface ProfileModalProps {
  userInfo: userInterface;
  isProfileModal: boolean;
  setIsProfileModal: (value: boolean) => void;
}

const ProfileModal = ({
  userInfo,
  isProfileModal,
  setIsProfileModal,
}: ProfileModalProps) => {
  return (
    <Dialog isProfileModal={isProfileModal}>
      <IconWrapper onClick={() => setIsProfileModal(false)}>
        <Close width={10} height={10} color="white" />
      </IconWrapper>
      <img src={userInfo.profileImage} alt="프로필 사진"></img>
      <span>{userInfo.userName}</span>
      <Status>{userInfo.statusMessage}</Status>
    </Dialog>
  );
};

const Dialog = styled.dialog<{ isProfileModal: boolean }>`
  visibility: ${(props) => (props.isProfileModal ? "visible" : "hidden")};
  width: 90%;
  height: ${(props) => (props.isProfileModal ? "95%" : "0")};
  top: ${(props) => (props.isProfileModal ? "50%" : "100%")};
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  color: white;
  background-color: #848b91;
  opacity: 0.95;
  transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1);

  img {
    visibility: ${(props) => (props.isProfileModal ? "visible" : "hidden")};
    width: 10rem;
    height: ${(props) => (props.isProfileModal ? "10rem" : "0")};
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid gray;
    margin: 1rem 0;
    transition: all 300ms cubic-bezier(0.86, 0, 0.07, 1);
  }

  span {
    visibility: ${(props) => (props.isProfileModal ? "visible" : "hidden")};
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

export default memo(ProfileModal);
