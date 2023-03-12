const Creative = ({ languageText, ru }) => {

  return (
    <section className="creative" >
      <div className="creative__container">
        <p className={`creative__text ${ru ? 'creative__text_ru' : ''}`}>{languageText('creativeText')} <span className={`line  ${ru ? 'line_ru' : ''}`}></span></p>
        <p className="creative__title creative__title_one">{languageText('creativeTitleOne')}</p>
        <p className="creative__title creative__title_two">{languageText('creativeTitleTwo')}</p>
        <button className="button creative__button button__mobile">{languageText('creativeButton')}</button>
      </div>
    </section >
  );
}

export default Creative;