import React, { useState } from 'react'

function LearnForm() {


   //simple way
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // function handleFirstName(e) {
    //     setFirstName(e.target.value)
    // }
    // function handleLastName(e) {
    //     setLastName(e.target.value)
    // }

    

    //convenient way to handle multiple input fields
    const [formData, setFormData]=useState(
        {
            firstName:'',
            lastName:''
        }
    )

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    //form submit
    const handleFormSubmit=(e)=>{ 
        e.preventDefault()
        console.log(formData) //firstName: 'sefewf', lastName: 'erfwefw'}

    }



    return (
        <div>

            {/* not recomended way */}
            {/* <form >
        First Name: <input type="text" name="firstName" value={firstName} onChange={handleFirstName}/> <br />
        Last Name: <input type="text" name="lastName" value={lastName} onChange={handleLastName}/> <br />

        <button type="submit">Submit</button>
      </form> */}


            <form onSubmit={handleFormSubmit}>
                First Name: <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /> <br />
                Last Name: <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LearnForm
