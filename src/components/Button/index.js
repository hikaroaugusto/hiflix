import styled from "styled-components";

//Com o & estou referenciando o botão
//Quase tudo que funciona com o sass funciona com o css

//Para conseguir ver bem eh necessario usar a lib vscode-styled-component
const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
`;

export default Button;