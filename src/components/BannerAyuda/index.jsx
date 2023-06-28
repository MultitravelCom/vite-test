import ButtonModalLink from '../Button';
import './style.css';

function BannerAyuda() {
    return (
        <div className="main__container__bannerAyuda">
            <div className="main__container__bannerAyuda__customer">
                <img src="https://raw.githubusercontent.com/MultitravelCom/vite-test/main/public/Customer-desktop.svg"></img>
            </div>
            <div className="main__container__bannerAyuda__text">
                <h3>Tem dúvidas sobre a sua reserva? <span>Estamos aqui para ajudá-lo</span></h3>
                <p>Se você já fez sua compra e tem alguma dúvida, não hesite em entrar em contato com nossos especialistas em viagens pelo WhatsApp<span> XX XXXX XXXX</span>.</p>
            </div>
            <ButtonModalLink text="Enviar mensagem" style="styleBtn__BannerAyuda" link="1149608454" callToPhone={false} contactType="whatsapp" />
        </div>
    );
}
export default BannerAyuda;