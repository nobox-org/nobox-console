"use client";
import { serverCall } from "@/servercall/init";
import { serverCalls } from "@/servercall/store";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FormInput from "../../../components/FormInput";
import { LINKS } from "@/lib/links";

const EmailLoginForm = () => {
  const [user, setUser] = useState<Partial<{ email: string; password: string }> | null>();
  const [errors, setErrors] = useState<string[]>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    if (value) {
      setUser(u => ({
        ...u,
        [key]: value
      }))
    }
  }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      setErrors(["Please fill the form first"])
    }

    if (user) {
      try {
        setErrors(undefined);
        const response = await serverCall({
          serverCallProps: {
            call: serverCalls.postAuthLogin,
            data: user
          },
          onSuccess: (res) => {
            const { token } = res;
            if (token) {
              window.location.href = `${LINKS.internalPages.home}?token=${token}`
            }
          },
        });

        console.log({ response });

      } catch (error: any) {

        if (!error) {
          setErrors(["An Unsual Error Occured, Please Fill the Form and Submit Again"])
          return;
        }

        setErrors(Array.isArray(error) ? error : [error]);
      }
    }
  }


  return (
    <form className="text-[#262626] overflow-y-hidden height-[100px]" onSubmit={submit} method="post">
      <div className={`text-[#d19500] text-[12px] text-center my-2`}>{(errors || []).map((error, i) => (<li key={i}>{error}</li>))}</div>
      <FormInput name="email" type="email" onChange={onChange} title="Email Address" className="w-full" />
      <FormInput name="password" type="password" onChange={onChange} title="Password" className="w-full" />
      <button
        className="w-full text-md text-[#0C0C0B] font-[600] text-[16px] auth-btn py-[16px] mt-[32px] mb-[24px]  hover:bg-blue-700 active:opacity-50 active:cursor-not-allowed" >
        Login
      </button>
    </form>

  );
};

export default EmailLoginForm;
