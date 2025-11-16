// api-examples.ts

// تسجيل مورد جديد
POST /api/auth/register-vendor
{
  name, companyName, phone, email, city, serviceType, description, websiteUrl, logoFile, crDocumentFile, password
}

// تسجيل عميل جديد
POST /api/auth/register-client
{
  name, organizationName, clientType, email, phone, city, requestedServiceTypes[], notes, password
}

// إنشاء طلب خدمة (من العميل)
POST /api/requests
{
  title, description, city, requestedDate, budgetRange, serviceItemIds[], clientId
}

// عرض الخدمات الرئيسية
GET /api/services/categories

// عرض الخدمات الفرعية حسب التصنيف
GET /api/services/items?category_id=ID

// استعراض طلبات مطابقة للمورد
GET /api/vendor/requests?serviceType=Q&city=A

// إرسال عرض سعر من مورد
POST /api/vendor/requests/{requestId}/quote
{
  vendorId, amount, currency, notes, validUntil
}

// قبول عرض سعر (من العميل)
POST /api/requests/{requestId}/accept-quote
{
  quoteId
}

// إنشاء عملية دفع عبر Tap
POST /api/payments/create-charge
{
  requestId, amount, commission
}

// Webhook Tap Payments
POST /api/payments/webhook
{
  ...TapPayload
}

// إدارة الاعلانات
GET/POST/PUT /api/admin/advertisements

// لوحة مدير النظام لإدارة المستخدمين وخدماتهم وصلاحياتهم
GET/POST/PUT /api/admin/vendors
GET/POST/PUT /api/admin/clients
GET/POST/PUT /api/admin/services
GET/POST/PUT /api/admin/support-tickets
GET/POST/PUT /api/admin/users
