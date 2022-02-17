import React, {useContext} from "react";
import {TestContext} from "./TestContext";

export default function HomeComponent(){

    const [values, handleChange] = useContext(TestContext);

    return(
        <React.Fragment>
            <div className='form-inputs'>
                <label className='form-label'>Password</label>
                <input
                    className='form-input'
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Confirm Password</label>
                <input
                    className='form-input'
                    type='password'
                    name='password2'
                    placeholder='Confirm your password'
                    value={values.password2}
                    onChange={handleChange}
                />
            </div>
        </React.Fragment>
    );
};