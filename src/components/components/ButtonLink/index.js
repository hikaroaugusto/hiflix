import React from 'react';

function ButtonLink(props){
    //props => {um objeto que traz várias coisas que vamos pegar do componente}
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

//Chaves é quando queremos colocar um código javascript dentro do nosso html, que está dentro do
//javascript rs

export default ButtonLink;