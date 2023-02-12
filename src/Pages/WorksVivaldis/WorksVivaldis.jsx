import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import arrowBottom from "../../images/arrowBottom.svg";
import imgOne from "../../images/works-vivaldis/imgOne.png";
import wordmark from "../../images/works-vivaldis/wordmark.png";

const WorksVivaldis = () => {
  return (
    <>
      <Header />
      <section className="works-vivaldis">
        <div className="works-vivaldis__container">
          <div className="works-vivaldis__titles__container">
            <h2 className="works-vivaldis__title"><span className="works-vivaldis__title_red">©2021</span><span>Vivaldis</span>payroll</h2>
            <div className="works-vivaldis__format">
              <p className="format">UX/UI</p>
              <p className="format">3D</p>
            </div>
          </div>
          <div className="works-vivaldis__info">
            <p className="works-vivaldis__info__text">What started as a simple app that matched students with companies, quickly grew to become a leading digital payroll tool. Appart helped design and launch the brand and has been their go-to product and design partner since launch. </p>
            <img className="arrow-bottom__img works-vivaldis__info__arrow-img" src={arrowBottom} alt="Arrow-Bottom" />
          </div>
          <img className="works-vivaldis__imgOne" src={imgOne} alt="imgOne" />
          <h3 className="works-vivaldis__subtitle">Sophie dallamore is a london based stylist
            and fashion consultant, offering a range
            of personalised styling services.</h3>
          <div className="works-vivaldis__block__text">
            <p className="works-vivaldis__block__text__title">Challenge</p>
            <p className="works-vivaldis__text">The brand identity and website needed to be a visual representation of who Sophie is, while adding long-term value to her business and connecting her with her audience.</p>
            <p className="works-vivaldis__block__text__title">Solution</p>
            <p className="works-vivaldis__text">The design strategy was to tell Sophie’s story, showcase
              her strengths and capabilities, and grow her client base. We wanted the collateral to be a celebration of Sophie, capturing the essence of her values and who she is - in tandem with the industry and her ode to clothing.
            </p>
            <p className="works-vivaldis__text works-vivaldis__text_paragraph">              It was important to retain authenticity and create a true connection with potential clients by translating Sophie’s personality
              into the brand's identity.</p>
          </div>
          <img className="works-vivaldis__imgOne" src={imgOne} alt="imgOne" />
          <h3 className="works-vivaldis__subtitle">“We don’t need to reject our femininity
            to be strong or powerful and, as is always the way, what we wear reflects our evolved attitudes.”</h3>
          <div className="works-vivaldis__block__text">
            <p className="works-vivaldis__block__text__title">Concept</p>
            <p className="works-vivaldis__text">We drew inspiration from Sophie’s personal characteristics as well as from a quote by Ella Alexander from Harper’s Bazaar. This led us to the concept of ‘Soft Power’ - the embodiment of femininity and the power it holds.
            </p>
            <p className="works-vivaldis__text works-vivaldis__text_paragraph">The result is a quietly confident and sophisticated typographic design language, exuding beauty and strength in its simplicity.</p>
          </div>
        </div>
        <img className="works-vivaldis__imgOne works-vivaldis__imgOne__w100" src={imgOne} alt="imgOne" />
        <div className="works-vivaldis__container">
          <div className="works-vivaldis__wordmark">
            <div className="works-vivaldis__wordmark__info__left">
              <p className="works-vivaldis__wordmark__info__left__title">The wordmark</p>
              <p className="works-vivaldis__wordmark__info__left__text">The wordmark was altered and modified from the brand’s
                primary typeface - Ogg. We leveraged the font’s typographic
                characteristics to pay homage to the luxurious lettering
                synonymous with the fashion industry.</p>
              <p className="works-vivaldis__wordmark__info__left__text">Reflecting the concept of ‘Soft Power,’ the effortless blending of text style and sharp edges within the logotype provides elegance and editorial expression to the design.</p>
              <p className="works-vivaldis__wordmark__info__left__text">Across the brand’s applications, the wordmark adds a permanence
                to whatever it touches. It reveals the beauty in simplicity
                and an unmistakable timelessness - effortlessly implemented
                in response to the application’s size, shape and function.</p>
            </div>
            <div className="works-vivaldis__wordmark__info__right">
              <img className="works-vivaldis__wordmark__ing" src={wordmark} alt="wordmark" />
              <img className="works-vivaldis__wordmark__ing" src={wordmark} alt="wordmark" />
              <img className="works-vivaldis__wordmark__ing" src={wordmark} alt="wordmark" />
              <div className="works-vivaldis__wordmark__info__right__block">
                <p className="works-vivaldis__wordmark__info__right__block__title">Design system</p>
                <p className="works-vivaldis__wordmark__info__right__block__text">The design system expanded to complement the brand - thriving
                  in simplicity and subtle interactions. The design is teeming
                  with character, whilst maintaining a utility and rigour necessary
                  to carry the full weight of the identity across all its touch points.
                </p>
                <p className="works-vivaldis__wordmark__info__right__block__text">Supporting the striking typographic execution
                  of the wordmark, we opted for GT Walsheim Pro as a secondary typeface. The geometric characteristics of the typeface complements the precise and systematic nature of the identity, alongside a sincerity firmly rooted in the brand's tone.</p>
                <p className="works-vivaldis__wordmark__info__right__block__text">Together, the two allow the identity to effortlessly adapt
                  from composition to composition, enabling the brand to convey
                  the splendour of fashion itself; radiating luxury while simultaneously celebrating the identity’s favour of subtlety over excess.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WorksVivaldis;