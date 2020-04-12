import React, {useState} from 'react';
import Input from './Input';
import Data from './Data';
import styles from './Form.module.css';
const Form = props => {
    const [form, setForm] = useState({
        fn: '',
        ln: '',
        em: '',
        pw: '',
        cp: '',
        submitted: false
    })

    return(
        <div>
            {form.submitted ? <h1 className={styles.success}>You Have Submitted This Form</h1> : <h1>You Have Not Submitted This Form</h1>}

            <Input form={form} setForm={setForm}/>
            <Data form={form}/>
        </div>
    )
} 

export default Form;