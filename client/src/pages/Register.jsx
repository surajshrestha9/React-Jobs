import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type={"Text"} name={"fn"} defaultValue={"John"}/>
        <FormRow type={"Text"} name={"ln"} defaultValue={"smith"} labelText={"last name"}/>
        <FormRow type={"Text"} name={"location"} defaultValue={"earth"}/>
        <FormRow type={"email"} name={"email"} defaultValue={"John@g.com"}/>
        <FormRow type={"password"} name={"password"} defaultValue={"secret123"}/>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member
          <Link to={"/login"} className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
