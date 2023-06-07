function ButtonModalLink(props) {
    const handleClick = (event) => {
        event.preventDefault();
        if (props.callToPhone) {
          window.location.href = `tel:${props.link}`;
        } else if (props.contactType === 'whatsapp') {
          window.open(`https://wa.me/${props.link}`, '_blank');
        } else if (props.contactType === 'email') {
          window.location.href = `mailto:${props.link}`;
        } else {
          window.open(props.link, '_blank');
        }
      };
    const buttonClass = `styleBtn__containerContactos ${props.style}`;

    return (
        <button id={props.id} className={buttonClass} onClick={handleClick} target="_blank">{props.text}</button>
    );
}

export default ButtonModalLink