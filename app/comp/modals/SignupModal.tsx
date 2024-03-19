'use client'

import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/navigation"
import CustomButton from "../forms/CustomButton"
import useSignupModal from "@/app/hooks/useSignUpModal"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/actions"




const SignupModal = () => {
  const router = useRouter();
  const SignupModal = useSignupModal()
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  //  Submit the form to create a new user.
  const submitSignup = async () =>{
    // جلب البيانات
    const formData = {
      email:email,
      password1:password1,
      password2:password2
    }

    // اعطاء القيم للرابط
    const response = await apiService.post("/api/auth/register", JSON.stringify(formData));
    // لو تم انشاء الحساب
    if (response.access) {

      handleLogin(response.user.pk, response.access, response.refresh)
      // اغلق المودال
      SignupModal.close();
      // اذهب الي الصفحة الرئيسيه
      router.push('/')
      // لو فيه حاجه غلط
    } else {
      // متغير به الاخطاء
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      })
      // ارسال الاخطاء الي متغير الاخطاء العلوي
      setErrors(tmpErrors);
    }
  }
  
  const content = (
    <>
      <h2 className="mb-6 text-2xl"> Welcome to BNB , please Sign UP </h2>
      <form 
        action={submitSignup}
        className="space-y-4">
          {/* ارسال القيمه لكل متغير علوي */}
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your Pssword" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat Password" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        {/* عمل تكرار علي الاخطاء */}
        {errors.map((error, index) => {
          return (
            <div 
              key={`errors_${index}`}
              className="p-5 bg-djbnb text-white rounded-xl opacity-80"
            >
              {/* عرض الخطأ */}
              {error}
            </div>
          )
        })}
        
        <CustomButton
          label="Submit"
          onClick={submitSignup}
          className=""
        />
      </form>
    </>
  )
  return (
    <Modal
      isOpen={SignupModal.isOpen}
      close={SignupModal.close}
      label="Sign up"
      content={content}
    />
  )
}

export default SignupModal