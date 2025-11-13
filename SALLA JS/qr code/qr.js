setTimeout(() => {
    let es6Code = `
    <div class = "parentDiv">
        <a href="https://maroof.sa/businesses/details/330666">
            <img src="https://res.cloudinary.com/demxbvzkl/image/upload/v1725172660/pvhlnbuaqmmfqz3cv0cc.jpg" />
        </a>
        <p class="qr-p"> مسجل في الموارد البشريه رقم : FL-148029239</p>
    </div>
`;

    let parent = document.querySelector(".store-footer__inner > div");
    parent.insertAdjacentHTML("beforeend", es6Code);
}, 1000);




(function() { let container = document.createElement('div'); container.style.position = 'fixed'; container.style.bottom = '20px'; container.style.right = '20px'; container.style.zIndex = '9999'; container.style.display = 'flex'; container.style.flexDirection = 'column'; container.style.gap = '10px'; let buttons = [ { href: 'https: img: 'https: alt: 'WhatsApp' }, { href: 'https: img: 'https: alt: 'Instagram' } ]; buttons.forEach(btn => { let link = document.createElement('a'); link.href = btn.href; link.target = '_blank'; link.style.display = 'inline-block'; let imgBtn = document.createElement('img'); imgBtn.src = btn.img; imgBtn.alt = btn.alt; imgBtn.style.width = '50px'; imgBtn.style.height = '50px'; imgBtn.style.cursor = 'pointer'; link.appendChild(imgBtn); container.appendChild(link); }); document.body.appendChild(container); })();

let container = document.createElement("div"); container.style.position = "fixed"; container.style.bottom = "20px"; container.style.right = "20px"; container.style.zIndex = "9999"; container.style.display = "flex"; container.style.flexDirection = "column"; container.style.gap = "10px"; let buttons = [ { href: "https: img:"https: alt: "WhatsApp", }, { href: "https: img: "https: alt: "Instagram", }, ]; buttons.forEach((btn) => { let link = document.createElement("a"); link.href = btn.href; link.target = "_blank"; link.style.display = "inline-block"; let imgBtn = document.createElement("img"); imgBtn.src = btn.img; imgBtn.alt = btn.alt; imgBtn.style.width = "50px"; imgBtn.style.height = "50px"; imgBtn.style.cursor = "pointer"; link.appendChild(imgBtn); container.appendChild(link); }); document.body.appendChild(container);