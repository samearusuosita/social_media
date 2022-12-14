import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { addMessage, getMessages } from "../../api/MessageRequests";
import "./ChatBox.scss";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
// import Picker from "emoji-picker-react";
import { getUser } from "../../api/UserRequest";


// stopped at 1:31


const ChatBox = ({ chat, currentUser, setSendMessage,  receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);

//   fetcting messages from database
  const [newMessage, setNewMessage] = useState("");


  // fetching data for chat box 
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetching messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  //   setting new mssage for emoji
  const handleChange = (newMessage)=> {
    setNewMessage(newMessage)
  }

  // Scroll to last Message
  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])



  // Send Message
  const handleSend = async(e)=> {
    e.preventDefault()
    const message = {
      senderId : currentUser,
      text: newMessage,
      chatId: chat._id,
  }
  const receiverId = chat.members.find((id)=>id!==currentUser);
  // send message to socket server
  setSendMessage({...message, receiverId})
  // send message to database
  try {
    const { data } = await addMessage(message);
    setMessages([...messages, data]);
    setNewMessage("");
  }
  catch
  {
    console.log("error")
  }
}

// Receive Message from parent component
useEffect(()=> {
  console.log("Message Arrived: ", receivedMessage)
  if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
    setMessages([...messages, receivedMessage]);
  }

},[receivedMessage])


// scrolling the pages to the last message
  const scroll = useRef();
  const imageRef = useRef();


// // emoji
//   const [chosenEmoji, setChosenEmoji] = useState(null);

//   const onEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject);
//   };


  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower-chatBox">
                <div>
                  <img
                    src={
                      userData?.profilePicture
                        ? process.env.REACT_APP_PUBLIC_FOLDER +
                          userData.profilePicture
                        : process.env.REACT_APP_PUBLIC_FOLDER +
                          "defaultProfile.jpg"
                    }
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="chatBox-name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {userData?.firstname} {userData?.lastname}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chatbox massage */}
            <div className="chat-body" >
              {messages.map((message) => (
                <>
                {/* change class name if massage is not from us */}
                  <div ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    {/* usinf timeago to formate the date and time */}
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
                {/* adding image and file to chats */}
              <div onClick={() => imageRef.current.click()}>+</div>
              {/* using input emoji in chats */}
              
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
                placeholder="Type a message"
                cleanOnEnter = {true}
                height= "auto"
                theme="auto"
                className="React-inputEmoji"
              />

              {/* <textarea cols="20" rows="5" className="inputtext" value={newMessage}
                onChange={handleChange}
                placeholder="Type a message"></textarea> */}
              
              
              
              {/* <input type="text" className="chatInput"/> */}



               {/* <div>
                  {chosenEmoji ? (
                  <span>You chose: {chosenEmoji.emoji}</span>
                  ) : (
                  <span>No emoji Chosen</span>
                  )}
                  <Picker onEmojiClick={onEmojiClick} />
                </div> */}



              {/* sending message to users */}
              <div className="send-button button" onClick = {handleSend}>Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;