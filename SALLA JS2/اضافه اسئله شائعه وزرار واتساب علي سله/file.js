/* Add custom Js styles below */ 
document.addEventListener("DOMContentLoaded", function () {
  // الأسئلة الشائعة
  const faqHTML = `
  <div class="FAQ">
    <h1>الأسئلة المتكررة حول سياسة الاستبدال والاسترجاع</h1>
    <div class="faq-accordion">
      <div class="faq-item">
        <div class="faq-question">
            1. ما هي المنتجات التي لا يمكن استبدالها أو استرجاعها؟
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <li>جميع منتجات الحناء والخلطات والزيوت الطبيعية التي تُصنع أو تُخلط حسب الطلب لا تُقبل للاسترجاع أو الاستبدال بعد الاستلام لأي سبب غير الضرر الواضح.</li>
            <li>أي منتج تم فتحه أو استخدامه أو إزالة تغليفه يُعتبر مستخدماً ولا يُقبل استبداله أو استرجاعه نهائياً.</li>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            2. ما هي الحالات الوحيدة التي تقبلون فيها الاستبدال أو الاسترجاع؟
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <p>نقبل الاستبدال أو الاسترجاع في الحالات التالية فقط:</p>
            <li>إذا تم استلام منتج مختلف كلياً عن طلبك.</li>
            <li>في حال وصول المنتج تالفاً بشكل واضح (مثل كسر، تسرب، تلف عبوة).</li>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            3. ما هي شروط طلب الاسترجاع أو الاستبدال في حال وصول المنتج تالفاً؟
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <p>لضمان قبول طلبك للاسترجاع أو الاستبدال بسبب التلف، يجب استيفاء الشروط التالية:</p>
            <li>الإبلاغ خلال 12 ساعة فقط من وقت الاستلام.</li>
            <li>تصوير فتح الطرد بالفيديو كشرط أساسي لقبول أي مطالبة.</li>
            <li>تصوير المنتج والتغليف الأصلي بوضوح.</li>
            <li>إرسال رقم الطلب وصور واضحة للضرر أو الخطأ.</li>
            <li>عدم فتح أو تجربة المنتج التالف أو الخاطئ.</li>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            4. من يتحمل رسوم الشحن في حالة الاسترجاع أو الاستبدال؟
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <p>يتحمل العميل رسوم الشحن في حال لم يكن الخطأ صادراً من المتجر.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            5. ما هي المدة الزمنية لمعالجة طلبات الاسترجاع/الاستبدال؟
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <li>الرد على طلب الاستلام: خلال 24 ساعة من استلام طلبك.</li>
            <li>إعادة المبلغ: خلال 7 أيام عمل (بعد مراجعة وتقييم حالة المنتج).</li>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            هل منتجاتكم طبيعية 100%؟⁠
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <p>نعم، جميع منتجاتنا مصنوعة من مكونات طبيعية وآمنة للاستخدام.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            كيف أستخدم المنتج بطريقة صحيحة؟⁠
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <p>يمكنك الاطلاع على تعليمات الاستخدام المرفقة مع كل منتج.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            كم من الوقت يحتاج المنتج لإظهار النتائج؟⁠
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <p>تختلف النتائج حسب نوع البشرة أو الشعر، ولكن الاستخدام المنتظم يظهر فرقًا في غضون أسابيع قليلة.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            هل يمكن خلط المنتجات الطبيعية مع منتجات أخرى؟⁠
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <p>يُفضل استخدام المنتجات الطبيعية بشكل منفصل للحصول على أفضل النتائج.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            ما فوائد الحناء والسدر للشعر؟⁠
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <li>الحناء: تقوي الشعر، تقلل تساقطه، تعزز نموه، وتعمل كصبغة طبيعية.</li>
            <li>السدر: ينظف فروة الرأس، يعزز نمو الشعر، يقوي الجذور، ويمنح الشعر لمعانًا طبيعيًا.</li>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
            ما هو المشاط؟
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="faq-answer">
            <p>المشاط هو خليط من أعشاب طبيعية تستخدم لتغذية الشعر وتعزيز نموه، وهو من الطرق التقليدية للعناية بالشعر.</p>
        </div>
      </div>
    </div>
  </div>
  `;

  // اختار السكشن اللي عاوز تضيف بعده
  const targetSection = document.querySelector(".s-block--testimonials"); // غير الكلاس حسب مكانك
  if (targetSection) {
    targetSection.insertAdjacentHTML("afterend", faqHTML);
  }

  // فعل الأكورديون
  document.querySelectorAll(".faq-question").forEach((q) => {
    q.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains("active");

      // قفل الكل
      document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));
      document.querySelectorAll(".faq-question").forEach((qq) => qq.classList.remove("active"));

      // افتح الحالي
      if (!isActive) {
        answer.style.display = "block";
        this.classList.add("active");
      }
    });
  });
});

