
import { useState } from "react";

function Input(){
    const [form, setForm] = useState({
        name : "", surname :""
    });
 
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return(
        <div>
          name <br />
        <input name="name" value={form.name} onChange = {onChangeInput}/> <br />

        surname <br />
        <input name="surname" value={form.surname} onChange = {onChangeInput}/> <br />
            
        
        

        </div>
    )
}

export default Input;
