import styled from "styled-components";

interface DropdownMenuProps {
  coords: { x: number; y: number };
  menuList: string[];
  handleMenuClick: (value: string) => void;
}

const DropdownMenu = ({
  coords,
  menuList,
  handleMenuClick,
}: DropdownMenuProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMenuClick(e.currentTarget.innerText);
  };

  return (
    <Wrapper x={coords.x} y={coords.y}>
      {menuList.map((menu) => {
        return (
          <Menu key={menu} onClick={handleClick}>
            {menu}
          </Menu>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ x: number; y: number }>`
  position: fixed;
  left: ${(props) => props.x + 10}px;
  top: ${(props) => props.y}px;
  background-color: white;
  border: 1px solid var(--gray-font);
`;

const Menu = styled.div`
  padding: 0.5rem 1rem;
  font-size: small;
  cursor: pointer;
  &:hover {
    background-color: var(--light-gray-tag);
  }
`;

export default DropdownMenu;
