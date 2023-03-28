import styled from "styled-components";

interface ProfileProps {
  imageSrc: string;
  name: string;
}

const Profile = ({ imageSrc, name }: ProfileProps) => {
  return (
    <Wrapper>
      <img src={imageSrc} alt="profile"></img>
      <span>{name}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 5rem);
  padding: 0 0.5rem;
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    // border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 0.8rem;
    object-fit: cover;
    cursor: pointer;
  }

  span {
    width: calc(100% - 2.5rem);
    padding-left: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
    cursor: pointer;
  }
`;

export default Profile;
