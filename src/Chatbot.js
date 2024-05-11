import "./Chatbot.css"
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
    }
    else{
      alert('Enter the message')
    }
  }
  return (
    <div className="main-background">
      <div className="chat-container" id="chat_container">
        <div className="sender">
          <p>Example message from sender</p>
        </div>
        <div className="receiver">
          <p>Example message from Receiver</p>
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
