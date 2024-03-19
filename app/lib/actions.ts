'use server'

import { cookies } from "next/headers"


// من المرجح أن يتم استدعاء هذه الدالة بعد عملية مصادقة المستخدم بنجاح 
// (مثل تسجيل الدخول أو الاشتراك). يمكن استخدام الكوكيز التي تم تعيينها بواسطة هذه الدالة للحفاظ على حالة جلسة المستخدم وحالة 
// المصادقة عبر طلبات متعددة إلى الخادم.

export async function handleLogin(userId:string,accessToken:string,refreshToken:string){
  cookies().set('session_userid', userId ,{ 
    httpOnly : true,
    secure : process.env.NODE_ENV === 'production',
    maxAge : 60 * 60 * 24 * 7,
    path : '/'
  });

  cookies().set('session_access_token', accessToken ,{ 
    httpOnly : true,
    secure : process.env.NODE_ENV === 'production',
    maxAge : 60 * 60,
    path : '/'
  });

  cookies().set('session_refresh_token', refreshToken ,{ 
    httpOnly : true,
    secure : process.env.NODE_ENV === 'production',
    maxAge : 60 * 60 * 24 * 7,
    path : '/'
  });
}

// دالة لحذف معلومات اليوزر من الموقع
export async function restAuthCookies(){
  cookies().set('session_userid','');
  cookies().set('session_access_token','');
  cookies().set('session_refresh_token','');
}


// دالة لجلب رقم اليوزر ان وجد ولو لم يوجد يكون فارغ
export async function getUserId(){
  const userId = cookies().get('session_userid')?.value
  return userId ? userId : null;
}