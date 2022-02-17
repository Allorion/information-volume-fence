import React, {useState} from 'react';
import {TextField} from "@mui/material";
import HomeComponent from "./HomeComponent";
import useForm from "../global-components/hooks/useForm";
import {TestContext} from "./TestContext";

export default function Home() {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const { handleChange } = useForm(setValues);
    console.log(values)

    return(
      <React.Fragment>
          <div className='form-content-right'>
              <form className='form' noValidate>
                  <h1>
                      Get started with us today! Create your account by filling out the
                      information below.
                  </h1>
                  <div className='form-inputs'>
                      <label className='form-label'>Username</label>
                      <TextField
                          name='username'
                          value={values.username}
                          onChange={handleChange}
                          label="Водопользователь (по справочнику)"
                          variant="standard"
                          helperText='Выберите водопользователя из справочника'
                      />
                  </div>
                  <div className='form-inputs'>
                      <label className='form-label'>Email</label>
                      <input
                          className='form-input'
                          type='email'
                          name='email'
                          placeholder='Enter your email'
                          value={values.email}
                          onChange={handleChange}
                      />
                  </div>
                  <TestContext.Provider value={[values, handleChange]}>
                    <HomeComponent/>
                  </TestContext.Provider>

                  <button className='form-input-btn' type='submit'>
                      Sign up
                  </button>
              </form>
          </div>
      </React.Fragment>
    );
}