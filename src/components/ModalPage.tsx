import { useEffect, useRef } from "react";
import { User } from "../interfaces/Interface";
import styled from "styled-components";

const Background = styled.div`
background-color: rgba(0, 0, 0, 0.4);
height: 100%;
width: 100%;
z-index: 999;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
height:430px;
width: 300px;
border-radius: 10%;
background: white;
`;

const Image = styled.img`
height: 300px;
width: 300px;
border-radius: 10% 10% 0 0;
`;

const Text = styled.div`
display: flex;
height: 130px;
justify-content: center;
align-items: center;
`;

interface ModalProps{
    userId: number;
    users: User;
    setModalOpen: any;
}

function ModalPage({userId, users, setModalOpen}: ModalProps){
    const modalRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event: React.BaseSyntheticEvent | MouseEvent) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };
        
        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응
        
        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });

    return(
        <Background>
            <Content ref={modalRef}>
            <Image src={users.image}></Image>  
            <Text>{users.contents}</Text>
            </Content>
        </Background>
    );
}

export default ModalPage;