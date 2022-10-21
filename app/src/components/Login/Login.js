import React from 'react';
import './style.css';
import Users from '../../db/users.json'
import {useState} from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

function Login () {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
    
        if((Users[0].email === email) && (Users[0].password === password)) {
            navigate("/map")
        }
        
        setEmail('');
        setPassword('');
    };


  const [toggleClass, setToggleClass] = React.useState(false);

  const annoyingSubmitButton = () => {
    if (password.length < 6) {
      setToggleClass((prevState) => !prevState);
    }
  };


  let state = ((Users[0].email === email) && (Users[0].password === password));
  
  return (
        <>
        <section className="form-section">
            <h1 className="heading">Connexion</h1>
            <p className="label">Se connecter pour pouvoir accéder à la map</p>
            <form
            autoComplete="false"
            method="POST"
            onSubmit={handleSubmit}
            >
            <div className="input-block">
                <label className="label">
                Email <span className="requiredLabel">*</span>
                </label>
                <input
                className={`input ${
                    email.length < 6 ? 'wrong-input' : 'correct-input'
                }`}
                type="email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="zain.sadaqet@gmail.com"
                tabIndex={-1}
                required
                />
            </div>
            <div className="input-block">
                <label className="label">
                Password <span className="requiredLabel">*</span>
                </label>
                <input
                className={`input ${
                    password.length < 6 ? 'wrong-input' : 'correct-input'
                }`}
                type="password"
                name="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                minLength="6"
                tabIndex={-1}
                required
                />
            </div>
            <div>
                {password.length < 6 ? (
                <p className="warning-message">
                    Password length should be more than 6
                </p>
                ) : (
                ''
                )}
            </div>
            <div
                className={`submit-button-wrapper ${toggleClass ? 'float' : ''}`}
            >
                <button
                tabIndex={-1}
                className={`submit-button ${
                    password.length > 6 ? 'button-success' : ''
                }`}
                onMouseEnter={annoyingSubmitButton}
                >
                Se connecter
                </button>
            </div>
            </form>
        </section>
        </>
    );
}

export default (Login);
