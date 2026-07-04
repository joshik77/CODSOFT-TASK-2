const chatBox=document.getElementById("chatBox");
const input=document.getElementById("userInput");

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});

function addMessage(text,type){

const div=document.createElement("div");

div.className=`message ${type}`;

div.innerHTML=text;

chatBox.appendChild(div);

chatBox.scrollTop=chatBox.scrollHeight;

}

function sendMessage(){

let msg=input.value.trim();

if(msg==="") return;

addMessage(msg,"user");

input.value="";

setTimeout(()=>{

reply(msg.toLowerCase());

},500);

}

function reply(message){

let ans="";

if(message.includes("hello")||message.includes("hi")){

ans="👋 Hello! Nice to meet you.";

}

else if(message.includes("how are you")){

ans="😊 I'm doing great! Thanks for asking.";

}

else if(message.includes("your name")){

ans="🤖 I am Joshik AI Assistant.";

}

else if(message.includes("who created you")){

ans="💻 I was created by Joshik.";

}

else if(message.includes("time")){

ans="🕒 Current Time: "+new Date().toLocaleTimeString();

}

else if(message.includes("date")){

ans="📅 Today is "+new Date().toLocaleDateString();

}

else if(message.includes("thank")){

ans="❤️ You're welcome!";

}

else if(message.includes("bye")){

ans="👋 Goodbye! Have a wonderful day.";

}

else if(message.includes("ai")){

ans="🧠 Artificial Intelligence enables machines to perform tasks that normally require human intelligence.";

}

else if(message.includes("html")){

ans="🌐 HTML is used to structure web pages.";

}

else if(message.includes("css")){

ans="🎨 CSS is used for styling websites.";

}

else if(message.includes("javascript")){

ans="⚡ JavaScript adds interactivity to websites.";

}

else if(message.includes("college")){

ans="🎓 Study consistently and practice every day.";

}

else if(message.includes("project")){

ans="🚀 Build projects to improve your skills.";

}

else if(message.includes("joke")){

const jokes=[

"😂 Why do programmers prefer dark mode? Because light attracts bugs!",

"🤣 Debugging is like being the detective in a crime movie where you are also the criminal.",

"😄 Why did JavaScript break up with Java? Because it found someone more dynamic!"

];

ans=jokes[Math.floor(Math.random()*jokes.length)];

}

else if(message.includes("help")){

ans="💡 You can ask me about AI, HTML, CSS, JavaScript, time, date, jokes, projects, greetings, and more.";

}

else{

ans="🤔 Sorry! I don't understand that yet. Try asking something else.";

}

addMessage(ans,"bot");

}