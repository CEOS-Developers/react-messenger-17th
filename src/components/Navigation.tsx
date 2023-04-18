import { useNavigate } from "react-router-dom";
// components
import { User } from "./icons/User";
import { Speech } from "./icons/Speech";
import { Setting } from "./icons/Setting";
// styles
import styled from "styled-components";

interface NavProps {
  menu: string;
}

const Navigation = ({ menu }: NavProps) => {
  const navigate = useNavigate();
  const COLOR = "#ACADB1";
  const SELECTED_COLOR = "#343740";

  return (
    <Wrapper>
      <Tab title="친구" onClick={() => navigate(`/friends`)}>
        {menu === "friends" ? (
          <User width={24} height={24} color={SELECTED_COLOR} />
        ) : (
          <User width={24} height={24} color={COLOR} />
        )}
      </Tab>
      <Tab title="채팅" onClick={() => navigate(`/chattings`)}>
        {menu === "chattings" ? (
          <Speech width={24} height={24} color={SELECTED_COLOR} />
        ) : (
          <Speech width={24} height={24} color={COLOR} />
        )}
      </Tab>
      <Tab title="더보기" onClick={() => navigate(`/setting`)}>
        {menu === "setting" ? (
          <Setting width={24} height={24} color={SELECTED_COLOR} />
        ) : (
          <Setting width={24} height={24} color={COLOR} />
        )}
      </Tab>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-width: 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: var(--gray-tag);
`;

const Tab = styled.div`
  margin-top: 2rem;
  cursor: pointer;
`;

export default Navigation;
