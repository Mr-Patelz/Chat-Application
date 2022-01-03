import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = ' e39a5fb5-d78c-44af-8a98-0b3bccd3ba2c ';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height ="100vh"
            projectID = { projectID }
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            onNewMessage = { () => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3")}
        />   
    )
}

export default App;