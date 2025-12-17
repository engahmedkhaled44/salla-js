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



      function bind(sel){
        var $f = $(sel);
        if(!$f.length) return;
      }
        $f.css({direction:'ltr', textAlign:'left'}).attr('maxlength', 13);

        $f.each(function(){
          var el = this;
        });



        
add_action('wp_enqueue_scripts', function () {
  if (function_exists('is_checkout') && ! is_checkout()) return;

  wp_add_inline_script('jquery-core', "
    (function($){
      var PREFIX = '+966';
      var P_LEN  = PREFIX.length; // 4

      function setCaret(el, pos){
        try{ el.setSelectionRange(pos, pos); }catch(_){}
      }

      function normalize(el){
        if(!el) return;
        var v = (el.value||'').trim()
                 .replace(/^00966/, PREFIX)
                 .replace(/\\s+/g,'');
        // أعد البادئة لو اتشالت بأي طريقة
        if(v.indexOf(PREFIX) !== 0){
          v = PREFIX + v.replace(/^\\+?/, '');
        }
        // اسمح بأرقام فقط بعد البادئة + حد أقصى 9 أرقام
        var rest = v.slice(P_LEN).replace(/\\D/g,'').slice(0,9);
        el.value = PREFIX + rest;

        // لو المؤشر قبل البادئة انقله بعدها
        var s = el.selectionStart||0, e = el.selectionEnd||0;
        if(s < P_LEN || e < P_LEN){
          setCaret(el, Math.max(s,e, P_LEN));
        }
      }

      function blockDeleteBeforePrefix(e, el){
        var s = el.selectionStart||0, epos = el.selectionEnd||0;

        // منع Backspace/Delete لو المؤشر قبل البادئة أو الرينج بيقطع البادئة
        var key = e.key;
        if(key === 'Backspace' || key === 'Delete'){
          if(s < P_LEN || epos < P_LEN || (s < P_LEN && epos > P_LEN)){
            e.preventDefault();
            setCaret(el, P_LEN);
          }
        }

        // منع Ctrl+X (قص) لو الاختيار بيشمل البادئة
        if((e.ctrlKey || e.metaKey) && (key==='x' || key==='X')){
          if(s < P_LEN){
            e.preventDefault();
            setCaret(el, P_LEN);
          }
        }
      }

      function beforeInputGuard(e, el){
        // يمنع أنواع الحذف اللي بتتجاوز keydown خصوصًا في الموبايل
        var t = e.inputType || '';
        if(/delete/i.test(t) || t==='deleteByCut'){
          var s = el.selectionStart||0, en = el.selectionEnd||0;
          // لو الحذف هيشمل أي جزء قبل البادئة
          if(s < P_LEN){
            e.preventDefault();
            setCaret(el, P_LEN);
          }
        }
      }

      function bind(sel){
        var $f = $(sel);
        if(!$f.length) return;

        $f.css({direction:'ltr', textAlign:'left'}).attr('maxlength', 13);

        $f.each(function(){
          var el = this;


          // أول ما ياخد فوكس: ضيف البادئة
          el.addEventListener('focus', function(){
            if(!el.value) el.value = PREFIX;
            // انقل المؤشر بعد البادئة
            setCaret(el, Math.max(el.value.length, P_LEN));
          });

          // منع حذف البادئة (مفاتيح)
          el.addEventListener('keydown', function(e){ blockDeleteBeforePrefix(e, el); });

          // منع حذف قبل البادئة في الموبايل/أنواع beforeinput
          el.addEventListener('beforeinput', function(e){ beforeInputGuard(e, el); });

          // التصحيح بعد أي إدخال/لصق
          el.addEventListener('input', function(){ normalize(el); });

          // لصق: سيبيه وبعدها normalize هيعدل
          el.addEventListener('paste', function(){ setTimeout(function(){ normalize(el); }, 0); });

          // قص: لو بيشمل البادئة امنعه
          el.addEventListener('cut', function(e){
            var s = el.selectionStart||0;
            if(s < P_LEN){ e.preventDefault(); setCaret(el, P_LEN); }
          });

          // كليك/تاتش: ما تسمحش للمؤشر يروح قبل البادئة
          ['click','mouseup','touchend'].forEach(function(evt){
            el.addEventListener(evt, function(){
              setTimeout(function(){
                var s = el.selectionStart||0;
                if(s < P_LEN) setCaret(el, P_LEN);
              },0);
            });
          });

          // تشغيل مبدئي
          if(!el.value) el.value = PREFIX;
          normalize(el);
        });
      }

      function init(){
        bind('input[name=\"billing_phone\"]');
        bind('input[name=\"shipping_phone\"]');
      }

      $(document).ready(init);
      $(document.body).on('updated_checkout', init);
    })(jQuery);
  ");
});





add_action('wp_enqueue_scripts', function () {
  if (function_exists('is_checkout') && ! is_checkout()) return;

  $script = <<<JS
    (function($){
      var PREFIX = '+966';
      var P_LEN  = PREFIX.length; // 4

      function setCaret(el, pos){
        try{ el.setSelectionRange(pos, pos); }catch(_){}
      }

      function normalize(el){
        if(!el) return;
        var v = (el.value||'').trim()
                 .replace(/^00966/, PREFIX)
                 .replace(/\\s+/g,'');
        if(v.indexOf(PREFIX) !== 0){
          v = PREFIX + v.replace(/^\\+?/, '');
        }
        var rest = v.slice(P_LEN).replace(/\\D/g,'').slice(0,9);
        el.value = PREFIX + rest;

        var s = el.selectionStart||0, e = el.selectionEnd||0;
        if(s < P_LEN || e < P_LEN){
          setCaret(el, Math.max(s,e, P_LEN));
        }
      }

      function blockDeleteBeforePrefix(e, el){
        var s = el.selectionStart||0, epos = el.selectionEnd||0;
        var key = e.key;

        if(key === 'Backspace' || key === 'Delete'){
          if(s < P_LEN || epos < P_LEN || (s < P_LEN && epos > P_LEN)){
            e.preventDefault();
            setCaret(el, P_LEN);
          }
        }

        if((e.ctrlKey || e.metaKey) && (key==='x' || key==='X')){
          if(s < P_LEN){
            e.preventDefault();
            setCaret(el, P_LEN);
          }
        }
      }

      function beforeInputGuard(e, el){
        var t = e.inputType || '';
        if(/delete/i.test(t) || t==='deleteByCut'){
          var s = el.selectionStart||0;
          if(s < P_LEN){
            e.preventDefault();
            setCaret(el, P_LEN);
          }
        }
      }

      function bind(sel){
        var \$f = \$(sel);
        if(!\$f.length) return;

        \$f.css({direction:'ltr', textAlign:'left'}).attr('maxlength', 13);

        \$f.each(function(){
          var el = this;

          el.addEventListener('focus', function(){
            if(!el.value) el.value = PREFIX;
            setCaret(el, Math.max(el.value.length, P_LEN));
          });

          el.addEventListener('keydown', function(e){ blockDeleteBeforePrefix(e, el); });
          el.addEventListener('beforeinput', function(e){ beforeInputGuard(e, el); });
          el.addEventListener('input', function(){ normalize(el); });

          el.addEventListener('paste', function(){ 
            setTimeout(function(){ normalize(el); }, 0); 
          });

          el.addEventListener('cut', function(e){
            var s = el.selectionStart||0;
            if(s < P_LEN){ e.preventDefault(); setCaret(el, P_LEN); }
          });

          ['click','mouseup','touchend'].forEach(function(evt){
            el.addEventListener(evt, function(){
              setTimeout(function(){
                var s = el.selectionStart||0;
                if(s < P_LEN) setCaret(el, P_LEN);
              },0);
            });
          });

          if(!el.value) el.value = PREFIX;
          normalize(el);
        });
      }

      function init(){
        bind('input[name="billing_phone"]');
        bind('input[name="shipping_phone"]');
      }

      \$(document).ready(init);
      \$(document.body).on('updated_checkout', init);
    })(jQuery);
  JS;

  wp_add_inline_script('jquery-core', $script);
});


<span class="text">Why <strong>Choose</strong> Us</span>