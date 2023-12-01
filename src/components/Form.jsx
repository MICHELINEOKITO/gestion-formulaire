import React from "react";


const Form = () => {
    return(
        <>
        <form>
            <h1>Contactez- <span>nous</span></h1>
            <input type="text" name="name"  placeholder="Entrer votre nom"/>
            <input type="email" name="email" id="" placeholder="michline.okito@gmail.com"/>
            <input type="phone" name="phone" id="" placeholder="+243"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Taper ici..."/>
            <button type="submit">Envoyer</button>
        </form>

        </>

    )
    
}
export default Form;