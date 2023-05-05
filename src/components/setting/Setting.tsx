import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai';
function Setting(): JSX.Element {
    
  return (
    <SettingWrapper>
      <GithubIcon href= "https://github.com/westofsky">
        <AiFillGithub size = "50"/>
      </GithubIcon>
    </SettingWrapper>
  )
}

export default Setting;

const SettingWrapper = styled.div`
  height : 100%;
  display : flex;
  align-items: center;
  justify-content: center;
`
const GithubIcon = styled.a`
  text-decoration : none;
  color: black;
`