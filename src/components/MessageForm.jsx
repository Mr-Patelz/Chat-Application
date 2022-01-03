import { useState } from "react";
//import { SendOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {

        const [value, setValue] = useState('');
        const { chatId, creds } = props;

        const handleChange = (event) => {
            setValue(event.target.value);

            isTyping(props, chatId);
        };

        const handleSubmit = (event) => {
            event.preventDefault();

            const text = value.trim();

            if(text.length > 0) {
                sendMessage(creds, chatId, {text});
            }

            setValue('');
        };

        return (
            <form className="message-form" onSubmit={handleSubmit} >

                <input className="message-input"
                        placeholder="Send message"
                        value={value}
                        onChange={handleChange}
                        onSubmit={handleChange}
                    />
            </form>
        );
};

export default MessageForm;