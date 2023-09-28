import { useState } from "react";
import "./app.scss";
import Welcome from "./components/Welcome";
import Checklist from "./components/Checklist";
import Webdesign from "./components/Webdesign";
import Header from "./components/Header";
import "../src/images/menu-aberto.png";

function App() {
  const [mainmenu, setMainmenu] = useState(true);
  const [checklist, setChecklist] = useState(false);
  const [webdesign, setWebdesign] = useState(false);

  const toggle = () => {
    const sid = document.getElementById("sidebar");
    if (sid.style.display == "none") {
      sid.style.display = "block";
    } else {
      sid.style.display = "none";
    }
  };

  return (
    <>
      <main>
        
        <img
          src="../src/images/menu-aberto.png"
          id="toggleSidebar"
          onClick={() => {
            toggle();
          }}
        ></img>
        <section id="sidebar" className="cor">
          <h1 id="categorias">Categorias</h1>
          <button
            className="bt-sidebar"
            onClick={() => {
              setMainmenu(false);
              setChecklist(true);
              setWebdesign(false);
            }}
          >
            Check List
          </button>

          <button
            className="bt-sidebar"
            onClick={() => {
              setMainmenu(false);
              setChecklist(false);
              setWebdesign(true);
            }}
          >
            Web Design
          </button>
        </section>

        <section id="main">
          <Header setMainmenu="setMainmenu" />
          {mainmenu && <Welcome />}
          {checklist && <Checklist />}
          {webdesign && <Webdesign />}
        </section>
      </main>
    </>
  );
}

export default App;
