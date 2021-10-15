import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illastration from "../Illastration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div class="column">
        <Illastration />

        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Your Name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter Your Email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox
            text="I agree to the Terms &amp; Conditions"
            type="checkbox"
          />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
