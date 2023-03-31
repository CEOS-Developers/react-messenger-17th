import styled from "styled-components";

const Alert = () => {
  return (
    <Wrapper>
      <div>{"다음 과제에서 만나요 :)"}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 30%);
  border-radius: 0.5rem;

  div {
    margin-top: 3rem;
    width: 60%;
    height: 1rem;
    padding: 0.5rem;
    text-align: center;
    border-radius: 1rem;
    // color: white;
    background-color: var(--light-blue-tag);
  }
`;

export default Alert;
