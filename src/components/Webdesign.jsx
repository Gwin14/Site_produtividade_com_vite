import "./webdesign.scss";

export default function Webdesign() {
  const aleatorio = () => {
    const corAleatoria1 = Math.floor(Math.random() * 255);
    const corAleatoria2 = Math.floor(Math.random() * 255);
    const corAleatoria3 = Math.floor(Math.random() * 255);

    const corAleatoria4 = Math.floor(Math.random() * 255);
    const corAleatoria5 = Math.floor(Math.random() * 255);
    const corAleatoria6 = Math.floor(Math.random() * 255);

    const bordas = document.querySelectorAll(".bordas");
    for (let i = 0; i < bordas.length; i++) {
      bordas[
        i
      ].style.borderColor = `rgb(${corAleatoria1}, ${corAleatoria2}, ${corAleatoria3})`;
    }

    const texto = document.querySelectorAll(".texto");
    for (let i = 0; i < texto.length; i++) {
      texto[
        i
      ].style.color = `rgb(${corAleatoria4}, ${corAleatoria5}, ${corAleatoria6})`;
    }
  };

  return (
    <>
      <section id="parteDeAleatorizar">
        <h1 className="texto">
          Clique
          <span href="" className="texto" onClick={() => aleatorio()}>
            aqui
          </span>
          para aleatorizar as cores do seu design
        </h1>
        <form action="" id="ale-form">
          <fieldset id="ale-fieldset" className="bordas">
            <legend id="ale-legend" className="texto">
              Faça seu login
            </legend>
            <div id="container">
              <div id="image">
                <img
                  src="https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Pic.png"
                  alt="Foto de perfil"
                />
              </div>
              <label htmlFor="" className="texto">
                Nome de usuário
              </label>
              <br />
              <input type="text" className="bordas" /> <br />
              <label htmlFor="" className="texto">
                Senha (até 8 dígitos)
              </label>
              <br />
              <input type="text" className="bordas" />
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}
