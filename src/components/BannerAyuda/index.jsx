import iconCustomer from '../../assets/Customer-desktop.svg'

function BannerAyuda() {
    return (
        <div className="main__container__bannerAyuda">
            <div className="main__container__bannerAyuda__customer">
                <img src={iconCustomer}></img>
            </div>
            <div className="main__container__bannerAyuda__text">
                <h3>¿Tenés dudas acerca de tu reserva? <span>Estamos para ayudarte</span></h3>
                <p>Si ya realizaste tu compra y tenés alguna consulta, no dudes en comunicarte con nuestros especialistas en viajes vía WhatsApp al <span>11 4960 8454</span>.</p>
            </div>
        </div>
    );
}
export default BannerAyuda;