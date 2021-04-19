import {useEffect, useState} from 'react'

const useForm= (Validateinfo) =>{
    const [values, setvalues] = useState({
        username: '',
        email: '',
        password:'',
        password2:''
    })

    const [errors, seterrors] = useState({})



    const handleChange = e =>{
        const {name, value}= e.target
        setvalues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()

        seterrors(Validateinfo(values))
    }

    return{handleChange, handleSubmit, values, errors}
}

export default useForm
