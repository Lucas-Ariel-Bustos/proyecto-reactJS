import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div>
        <hr />
        <div className='footer'>
          <div className='redes'>
            <a className='enlacesContactos' href="https://www.instagram.com" target="_blank">
              <i class="bi bi-instagram"> instagram</i>
            </a>
            <a className='enlacesContactos' href="https://www.facebook.com" target="_blank">
              <i class="bi bi-facebook"> facebook</i>
            </a> 
          </div>
          <div className='contactos'>
            <a className='enlaceContactoWhatsApp' href="https://.whatsapp.com" target="_blank">
              <i class="bi bi-whatsapp"> 231000654</i>
            </a>
            <i class="bi bi-house">
              <p>Tienda física en calle Nolose 123- Ciudad de Mendoza</p>
            </i>
          </div>
        </div>
    </div>
  )
}