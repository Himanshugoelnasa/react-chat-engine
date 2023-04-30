import React from 'react';
import {
    MultiChatWindow,
    MultiChatSocket,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';



const ChatsPage = (props) => {

    console.log(props.user.username);

    const chatProps = useMultiChatLogic(
        'e6e4938c-e14d-4a91-93e3-8c4b0ad1d525',
        props.user.username,
        props.user.secret,
    );


    return (
        <div style={{ height: "100vh" }}>
            <MultiChatWindow {...chatProps} />
            <MultiChatSocket {...chatProps} style={{ height: "100%" }} />
        </div>
    );
};
export default ChatsPage;