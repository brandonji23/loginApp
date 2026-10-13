import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


export default function Register({onLogin}) {
   let { register, handleSubmit, watch, formState: {errors} } = useForm();
    let contra = watch("contrasena")
    let navigate = useNavigate(); 
    let onSubmited = async (data) => {
    try { 
      let res = await axios.post("http://localhost/loginApi/register", {
        nombre : data.nombre,
        correo: data.correo,
        contrasena : data.contrasena
      });
      alert(res.data.message)
      onLogin();
      navigate("/Dashboard")
      console.log("Respuesta de el servidor.")
      console.log(res);
    }catch(error){
      console.log(error)
    } 
  };



  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <dix className="col-sm-8">
          <h1 className='text-center text-primary my-5'>Formulario de registro</h1>

        </dix>
        <dix className="col-sm-8">
          <form onSubmit={handleSubmit(onSubmited)} className='bg-black p-3 rounded'>
             <div className="mb-3">
              <label className="form-label">name</label>
              <input type="text" {...register("nombre", {required:true})} className="form-control"/>
              {
                errors.nombre && <p className='text-danger'>Debes de escribir un nombre</p> 
              }
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" {...register("correo", {required:true})} className="form-control" aria-describedby="emailHelp" />
              {
                errors.correo && <p className='text-danger'>Debes de escribir un correo</p> 
              }
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" {...register("contrasena", {required:true})} className="form-control" /> 
              {
                errors.contrasena && <p className='text-danger'>Debes de escribir una contraseña</p>
              }
            </div>
            <div className="mb-3">
              <label className="form-label">verify Password</label>
              <input type="password" 
                {...register("confirmar_contrasena", 
                  {required: "Por favor digita una contraseña",
                    validate: (value) => value == contra || "La contraseña no coincide."
                  })
            
                 } className="form-control" /> 
              {
                errors.confirmar_contrasena && <p className='text-danger' > {errors.confirmar_contrasena.message} </p>
              }
            </div>
            <div className="mb-3 form-field">
              <input type="checkbox" id="exampleCheck1" className="check" />
              <label>Check me out</label>
            </div>
            <button type="submit" className="btn-solid theme-primary">Submit</button>
          </form>
        </dix>
      </div>
    </div>
    
    </>
  )
}
