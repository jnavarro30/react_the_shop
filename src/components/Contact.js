import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// styles
import { StyledContact } from './styled/Contact.styled';
import { StyledButton } from './styled/Button.styled';

function Contact() {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userMessage, setUserMessage] = useState('')
    const history = useHistory()

    const handleOnChange = e => {
        const userInput = e.target.id
        const val = e.target.value
        
        switch (userInput) {
            case 'name':
                setUserName(val)
                break
            case 'email':
                setUserEmail(val)
                break
            default: setUserMessage(val)  
        }
    }

    const handleSubmit = e => {
        console.log(userName, userEmail, userMessage)

    }

    return (
        <StyledContact>
            <form className='container' action="https://formsubmit.co/jnavarro0789@gmail.com" method='POST' encType="multipart/form-data">
                <h1>Contact Us</h1>
                <label htmlFor='name'>
                    <span>full name</span>
                    <input id='name' name='name' type='text' value={userName} onChange={handleOnChange} placeholder='first last'/>
                </label>
                <label htmlFor='email'>
                    <span>email</span>
                    <input id='email' type='email' name='email' value={userEmail} onChange={handleOnChange} placeholder='email'/>
                </label>
                <label htmlFor='message'>
                    <span id='mssg'>message</span>
                    <textarea id='message' name='message' value={userMessage} onChange={handleOnChange}></textarea>
                </label>
                <div className="contact_icons">
                    <i className="bi bi-telephone-fill"></i>
                    <i className="bi bi-envelope-fill"></i>
                </div>
                <StyledButton type='submit'>Send</StyledButton>
                <StyledButton onClick={() => history.push('/')}>Home</StyledButton>
            </form>
        </StyledContact>
    )
}

export default Contact
