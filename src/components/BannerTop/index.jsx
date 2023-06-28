import './style.css';

const BannerTop = () => {
    return (
      <div className="main__container__bannerTop">
        <div className="main__container__bannerTop_title">
          <h1>Entre em contato com nossos especialistas</h1>
          <p>Compre com atendimento personalizado através de qualquer um de nossos canais.</p>
        </div>
        <div className="main__container__bannerTop__img">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="https://multitravelcom.github.io/vite-test/MicrosoftTeams-image(3).png"
            />
            <source
              media="(max-width: 767px)"
              srcSet="https://multitravelcom.github.io/vite-test/MicrosoftTeams-image(2).png"
            />
            <img
              src="https://multitravelcom.github.io/vite-test/MicrosoftTeams-image(3).png"
              alt="Banner Image"
            />
          </picture>
        </div>
      </div>
    );
  };

export default BannerTop