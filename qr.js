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
