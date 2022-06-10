import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../utils/firebase";
import "./SignUpForm.css";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const defaultFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formState, setFormState] = useState(defaultFormState);
  const { displayName, email, password, confirmPassword } = formState;
  const [erorr, setErorr] = useState(false);
  const [emailIsUsed, setEmailIsUsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setErorr(false);
    const { name, value } = e.target;
    if (name === "email") {
      setEmailIsUsed(false);
    }
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!(password === confirmPassword)) {
      setIsLoading(false);

      return setErorr(true);
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(response.user, { displayName });
      setFormState(defaultFormState);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);

      if (e.code === "auth/email-already-in-use") {
        setEmailIsUsed(true);
      }
    }
  };

  const inputError = erorr ? "error-notif" : "";
  let errorMessage = "Passwords must match";

  return (
    <>
      <section className="formContainer ">
        <span className="">Sign Up With Email And Password</span>
        <form action="" onSubmit={handleSubmit}>
          <div
            className={emailIsUsed ? "error-notif" : ""}
            data-error="email is used !"
          >
            <FormInput
              type="email"
              id="email"
              placeholder=" "
              required
              className="input"
              onChange={handleChange}
              name="email"
              value={email}
              label="email"
            />
          </div>
          <div>
            <FormInput
              type="name"
              id="name"
              placeholder=" "
              required
              className="input"
              onChange={handleChange}
              name="displayName"
              value={displayName}
              label="name"
            />
          </div>
          <div className={inputError} data-error={errorMessage}>
            <FormInput
              type="password"
              id="password"
              minLength="6"
              required
              className="input"
              onChange={handleChange}
              placeholder=" "
              name="password"
              value={password}
              label="password"
            />
          </div>
          <div className={inputError} data-error={errorMessage}>
            <FormInput
              type="password"
              id="confirmPassword"
              required
              className="input"
              onChange={handleChange}
              placeholder=" "
              name="confirmPassword"
              value={confirmPassword}
              label="confirm password"
            />
          </div>

          <Link to="/Auth">Have A Account?</Link>
          <br />
          <button type="submit" className="btn">
            sign up
          </button>
          {isLoading && <Loader />}
        </form>
      </section>
    </>
  );
}
