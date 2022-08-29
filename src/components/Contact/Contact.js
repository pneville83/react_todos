import './Contact.css';

function Contact (){
  return (
    <div id="contact">
      <div class="form">
        <div class="form-1">
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" required />
          <label for="correo">Correo Electrónico</label>
          <input type="email" name="correo" id="correo" placeholder="Correo electrónico..." required />
          <label for="comments">¿En Que Pdemos Ayudarte Hoy?</label>
          <textarea id="comments" name="comments" rows="15" cols="80"></textarea>
          <div class="button__comments">
            <button class="button-1"type="submit">Enviar</button>
          </div>
        </div>  
      </div>
    </div>
  );
}
export default Contact;