# 🚚 FASTER - Lightning Fast Logistics & Delivery Partner

<p align="center">
  <img src="assets/hero-img.svg" alt="FASTER Logo" width="150px">
</p>

<p align="center">
  <strong>بوابة الخدمات اللوجستية والشحن السريع والذكي</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## 📖 جدول المحتويات / Table of Contents
1. [عن المشروع / About the Project](#-عن-المشروع--about-the-project)
2. [المميزات الرئيسية / Key Features](#-المميزات-الرئيسية--key-features)
3. [التقنيات المستخدمة / Technologies Used](#-التقنيات-المستخدمة--technologies-used)
4. [هيكل المجلدات / Project Structure](#-هيكل-المجلدات--project-structure)
5. [طريقة التشغيل / How to Run](#%EF%B8%8F-طريقة-التشغيل--how-to-run)
6. [الرسوم المتحركة والتفاعل / Animations & Interactivity](#-الرسوم-المتحركة-والتفاعل--animations--interactivity)

---

## 🌟 عن المشروع / About the Project

### (بالعربية)
**FASTER** هو موقع تعريفي احترافي (Landing Page) متكامل الخدمات ومخصص لشركات الشحن والخدمات اللوجستية. يتميز الموقع بتصميم عصري جذاب وواجهة مستخدم متجاوبة تماماً مع شاشات الهواتف والأجهزة اللوحية والمكتبية. يوفر الموقع تجربة مستخدم سلسة بفضل استخدام الرسوم المتحركة المبنية على حركة التمرير (Scroll Animations) والتحكم الديناميكي بالقوائم (Scrollspy).

### (English)
**FASTER** is a professional, high-performance landing page designed for modern logistics, shipping, and supply chain companies. The website offers a premium user interface with complete responsiveness across all device sizes. It delivers an engaging user experience utilizing custom scroll-reveal animations and dynamic navigation tracking (Scrollspy) using vanilla JavaScript.

---

## 🚀 المميزات الرئيسية / Key Features

- 📱 **Fully Responsive:** متجاوب بالكامل مع كافة الشاشات والمنصات بفضل إطار العمل Bootstrap 5.
- 🎨 **Modular Styling:** تم تقسيم وتنسيق ملفات الـ CSS بشكل منظم (ملف لكل قسم) لسهولة التعديل والتطوير المستقبلي.
- ✨ **Scroll Reveal Animations:** رسوم متحركة مخصصة وجذابة تظهر بمجرد تمرير الصفحة للأسفل باستخدام تقنية `IntersectionObserver`.
- 📍 **Scrollspy Navigation:** شريط تنقل ذكي يتفاعل مع موقع القارئ في الصفحة لتحديث العنصر النشط (Active Link) تلقائياً.
- 🚚 **Comprehensive Sections:** يحتوي الموقع على كافة الأقسام المهمة للشركات:
  - **الرئيسية (Home):** مع شريط بحث تفاعلي وإحصائيات سريعة للشركة.
  - **من نحن (About Us):** لعرض رؤية الشركة وخدمات الدعم اللوجستي.
  - **الخدمات (Services):** كروت تفصيلية تفاعلية لعرض التخزين والشحن وخدمات التجارة الإلكترونية.
  - **المميزات (Features):** عرض تفصيلي مدعوم بالصور والأيقونات لشرح الشحن الصديق للبيئة، والربط البرمجي (API).
  - **خطط الأسعار (Pricing):** جدول مقارنة أسعار وخطط الخدمة بتأثيرات hover جذابة.
  - **اتصل بنا (Contact Us):** نموذج تواصل تفاعلي وبطاقة معلومات الاتصال ومواعيد العمل.
  - **التذييل (Footer):** روابط سريعة، معلومات التواصل، وشبكات التواصل الاجتماعي.

---

## 🛠️ التقنيات المستخدمة / Technologies Used

* **HTML5:** لبناء هيكل الصفحة ودعم معايير الـ SEO (مثل استخدام `header`, `section`, `footer`).
* **CSS3 (Vanilla):** لتنسيق وتصميم العناصر باستخدام متغيرات الألوان والتأثيرات الحديثة.
* **Bootstrap 5:** لضمان سلاسة وسرعة البناء واستجابة الشاشات المتعددة (Grid System).
* **Vanilla JavaScript:** لكتابة المنطق التفاعلي (Animations, Scrollspy, Header Effects) بدون أي مكتبات خارجية ثقيلة الوزن.
* **Font Awesome 6:** للأيقونات الاحترافية في جميع الأقسام.
* **Google Fonts (Open Sans):** لتحسين المظهر الجمالي للنصوص والخطوط.

---

## 📂 هيكل المجلدات / Project Structure

```bash
project2/
├── assets/                 # مجلد الصور والأيقونات (Images, Backgrounds, SVG icons)
├── style/                  # مجلد التنسيقات (مقسم لتنظيم الكود)
│   ├── about.css
│   ├── animations.css      # يحتوي على كود الرسوم التفاعلية (reveal classes)
│   ├── contact.css
│   ├── footer.css
│   ├── header.css
│   ├── info.css
│   ├── main.css
│   ├── pricing.css
│   ├── quote.css
│   ├── ser.css
│   ├── serv.css
├── index.html              # ملف الصفحة الرئيسي
├── app.js                  # ملف الجافا سكريبت التفاعلي
└── README.md               # ملف الوصف التعريفي للمشروع (الملف الحالي)
```

---

## ⚙️ طريقة التشغيل / How to Run

### محلياً (Locally)
1. قم بتحميل ملفات المشروع أو عمل `clone` للمستودع:
   ```bash
   git clone <repository-url>
   ```
2. قم بفتح المجلد الخاص بالمشروع.
3. افتح ملف `index.html` في أي متصفح إنترنت (مثل Chrome, Firefox, Edge) مباشرة أو عبر إضافة **Live Server** في VS Code لتجربة تطوير أفضل.

---

## 💫 الرسوم المتحركة والتفاعل / Animations & Interactivity

تم تطبيق نظام حركة ذكي وخفيف يعتمد على الـ **JavaScript IntersectionObserver API**، والذي يقوم بـ:
1. مراقبة تدرج ظهور العناصر على الشاشة.
2. إضافة الكلاس `active` للعناصر التي تحمل الكلاسات (`reveal`, `reveal-left`, `reveal-right`) لتبدأ حركتها بمجرد دخولها نافذة العرض (Viewport).
3. تغيير مظهر شريط التنقل (Header) وإضافة خلفية شبه شفافة داكنة (Glassmorphism) بمجرد تحريك الصفحة للأسفل (`scrolled` class).

---

<p align="center">
  صنع بكل حب 💻 لتقديم تجربة شحن لوجستية ذكية وسريعة.
</p>
