/* Add custom Js code below */ 

  function desginedBy() {
    const logo2Element = document.querySelector('.f_logo');
    const divElement = document.querySelector('.store-footer__bottom');
    const divSplash = document.getElementById('splash-screen');
    const divHeader = document.querySelector('.salla-advertisement');
    if(divHeader) {
      divHeader.style.backgroundColor = '#ff0133';
    }
     if(divSplash) {
      divSplash.innerHTML += '<div style="position: absolute; width: 50%; top: 60%; font-size: 18px; color: #697665;"><p style="text-align: center">أهلًا بكِ في عذار، حيث نهتم بكل خيط يحاكُ في عباءتك</p></div>'
    }
  
    if (divElement) {
      divElement.innerHTML = '<span style="  margin-bottom: 0rem;" class="text-sm opacity-75"><p style="margin-bottom: 0rem;" class="text-gray-400 mb-2.5 md:mb-0">الحقوق محفوظة | 2024 <a href="etharabaya.com" class="hover:text-primary" target="_blank" rel="noreferrer">عِذار للعبايات</a> </p><p style="  margin-bottom: 0rem;" class="text-gray-400 mb-2.5 md:mb-0">رقم الشكاوى <a href="https://wa.me/+966534858218" class="hover:text-scondary" target="_blank" rel="noreferrer">8218 485 53 966+</a> </p> </span>'
    } else {
        console.log('not designer');
    }
  
  }


/* ===== Abaya Calculator ===== */
/* كود الالة الحاسبة لقياس العباية المناسب */

// التحقق من اللغة المستخدمة
const isEnglish = document.documentElement.lang === 'en';

// ترجمة النصوص للغتين العربية والإنجليزية
const trans = {
  en: {
    title: 'Calculate Your Abaya Size',
    subtitle: 'Find the perfect abaya size in inches from Ethar Abayas',
    heightLabel: 'Enter your height (cm):',
    weightLabel: 'Enter your weight (kg):',
    result: 'Your Abaya Size',
    error: 'Please enter valid data',
    sorryDesc: 'Height should be between 160-170 cm<br>and weight should be between 30-150 kg',
    abayaLength: 'Abaya Length in Inches:',
    abayaWidth: 'Abaya Width in Inches:',
    apology: 'We apologize for the inconvenience!'
  },
  ar: {
    title: 'احسبي مقاس عبايتك',
    subtitle: 'قياس العباية المناسب بالانش من عِذار للعبايات',
    heightLabel: 'ادخلي طولك (سم):',
    note1: '( الطول كامل من الرأس )',
    weightLabel: 'ادخلي وزنك (كجم):',
    result: 'مقاس العباية المناسب لك',
    error: 'عذراً ادخل معلومات صحيحة!',
    sorryDesc: 'يجب ان يكون الطول ما بين 147-170 سم<br>و الوزن ما بين 30-150 كجم',
    abayaLength: 'طول العباية بالانش:',
    abayaWidth: 'عرض العباية بالانش:',
    apology: 'نعتذر منك!'
  }
};

// تحديد اللغة الحالية
const lang = isEnglish ? trans.en : trans.ar;

// إنشاء نموذج إدخال المستخدم
const createForm = () => {
  const form = document.createElement('section');
  form.className = 'form-section';

  // إعداد محتوى النموذج
  form.innerHTML = `
    <div class="form-container container">
      <div class="s-block__title" style="flex-direction: column;">
        <h2>${lang.title}</h2>
        <p>${lang.subtitle}</p>
      </div>
      <form id="abayaForm" class="space-y-4">
        <div>
          <label for="height" class="block font-medium pb-2">${lang.heightLabel}</label>
          <label for="height" class="block font-medium pb-2" style="color: red;">${lang.note1}</label>
          <input type="number" min="100" max="200" id="height" name="height" class="w-full border" required>
        </div>
        <div>
          <label for="weight" class="block font-medium pb-2">${lang.weightLabel}</label>
          <input type="number" min="30" max="200" id="weight" name="weight" class="w-full border" required>
        </div>
        <button type="submit" class="w-full py-2 font-semibold text-white bg-[#97623a]">${isEnglish ? 'Calculate' : 'حساب'}</button>
      </form>
      <div id="result" class="my-2 text-center"></div>
      <p class="info"> ${isEnglish ? 'This calculator measures accurately regardless of personal preferences. However, for more precise measurements, please take measurements as shown in the measurement image' : 'هذه الحاسبة تقيس بشكل دقيق بغض النظر عن التفضيلات الشخصية، ولكن لقياسات أدق يُرجى أخذ القياسات كما هو موضح في صورة القياسات.'} </p>
    </div>`;
  
  return form;
};

