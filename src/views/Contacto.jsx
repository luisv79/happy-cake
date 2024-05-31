const Contacto = () =>{
    return (
        <>
        <div className="container centrar mt-5">
            
        <h1>Cuentanos, ¿En que podemos ayudar?</h1>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com"/>
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  
  <button type="submit" className="btn btn-danger">Enviar</button>
</form>
        </div>
        </>
    )
}

export default Contacto