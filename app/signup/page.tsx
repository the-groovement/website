"use client";
import JoinInput from "@/components/JoinInput";
import { FormEvent, useState } from "react";

export default function SignUp() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    //fetch
  }

  return (
    <form onSubmit={onSubmit} className="my-6">
      <div className="flex flex-col pb-8 md:pb-12 mt-2 sm:mt-8 lg:w-1/2 mx-auto">
        <p className="text-[40px] sm:text-7xl mb-4 font-shrikhand">join us</p>
        <p className="text-2xl sm:text-3xl">
          signup for show recommendations, weekly updates, events & more!
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 mx-auto">
        <JoinInput
          label="First Name"
          type="text"
          name="firstName"
          required={true}
        />
        <JoinInput
          label="Last Name"
          type="text"
          name="lastName"
          required={true}
        />
        <JoinInput label="Email" type="email" name="email" required={true} />
        <JoinInput
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="Optional"
          required={false}
        />
        <JoinInput
          label="Birthday"
          type="text"
          name="birthday"
          placeholder="Optional"
          required={false}
        />
        <JoinInput
          label="Instagram @"
          type="text"
          name="instagram"
          placeholder="Optional"
          required={false}
        />
        <JoinInput
          label="TikTok @"
          type="text"
          name="tiktok"
          placeholder="Optional"
          required={false}
        />
        <label className="my-2">
          <input type="checkbox" required className="mr-2" />
          By creating an account on our platform, you agree to our terms and
          conditions and to receive all email and marketing communications from
          the groovement LLC. You may unsubscribe at any point by using the
          unsubscribe link in emails or by reaching out to
          boogie@thegroovement.co.
        </label>
      </div>
      <div className="lg:w-1/2 mx-auto mt-6">
        <button
          type="submit"
          className="bg-green-300 py-3 px-4 rounded-2xl font-bold"
        >
          submit
        </button>
      </div>
    </form>
  );
}
