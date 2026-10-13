import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Login({onLogin}) {
  let { register, handleSubmit, formState: {errors} } = useForm();
  let navigate = useNavigate();
  let onSubmited = async (data) => {
    try { 
      let res = await axios.post("http://localhost/loginApi/login", data);
      alert("Bienvenido " + res.data.nombre);
      onLogin(res.data.nombre);
      navigate("/Dashboard")
      console.log("Respuesta de el servidor.")
      console.log(res);
    }catch(error){
      console.log(error)
      alert("usuario y/o contraseña es incorrecto.")
    }
  };

    
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <dix className="col-sm-8">
          <h1 className='text-center text-primary my-5'>Formulario de ingreso</h1>

        </dix>
        <dix className="col-sm-8">
          <form onSubmit={handleSubmit(onSubmited)} className='bg-black p-3 rounded'>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" {...register("correo", {required:true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {
                errors.correo && <p className='text-danger'>Debes de escribir un correo</p> 
              }
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" {...register("contrasena", {required:true})} className="form-control" id="exampleInputPassword1" /> 
              {
                errors.contrasena && <p className='text-danger'>Debes de escribir una contraseña</p>
              }
            </div>
            <div className="mb-3 form-field">
              <input type="checkbox" id="exampleCheck1" className="check" />
              <label for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn-solid theme-primary">Submit</button>
          </form>
        </dix>
      </div>
    </div>
    
    </>

  )
}
