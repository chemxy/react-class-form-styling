import { useRef } from "react";

export default function FormExmaple2() {
    //use useRef to get form entries & submit form with a button
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    function handleSubmit() {
        //access the value stored in the react ref object
        const enteredEmail = email.current.value; // 'email' is a react ref object.
        const enteredPassword = password.current.value;
        const enteredConfirmPassword = confirmPassword.current.value;
        console.log(`email: ${enteredEmail}, password: ${enteredPassword}, confirm password: ${enteredConfirmPassword}`)
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
                           ref={email}/>
                </div>
            </div>

            <div id="password-section" className="flex-row input-section">
                <div className="input-group">
                    <div className="input-label">
                        <label id="password-label" className="text-uppercase">password</label>
                    </div>
                    <div>
                        <input type="text" id="password-input" className="text-input"
                               ref={password}/>
                    </div>
                </div>
                <div>
                    <div className="input-label">
                        <label id="confirm-password-label" className="text-uppercase">confirm password</label>
                    </div>
                    <div>
                        <input type="text" id="confirm-password-input" className="text-input"
                               ref={confirmPassword}/>
                    </div>
                </div>
            </div>
            <div>
                <br/>
                <button className="button" onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )
}