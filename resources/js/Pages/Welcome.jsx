// src/components/Welcome.js
import React, { useState } from "react";
import fondo from "../../img/fondo.jpg";
import "../../css/inicio-planif.css";

function Welcome() {

    return (
        <div className="fondo">
            <div className="contenedor">
                <div className="contendor-titulo-subtitulo">
                    <h1 className="typewriter">Planificador de comidas personalizado</h1>
                    <h2 className="typewriter-delay">
                        Diseña tu plan de comidas ideal basado en tus objetivos y preferencias
                    </h2>
                    <button className="button-63" role="button" >
                        Comenzar
                    </button>
                </div>
               
            </div>
        </div>
    );
}

export default Welcome;
