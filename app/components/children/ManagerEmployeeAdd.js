var React = require("react");

var ManagerEmployeeAdd = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col m12">
                    <div className="section">
                        <div className="row">
                            <form className="col m12">
                                <div className="row">
                                    <div className="input-field col m6 s12">
                                        <label>First Name</label>
                                        <input id="firstName" type="text" className="validate"/>
                                    </div>
                                    <div className="input-field col m6 s12">
                                        <label>Last Name</label>
                                        <input id="lastName" type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m12 s12">
                                        <label>Address 1</label>
                                        <input id="addressOne" type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m12 s12">
                                        <label>Address 2</label>
                                        <input id="addressTwo" type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m6 s12">
                                        <label>City</label>
                                        <input id="city" type="text" className="validate"/>
                                    </div>
                                    <div className="input-field col m3 s6">
                                        <label>State</label>
                                        <select>
                                            {/* <option value="" disabled selected></option> */}
                                            <option value="AL">AL</option>
                                            <option value="AK">AK</option>
                                            <option value="AZ">AZ</option>
                                            <option value="AR">AR</option>
                                            <option value="CA">CA</option>
                                            <option value="CO">CO</option>
                                            <option value="CT">CT</option>
                                            <option value="DE">DE</option>
                                            <option value="FL">FL</option>
                                            <option value="GA">GA</option>
                                            <option value="HI">HI</option>
                                            <option value="ID">ID</option>
                                            <option value="IL">IL</option>
                                            <option value="IN">IN</option>
                                            <option value="IA">IA</option>
                                            <option value="KS">KS</option>
                                            <option value="KY">KY</option>
                                            <option value="LA">LA</option>
                                            <option value="ME">ME</option>
                                            <option value="MD">MD</option>
                                            <option value="MA">MA</option>
                                            <option value="MI">MI</option>
                                            <option value="MN">MN</option>
                                            <option value="MS">MS</option>
                                            <option value="MO">MO</option>
                                            <option value="MT">MT</option>
                                            <option value="NE">NE</option>
                                            <option value="NV">NV</option>
                                            <option value="NH">NH</option>
                                            <option value="NJ">NJ</option>
                                            <option value="NM">NM</option>
                                            <option value="NY">NY</option>
                                            <option value="NC">NC</option>
                                            <option value="ND">ND</option>
                                            <option value="OH">OH</option>
                                            <option value="OK">OK</option>
                                            <option value="OR">OR</option>
                                            <option value="PA">PA</option>
                                            <option value="RI">RI</option>
                                            <option value="SC">SC</option>
                                            <option value="SD">SD</option>
                                            <option value="TN">TN</option>
                                            <option value="TX">TX</option>
                                            <option value="UT">UT</option>
                                            <option value="VT">VT</option>
                                            <option value="VA">VA</option>
                                            <option value="WA">WA</option>
                                            <option value="WV">WV</option>
                                            <option value="WI">WI</option>
                                            <option value="WY">WY</option>
                                        </select>
                                    </div>
                                    <div className="input-field col m3 s6">
                                        <label>Zip</label>
                                        <input id="zip" type="number" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m12 s12">
                                        <label>Email</label>
                                        <input id="email" type="email" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m8 s8">
                                        <label>Phone</label>
                                        <input id="phone" type="number" className="validate"/>
                                    </div>
                                    <div className="input-field col m4 s4">
                                        <label>Type</label>
                                        <select>
                                            <option value="mobile">Mobile</option>
                                            <option value="work">Work</option>
                                            <option value="home">Home</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManagerEmployeeAdd;