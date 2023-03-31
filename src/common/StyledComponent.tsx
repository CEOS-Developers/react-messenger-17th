import styled from "styled-components";

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  object-fit: cover;
  opacity: ${({ selected }: { selected?: boolean }) =>
    selected ? "50%" : "100%"};
`;

export { ProfileImage };