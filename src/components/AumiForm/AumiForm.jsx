import { useLocation } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useState } from "react";

const AumiForm = ({ languageText }) => {
  const location = useLocation();

  const imgAnimation = useAnimation()
  const [userInfo, sendUserInfo] = useState({ firstName: '', lastName: '', phone: '', email: '', companyName: '', projectDetails: '' })

  const handleMouseMove = e => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 1.3
    const moveY = clientY - window.innerHeight / 1.3
    const offsetFactor = 8
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor
    })
  }

  const formSend = (e) => {
    e.preventDefault();

    const config = {
      Username: 'fastersaer@mail.ru',
      Password: 'A5BBBC9E3B9206FEFA7B972B28C207B90DD4',
      Host: 'smtp.elasticemail.com',
      Port: 2525,
      To: 'asasins.90@mail.ru',
      From: "skirum2012@gmail.com",
      Subject: "Заказ с сайта",
      Body: `Имя: ${userInfo.firstName} Фамилия: ${userInfo.firstName} Телефон: ${userInfo.phone}  Емайл: ${userInfo.email} Компания: ${userInfo.companyName} Детали: ${userInfo.projectDetails}`
    };

    window.Email.send(config)
      .then((response) => {
        alert('Успешно отправлено!', response);
      })
      .catch((error) => {
        console.error('Что-то пошло не так...', error);
        alert('Что-то пошло не так...', error)
      });
  }



  return (
    <section className={`aumiForm ${location.pathname === '/contact' ? 'aumiForm_conact' : ''}`}>
      <div className="aumiForm__container">
        <h2 className="aumiForm__title">{languageText('aumiFormTitleOne')}<span>{languageText('aumiFormTitleTwo')}</span> </h2>
        <form onSubmit={formSend} style={{ borderLeft: `${location.pathname === '/contact' ? 'none' : ''}` }} className="aumiForm__form" action="submit">
          <input id="name" value={userInfo.firstName} onChange={(e) => sendUserInfo((prev) => {
            return {
              ...prev,
              firstName: e.target.value
            }
          })} className="aumiForm__form__input" required placeholder={languageText('aumiFormFirstName')} type="text" />
          <input value={userInfo.lastName} onChange={(e) => sendUserInfo((prev) => {
            return {
              ...prev,
              lastName: e.target.value
            }
          })} className="aumiForm__form__input" required placeholder={languageText('aumiFormLastName')} type="text" />
          <input value={userInfo.phone} onChange={(e) => sendUserInfo((prev) => {
            return {
              ...prev,
              phone: e.target.value
            }
          })} className="aumiForm__form__input" placeholder={languageText('aumiFormPhone')} type="tel" />
          <input value={userInfo.email} onChange={(e) => sendUserInfo((prev) => {
            return {
              ...prev,
              email: e.target.value
            }
          })}
            className="aumiForm__form__input" required placeholder={languageText('aumiFormEmail')} type="email" />
          <input value={userInfo.companyName} onChange={(e) => sendUserInfo((prev) => {
            return {
              ...prev,
              companyName: e.target.value
            }
          })} className="aumiForm__form__input" placeholder={languageText('aumiFormCompany')} type="text" />
          <textarea id="projectDetails" value={userInfo.projectDetails} onChange={(e) => sendUserInfo((prev) => {
            return {
              ...prev,
              projectDetails: e.target.value
            }
          })} className="aumiForm__form__input" placeholder={languageText('aumiFormDetails')} name="comment"></textarea>
          <div className="aumiForm__form__checkbox">
            <input required className="aumiForm__form__input__checkbox" id="formAgreement" type="checkbox" />
            <label className="checkbox__label" htmlFor="formAgreement"><span>Я даю свое согласие на обработку персональных данных в соответствии с <a className="checkbox__label__link" href="#"> условиями</a></span></label>
          </div>
          <div className="buton__wrapper">
            <motion.button
              animate={imgAnimation}
              onMouseMove={e => handleMouseMove(e)}
              className="aumiForm__form__button" type="submit">{languageText('aumiFormFormButton')}</motion.button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default AumiForm;