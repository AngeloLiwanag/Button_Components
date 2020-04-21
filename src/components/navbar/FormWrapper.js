import React from 'react';
import Form from './Form';

const FormWrapper = e => {
    const formWrap = {
        padding: '50px',
        border: 'solid 1px purple'
    }
    return(
        <div style={formWrap}>
            <Form/>
        </div>
    )
}
export default FormWrapper;