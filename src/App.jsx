import BannerAyuda from "./components/BannerAyuda";
import BannerTop from "./components/BannerTop";
import ContainerContactos from "./components/ContainerContactos";

function App() {
  return (
    <>
      <div className="main__container__contactos">
        <BannerTop />
        <div className="main__container__contactos__body container">
          <div className="main__container__contactos__BannerAyuda">
            <BannerAyuda />
          </div>
          <div className="main__container__contactos__BannerAyuda__title">
            <div className="main__container__contactos__BannerAyuda__title__h2">
              <h2>Eu escolhi o canal mais conveniente para você</h2>
            </div>
            <div className="main__container__contactos__BannerAyuda">
              <ContainerContactos
                img={
                  "https://raw.githubusercontent.com/MultitravelCom/vite-test/gh-pages/telefono.svg"
                }
                title={"Ventas"}
                number={"XXXX XXX XXXX"}
                p_text={"De segunda a sexta das 10h às 20h. Sábados das 10h às 15h."}
                span_text={
                  "Ligue para o número na tela para que nossos especialistas possam aconselhá-lo em sua compra."
                }
                class_color={"class_color_blue"}
                class_color_background={"class_color_background_blue"}
                text_btn={"Llamar"}
                link="XXXX XXX XXXX"
                callToPhone={false}
                contactType="whatsapp"
                borderRadius={"border-container-left"}
              />
              <ContainerContactos
                img={
                  "https://raw.githubusercontent.com/MultitravelCom/vite-test/gh-pages/wsp.svg"
                }
                title={"consultas para venda"}
                number={"XX XXXX XXXX"}
                p_text={
                  "De segunda a sexta-feira das 20h00 às 10h00. Sábados das 15h00 às 10h00."
                }
                span_text={
                  "Deixe-nos a sua questão e entraremos em contacto durante o nosso horário de expediente."
                }
                class_color={"class_color_green"}
                class_color_background={"class_color_background_green"}
                text_btn={"Enviar mensagem"}
                link="XX XXXX XXXX"
                callToPhone={false}
                contactType="whatsapp"
                borderRadius={"border-container-center"}
              />
              <ContainerContactos
                img={
                  "https://raw.githubusercontent.com/MultitravelCom/vite-test/gh-pages/Mail.svg"
                }
                title={"Consultas"}
                number={"xxxx@xxxxxxxxx.xxxx"}
                p_text={
                  "Entre em contato com nossos especialistas 24 horas por dia"
                }
                span_text={
                  "Envie-nos sua dúvida por e-mail e responderemos o mais breve possível."
                }
                class_color={"class_color_black"}
                class_color_background={"class_color_background_black"}
                text_btn={"Enviar email"}
                link="info@multitravel.com"
                callToPhone={false}
                contactType="email"
                borderRadius={"border-container-right"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
