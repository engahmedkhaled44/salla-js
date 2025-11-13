/* Add custom Js styles below */ 
document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector(".main-nav-container .inner .container > div > div");
  if (!target) return; 
  const button = document.createElement("a");
  button.href = "https://webserver01.app.n8n.cloud/form/6cd07f09-937a-4be1-9532-844287c0874c"; 
  button.textContent = "سجل هنا"; 
  button.style.display = "flex";
  button.style.padding = "8px 16px";
  button.style.marginLeft = "10px";
  button.style.backgroundColor = "#033c59";
  button.style.color = "#fff";
  button.style.borderRadius = "6px";
  button.style.textDecoration = "none";
  button.style.fontWeight = "bold";
  button.style.transition = "0.3s";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.height = "50px";
  button.style.width = "10%";

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#f6a41c";
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#033c59";
  });

  target.insertAdjacentElement("afterend", button);
});