(function(){
  var phone   = "966557003871"; // << حط رقمك هنا
  var message = "أهلًا! عندي استفسار."; 
  var ua      = navigator.userAgent || navigator.vendor || window.opera;
  var isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua);
  var encodedMsg = encodeURIComponent(message);

  var href = isMobile 
    ? "https://wa.me/" + phone + "?text=" + encodedMsg
    : "https://web.whatsapp.com/send?phone=" + phone + "&text=" + encodedMsg;

  var link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "salla-wa-box";
  link.innerHTML = `
    <div class="salla-wa-btn">
      <img src="https://cdn.salla.sa/form-builder/QuFLIJCqoAXndenGDWTElMW1axz5iLtbJZ9R7eEo.png" alt="WhatsApp">
    </div>
    <div class="salla-wa-text">تواصل معنا</div>
  `;

  document.addEventListener("DOMContentLoaded", function(){
    if (!document.querySelector(".salla-wa-box")) {
      document.body.appendChild(link);
    }
  });
})();




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

    const url = location.href;
console.log(url);
if(url==="https://seba-home.com/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA/c1608619061"){

const el = document.querySelector(".add-to-cart-conatiner");

// icon
const icon = document.createElement("span");
icon.textContent = "🛒";
icon.style.marginRight = "5px";

// text
const text = document.createElement("span");
text.textContent = "Add to Cart";

el.appendChild(icon);
el.appendChild(text);


}

    console.log("WhatsApp button code executed");
});

setTimeout(function () {

    // التحقق من الرابط الحالي
    if (window.location.href === "https://seba-home.com/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA/c1608619061") {

        const cartElements = document.querySelectorAll('[class*="add-to-cart-conatiner"]');

        cartElements.forEach(el => {
            if(el){
                // نحذف أي محتوى نصي قديم
                el.textContent = "";

                // إنشاء الرابط
                const link = document.createElement("a");
                link.href = "https://api.whatsapp.com/send/?phone=966547547285&text&type=phone_number&app_absent=0"; // رابط واتساب
                link.target = "_blank"; // يفتح في تبويب جديد
                link.style.display = "inline-block"; // لضبط حجم الصورة بشكل أفضل
                link.style.cursor = "pointer"; // مؤشر اليد عند المرور

                // إضافة صورة واتساب داخل الرابط
                const whatsappIcon = document.createElement("img");
                whatsappIcon.src = "https://cdn.salla.sa/form-builder/QuFLIJCqoAXndenGDWTElMW1axz5iLtbJZ9R7eEo.png";
                whatsappIcon.alt = "WhatsApp";
                whatsappIcon.style.width = "32px";  
                whatsappIcon.style.height = "32px";

                link.appendChild(whatsappIcon);

                // إضافة الرابط داخل العنصر
                el.appendChild(link);
            }
        });

        console.log("WhatsApp image added on target page");

    }

}, 1500); // تنفيذ بعد 1.5 ثانية
