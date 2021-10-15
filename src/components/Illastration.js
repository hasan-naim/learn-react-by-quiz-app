import signupSvg from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";

export default function Illastration() {
  return (
    <div class={classes.illustration}>
      <img src={signupSvg} alt="Signup" />
    </div>
  );
}
