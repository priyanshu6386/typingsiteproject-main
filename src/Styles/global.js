
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
*{
    box-sizing: border-box;
}

body{
    background : ${({theme})=>theme.background};
    color:  ${({theme})=>theme.title};
    padding: 0;
    margin: 0;
    transition: all 0.25s linear;
}

.canvas{
    display: grid;
    min-height: 100vh;
    gap: 0.5rem;
    padding: 1rem;
    width: 100vw;
    text-align: center;
    align-items: center;
}

.type-box{
    display: block;
    max-width: 1000px;
    height: 129px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.words{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-size: 30px;
    color : ${({theme})=>theme.typeBoxText}
}

.word{
    margin: 4px;
    padding-right: 2px
}

.hidden-input{
    opacity: 0;

}

.current{
    border-left: 1px solid;
    animation: blinking 2s infinite;
    @keyframes blinking{
        0% {border-left-color: white;}
        25% {border-left-color: black;}
        50% {border-left-color: white;}
        75% {border-left-color: black;}
    }
}

.correct{
    color: green;
}

.incorrect{
    color: red;
}
    
.upper-menu{
    display: flex;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    font-size:  1.5rem;
    padding:  0.5rem
}

.modes{
    display:flex;
}

.mode{
    margin-right: 7px;
}

.mode:hover{
    color: green;
    cursor: pointer;
}

.footer{
    display: flex;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
}


`