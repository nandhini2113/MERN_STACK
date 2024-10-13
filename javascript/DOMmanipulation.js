const body = document.getElementsByTagName("body")[0];

const div = document.createElement("div");
body.appendChild(div);

const h1 = document.createElement("h1");
h1.innerHTML = "LOGIN PAGE";
div.appendChild(h1);

const line = document.createElement("br");
div.appendChild(line);

const emailLabel = document.createElement("label");
emailLabel.innerHTML = "Email: ";
div.appendChild(emailLabel);

const email = document.createElement("input");
email.setAttribute("type","email");
email.setAttribute("placeholder","Enter email");
div.appendChild(email);

const line1 = document.createElement("br");
div.appendChild(line1);

const paswordLabel = document.createElement("label");
paswordLabel.innerHTML = "Email: ";
div.appendChild(paswordLabel);

const password = document.createElement("input");
password.setAttribute("type","email");
password.setAttribute("placeholder","Enter email");
div.appendChild(password);

const line13 = document.createElement("br");
div.appendChild(line3);

const btn = document.createElement("button");
btn.innerHTML = "LOGIN";
div.appendChild(btn);





