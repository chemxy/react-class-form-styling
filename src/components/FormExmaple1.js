import { useState } from "react";

export default function FormExmaple1() {
    //use two way binding to get form entries & submit form with a button

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    function handleEmailChange(event) {
        // console.log(event);
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        // console.log(event);
        setPassword(event.target.value)
    }

    function handleConfirmPasswordChange(event) {
        // console.log(event);
        setConfirmPassword(event.target.value)
    }

    return (
        <div className="form-body">
            <br/>
            <div id="email-section" className="input-section">
                <div className="input-label">
                    <label id="email-label" className="text-uppercase">email</label>
                </div>
                <div>
                    <input id="email-input" type="text" className="text-input"
                           onChange={(event) => handleEmailChange(event)}/>
                </div>
            </div>

            <div id="password-section" className="flex-row input-section">
                <div className="input-group">
                    <div className="input-label">
                        <label id="password-label" className="text-uppercase">password</label>
                    </div>
                    <div>
                        <input type="text" id="password-input" className="text-input"
                               onChange={(event) => handlePasswordChange(event)}/>
                    </div>
                </div>
                <div>
                    <div className="input-label">
                        <label id="confirm-password-label" className="text-uppercase">confirm password</label>
                    </div>
                    <div>
                        <input type="text" id="confirm-password-input" className="text-input"
                               onChange={(event) => handleConfirmPasswordChange(event)}/>
                    </div>
                </div>
            </div>
            <div>
                <br/>
                <h3>output</h3>
                <p>email: {email}</p>
                <p>password: {password}</p>
                <p>confirm password: {confirmPassword}</p>
            </div>
        </div>
    )
}