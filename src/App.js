import React from 'react';
import Menu from "./components/Menu";
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div style = {{background: "#141414"}}>
      <Menu/>
      

      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos.titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"O que é Front-End? Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />
    </div>
);}

export default App;

//Para não perder o que eu estava estudando

/*<h1>Hello World</h1>
      Alguma coisa ai no meio
      Update automático (Hot reload)
      JSX = Javascript XML
*/