'use client'

import { useRouter } from "next/navigation"
import MenuLink from "./navbar/MenuLink"
import { restAuthCookies } from "../lib/actions"


const LogoutButton: React.FC = () => {
  const router = useRouter();

  const submitLogout = async () => {
    // دالة حذف المعلومات
    restAuthCookies()

    router.push('/')
  }

  return (
    <MenuLink 
      label="Log Out"
      onClick={submitLogout}
    />
  )
}

export default LogoutButton;