import React, { useState } from "react";

function Contact(props) {
    const[formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;      
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`${formData.name}Thanks for sending a message`)

        setFormData ({
            name: '',
            email: '',
            message: ''
        })
    }



    return (
    <main>
        <h1>Contact</h1>
        <section>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name" className="col-75">
                Name
                <input 
                id="name" 
                name="name" 
                type="text" 
                value={formData.name}
                onChange={handleInputChange}
                />
            </label>
            </div>

            <div>
            <label htmlFor="email" className="col-75">
                Email
                <input 
                id="email" 
                name="email" 
                type="text" 
                value={formData.email} 
                onChange={handleInputChange}
                />
            </label>
            </div>

            <div>
            <label htmlFor="message" className="col-75">
                Message
                <textarea 
                id="message" 
                name="message"                
                value={formData.message}
                onChange={handleInputChange}
                />
            </label>
            </div>

            <button type="submit">Submit</button>
        </form>
        </section>
    </main>
    );
}

export default Contact;
