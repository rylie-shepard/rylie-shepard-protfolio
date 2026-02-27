import React from 'react';
import '/public/styles.css'

export default function ContactForm() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameField = document.querySelector('[name=your_name]');
        const emailField = document.querySelector('[name=email]');
        const messageField = document.querySelector('[name=message]');

        const nameValue = nameField.value;
        const emailValue = emailField.value;
        const messageValue = messageField.value;

        nameField.value = '';
        emailField.value = '';
        messageField.value = '';

        contactFormField(nameValue, emailValue, messageValue);
    }

    return (
        <div>
            <div className='contact-container'>
                <h2>Contact</h2>
                <p className="bg-dark row-item">If you would like to get in contact with me, you can leave your relivant details below and I will try to reach you in a timely mannor, via email, with a response.</p>
                <form action="#" method="GET" onSubmit={handleSubmit}>
                    <div>
                        <label> 
                            Your Name:
                            <input type="text" name="your_name" id="your_name" required placeholder="First and last name"/>
                        </label>
                    </div>
        
                    <div>
                        <label> 
                            Email:
                            <input type="email" name="email" id="email" required placeholder="sample@gmail.com"/>
                        </label>                
                    </div>

                    <div>
                        <label>
                            Message:
                            <textarea name="Message" id="message" cols="60" rows="10" placeholder="Please write your message here..."></textarea>
                        </label>
                    </div>

                    <div className='contact-button'>
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>

        </div>
    );
}