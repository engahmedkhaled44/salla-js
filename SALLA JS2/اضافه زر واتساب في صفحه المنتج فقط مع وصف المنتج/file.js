/* Add custom Js styles below */ 
document.addEventListener("DOMContentLoaded", function() {
  // بنجيب العنصر اللي بعده هنضيف الزر
  const target = document.querySelector(".product-single .product__description");

  if (target) {
    const whatsappButton = `
      <a href="https://api.whatsapp.com/send/?phone=966530006071&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" class="whatsapp-contact-block group flex p-3 rounded-md w-full gap-4 items-center justify-between bg-[var(--bg-gray)]">
        <p class="whatsapp-contact-block-text text-green-500 font-semibold flex items-center gap-1 group-hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"></path></svg> 
          حاب تستفسر عن شيء؟ حياك واتس
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path></svg>
      </a>
    `;

    // نضيف الزر بعد العنصر
    target.insertAdjacentHTML("afterend", whatsappButton);
  }
});



/*اضافه زرار واتساب في صفحه المنتج المفرد اللي داخل تصنيف معين ولا تنطبق علي جميع التصنيفات */

/* Add custom Js styles below */ 
document.addEventListener("DOMContentLoaded", function () {

    const targetLink = document.querySelector('.breadcrumbs a[href="https://seba-home.com/خدمات-الاستشارات/c1608619061"]');

    if (targetLink) {

        /* نضيف CSS لإخفاء addtocart-bar */
        const style = document.createElement("style");
        style.innerHTML = `
            .addtocart-bar {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        const target = document.querySelector(".product-single .addtocart-bar");

        if (target) {
            const whatsappButton = `
              <a href="https://api.whatsapp.com/send/?phone=966530006071&text&type=phone_number&app_absent=0" 
                 target="_blank" 
                 class="whatsapp-contact-block group flex p-3 rounded-md w-full gap-4 items-center justify-between bg-[var(--bg-gray)]">

                <p class="whatsapp-contact-block-text text-green-500 font-semibold flex items-center gap-1 group-hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 14">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"></path>
                  </svg>
                  حاب تستفسر عن شيء؟ حياك واتس
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path>
                </svg>
              </a>
            `;

            target.insertAdjacentHTML("afterend", whatsappButton);
        }
    }

    console.log("WhatsApp button code executed");
});





/* اضافه زرار واتساب في صفحه المنتج المفرد اللي داخل تصنيف معين ولا تنطبق علي جميع التصنيفات وفيه تصنيف معين هنضيف فيه زرار واتس اب ونلغي زرار اضافه للسله في البرودكت كارد */
/* Custom JS */
setTimeout(function () {

    // 1️⃣ زر واتساب على صفحة محددة حسب رابط البريدمبس
    const targetLink = document.querySelector('.breadcrumbs a[href="https://seba-home.com/خدمات-الاستشارات/c1608619061"]');

    if (targetLink) {

        // 1a. إخفاء addtocart-bar وأسعار المنتج
        const style = document.createElement("style");
        style.innerHTML = `
            .addtocart-bar, .normal-price, .price-wrapper {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        // 1b. إضافة زر واتساب بعد أي addtocart-bar موجود
        const targets = document.querySelectorAll(".product-single .addtocart-bar");
        targets.forEach(target => {
            const whatsappButton = `
              <a href="https://api.whatsapp.com/send/?phone=966547547285&text&type=phone_number&app_absent=0" 
                 target="_blank" 
                 class="whatsapp-contact-block group flex p-4 w-full items-center justify-between 
bg-white border border-green-500 rounded-xl shadow-sm 
hover:bg-green-50 transition-all duration-200 gap-4"
              >
                <p class="whatsapp-contact-block-text text-green-500 font-semibold flex items-center gap-1 group-hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 14">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"></path>
                  </svg>
                  حاب تستفسر عن شيء؟ حياك واتس
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path>
                </svg>
              </a>
            `;
            target.insertAdjacentHTML("afterend", whatsappButton);
        });
    }

    if (window.location.href === "https://seba-home.com/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA/c1608619061") {

const cartElements = document.querySelectorAll('[class*="add-to-cart-conatiner"]');

cartElements.forEach(el => {
    if(el){
        // نحدد عنصر فرعي معين ونمسحه فقط
        const elementToRemove = el.querySelector('button.undefined.s-button-element.s-button-icon.s-button-solid.s-button-primary.s-button-loader-center'); // ضع هنا الكلاس أو السليكتور اللي عايز تمسحه
        if(elementToRemove){
            elementToRemove.remove();
        }

        // إنشاء الرابط مع صورة واتساب كما قبل
        const link = document.createElement("a");
        link.href = "https://api.whatsapp.com/send/?phone=966547547285&text&type=phone_number&app_absent=0";
        link.target = "_blank";
        link.style.display = "inline-block";
        link.style.cursor = "pointer";

        const whatsappIcon = document.createElement("img");
        whatsappIcon.src = "https://cdn.salla.sa/form-builder/QuFLIJCqoAXndenGDWTElMW1axz5iLtbJZ9R7eEo.png";
        whatsappIcon.alt = "WhatsApp";
        whatsappIcon.style.width = "32px";  
        whatsappIcon.style.height = "32px";

        link.appendChild(whatsappIcon);
        el.appendChild(link);
    }
});


        console.log("WhatsApp image added on target page");

    }
},500);

/* end */





/* Add custom Js styles below */ 
document.addEventListener("DOMContentLoaded", function () {

    const targetLink = document.querySelector('.breadcrumbs a[href="https://seba-home.com/خدمات-الاستشارات/c1608619061"]');

    if (targetLink) {

        /* نضيف CSS لإخفاء addtocart-bar */
        const style = document.createElement("style");
        style.innerHTML = `
            .addtocart-bar , .normal-price ,
            .price-wrapper{
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        const target = document.querySelector(".product-single .addtocart-bar");

        if (target) {
            const whatsappButton = `
              <a href="https://api.whatsapp.com/send/?phone=966547547285&text&type=phone_number&app_absent=0" 
                 target="_blank" 
                 class="whatsapp-contact-block group flex p-4 w-full items-center justify-between 
bg-white border border-green-500 rounded-xl shadow-sm 
hover:bg-green-50 transition-all duration-200 gap-4"
>

                <p class="whatsapp-contact-block-text text-green-500 font-semibold flex items-center gap-1 group-hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 14">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"></path>
                  </svg>
                  حاب تستفسر عن شيء؟ حياك واتس
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path>
                </svg>
              </a>
            `;

            target.insertAdjacentHTML("afterend", whatsappButton);
        }
    }

    console.log("WhatsApp button code executed");
});





document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------------------------
       الشرط القديم + كوده
    --------------------------------------------------- */
    const oldCondition = document.querySelector('.breadcrumbs a[href="https://seba-home.com/خدمات-الاستشارات/c1608619061"]');

    if (oldCondition) {

        console.log("Old condition matched – running OLD TASK");

        const styleOld = document.createElement("style");
        styleOld.innerHTML = `
            .addtocart-bar , .normal-price , .price-wrapper {
                display: none !important;
            }
        `;
        document.head.appendChild(styleOld);

        const targetOld = document.querySelector(".product-single .addtocart-bar");

        if (targetOld) {
            targetOld.insertAdjacentHTML("afterend", `
              <a href="https://api.whatsapp.com/send/?phone=966547547285&text&type=phone_number&app_absent=0" 
                 target="_blank" 
                 class="whatsapp-contact-block group flex p-4 w-full items-center justify-between 
bg-white border border-green-500 rounded-xl shadow-sm 
hover:bg-green-50 transition-all duration-200 gap-4"
>

                <p class="whatsapp-contact-block-text text-green-500 font-semibold flex items-center gap-1 group-hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 14">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"></path>
                  </svg>
                  حاب تستفسر عن شيء؟ حياك واتس
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path>
                </svg>
              </a>
            `);
        }
    }


    /* -------------------------------------------------
       الشرط الجديد + زرار واتساب بعد 
       .add-to-cart-conatiner .btn--add-to-cart
    --------------------------------------------------- */

    const newCondition = window.location.pathname === "https://seba-home.com/خدمات-الاستشارات/c1608619061"; // ← عدلها

    if (newCondition) {

  const target = document.querySelector(".main-content");

  if (target) {
    const whatsappButton = `
      <a href="https://api.whatsapp.com/send/?phone=966530006071&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" class="whatsapp-contact-block group flex p-3 rounded-md w-full gap-4 items-center justify-between bg-[var(--bg-gray)]">
        <p class="whatsapp-contact-block-text text-green-500 font-semibold flex items-center gap-1 group-hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"></path></svg> 
          حاب تستفسر عن شيء؟ حياك واتس
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path></svg>
      </a>
    `;

    // نضيف الزر بعد العنصر
    target.insertAdjacentHTML("afterend", whatsappButton);
  }
    }

});