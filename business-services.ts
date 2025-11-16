// business-services.ts

// MatchingService مطابقة الطلبات بالموردين
function matchVendors(serviceType, city) {
  // ابحث عن الموردين حسب نوع الخدمة و المدينة في VendorService
  // احسب matchScore وفق عوامل إضافية لاحقًا (تقييم، تكرار الطلب، إلخ)
  // أرجع قائمة الموردين المطابقين
}

// PaymentService
function createTapCharge(requestId, amount, commission) {
  // استخدم Tap API لتنفيذ عملية دفع/charge
  // سجل العملية في جدول Payment مع توزيع العمولة
}

// NotificationService (بريد/رسائل)
function sendNotification(userId, message) {
  // خدمة إرسال بريد إلكتروني أو SMS
}

// RequestService (دورة حياة الطلب)
function updateRequestStatus(requestId, status, userId) {
  // غيّر حالة الطلب، أضف إلى سجل RequestStatusHistory
}
