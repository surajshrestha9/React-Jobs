import Wrapper from "../assets/wrappers/LandingPage";
// import main from "../assets/images/main.svg";
// import logo from "../assets/images/logo.svg";
import {Logo} from "../components"
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        {/* <img src={logo} alt="jobify" className="logo" />; */}
      </nav>
      <div className="container-page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            consequuntur nam. A, saepe? Unde, atque voluptatibus vel dolor
            soluta natus porro, maiores, consequatur inventore in culpa libero.
            Numquam, itaque soluta.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login/Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
