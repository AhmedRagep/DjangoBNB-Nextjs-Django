'use client'

import Modal from "./Modal"
import { useState } from "react"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"
import { useRouter } from "next/navigation"
import { handleLogin } from "@/app/lib/actions"
import apiService from "@/app/services/apiService"


const LoginModal = () => {
  const router = useRouter()
  const LoginModal = useLoginModal()
  const [email,  setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async() =>{
    // جلب البيانات
    const formData = {
      email:email,
      password:password,
    }

    // اعطاء القيم للرابط
    const response = await apiService.post("/api/auth/login", JSON.stringify(formData));

    // لو تم انشاء الحساب
    if (response.access) {

      handleLogin(response.user.pk, response.access, response.refresh)
      // اغلق المودال
      LoginModal.close();
      // اذهب الي الصفحة الرئيسيه
      router.push('/')
      // لو فيه حاجه غلط
    }else{
      setErrors(response.non_field_errors)
    }
  }

  const content = (
    <>
      <h2 className="mb-6 text-2xl"> Welcome to BNB , please log in </h2>
      <form
        action={submitLogin}
        className="space-y-4">
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Your Pssword" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
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
          onClick={submitLogin}
          className=""
        />
      </form>
    </>
  )
  return (
    <Modal
      isOpen={LoginModal.isOpen}
      close={LoginModal.close}
      label="Log In"
      content={content}
    />
  )
}

export default LoginModal