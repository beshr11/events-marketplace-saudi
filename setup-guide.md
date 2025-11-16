# setup-guide.md

## 1. تثبيت المشروع
```bash
git clone https://github.com/beshr11/events-marketplace-saudi.git
cd events-marketplace-saudi
npm install
```

## 2. إعداد قاعدة البيانات
```bash
# قم بإعداد متغيرات البيئة
cp .env.example .env.local

# أنشئ الجداول
npx prisma db push
npx prisma studio
```

## 3. تشغيل المشروع
```bash
npm run dev
# افتح http://localhost:3000
```

## 4. ربط Tap Payments
- أنشئ حساب مطوّر في Tap
- أضف المفاتيح في .env.local
- استخدم endpoint /api/payments/create-charge لإنشاء عملية دفع

## 5. اختبار النظام
- جرب تسجيل مورد وعميل
- أنشئ طلب خدمة
- جرب إرسال عرض سعر وقبول الطلب
- جرب الدفع عبر Tap

## 6. النشر على Vercel
- اربط المستودع في Vercel
- ضبط متغيرات البيئة للإنتاج
- فعّل Tap Payment وضع الإنتاج
