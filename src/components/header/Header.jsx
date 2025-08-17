import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ImageSwitcher from './ImageSwitcher';

const Header = () => {

  return (
    <>
      <header>
        <div className="container header__container">
          <h4>I love creating new products and processes that make people smile</h4>
          <h1>Brandon R Hayes</h1>
          <h5 className="text-light">Explorer, Builder, Optimizer</h5>
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