import Contact from "./Components/Contact";
import axios from 'axios';
import { useState } from "react";

function DateContact() {
    const [contactInfo,setInfoContact] = useState({name:"",phone:"",email:"",message:""});
    const [success,setSuccess] = useState(false);
    const [error,setError]= useState(false);

    const disableEnviar = !(contactInfo.name && contactInfo.phone && contactInfo.email && contactInfo.message);

    const handleChange= (event) => {
    if (success) setSuccess(false);
    if (error) setError(false);
        const valorPropiedad = event.target.value;
        const propiedad = event.target.id;
        //console.log(valorPropiedad,propiedad)

        setInfoContact({...contactInfo,[propiedad]:valorPropiedad});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("La Info ingresada es:" , contactInfo)
        axios({
            method: "POST",
            url:"http://localhost:8080/formulariopin/public/api/insertContacto?",
            data:contactInfo

        }).then(
            response => {
                setSuccess(true)
                console.log(response.data)
                setInfoContact({name:"",phone:"",email:"",message:""})
            }
            )
            .catch(
                error =>{
                    setError(true)
                    console.log(error) 
                }
                  
            )
    
    }

    return (
        <section id="contact">
            <h1>Contactanos</h1>
            <Contact handleChange={handleChange} handleSubmit={handleSubmit} contactInfo={contactInfo} disableEnviar={disableEnviar}/>
            { success &&
            <div class="alert alert-success" role="alert">
            Se registraron los datos y se envio el mail correctamente
            </div>
            }
            { error &&
            <div class="alert alert-danger" role="alert">
            Verifique el error porque no pudimos procesar el registro de registro de contacto
            </div>
            }
            
            
            
            
            
        </section>
    )
};

export default DateContact;