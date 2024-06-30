import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useLoginMutation } from "../../Redux/Slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../Redux/Slices/authSlice";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigation = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  // useEffect(() => {
  //   if (userInfo) {
  //     navigation("/login");
  //   }
  // }, [navigation, userInfo]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      // alert('daxil oldunuz')
      if (userInfo) {
        console.log("Navigating to homepage");
        navigation("/homepage");
      }
    } catch (error) {
      toast.error("Sehv email ya sifre");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.auth}>
        <h1>TODO APP</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Şifrə"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginError && <div className={styles.error}>{loginError}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging..." : "Daxil ol"}
          </button>
        </form>
        <p
          className={styles.loginmessage}
          onClick={() => navigation("/register")}
        >
          <span>Qeydiyyat</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
