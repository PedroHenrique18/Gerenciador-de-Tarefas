import styled, {keyframes} from 'styled-components';

interface ITagProps {
    completed: boolean;


}

const animate = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }

    100%{
        transform: translateX(0px);
        opacity: 1;
    }


`;

export const Container = styled.li<ITagProps>`
    background-color: ${(props) => (props.completed ? 'green' : 'red')};
    color:#fff;
    list-style: none;
    border-radius: 10px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-between;


    
    transition: all .3s;

    position: relative;

    animation: ${animate} 0.5s ease;

    &:hover{
        opacity: .7;
        transform: translate(10px);
    }

    


    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        

        padding-left: 10px;
    }

    > div span {
        font-size: 22px;
        font-weight:500;
    }


`;