// معالجة إرسال النموذج
const handleFormSubmit = (event) => {
  event.preventDefault();
  const resultDisplay = document.getElementById('result');
  resultDisplay.textContent = '';

  // التحقق من صحة البيانات المدخلة
  const getValidatedNumber = (inputId) => {
    const value = document.getElementById(inputId).value;
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error(lang.error);
    }
    return parsedValue;
  };

  // حساب المقاسات بناءً على الوزن والطول
  const calculateSize = (weight, height) => {
    // التحقق من أن القيم ضمن النطاق المقبول
    if (weight < 30 || weight > 150 || height < 147|| height > 170) {
      return { width: 'خارج النطاق', length: 'خارج النطاق', error: true };
    }

    // تعريف نطاقات العرض والطول
    const widthRanges = [35, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    const widths = [18, 19, 21, 22, 23, 24, 25, 28, 31, 32, 33, 34, 35];

    const heightRanges = [148, 151, 153, 156, 158, 161, 163, 165, 167, 169, 170];
    const lengths = [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
// حساب القيم بناءً على المدخلات
// نحاول العثور على عرض العباية بناءً على وزن المستخدم
// باستخدام دالة findIndex، نبحث عن أول نطاق عرض حيث يكون الوزن أقل من أو يساوي القيمة
let width = widths[widthRanges.findIndex(range => weight <= range)] || 'خارج النطاق';

// نحاول العثور على طول العباية بناءً على طول المستخدم
// بنفس الطريقة، نبحث عن أول نطاق طول حيث يكون الطول أقل من أو يساوي القيمة
let length = lengths[heightRanges.findIndex(range => height <= range)] || 'خارج النطاق';

// إرجاع القيم المحسوبة مع حالة الخطأ
return { width, length, error: false };
  };

  try {
    // الحصول على الطول والوزن من المدخلات
    const height = getValidatedNumber('height');
    const weight = getValidatedNumber('weight');
    const result = calculateSize(weight, height);

    // عرض النتائج أو رسالة خطأ
    if (result.error) {
      resultDisplay.innerHTML = `
        <h3 class="text-red-500 font-medium">${lang.apology}</h3>
        <p class="text-red-500">${lang.sorryDesc}</p>`;
    } else {
      resultDisplay.innerHTML = `
        <h3 class="font-medium" style="color:#AB886D">${lang.result}</h3>
        <p style="color: var(--secondary-color);">${lang.abayaLength} ${result.length}</p>
        <p style="color: var(--secondary-color);">${lang.abayaWidth} ${result.width}</p>`;
    }
  } catch (error) {
    resultDisplay.textContent = error.message; // عرض رسالة الخطأ
  }
};

// إضافة نموذج الحساب عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(desginedBy, 1); 
  console.log('start'); 
  const formContainer = createForm(); // إنشاء النموذج
  const section = document.querySelector('section'); // تحديد المكان لإضافة النموذج
  
  if (section) {
    section.after(formContainer); // إضافة النموذج بعد القسم
    const abayaForm = document.getElementById("abayaForm"); //اظهار الالة 
    if (abayaForm) {
      abayaForm.addEventListener('submit', handleFormSubmit); // جعل زر الحساب يعمل
    }
  }
});

Document.querySelector