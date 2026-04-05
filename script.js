// ================= PROFILE PANEL =================

function openProfile(){
    document.getElementById("profilePanel").style.right = "0";
}

function closeProfile(){
    document.getElementById("profilePanel").style.right = "-350px";
}


// ================= TYPING EFFECT =================

const words = ["Full Stack Developer", "Web Developer", "Programmer"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

    currentWord = words[i];
    const typingElement = document.getElementById("typing");

    if(isDeleting){
        typingElement.textContent = currentWord.substring(0, j--);

        if(j < 0){
            isDeleting = false;
            i = (i + 1) % words.length;
            j = 0;
        }
    } 
    else {
        typingElement.textContent = currentWord.substring(0, j++);

        if(j === currentWord.length){
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();


// ================= CONTACT FORM (UPDATED FOR CRM) =================

document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector(".contact-form");

    if(form){
        form.addEventListener("submit", async function(e){
            e.preventDefault();

            const name = this[0].value;
            const email = this[1].value;
            const message = this[2].value;

            try {
                await fetch("http://localhost:5000/leads", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, message })
                });

                alert("Message Sent Successfully! 🚀");
                form.reset();

            } catch (error) {
                alert("Error sending message ❌");
                console.error(error);
            }
        });
    }

});