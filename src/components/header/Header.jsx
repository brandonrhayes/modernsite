import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ImageSwitcher from './ImageSwitcher';

const Header = () => {

  return (
    <>
      <header>
        <div className="container header__container">
          <h4>My Passion Is Adventure & Building Products That Make People Smile</h4>
          <h1>Brandon Hayes</h1>
          <h5 className="text-light">Explorer, Leader, Optimizer</h5>
          <h6 className="text-light">and everything I do is to inspire...</h6>
          <CTA />

          <div className="me">
            <ImageSwitcher />
          </div>

          <HeaderSocials />

        </div>
      </header>
    </>
  )
}

export default Header