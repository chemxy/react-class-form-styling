import rocketIcon from "../assets/rocket-icon.png";
import '../App.css';

export default function FormStyling() {

    const roles = ['student', 'teacher', 'professor', 'employee']
    const rolesOption = roles.map((role) => <option value={role}>{role}</option>)

    return (
        <div>
            <form className="my-form">
                <div className="form-header">
                    <h1 id="header" className="text-capitalize">welcome on board!</h1>
                    <p className="first-line-capitalize">we just need a little bit of data from you to get you
                        started
                        <img id="rocket-icon" src={rocketIcon} alt=""/>
                    </p>
                </div>
                <div className="form-body">
                    <div id="email-section" className="input-section">
                        <div className="input-label">
                            <label id="email-label" className="text-uppercase">email</label>
                        </div>
                        <div>
                            <input id="email-input" type="text" className="text-input"/>
                        </div>
                    </div>

                    <div id="password-section" className="flex-row input-section">
                        <div className="input-group">
                            <div className="input-label">
                                <label id="password-label" className="text-uppercase">password</label>
                            </div>
                            <div>
                                <input type="text" id="password-input" className="text-input"/>
                            </div>
                        </div>
                        <div>
                            <div className="input-label">
                                <label id="confirm-password-label" className="text-uppercase">confirm password</label>
                            </div>
                            <div>
                                <input type="text" id="confirm-password-input" className="text-input"/>
                            </div>
                        </div>
                    </div>

                    <div id="name-section" className="flex-row input-section">
                        <div className="input-group">
                            <div className="input-label">
                                <label id="first-name-label" className="text-uppercase">first name</label>
                            </div>
                            <div>
                                <input type="text" id="first-name-input" className="text-input"/>
                            </div>
                        </div>
                        <div>
                            <div className="input-label">
                                <label id="last-name-label" className="text-uppercase">last name</label>
                            </div>
                            <div>
                                <input type="text" id="last-name-input" className="text-input"/>
                            </div>
                        </div>
                    </div>

                    <div id="role-section" className="input-section">
                        <div className="input-label">
                            <label id="role-label" className="text-uppercase">what best describes your role?</label>
                        </div>
                        <div>
                            <select name="role-select" id="role-select">
                                <option value="default">none</option>
                                {rolesOption}
                            </select>
                        </div>
                    </div>

                    <div id="gender-section" className="input-section">
                        <div className="input-label">
                            <label id="gender-label" className="text-uppercase">gender</label>
                        </div>
                        <div className="flex-row">
                            <div className="radio-group">
                                <input type="radio" name="gender-select" id="male-select" className="input-radio"
                                       value="male"/>
                                <label id="gender-label" className="text-capitalize">male</label>
                            </div>
                            <div>
                                <input type="radio" name="gender-select" id="female-select" className="input-radio"
                                       value="female"/>
                                <label id="gender-label" className="text-capitalize">female</label>
                            </div>
                        </div>
                    </div>

                    <div id="source-section" className="input-section">
                        <fieldset>
                            <legend className="text-uppercase">how did you find us?</legend>
                            <div className="checkbox-group">
                                <input type="checkbox" id="source-select-google" name="source-select-google"
                                       value="google" className="input-checkbox"></input>
                                <label className="text-capitalize">google</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="source-select-linkedin" name="source-select-linkedin"
                                       value="linkedin" className="input-checkbox"></input>
                                <label className="text-capitalize">linkedin</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="source-select-friend" name="source-select-friend"
                                       value="friend" className="input-checkbox"></input>
                                <label className="text-capitalize">referred by friend</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="source-select-other" name="source-select-other"
                                       value="other" className="input-checkbox"></input>
                                <label className="text-capitalize">other</label>
                            </div>
                        </fieldset>
                    </div>

                    <div id="terms-and-conditions-check" className="input-section">
                        <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions"
                               value="1" className="input-checkbox"></input>
                        <label className="text-uppercase">i agree to the <a href="/">terms and conditions</a></label>
                    </div>

                    <div className="flex-row">
                        <button type="submit" className="text-capitalize button" id="submit-button">submit</button>
                        <button type="reset" className="text-capitalize button" id="reset-button">reset</button>
                    </div>
                </div>
            </form>
        </div>
    );
}