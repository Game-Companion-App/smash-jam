import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Chat.scss";

export default () => {
  const [chatSize, setChatSize] = useState("collapsed");

  // return id ? (
  //   <section className={`chat chat-${chatSize}`}>
  //     {chatSize === 'collapsed' ?
  //         <div className='chat-size-toggle' onClick={() => setChatSize('expanded')}>︽</div>
  //       :
  //         <div className='chat-size-toggle' onClick={() => setChatSize('collapsed')}>︾</div>
  //     }
  //     <div id="online">Online: <Online data={online} /> </div>
  //     <div className='chat-box'>
  //       <div id="messages"><Messages data={messages} /></div>
  //       <div className='chat-message-input'>
  //         <form onSubmit={e => handleSend(e)} style={{display: 'flex'}}>
  //             <input id="m" onChange={e=>setInput(e.target.value)} value={input} /><button style={{width:'75px'}} type="submit">Send</button>
  //         </form>
  //       </div>
  //     </div>
  //   </section>
  // ) : (
  //   <div className={`login chat-${chatSize}`}>
  //   {chatSize === 'collapsed' ?
  //       <div className='chat-size-toggle' onClick={() => setChatSize('expanded')}>︽</div>
  //     :
  //       <div className='chat-size-toggle' onClick={() => setChatSize('collapsed')}>︾</div>
  //   }
  //     <div className='chat-login-input'>
  //       <form onSubmit={event => handleSubmit(event)}>
  //         <input id="name" onChange={e => setNameInput(e.target.value)} required placeholder="Pick A Username" /><br />
  //         {/* <input id="room" onChange={e => setRoom(e.target.value)} placeholder="Room Name" /><br /> */}
  //         <button type="submit">Join Chat</button>
  //       </form>
  //     </div>
  //   </div>
  // );
};
