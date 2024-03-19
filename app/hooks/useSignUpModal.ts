// استيراد دالة create من zustand
import { create } from "zustand";

// تعريف واجهة SignupModalStore التي تحتوي على خصائص وطرق الحالة
interface SignupModalStore {
 isOpen:boolean; // خاصية لتحديد ما إذا كان المودال مفتوحًا أم لا
 open:()=>void; // طريقة لفتح المودال
 close:()=>void; // طريقة لإغلاق المودال
}

// إنشاء متجر حالة باستخدام create من zustand وتعريف الحالة والطرق
const useSignupModal = create<SignupModalStore>((set) => ({
 isOpen: false, // قيمة افتراضية للخاصية isOpen هي false (المودال مغلق)
 open: () => set({ isOpen: true }), // طريقة لتغيير قيمة isOpen إلى true (فتح المودال)
 close: () => set({ isOpen: false }) // طريقة لتغيير قيمة isOpen إلى false (إغلاق المودال)
}))

// تصدير المتجر useSignupModal للاستخدام في أماكن أخرى من التطبيق
export default useSignupModal