import { useLocation } from "react-router-dom";

const AumiForm = () => {
  const location = useLocation();
  return (
    <section className={`aumiForm ${location.pathname === '/contact' ? 'aumiForm_conact' : ''}`}>
      <div className="aumiForm__container">
        <h2 className="aumiForm__title">Let's make a <span>winning team</span> </h2>
        <form style={{ borderLeft: `${location.pathname === '/contact' ? 'none' : ''}` }} className="aumiForm__form" action="submit">
          <input className="aumiForm__form__input" required placeholder="First name *" type="text" />
          <input className="aumiForm__form__input" required placeholder="Last name *" type="text" />
          <input className="aumiForm__form__input" placeholder="Phone" type="tel" />
          <input className="aumiForm__form__input" required placeholder="Email *" type="email" />
          <input className="aumiForm__form__input" placeholder="Company Name" type="text" />
          <textarea className="aumiForm__form__input" placeholder="Enter your project details here" name="comment"></textarea>
          <button className="aumiForm__form__button" type="submit">Submit</button>
        </form>
      </div>

    </section>
  );
}

export default AumiForm;