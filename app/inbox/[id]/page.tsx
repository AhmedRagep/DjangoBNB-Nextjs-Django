import Image from "next/image"
import ConversationDetail from "@/app/comp/inbox/ConversationDetail"
const ConversationPage = ()=>{
  return (
    <main className="max-w-[1500px] max-auto px-6 pb-6">
      <ConversationDetail/>
    </main>
  )
}

export default ConversationPage