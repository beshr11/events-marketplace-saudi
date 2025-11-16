events-marketplace-saudi

├── app
│   ├── (marketing)          # صفحات عامة: الرئيسية، الخدمات، الشركات
│   ├── (auth)               # تسجيل الدخول و تسجيل مورد/عميل
│   ├── (dashboard)          # لوحة تحكم العملاء/الموردين/المدير
│   └── api                  # مسارات REST APIs
├── prisma
│   └── schema.prisma        # نماذج قاعدة البيانات
├── src
│   ├── lib                  # خدمات مشتركة (Tap, Email)
│   ├── services             # الخدمات الخلفية (مطابقة، دفع، إدارة طلبات)
│   └── types                # أنواع البيانات (Interfaces)
├── public                   # ملفات ثابتة (شعار، إعلانات)
├── .env.example             # متغيرات البيئة
└── README.md
