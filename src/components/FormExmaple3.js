import { useRef } from "react";

export default function FormExmaple3() {
    //use FormData() to get form entries & submit form with a button

    const myForm = useRef();

    function handleSubmit() {

        console.log(myForm)

        //access the value stored in the form using FormData()
        const fd = new FormData(myForm.current); // pass the form object to react.

        const enteredEmail = fd.get('email'); // 'email' is the name of the input element
        const enteredPassword = fd.get('password');
        const enteredConfirmPassword = fd.get('confirmPassword');
        console.log(`email: ${enteredEmail}, password: ${enteredPassword}, confirm password: ${enteredConfirmPassword}`)
    }

    return (
        <div className="form-body">
            <br/>
            <form ref={myForm}>
                <div id="email-section" className="input-section">
                    <div className="input-label">
                        <label id="email-label" className="text-uppercase">email</label>
                    </div>
                    <div>
                        <input id="email-input" type="text" className="text-input"
                               name="email"/>
                    </div>
                </div>

                <div id="password-section" className="flex-row input-section">
                    <div className="input-group">
                        <div className="input-label">
                            <label id="password-label" className="text-uppercase">password</label>
                        </div>
                        <div>
                            <input type="text" id="password-input" className="text-input"
                                   name="password"/>
                        </div>
                    </div>
                    <div>
                        <div className="input-label">
                            <label id="confirm-password-label" className="text-uppercase">confirm password</label>
                        </div>
                        <div>
                            <input type="text" id="confirm-password-input" className="text-input"
                                   name="confirmPassword"/>
                        </div>
                    </div>
                </div>
            </form>
            <div>
                <br/>
                <button className="button" onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )
}