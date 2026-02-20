# دليل الألوان والخطوط - MediCare+ Style Guide

## 📚 جدول المحتويات
1. [الألوان](#الألوان)
2. [الخطوط](#الخطوط)
3. [التدرجات](#التدرجات)
4. [الظلال](#الظلال)
5. [الحدود الدائرية](#الحدود-الدائرية)
6. [أمثلة الاستخدام](#أمثلة-الاستخدام)

---

## 🎨 الألوان

### الألوان الطبية الأساسية (الأزرق)
```css
--color-medical-blue-50: #eff6ff   /* أزرق فاتح جداً */
--color-medical-blue-100: #dbeafe
--color-medical-blue-200: #bfdbfe
--color-medical-blue-300: #93c5fd
--color-medical-blue-400: #60a5fa
--color-medical-blue-500: #3b82f6
--color-medical-blue-600: #2563eb  /* الأزرق الأساسي */
--color-medical-blue-700: #1d4ed8
--color-medical-blue-800: #1e40af
--color-medical-blue-900: #1e3a8a  /* أزرق غامق */
```

**الاستخدام:** للأزرار الأساسية، العناوين، الأيقونات الرئيسية

---

### الألوان الطبية (الأخضر المزرق - Teal)
```css
--color-medical-teal-50: #f0fdfa   /* أخضر مزرق فاتح جداً */
--color-medical-teal-100: #ccfbf1
--color-medical-teal-200: #99f6e4
--color-medical-teal-300: #5eead4
--color-medical-teal-400: #2dd4bf
--color-medical-teal-500: #14b8a6  /* الأخضر المزرق الأساسي */
--color-medical-teal-600: #0d9488
--color-medical-teal-700: #0f766e
--color-medical-teal-800: #115e59
--color-medical-teal-900: #134e4a  /* أخضر مزرق غامق */
```

**الاستخدام:** للأزرار الثانوية، البطاقات، العناصر التفاعلية

---

### الألوان الرمادية
```css
--color-gray-50: #f9fafb    /* خلفيات فاتحة */
--color-gray-100: #f3f4f6
--color-gray-200: #e5e7eb
--color-gray-300: #d1d5db
--color-gray-400: #9ca3af
--color-gray-500: #6b7280
--color-gray-600: #4b5563   /* نصوص ثانوية */
--color-gray-700: #374151
--color-gray-800: #1f2937
--color-gray-900: #111827   /* نصوص أساسية */
```

**الاستخدام:** للنصوص، الخلفيات، الحدود

---

### ألوان إضافية
```css
--color-white: #ffffff      /* الخلفية الأساسية */
--color-yellow-300: #fcd34d /* تنبيهات / متاح 24/7 */
--color-red-600: #dc2626    /* أخطاء / طوارئ */
--color-green-600: #16a34a  /* نجاح / تأكيد */
```

---

## 📝 الخطوط

### أحجام الخطوط
```css
--text-xs: 0.75rem      /* 12px - نصوص صغيرة جداً */
--text-sm: 0.875rem     /* 14px - نصوص صغيرة */
--text-base: 1rem       /* 16px - النص الأساسي */
--text-lg: 1.125rem     /* 18px - نصوص كبيرة */
--text-xl: 1.25rem      /* 20px - عناوين ثانوية */
--text-2xl: 1.5rem      /* 24px - عناوين h1 */
--text-3xl: 1.875rem    /* 30px - عناوين كبيرة */
--text-4xl: 2.25rem     /* 36px - عناوين رئيسية */
--text-5xl: 3rem        /* 48px - عناوين ضخمة */
--text-6xl: 3.75rem     /* 60px - عناوين Hero */
```

### أوزان الخطوط
```css
--font-weight-normal: 400     /* نص عادي */
--font-weight-medium: 500     /* متوسط */
--font-weight-semibold: 600   /* نصف عريض */
--font-weight-bold: 700       /* عريض */
```

### عائلة الخطوط
```css
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'...
--font-family-heading: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'...
```

---

## 🌈 التدرجات

### التدرج الأساسي (من الأزرق إلى الأخضر المزرق)
```css
--gradient-primary: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)
--gradient-primary-hover: linear-gradient(135deg, #1d4ed8 0%, #0d9488 100%)
```
**الاستخدام:** الأزرار الرئيسية، شعار الموقع، قسم ساعات العمل

---

### تدرجات الخلفيات
```css
/* خلفية Hero */
--gradient-hero-bg: linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdfa 100%)

/* خلفية الأقسام */
--gradient-section-bg: linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)
```

---

### تدرجات البطاقات
```css
/* بطاقة زرقاء */
--gradient-card-blue: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)

/* بطاقة خضراء مزرقة */
--gradient-card-teal: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)

/* بطاقة مختلطة */
--gradient-card-mixed: linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%)
```

---

### تدرجات أخرى
```css
/* للعناصر المميزة */
--gradient-accent: linear-gradient(135deg, #60a5fa 0%, #2dd4bf 100%)

/* قسم ساعات العمل */
--gradient-working-hours: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)
```

---

## 💧 الشفافية
```css
--white-opacity-10: rgba(255, 255, 255, 0.1)   /* 10% شفافية */
--white-opacity-20: rgba(255, 255, 255, 0.2)   /* 20% شفافية */
--white-opacity-95: rgba(255, 255, 255, 0.95)  /* 95% - للشريط العلوي */
--blue-opacity-100: rgba(37, 99, 235, 0.1)     /* خلفية زرقاء شفافة */
--teal-opacity-100: rgba(20, 184, 166, 0.1)    /* خلفية خضراء شفافة */
```

---

## 🌑 الظلال
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)...
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)...
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)...
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

**الاستخدام:**
- `shadow-sm`: للبطاقات البسيطة
- `shadow-lg`: للبطاقات المميزة
- `shadow-xl`: للأزرار عند التمرير
- `shadow-2xl`: للصور الرئيسية

---

## 🔄 الحدود الدائرية
```css
--radius-sm: 0.5rem      /* 8px - عناصر صغيرة */
--radius-md: 0.75rem     /* 12px - متوسطة */
--radius-lg: 1rem        /* 16px - البطاقات */
--radius-xl: 1.5rem      /* 24px - البطاقات الكبيرة */
--radius-2xl: 2rem       /* 32px - الصور */
--radius-full: 9999px    /* دائري كامل - الأزرار */
```

---

## 📐 المسافات
```css
--spacing-xs: 0.25rem    /* 4px */
--spacing-sm: 0.5rem     /* 8px */
--spacing-md: 1rem       /* 16px */
--spacing-lg: 1.5rem     /* 24px */
--spacing-xl: 2rem       /* 32px */
--spacing-2xl: 3rem      /* 48px */
--spacing-3xl: 4rem      /* 64px */
```

---

## 💡 أمثلة الاستخدام

### 1. استخدام الألوان في CSS
```css
.button-primary {
  background: var(--gradient-primary);
  color: var(--color-white);
}

.card {
  background: var(--gradient-card-blue);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-xl);
}
```

### 2. استخدام الألوان في Tailwind
```jsx
<div className="bg-blue-600 text-white">
  // الأزرق الأساسي
</div>

<div className="bg-gradient-to-br from-blue-50 to-teal-50">
  // خلفية بتدرج
</div>
```

### 3. استخدام الخطوط
```css
.heading {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
}

.body-text {
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
}
```

### 4. نمط البطاقة الطبية
```css
.medical-card {
  background: var(--gradient-card-blue);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-xl);
}

.medical-card:hover {
  box-shadow: var(--shadow-2xl);
  transform: translateY(-8px);
}
```

---

## 🎯 التوصيات

### ✅ افعل:
- استخدم `--gradient-primary` للأزرار الرئيسية
- استخدم `--color-medical-blue-600` و `--color-medical-teal-600` كألوان أساسية
- استخدم `--shadow-lg` و `--shadow-xl` للبطاقات التفاعلية
- استخدم `--radius-xl` و `--radius-2xl` للبطاقات والصور

### ❌ لا تفعل:
- لا تخلط الكثير من الألوان في نفس القسم
- لا تستخدم ظلال داكنة جداً
- لا تستخدم أكثر من تدرجين في نفس الصفحة

---

## 📱 الاستجابة (Responsive)
جميع المتغيرات تعمل بشكل تلقائي مع جميع أحجام الشاشات. استخدم Tailwind breakpoints للتحكم:

```jsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  // يتغير حجم النص حسب الشاشة
</div>
```

---

## 📞 الدعم
لأي استفسارات حول الألوان والخطوط، راجع ملف `/src/styles/theme.css`
