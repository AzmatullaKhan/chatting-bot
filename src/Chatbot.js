import "./Chatbot.css"
import Questions from './Questions'

function Chatbot() {

  window.addEventListener('beforeunload',(e)=>{
    e.preventDefault();
  })

  const SenderMessageGenerator=()=>{

    let sender_input=document.getElementById('sender-input').value;

    const sender_alpha_contain=sender_input.toLowerCase();
    let is_alpha_contain=false
    for(let i=0;i<sender_alpha_contain.length;i++){
      if(sender_alpha_contain[i]!==" "){
          is_alpha_contain=true;
          break;
      }
    }

    document.getElementById('sender-input').value=""

    if(is_alpha_contain){

      let chat_container=document.getElementById('chat_container');

      let sender_div=document.createElement('div')
      sender_div.className="sender"

      let sender_p=document.createElement('p')
      sender_p.textContent=sender_input

      sender_div.appendChild(sender_p)

      chat_container.appendChild(sender_div)

      let reply;
      Questions.forEach(element => {
        if(element.question === sender_alpha_contain){
            reply=element.answer;
        }
        if(!reply){
          reply="hmm"
        }
      });
      console.log(reply)
      let reply_div=document.createElement('div')
      reply_div.className="receiver"

      let reply_p=document.createElement('p')
      reply_p.textContent=reply

      reply_div.appendChild(reply_p)

      chat_container.appendChild(reply_div)

    }
    else{
      alert('Enter the message')
    }
  }
  return (
    <div className="main-background">
      <div className="main-container">
        <div className="chat-container" id="chat_container">
          <div className="receiver">
            <p>Hi, Pleasure to have you here</p>
          </div>
        </div>
          <div className="keypad-container">
            <input type="text" className="keypad-input" placeholder="Enter the message here" id="sender-input"/>
            <button onClick={SenderMessageGenerator}>Send</button>
          </div>
      </div>
    </div>
  );
}

export default Chatbot;
