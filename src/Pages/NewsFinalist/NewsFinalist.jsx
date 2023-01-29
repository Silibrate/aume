import { Link } from 'react-router-dom';
import worksArrow from '../../images/worksArrow.svg';
import Header from '../../components/Header/Header';
import overview from '../../images/news-finalist/overview.png';
import arrowTop from '../../images/arrowTop.svg';
import newsFinalistImpress from '../../images/news-finalist/newsFinalistImpress.png';
import newsFinalistParty from '../../images/news-finalist/newsFinalistParty.png';
import newsFinalistProblem from '../../images/news-finalist/newsFinalistProblem.png';
import newsFinalistSolution from '../../images/news-finalist/newsFinalistSolution.png';
import newsFinalistProduct from '../../images/news-finalist/newsFinalistProduct.png';
import newsFinalistCompetitors from '../../images/news-finalist/newsFinalistCompetitors.png';

const NewsFinalist = ({ isOpenMenu, openMenu, closeMenu }) => {
  return (
    <>
      <Header
        isOpenMenu={isOpenMenu}
        openMenu={openMenu}
        closeMenu={closeMenu}
        class={'header_bg'}
      />

      <section className="finalist">
        <div className="finalist__container">
          <h2 className="finalist__title">Webflow selects Aumidigital as finalist for New Partner Award</h2>
          <p className="finalist__subtitle">October 26, 2022</p>
          <div className="finalist__overview">
            <img className='finalist__overview__img' src={overview} alt="Prevyou" />
            <div className="finalist__overview___content">
              <p className='finalist__overview___content__title'>Overview</p>
              <p className="finalist__overview___content__subtitle">If you have a promising business idea but don’t know how to pitch it to investors, we have some bad news for you — it’s gonna make you neither wealthy nor successful. Here is the material to help you out: a step-by-step guide to nailing a perfect pitch deck.</p>
            </div>
          </div>

          <div className="finalist__info">

            <div className="finalist__info__table">
              <p className="finalist__info__table__title">Table of contents</p>
              <Link className='link finalist__info__table__link' to='#'>Winning pitch deck: how to nail</Link>
              <Link className='link finalist__info__table__link' to='#'>What should a perfect pitch deck include</Link>
              <Link className='link finalist__info__table__link' to='#'>Instead of conclusion: tips to improve your pitch deck</Link>
              <div className="finalist__info__table__footer">
                <p className="finalist__info__table__footer__title">Share:</p>
                <div className="finalist__info__table__footer__links">
                  <a href="#" className="link finalist__info__table__footer__link">Facebook</a>
                  <a href="#" className="link finalist__info__table__footer__link">LinkedIn</a>
                  <a href="#" className="link finalist__info__table__footer__link">Twitter</a>
                </div>
              </div>
              <Link className='button_arrow finalist__info__table__button'>Subscribe to our news<img className="button_arrow__img" src={worksArrow} alt="arrow" /></Link>
            </div>

            <div className="finalist__info__description">
              <p className="finalist__info__description__text finalist__info__description__text_small">
                Even the most promising business idea risks remaining just an idea without investors ready to finance it. To raise funding for the project, you should catch the sponsors’ interest. And providing a pitch deck, aka presentation, is among the best ways.</p>
              <p className="finalist__info__description__text finalist__info__description__text_small">It gives a quick yet valuable overview of the project and its growth potential, encouraging other people to back your business ambitions. But how to create a pitch deck for investors that actually win them? Read on in the upcoming sections.</p>

              <h2 className='finalist__info__description__title'>What should a pitch deck include</h2>
              <p className='finalist__info__description__text'>There are two kinds of pitch decks. The first one has a great deal of textual and visual data and can be sent to investors via email. The second is used to pitch your business idea in person, and it should have more visuals and less text so that people are better focused on you and what you’re saying.</p>
              <p className='finalist__info__description__text'>Keep in mind that investors spend, on average, about 4-5 minutes per start-up pitch deck. Not much, right? So save all your great musings and descriptions for later discussions.
              </p>
              <p className='finalist__info__description__text'>There is no specific answer to how long should a pitch deck be. It all depends on lots of factors including the industry you’re talking about, your product and whether it’s ready or still in development, etc. Just stick to no more than 16 slides, keep them clear, concise, and convincing and try to include the most essential and valuable info. According to numerous studies, investors spend most of their time looking closely at the slides about team, competition, and financials.</p>
              <p className='finalist__info__description__text'>With that said, let’s see the best way to plan your pitch deck exploring the slides it should include.</p>
              <p className='finalist__info__description__text finalist__info__description__text_italick'>Disclaimer: the following pitch deck slides are used exclusively as examples. Most information is fictional.</p>
              <h3 className='finalist__info__description__subtitle'>Title: impress from the start</h3>
              <img className='finalist__info__description__img' src={newsFinalistImpress} alt="Impress" />
              <p className='finalist__info__description__text'>You never get a second chance to make the first impression, which is highly important when searching for funding. So use this slide to the fullest to lay the robust foundation for your business idea.</p>
              <p className='finalist__info__description__text'>Keep it tidy and minimalistic, yet jazz it up with interactive background or additional animation. Speaking of content, present your business value proposition succinctly — try to do it with one phrase. If you have a snappy tagline, add it to the slide.</p>
              <h3 className='finalist__info__description__subtitle'>Introduction: let the party begin</h3>
              <img className='finalist__info__description__img' src={newsFinalistParty} alt="Party" />
              <p className='finalist__info__description__text'> <span className='finalist__info__description__text_italick'>“Dear ladies and gentlemen, we’ve gathered here to”… </span> Now you add whatever intro matches your business idea. It isn’t necessary to be that serious and official. Just be clear and concise when pitching to investors.</p>
              <p className='finalist__info__description__text'>This slide provides a small summary of the product or service you need funding for. It’s a great way to build credibility right off the bat. But don’t go into details, as the viewers need this information only to get a basic understanding of the following data.</p>
              <h3 className='finalist__info__description__subtitle'>Problem: add some drama</h3>
              <img className='finalist__info__description__img' src={newsFinalistProblem} alt="Problem" />
              <p className='finalist__info__description__text'>If the first and second slides are, so to say, a formal prelude, this is where the real action begins. Fail to introduce a problem that people can relate to, and you won’t convince them to invest in your project.</p>
              <p className='finalist__info__description__text'>The main idea of this slide is to explain what gap you are going to fill in the market. To accomplish that, start building a story, tap into visual cues and compelling copy but don’t get overdramatic.</p>
              <p className='finalist__info__description__text'>When wondering how to pitch to investors, remember this: it’s important to present the problem they experienced in the past or, given their expertise, empathize with those who have it. Even though the challenge described in your presentation deck may be far from their lives, they should clearly see their ROI.</p>
              <p className='finalist__info__description__text'>Depending on the project, you can have 1-3 problems you want to dwell on. But don’t pile troubles up when creating a pitch deck. No matter how much you want to highlight the importance of your proposition, try to narrow it down to only one powerful problem, adding more only if they’re truly relevant and don’t repeat each other.</p>
              <h3 className='finalist__info__description__subtitle'>Solution: what’s the answer to the problem</h3>
              <img className='finalist__info__description__img' src={newsFinalistSolution} alt="Solution" />
              <p className='finalist__info__description__text'>Once the challenge is stated, it’s time to provide a solution. If need be, divide this slide into two separate ones. And note this: your product/service isn’t a magic pill but a tool to resolve the issue. With that in mind, avoid such statements as “If you can’t create NFTs, download our app and start boosting your marketing strategy with non-fungible tokens in a snap.” Instead, share the features and highlight the benefits that help users interact with the Web3 world.</p>
              <p className='finalist__info__description__text'>It’s good practice to devise multiple solutions to the same problem in your pitch to investors, then choose one and explain why. You can also stress out why it’s up to the time right now. Because sometimes, even the best start-up ideas fail because they are presented too late or too early. The solution to the problem should also be scalable so that investors can see that when they add their resources to your start-up, its total output will only be increased with time.</p>
              <h3 className='finalist__info__description__subtitle'>Product: show them what you’ve got</h3>
              <img className='finalist__info__description__img' src={newsFinalistProduct} alt="Product" />
              <p className='finalist__info__description__text'>This slide aims to show your product in action. Sure, it may not be ready yet, but you can demonstrate some screenshots, design ideas, and the most powerful features. Add descriptions about your product or clients’ feedback if you have it to make the slide more convincing.</p>
              <p className='finalist__info__description__text'>Emphasize only the most essential things, and don’t copy the information from the second slide. This content must be unique and back up the already stated information.</p>
              <h3 className='finalist__info__description__subtitle'>Competitors: who are your rivals</h3>
              <img className='finalist__info__description__img' src={newsFinalistCompetitors} alt="Competitors" />
              <p className='finalist__info__description__text'>Now it’s time to talk about your competitors and what makes you different from them. What do you mean you have none? If your product lacks competition, the chances are you’re working on the elixir of eternal life or winter clothing for unicorns. So don’t lie to yourself and, more importantly, to investors.</p>
              <p className='finalist__info__description__text'>You can use a diaphragm or a table chart to reveal the competitors and differentiate your company from the rest. The main idea of this slide is to broadcast your product’s uniqueness and highlight the value proposition.</p>
              <p className='finalist__info__description__text'>If you have some spectacular data on the capital each competitor has gained in the past, show it. That information will demonstrate how much the market is paying, which can stimulate a positive response to your pitch deck. You can add those numbers to the next slide not to overload the viewers and hold their attention firmly. Such a business-oriented approach turns ordinary pitch decks for investors into winning ones.</p>
              <h3 className='finalist__info__description__subtitle'>Instead of<span>conclusion: advice</span> on pitch deck design</h3>
              <p className='finalist__info__description__text'>Now that you’re in the loop on the essential slides and know what it takes to create the best startup pitch decks, it’s time to make the one that wins funds for your project. With your target audience in mind, stick to the product benefits and problems it can solve. Build trust with photo content and a convincing story relatable to your business idea.</p>
              <p className='finalist__info__description__text'>When presenting your pitch deck outline, be confident and appeal to emotions and dry facts. Don’t forget to include your contact details and social media links if they have a large following that can serve as social proof.</p>
              <p className='finalist__info__description__text'>Remember the visual component of the presentation for investors. You can turn to the pitch deck design agency if you lack expertise in that field or handle everything yourself. Start with illustrations and icons. They must be in the same style; otherwise, the pitch deck will look messy and confusing. Avoid using images with watermarks, as well as hackneyed faces from free photo stocks, since investors could see them before. It’s also necessary to check the size of photo files; you can use special programs like TinyPNG to reduce it without losing quality.</p>
              <p className='finalist__info__description__text'>Text content should be large and have maximum contrast so it is highly readable. Try to deliver your ideas succinctly, getting straight to the point. If you see the slide already contains much information, divide it into two separate ones. Such small details differentiate well designed pitch decks from mediocre ones.</p>
              <p className='finalist__info__description__text'>By using up-to-date pitch deck services, spruce up your presentation, add animation, play video and gif formats. If you present your product personally, it would be a reckless mistake not to avail of additional wow effect. But don’t go over the top chasing the modern pitch deck design. Balance is of paramount importance here. If you need to send a presentation as a file, reduce all interactive elements to a minimum, as you can’t control whether they will work adequately on other devices.</p>
              <p className='finalist__info__description__text'>And that’s all for now! Hope this guide will come in handy answering the main question — how to create a pitch deck. You’re welcome 😌</p>
            </div>

            <button onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
            }} className='finalist__info__link-top'><img src={arrowTop} alt="ArrowTop" /></button>

          </div>
        </div>
        <div className="news__card">
            <Link onClick={'scroll:0'} className='news__card__link' to='/news'>
              <p className="news__subtitle news__subtitle_one">More news</p>
            </Link>
          </div>  <div className="news__card">
            <Link onClick={'scroll:0'} className='news__card__link' to='#'>
              <p className="news__date">May 2, 2022</p>
              <p className="news__subtitle">RocketAir expands leadership team, now majority women-led</p>
            </Link>
          </div>
      </section>
    </>
  );
}

export default NewsFinalist;