import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Dashboard({onLogout, user}) {


  return (
   <>
   <div className="container">
      <div className="row justify-content-around">
          <div className="col-sm-6">
            <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          </ul>
          </div>
          <div className="col-sm-6 ">
          <ul>
            <li class="nav-item justify-content-end">
              <a class="nav-link"><span className='btn btn-danger' onClick={onLogout}>Cerrar sesion</span></a>

            </li>
          </ul>
          </div> 
      </div>
   </div>

      <div className="container text-primary">
        <h1>Bienvenido {user}</h1>
      </div>

   </>
  )
}
