import './Formulario.css'
import {useState} from 'react'

function Formulario(props){

    const[datos, setDatos] = useState ({
        firstname: '',
        lastname: '',
        email:'',
        password:'',
        confirmPassword:''
      });

    const cambiarDatos = (e) => {
        setDatos({
          ...datos,
          [e.target.name]: e.target.value
        });
    };

    return (
        <div className='formulario'>
            <form>
                <div>
                    <label  htmlFor='firstname'>First Name:</label>
                    <input  type='text' name='firstname' value = {datos.firstname}
                            onChange = {(e) => cambiarDatos(e) }></input>
                    {
                        (datos.firstname.length<2) && (datos.firstname!=='')?
                        <p className='error'> First Name must have at least 2 characters. </p> :
                        ''
                    }
                </div>
                <div>
                    <label  htmlFor='lastname'>Last Name:</label>
                    <input  type='text' name='lastname' value = {datos.lastname}
                            onChange = {(e) => cambiarDatos(e)}/>
                    {
                        (datos.lastname.length<2) && (datos.lastname!=='')?
                        <p className='error'> Last Name must have at least 2 characters. </p> :
                        ''
                    }
                </div>
                <div>
                    <label  htmlFor='email'>Email:</label>
                    <input  type='text' name='email' value = {datos.email}
                            onChange = {(e) => cambiarDatos(e)}/>
                    {
                        (datos.email.length<5) && (datos.email!=='')?
                        <p className='error'> Email must have at least 5 characters. </p> :
                        ''
                    }
                </div>
                <div>
                    <label  htmlFor='password'>Password:</label>
                    <input  type='password' name='password' value = {datos.password}
                            onChange = {(e) => cambiarDatos(e)}/>
                    {
                        (datos.password.length<8) && (datos.password!=='')?
                        <p className='error'> Password must be at least 8 characters. </p> :
                        ''
                    }
                </div>
                <div>
                    <label  htmlFor='confirmPassword'>Confirm Password:</label>
                    <input  type='password' name='confirmPassword' value = {datos.confirmPassword}
                            onChange = {(e) => cambiarDatos(e)}/>
                    {
                        (datos.password!==datos.confirmPassword)?
                        <p className='error'> Passwords must match. </p> :
                        ''
                    }
                </div>
            </form>
        </div>
    )
}

export default Formulario;