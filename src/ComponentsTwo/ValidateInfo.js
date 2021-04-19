export default function Validateinfo(values){
    let errors = {}
    if(!values.username.trim()){
        errors.username='Username Required'
    }

    //Email
    if(!values.email){
        errors.email='Email Required'
    }else if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
        values.email
      )){
          errors.email='Email address is invalid'
      }

      //passowrd
      if(!values.password){
          errors.password='password is required'
      }else if(values.password.length > 6){
          errors.password='password needs to be 6 characters or more'
      }

      //confirm password
      if(!values.password2){
          errors.password2='password is required'
      }else if(values.password2 !== values.password){
          errors.password2 ='Password do not match'
            
        }

        return errors;


}