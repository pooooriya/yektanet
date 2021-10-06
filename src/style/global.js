import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.TaskContainer{
    display: flex;
    flex-direction: column;
    padding:50px;
    input{
        margin-top:10px;
        padding:5px 10px;
    }
    select{
        padding:5px;
    }
  
    lable{
        margin-top:10px;
        margin-bottom: 2px;
    }
    button{
        margin-top: 20px;
    }
}
`;
