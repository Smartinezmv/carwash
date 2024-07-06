import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa useTranslation de react-i18next
import CountUp from 'react-countup'; // También necesitarás CountUp si no lo has importado aún

const Home = () => {
  const { t } = useTranslation(); // Inicializa useTranslation

  return (
    <>
      <header>
        <div className="flex flex-row justify-between items-center">
          <div>
            <img src="src/img/recursosHomePage/logo.png" alt="Logo" className="w-64" />
          </div>
          <div>
            <Link to="/services">
              <button className="btn-primary">{t('about')}</button> {/* Traduce 'About' */}
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col">
          <div className="container">
            <h1 className="title text-left max-660:titlem">
              {t('shineSupreme')}
            </h1> {/* Traduce 'Shine Supreme: Expert Car Wash Services' */}
            <hr className="w-16" />
            <p className="head4 text-left max-660:text-base">
              {t('carWashDescription')}
            </p> {/* Traduce 'At our car wash...' */}
            <button className="btn-secondary">{t('default')}</button> {/* Traduce 'DEFAULT' */}
          </div>
          <img src="src/img/recursosHomePage/burbuja01.png" alt="" className="grayscale w-48 max-660:w-5 mix-blend-lighten absolute left-12 bottom-1 z-0" />
          <img src="src/img/recursosHomePage/lamboParaHome.png" alt="" className="w-2/4 max-660:static max-660:w-full absolute right-16 top-44 z-0 scale-x-flip" />
        </section>
        <section className="z-10 backdrop-blur-sm bg-black/20 rounded-3xl py-7">
          <div className="flex flex-row max-660:flex-col max-660:gap-y-16">
            <div className="stat-box">
              <h1 className="stat-number">
                <CountUp start={0} end={1200} duration={2.5} separator="," />
              </h1>
              <h3 className="stat-title">{t('stat1Title')}</h3> {/* Traduce 'Lorem Ipsum' */}
            </div>
            <div className="stat-box">
              <h1 className="stat-number">
                <CountUp start={0} end={450} duration={2} separator="," />
              </h1>
              <h3 className="stat-title">{t('stat2Title')}</h3> {/* Traduce 'Lorem Ipsum' */}
            </div>
            <div className="stat-box">
              <h1 className="stat-number">
                <CountUp start={0} end={840} duration={2.8} separator="," />
              </h1>
              <h3 className="stat-title">{t('stat3Title')}</h3> {/* Traduce 'Lorem Ipsum' */}
            </div>
          </div>
        </section>
        <section className="bg-benefitsbg bg-contain bg-no-repeat bg-left mix-blend-screen bg-opacity-5 flex flex-col items-center">
          <div className="flex flex-col items-center gap-y-6 pt-36 pb-20">
            <h1 className="text-3xl font-bold text-center">BENEFITS</h1>
            <hr className="w-16 text-center" />
            <p className="w-2/4 max-660:w-3/4">
              Rewash within 3/8 days if it rains. Experience 100% wash and wax. Enjoy mobile and
              selected locations. Get top quality at competitive prices.
            </p>
            <img src="src/img/recursosHomePage/burbuja01.png" alt="" className="grayscale w-48 max-660:w-28 absolute right-12 max-660:right-0 bottom-1 z-0" />
          </div>
          
          <div className="flex flex-row max-660:flex-col flex-wrap justify-evenly gap-y-16 w-4/5 max-660:w-full">
            <div className="benefit-box">
              <img src="src/img/recursosHomePage/imgEcoFriendly.jpg" alt="Eco-Friendly" className="benefit-image" />
              <h3 className="benefit-title">Eco-Friendly</h3>
              <hr className="w-8" />
              <p className="benefit-description">
                Contribute to a greener planet by
                saving 300 times more water with
                every wash.
              </p>
            </div>
            <div className="benefit-box">
              <img src="src/img/recursosHomePage/imgCostEffective.jpg" alt="Cost-Effective" className="benefit-image" />
              <h3 className="benefit-title">Cost-Effective</h3>
              <hr className="w-8" />
              <p className="benefit-description">
                Enjoy exceptional quality car washes
                at competitive prices, ensuring great
                value for your money.
              </p>
            </div>
            <div className="benefit-box">
              <img src="src/img/recursosHomePage/imgConvenient.jpg" alt="Convenient" className="benefit-image" />
              <h3 className="benefit-title">Convenient</h3>
              <hr className="w-8" />
              <p className="benefit-description">
                Enjoy mobile and selected
                locations. Get top quality at
                competitive prices.
              </p>
            </div>
            <div className="benefit-box">
              <img src="src/img/recursosHomePage/imgPremiumService.jpg" alt="Premium Service" className="benefit-image" />
              <h3 className="benefit-title">Premium Service</h3>
              <hr className="w-8" />
              <p className="benefit-description">
                Experience 100% wash and wax. Enjoy
                mobile and selected locations. Get top
                quality at competitive prices.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
