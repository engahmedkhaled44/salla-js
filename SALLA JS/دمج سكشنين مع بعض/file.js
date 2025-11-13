document.addEventListener("DOMContentLoaded", function() {
  // اختار أول و ثاني سيكشن من نوع banners
  const firstSection = document.querySelector("section:nth-child(1 of .s-block.s-block--banners.container)");
  const secondSection = document.querySelector("section:nth-child(2 of .s-block.s-block--banners.container)");

  if (firstSection && secondSection) {
    // إنشاء العنصر الجديد اللي هيجمع الاتنين
    const wrapper = document.createElement("div");
    wrapper.classList.add("category-custom-bg");

    // إدخال العنصر الجديد قبل أول سكشن
    firstSection.parentNode.insertBefore(wrapper, firstSection);

    // نقل السكشنين جوا العنصر الجديد
    wrapper.appendChild(firstSection);
    wrapper.appendChild(secondSection);
  }
});