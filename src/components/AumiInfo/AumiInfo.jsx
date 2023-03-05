const AumiInfo = ({ languageText }) => {

  const ru = languageText('aumiInfoTitleOne') === "Дизайн.";

  console.log(ru)
  return (
    <div className="aumiInfo">
      <div className="aumiInfo__container">
        <div className="aumiInfo__title__container">
          <div className="aumiInfo__title__contant">
            <h2 className={`aumiInfo__title aumiInfo__title_one ${ru ? 'aumiInfo__title_ru' : ''}`}>{languageText('aumiInfoTitleOne')}</h2>
            <h2 className={`aumiInfo__title aumiInfo__title_two ${ru ? 'aumiInfo__title_ru' : ''}`}>{languageText('aumiInfoTitleTwo')}</h2>
          </div>
          <h2 className={`aumiInfo__title ${ru ? 'aumiInfo__title_ru' : ''}`}>{languageText('aumiInfoTitleThree')}</h2>
        </div>
        <p className={`aumiInfo__text ${ru ? 'aumiInfo__text_ru' : ''}`}>{languageText('aumiInfoText')}</p>
        <button className="aumiInfo__button button button_ru">{languageText('Button')}</button>
      </div>
    </div>
  );
}

export default AumiInfo;