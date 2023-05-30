import ButtonModalLink from "../Button";

const ContainerContactos = () => {
    return (
        <div className="main__container__ContainerContactos col-md-4 col-xs-12">
            <div className="main__container__ContainerContactos__title">
                <div className="main__container__ContainerContactos__title__icon">

                </div>
                <div className="main__container__ContainerContactos__title__number">
                    <p>Ventas</p>
                    <h3>0800 348 0003</h3>
                </div>
            </div>
            <div>
                <p>Lunes a viernes de 10 a 20 hs Sábados de 10 a 15 hs</p>
                <span>Llamá al número en pantalla para que nuestros especialistas te asesoren con tu compra.</span>
            </div>
            <ButtonModalLink/>
        </div>
    )
}
export default ContainerContactos;