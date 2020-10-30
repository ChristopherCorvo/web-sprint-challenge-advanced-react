// write your custom hook here to control your checkout form
import react, { useState } from 'react'


export const useForm = (initalValue) => {
    const [value, setValue ] = useState(initalValue)
    
    // this was removed from CheckoutForm.js
    const handleChanges = (e) => {
        setValue({ 
                    ...value,
                    [e.target.name]: e.target.value 
                });
      };

      
    return ([value, handleChanges]) // this will become the state controllers in CheckoutForm.js

}