'use client'

import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/navigation"
import CustomButton from "../forms/CustomButton"
import useSignupModal from "@/app/hooks/useSignUpModal"
const SignupModal = () => {
  const router = useRouter();
  const SignupModal = useSignupModal()
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  
  const content = (
    <>
      <h2 className="mb-6 text-2xl"> Welcome to BNB , please Sign UP </h2>
      <form className="space-y-4">
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your Pssword" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat Password" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        {errors.map((error,index) => {
          return (
            <div 
            key={`errors_${index}`}
            className="p-5 bg-djbnb text-white rounded-xl opacity-80">
              {error}
            </div>
          )
        })}
        
        <CustomButton
          label="Submit"
          onClick={()=>alert('helo')}
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