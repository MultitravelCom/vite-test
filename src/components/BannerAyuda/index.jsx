import ButtonModalLink from '../Button';
import './style.css';

function BannerAyuda() {
    return (
        <div className="main__container__bannerAyuda">
            <div className="main__container__bannerAyuda__customer">
                <img src="https://raw.githubusercontent.com/MultitravelCom/vite-test/main/public/Customer-desktop.svg"></img>
            </div>
            <div className="main__container__bannerAyuda__text">
                <h3>¿Tenés dudas acerca de tu reserva? <span>Estamos para ayudarte</span></h3>
                <p>Si ya realizaste tu compra y tenés alguna consulta, no dudes en comunicarte con nuestros especialistas en viajes vía WhatsApp al <span>11 4960 8454</span>.</p>
            </div>
            <ButtonModalLink text="Enviar mensaje" style="styleBtn__BannerAyuda" />
        </div>
    );
}
export default BannerAyuda;