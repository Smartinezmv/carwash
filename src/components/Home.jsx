import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa useTranslation de react-i18next
import CountUp from 'react-countup'; // También necesitarás CountUp si no lo has importado aún

const Home = () => {
  const { t } = useTranslation(); // Inicializa useTranslation

  return (
    <>
      <header>
        <div className="flex flex-row justify-between items-center py-8">
          <div>
            <img src="src/img/recursosHomePage/logo.png" alt="Logo" className="w-[385px] h-[95px] ml-[30px] object-contain" />
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
          <div className='flex flex-row max-660:flex-col'>
              <div className="container">
                <h1 className="title text-left font-bold max-660:titlem">
                  {t('shineSupreme')}
                </h1> {/* Traduce 'Shine Supreme: Expert Car Wash Services' */}
                <hr className="w-[185px] h-[5px] border-0 bg-white" />
                <p className="head4 text-justify font-normal max-660:text-base">
                  {t('carWashDescription')}
                </p> {/* Traduce 'At our car wash...' */}
                <button className="btn-secondary my-[40px]">{t('button-home')}</button>
              </div>
              <div className='w-[45vw]'>
              <img src="src/img/recursosHomePage/lamboParaHome.png" alt="" className="w-[53%] absolute max-660:static max-660:w-full right-[-5px] top-[230px] z-0" />
                
              </div>
          </div>
          <img src="src\img\recursosHomePage\burbuja03.png" alt="" className="grayscale absolute rotate-90 w-52 max-660:w-5 mix-blend-luminosity left-[-30px] bottom-[-130px] z-0" />
          
        </section>
        <section className="stat-container">
          <div className=" flex flex-row max-660:flex-col max-660:gap-y-16">
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
        <section className="bg-cover bg-no-repeat bg-top section-bg-blend flex flex-col items-center">
  <div className="flex flex-col items-center gap-y-[12px] pt-36 pb-20">
    <h1 className="text-[60px] font-bold text-center">Benefit</h1>
    <hr className="w-[185px] h-[4px] border-0 bg-[#D9D9D9] text-center" />
    <p className="w-[50vw] max-660:w-3/4 text-[#A8ABB3] text-[18px]">
      Rewash within 3/8 days if it rains. Experience 100% wash and wax. Enjoy mobile and
      selected locations. Get top quality at competitive prices.
    </p>
  </div>

  <div className="flex flex-row max-660:flex-col flex-wrap justify-evenly gap-y-16 w-[90%] max-660:w-full">
    <div className="benefit-box">
      <img src="src/img/recursosHomePage/imgEcoFriendly.jpg" alt="Eco-Friendly" className="benefit-image" />
      <h3 className="benefit-title">Eco-Friendly</h3>
      <hr className="hr-benefits" />
      <p className="benefit-description">
        Contribute to a greener planet by
        saving 300 times more water with
        every wash.
      </p>
    </div>
    <div className="benefit-box">
      <img src="src/img/recursosHomePage/imgCostEffective.jpg" alt="Cost-Effective" className="benefit-image" />
      <h3 className="benefit-title">Cost-Effective</h3>
      <hr className="hr-benefits" />
      <p className="benefit-description">
        Enjoy exceptional quality car washes
        at competitive prices, ensuring great
        value for your money.
      </p>
    </div>
    <div className="benefit-box">
      <img src="src/img/recursosHomePage/imgConvenient.jpg" alt="Convenient" className="benefit-image" />
      <h3 className="benefit-title">Convenient</h3>
      <hr className="hr-benefits" />
      <p className="benefit-description">
        Enjoy mobile and selected
        locations. Get top quality at
        competitive prices.
      </p>
    </div>
    <div className="benefit-box">
      <img src="src/img/recursosHomePage/imgPremiumService.jpg" alt="Premium Service" className="benefit-image" />
      <h3 className="benefit-title">Premium Service</h3>
      <hr className="hr-benefits" />
      <p className="benefit-description">
        Experience 100% wash and wax. Enjoy
        mobile and selected locations. Get top
        quality at competitive prices.
      </p>
    </div>
  </div>
</section>
<section className="bg-cover bg-no-repeat bg-top section-bg-blend flex flex-col items-center">
  <div className="flex flex-col items-center gap-y-[12px] pt-36 pb-20">
    <h1 className="text-[60px] font-bold text-center">Why Choose Us?</h1>
    <hr className="w-[185px] h-[4px] border-0 bg-[#D9D9D9] text-center" />
    <p className="w-[50vw] max-660:w-3/4 text-[#A8ABB3] text-[18px]">
    Trust us for your car wash needs. We're committed to the environment, offer affordability, convenience, and premium service. Here's why we're your best choice
    </p>
  </div>
  </section>
      </main>
      <footer className='bg-[#040618] pt-[25px] pb-[33px] w-full gap-y-[25px] flex flex-col absolute left-0'>
      <hr className="w-[100vw] h-[1px] border-0 bg-[#ACAFB7] text-center" />
      <p className='font-normal text-[18px] leading-[22px]'>® Copyrigth 2024 Centurions Car Wash, Inc. - All rights reserved</p>
      </footer>
    </>
  );
};

export default Home;
