import { useState } from 'react';
import axios from 'axios';

const projectID = 'e39a5fb5-d78c-44af-8a98-0b3bccd3ba2c';

const Modal = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'project-ID' : projectID, 'user-name': username, 'User-Secret': password };
        
        try{
            await axios.get('https://api.chatengine.io/chats', { headers : authObject });
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        }
        catch ( err )
        {
            setError('Incorrect credentials..');
        }
        
    }
    return (
        <div className="wrapper">
            <div className="form" >
                <h1 className="title"> Chat Application</h1>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" value = {username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type = "password" value = {password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div className="center">
                        <button type = "submit" className=' button' >
                            <span>
                                Login
                            </span>
                        </button>
                    </div>
                </form>
                <h1> { error }</h1>
            </div>
        </div>
       
    );
}

export default Modal;