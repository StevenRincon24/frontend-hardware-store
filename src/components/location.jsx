import React from "react";
import { Button } from "primereact/button";
import Header from "./header";
const Location = () => {
  return (
    <div>
      <Header
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          display: "block",
        }}
      />
      <div id="location" className="grid grid-nogutter text-800">
        <div className="col-12 md:col-7 p-6 text-center md:text-left flex align-items-center">
          <section>
            <span className="block text-900 font-bold  text-6xl mb-1">
              Nuestra Ubicación
            </span>

            <div className="text-2xl font-bold mb-3 text-blue-600">
              Visita nuestra ferretería en la ciudad de Duitama
            </div>

            <p className="mt-3 mb-4 text-lg text-900 line-height-3">
              Estamos ubicados en xxxxxx. Encuentra todo lo que necesitas para
              xxxx. ¡Te esperamos con el mejor servicio y productos de calidad.
            </p>

            <Button
              icon="pi pi-map-marker"
              label="¿Cómo llegar?"
              className="border-none bg-blue-600 font-normal line-height-3 px-3 text-white mt-2 mb-3 mr-3"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir//Salud+Vida+Carrera+18+%23+7A+-+35+Rosale+Sogamoso,+Boyac%C3%A1/@5.715456,-72.9362123,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e6a45d0c24f183b:0x6844a71263d96e5b!2m2!1d-72.9362136!2d5.7154539?entry=ttu",
                  "_blank"
                )
              }
            />

            <Button
              icon="pi pi-phone"
              label="Contáctanos"
              className="p-button-outlined text-blue-600 font-normal line-height-3 px-3 mt-2 mb-3"
              onClick={() =>
                window.open("https://wa.me/+573118617677", "_blank")
              }
            />
          </section>
        </div>

        <div className="col-12 md:col-5 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15879.935607634037!2d-72.9362123!3d5.715455999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a45d0c24f183b%3A0x6844a71263d96e5b!2sSalud%20Vida!5e0!3m2!1ses!2sco!4v1689304348857!5m2!1ses!2sco"
            width="100%"
            height="500px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación"
            style={{ border: "0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
