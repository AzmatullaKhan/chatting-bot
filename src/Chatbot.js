import "./Chatbot.css"
import Questions from './Questions'

function Chatbot() {

  // document.getElementById('chat_container').scroll(0,0)

  window.addEventListener('beforeunload',(e)=>{
    e.preventDefault();
  })

  const SenderMessageGenerator=async()=>{

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
      document.getElementById('sender-input').readOnly=true
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

      let reply_img=document.createElement('img');
      reply_img.src=require('./images/robot.png');
      reply_img.className='reply-image'
      reply_img.alt='bot'

      let dots_div=document.createElement('div')
      dots_div.className='dot-container'
      dots_div.id='dots'

      let dot1_p=document.createElement('p')
      dot1_p.innerText="•"
      dot1_p.className="dot1"
    
      let dot2_p=document.createElement('p')
      dot2_p.innerText="•"
      dot2_p.className="dot2"

      let dot3_p=document.createElement('p')
      dot3_p.innerText="•"
      dot3_p.className="dot3"

      let dot4_p=document.createElement('p')
      dot4_p.innerText="•"
      dot4_p.className="dot4"

      let dot5_p=document.createElement('p')
      dot5_p.innerText="•"
      dot5_p.className="dot5"

      let reply_div=document.createElement('div')
      reply_div.className="receiver"

      let reply_p=document.createElement('p')
      reply_p.textContent=reply
      reply_p.id="reply"
      reply_p.className="reply-message-hidden"

      function gap() {
        document.getElementById('dots').className='dots-hidden'
        document.getElementById('dots').id=''
        document.getElementById('reply').className='reply-message'
        document.getElementById('reply').id=''
        chat_container.scrollTop=chat_container.scrollHeight
        document.getElementById('sender-input').readOnly=false
      }
      
      setTimeout(gap, 1800);

      dots_div.appendChild(dot1_p)
      dots_div.appendChild(dot2_p)
      dots_div.appendChild(dot3_p)
      dots_div.appendChild(dot4_p)
      dots_div.appendChild(dot5_p)
      
      reply_div.appendChild(reply_img)
      reply_div.appendChild(dots_div)
      reply_div.appendChild(reply_p)

      chat_container.appendChild(reply_div)

      chat_container.scrollTop=chat_container.scrollHeight

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
            <img src={require('./images/robot.png')} alt='bot' className="reply-image"/>
            <p>I am a chatbot made by Azmatulla</p>
          </div>
          <div className="receiver">
            <img src={require('./images/robot.png')} alt='bot' className="reply-image"/>
            <p>Still there are some  upgrades need to be made</p>
          </div>
          <div className="receiver">
            <img src={require('./images/robot.png')} alt='bot' className="reply-image"/>
            <p>Pleasure to have you here</p>
          </div>
          <div className="receiver">
            <img src={require('./images/robot.png')} alt='bot' className="reply-image"/>
            <p>Hi</p>
          </div>
        </div>
          <div className="keypad-container">
            <input type="text" className="keypad-input" placeholder="Enter the message here" id="sender-input"/>
            <button onClick={SenderMessageGenerator}>Send</button>
          </div>
      </div>
      <footer>
      <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
      </footer>
    </div>
  );
}

export default Chatbot;
