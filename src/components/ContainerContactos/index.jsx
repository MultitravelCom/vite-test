import ButtonModalLink from "../Button";

const ContainerContactos = ({ img, title, number, p_text, span_text, class_color, text_btn, class_color_background }) => {
    return (
        <div className="main__container__ContainerContactos col-md-4 col-xs-12">
            <div className={`main__container__ContainerContactos__title ${class_color}`}>
                <div className="main__container__ContainerContactos_text_icon">
                    <div className={`main__container__ContainerContactos__title__icon ${class_color}`}>
                        <img src={img}></img>
                    </div>
                    <div className={`main__container__ContainerContactos__title__number ${class_color}`}>
                        <p>{title}</p>
                        <h3>{number}</h3>
                    </div>
                </div>
                <div className="main__container__ContainerContactos_horarios">
                    <p>{p_text}</p>
                    <span>{span_text}</span>
                </div>
            </div>
            <ButtonModalLink text={text_btn} style={`styleBtn__containerContactos ${class_color_background}`}/>
        </div>
    )
}
export default ContainerContactos;