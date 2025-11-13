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