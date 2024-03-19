// إنشاء كائن apiService يحتوي على طرق لإرسال طلبات GET و POST إلى API
const apiService = {
  // طريقة asynchronous للحصول على بيانات من API باستخدام طلب GET
  get: async function (url: string): Promise<any> {
    console.log("get", url) // طباعة رسالة توضيحية في وحدة التحكم
    return new Promise((resolve, reject) => {
      // إرسال طلب GET إلى عنوان URL المحدد
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json()) // تحويل الاستجابة إلى JSON
        .then((json) => {
          console.log("Response", json); // طباعة البيانات المستلمة في وحدة التحكم
          resolve(json) // إرجاع البيانات المستلمة
        })
        .catch((error) => {
          console.log("Error", error); // طباعة أي أخطاء في وحدة التحكم
          reject(error) // رفض الوعد في حالة حدوث خطأ
        });
    })
  },
 
  // طريقة asynchronous لإرسال بيانات إلى API باستخدام طلب POST
  post: async function (url: string, data: any): Promise<any> {
    console.log('post', url, data); // طباعة رسالة توضيحية في وحدة التحكم
 
    return new Promise((resolve, reject) => {
      // إرسال طلب POST إلى عنوان URL المحدد مع البيانات المقدمة
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json()) // تحويل الاستجابة إلى JSON
        .then((json) => {
          console.log("Response", json); // طباعة البيانات المستلمة في وحدة التحكم
          resolve(json) // إرجاع البيانات المستلمة
        })
        .catch((error => {
          reject(error) // رفض الوعد في حالة حدوث خطأ
        }));
    })
  }
 }
 
 // تصدير كائن apiService ليتم استخدامه في أماكن أخرى من التطبيق
 export default apiService