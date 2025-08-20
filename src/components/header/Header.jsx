import "./header.scss";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ImageSwitcher from "./ImageSwitcher";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h4>
            Adventure-Driven Product Leader, Building Experiences That Inspire
            Joy
          </h4>
          <h1>Brandon Hayes</h1>
          <h5 className="text-light">
            Explorer • Builder • Optimizer • Eternal Learner
          </h5>
          <h6 className="text-light">
            Everything I do is meant to inspire, delight, and make an impact
          </h6>
          <CTA />

          <div className="me">
            <ImageSwitcher />
          </div>

          <HeaderSocials />
        </div>
      </header>
    </>
  );
};

export default Header;
