import {Message} from "semantic-ui-react";
import React from "react";
import '../styles/error-popup.css'

function ErrorMessage({message, onDismiss}) {
    if (message === null || message === undefined) {
        message = "An error occurred while making the request.";
    }
    return (<div>
            <Message
                negative
                header="Помилка!"
                content={message}
                onDismiss={() => onDismiss()}
                className="error-popup"
            />
        </div>
    )
}

export default ErrorMessage;