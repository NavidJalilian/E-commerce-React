import { useRef, useState } from "react";
import "./SignUpForm.css";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../utils/firebase";
import Loader from "./Loader";

const defaultFormState = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formState, setFormState] = useState(defaultFormState);
  const { password, email } = formState;
  const [isLoading, setIsLoading] = useState(false);
  const [isPassowrdValid, setIsPasswordValid] = useState(true);
  const [isEmailvalid, setIsEmailValid] = useState(true);
  const inputFoucsRef = useRef();
  if (inputFoucsRef.current) console.log("is on");

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const handleChange = (e) => {
    setIsPasswordValid(true);
    setIsEmailValid(true);
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInAuthWithEmailAndPassword(email, password);
      setFormState(defaultFormState);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      if (e.code === "auth/wrong-password") {
        setIsPasswordValid(false);
      }
      if (e.code === "auth/user-not-found") {
        setIsEmailValid(false);
      }
    }
  };

  return (
    <>
      <section className="formContainer">
        <span>Sign Up With Email And Password</span>
        <form action="" onSubmit={handleSubmit}>
          <div
            className={isEmailvalid ? "" : "error-notif"}
            data-error="User Not Found !"
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

          <div
            className={isPassowrdValid ? "" : "error-notif"}
            data-error="Password Is Wrong !"
          >
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

          <Link to="/Sing-Up">Don't Have a Account?</Link>
          <br />
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button type="submit" className="btn">
              sign in
            </button>

            <button
              type="button"
              className="btn btn-google"
              onClick={signInWithGoogle}
            >
              google sign in
            </button>
          </div>
        </form>
        {isLoading && <Loader />}
      </section>
    </>
  );
}
