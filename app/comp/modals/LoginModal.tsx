'use client'

import Modal from "./Modal"
import { useState } from "react"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"
const LoginModal = () => {
  const LoginModal = useLoginModal()
  const content = (
    <>
      <h2 className="mb-6 text-2xl"> Welcome to BNB , please log in </h2>
      <form className="space-y-4">
        <input placeholder="Your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        <input placeholder="Your Pssword" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
        <div className="p-5 bg-djbnb text-white rounded-xl opacity-80">
          this is error
        </div>
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
      isOpen={LoginModal.isOpen}
      close={LoginModal.close}
      label="Log In"
      content={content}
    />
  )
}

export default LoginModal