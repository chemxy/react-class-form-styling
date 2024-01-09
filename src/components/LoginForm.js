import { useState } from "react";
import './LoginForm.css'


export default function LoginForm() {
    const [mode, setMode] = useState('login');

    function switchMode() {
        setMode(mode === 'login' ? ' signup' : 'login');
    }

    function onSubmit() {
        console.log('submitted!');
    }

    return (
        <div className="app">
            <div className="flex-row">
                <div className="left">
                </div>
                <div className="right">
                    <div className="title">
                        <span className="h1">Hello, <span className="h2">Guys!</span></span>
                    </div>
                    <div>
                        <div className="flex-row tabs">
                            <button className={mode === 'login' ? 'tab-button-active' : 'tab-button'}
                                    onClick={switchMode}>Login
                            </button>
                            <button className={mode === 'login' ? 'tab-button' : 'tab-button-active'}
                                    onClick={switchMode}>SignUp
                            </button>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-field" placeholder="email"/>
                        <label className="form-label">Email</label>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-field" placeholder="password"/>
                        <label className="form-label">Password</label>
                    </div>

                    <div className="buttons">
                        <button className="button" onClick={onSubmit}>{mode === 'login' ? 'Login' : 'Sign Up'}</button>
                    </div>
                </div>
            </div>
        </div>


    );
}