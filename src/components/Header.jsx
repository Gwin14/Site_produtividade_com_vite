import { useEffect, useState } from "react";
import "./header.scss";

export default function Header() {
  const [modoEscuro, setModoEscuro] = useState(false);

  useEffect(() => {
    aplicarEstilosModoEscuro();
  });

  const aplicarEstilosModoEscuro = () => {
    if (modoEscuro) {
      const letras = document.querySelectorAll("h1,p,h2,label,legend");
      for (let i = 0; i < letras.length; i++) {
        letras[i].style.color = "#ffffff";
      }
      const fundo = document.querySelectorAll("main, #sidebar, #main");
      for (let i = 0; i < fundo.length; i++) {
        fundo[i].style.backgroundColor = "#25182e";
        fundo[i].style.borderColor = "#ffffff";
      }
      const cabeca = document.querySelectorAll("#header");
      for (let i = 0; i < cabeca.length; i++) {
        cabeca[i].style.borderBottom = "2px solid #ffffff";
      }
      const sidebar = document.querySelectorAll(".bt-sidebar, #categorias");
      for (let i = 0; i < sidebar.length; i++) {
        sidebar[i].style.borderBottom = "1px solid #ffffff";
        sidebar[i].style.color = "#ffffff";
      }
    } else {
      const letras = document.querySelectorAll("h1,p,h2,label,legend");
      for (let i = 0; i < letras.length; i++) {
        letras[i].style.color = "#25182e";
      }
      const fundo = document.querySelectorAll("main, #sidebar, #main");
      for (let i = 0; i < fundo.length; i++) {
        fundo[i].style.backgroundColor = "#ffffff";
        fundo[i].style.borderColor = "#25182e";
      }
      const cabeca = document.querySelectorAll("#header");
      for (let i = 0; i < cabeca.length; i++) {
        cabeca[i].style.border = "none";
      }
      const sidebar = document.querySelectorAll(".bt-sidebar, #categorias");
      for (let i = 0; i < sidebar.length; i++) {
        sidebar[i].style.borderBottom = "1px solid #25182e";
        sidebar[i].style.color = "#25182e";
      }
    }
  };

  return (
    <nav id="header">
      <a href="" id="inicio" onClick={location.reload}>
        Início
      </a>
      <a href="#" id="sobre">
        Sobre
      </a>

      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          setModoEscuro(!modoEscuro);
        }}
      >
        <circle
          cx="185.671"
          cy="183.812"
          r="65.625"
          fill="#ffbe00"
          class="fill-000000"
        ></circle>
        <path
          d="M185.67 87.562a13.126 13.126 0 0 0 13.126-13.125V52.562a13.125 13.125 0 1 0-26.25 0v21.875a13.126 13.126 0 0 0 13.125 13.125ZM99.051 115.752a13.124 13.124 0 1 0 18.56-18.56l-15.467-15.466a13.124 13.124 0 0 0-18.56 18.56ZM89.42 183.812a13.126 13.126 0 0 0-13.124-13.125H54.42a13.125 13.125 0 0 0 0 26.25h21.875a13.126 13.126 0 0 0 13.125-13.125ZM99.051 251.873l-15.466 15.47a13.124 13.124 0 1 0 18.56 18.56l15.466-15.47a13.124 13.124 0 1 0-18.56-18.56ZM185.67 280.062a13.126 13.126 0 0 0-13.124 13.125v21.875a13.125 13.125 0 0 0 26.25 0v-21.875a13.126 13.126 0 0 0-13.125-13.125ZM272.29 251.873a13.124 13.124 0 1 0-18.56 18.56l15.467 15.47a13.124 13.124 0 1 0 18.56-18.56ZM330.046 183.812a13.126 13.126 0 0 0-13.125-13.125h-21.875a13.125 13.125 0 0 0 0 26.25h21.875a13.126 13.126 0 0 0 13.125-13.125ZM263.01 119.597a13.082 13.082 0 0 0 9.28-3.845l15.467-15.466a13.124 13.124 0 1 0-18.56-18.56l-15.466 15.466a13.125 13.125 0 0 0 9.28 22.405ZM456.938 401.671a63.97 63.97 0 0 1-14.996 7.206c-19.645 6.528-41.88 2.956-58.144-9.852a68.931 68.931 0 0 1-10.835-10.834c-12.81-16.267-16.38-38.5-9.853-58.147a63.844 63.844 0 0 1 7.208-14.994 8.804 8.804 0 0 0-10.117-13.303 87.519 87.519 0 1 0 110.037 110.04 8.8 8.8 0 0 0-13.3-10.116Z"
          fill="#ffbe00"
          class="fill-000000"
        ></path>
      </svg>
    </nav>
  );
}
