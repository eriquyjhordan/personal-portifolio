import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-size: 62.5%;
        @media (max-width: 1080px){
            font-size: 56.25%;
        }
        @media (max-width: 720px){
            font-size: 50%;
        }
        
    }
    body{
        background-color: #f5f5f5;
    }
    #root{
        margin:0 auto;
    }
 `;
