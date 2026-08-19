import "./header.scss";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ImageSwitcher from "./ImageSwitcher";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h4>Welcome to the Next-Gen Adventure</h4>
          <h1>Brandon Hayes</h1>
          <h5 className="text-light">Explorer • Builder • Leader</h5>
          <h6 className="text-light">
            A Canadian who builds with intent, always aiming to move the world
            forward
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
