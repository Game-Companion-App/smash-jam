import React, { useState, useEffect } from "react";
import useSocket from "use-socket.io-client";
import { useImmer } from "use-immer";
import "./Chat.scss";

const Messages = (props) =>
  props.data.map((m) =>
    m[0] !== "" ? (
      <li>
        <strong>{m[0]}:</strong> <div className="innermsg">{m[1]}</div>
      </li>
    ) : (
      <li className="update">{m[1]}</li>
    )
  );

const Online = (props) => props.data.map((m) => <li id={m[0]}>{m[1]}</li>);

export default () => {
  const [chatSize, setChatSize] = useState("collapsed");

  const [id, setId] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [room, setRoom] = useState("");
  const [input, setInput] = useState("");

  const [socket] = useSocket("https://open-chat-naostsaecf.now.sh");
  socket.connect();

  const [messages, setMessages] = useImmer([]);
  const [online, setOnline] = useImmer([]);

  useEffect(()=>{
    socket.on('message que',(nick,message) => {
      setMessages(draft => {
        draft.push([nick,message])
      })
    });

    socket.on('update',message => setMessages(draft => {
      draft.push(['',message]);
    }));

    socket.on("people-list", (people) => {
      let newState = [];
      for (let person in people) {
        newState.push([people[person].id, people[person].nick]);
      }
      setOnline(draft=>{draft.push(...newState)});
      console.log(online)
    });

    socket.on('add-person',(nick,id)=>{
      setOnline(draft => {
        draft.push([id,nick])
      })
    });

    socket.on("remove-person", (id) => {
      setOnline((draft) => draft.filter((m) => m[0] !== id));
    });

    socket.on("chat message", (nick, message) => {
      setMessages((draft) => {
        draft.push([nick, message]);
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameInput) {
      return alert("Name can't be empty");
    }
    setId(nameInput);
    socket.emit("join", nameInput, room);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input !== "") {
      socket.emit("chat message", input, room);
      setInput("");
    }
  };

  return id ? (
    <section className={`chat chat-${chatSize}`}>
      {chatSize === 'collapsed' ?
          <div className='chat-size-toggle' onClick={() => setChatSize('expanded')}>︽</div>
        :
          <div className='chat-size-toggle' onClick={() => setChatSize('collapsed')}>︾</div>
      }
      <div id="online">Online: <Online data={online} /> </div>
      <div className='chat-box'>
        <div id="messages"><Messages data={messages} /></div>
        <div className='chat-message-input'>
          <form onSubmit={e => handleSend(e)} style={{display: 'flex'}}>
              <input id="m" onChange={e=>setInput(e.target.value)} value={input} /><button style={{width:'75px'}} type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  ) : (
    <div className={`login chat-${chatSize}`}>
    {chatSize === 'collapsed' ?
        <div className='chat-size-toggle' onClick={() => setChatSize('expanded')}>︽</div>
      :
        <div className='chat-size-toggle' onClick={() => setChatSize('collapsed')}>︾</div>
    }
      <div className='chat-login-input'>
        <form onSubmit={event => handleSubmit(event)}>
          <input id="name" onChange={e => setNameInput(e.target.value)} required placeholder="Pick A Username" /><br />
          {/* <input id="room" onChange={e => setRoom(e.target.value)} placeholder="Room Name" /><br /> */}
          <button type="submit">Join Chat</button>
        </form>
      </div>
    </div>
  );
};
