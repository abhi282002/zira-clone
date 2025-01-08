import React from "react"
import { getCurrent } from '@/features/auth/queries';
import { SignUpCard } from '@/features/auth/components/sign-up-card';
import  {redirect} from "next/navigation";

const SignUpPage = async () => {
  const user = await getCurrent();

  if(!user){
    console.log("User Not found")
  }

  if (user) redirect('/');

  return <SignUpCard />;
};


export default SignUpPage;
