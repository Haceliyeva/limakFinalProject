
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Register.module.css';
import { useRegisterMutation } from "../../Redux/Slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../Redux/Slices/authSlice";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import { FaUserAlt } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation('/register');
    }
  }, [navigation, userInfo]);



  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Şifrələr düzgün deyil');
      return;
    }
    try {
      const {res} = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation('/register');
      alert('Qeydiyyatdan kecdiniz')
    } catch (error) {
      toast.error('Qeydiyyat uğursuz oldu.');
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.auth}>
        <div className={styles.textRegister}>
            <h1>HESABA DAXİL OL</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              placeholder="Ad"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Şifrəni təsdiqləyin"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'User creating' : 'Qeydiyyat'}
            </button>
          </form>
          <p className={styles.loginmessage} onClick={() => navigation('/login')}>
            <span>Daxil ol</span>
          </p>
        </div>
        <div className={styles.image}>
          <img src="https://limak.az/new_front/assets/img/login-image.svg" alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Register;
