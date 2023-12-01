import React from "react";
import { useState } from "react";


const Form = () => {
    // ce composant form va nous permettre d'afficher l'UI du formul et gérer les entrés des utilisateurs

         const [data, setData] = useState ({name:"", email:"", phone:"", message: ""});
         // data est un objet qui a 4 propriétées

        const handleChange = (e) =>{
            const name = e.target.name;
            const value= e.target.value;
            setData({...data,[name]: value})


    }
        const handleSubmit = (e) =>{
            e.preventDefault();
            alert(data)

        }
    
    return(
        <>
        <form method="post" onSubmit={handleSubmit}>
            <h1>Contactez- <span>nous</span></h1>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name}  placeholder="Entrer votre nom"/>
            <input type="email" name="email" id="" onChange={handleChange} value={data.email}placeholder="michline.okito@gmail.com"/>
            <input type="number" name="phone" id=""  onChange={handleChange} value={data.phone}placeholder="+243"/>
            <textarea name="message" id="" cols="30" rows="10"  onChange={handleChange} value={data.message} placeholder="Taper ici..."/>
            <button type="submit">Envoyer</button>
        <p>{data.name},{data.email},{data.phone},{data.message}</p>
        </form>
       

        </>

    )
    
}
export default Form;