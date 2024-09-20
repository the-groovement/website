"use client";
import JoinInput from "@/components/JoinInput";
import ReCAPTCHA from "react-google-recaptcha";
import { FormEvent, useRef, useState } from "react";
import jsonp from "jsonp";

export default function SignUp() {
  const recaptchaRef = useRef<any>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setIsCaptchaVerified(true);
    }
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isCaptchaVerified) return;

    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const url =
      "https://nyc.us5.list-manage.com/subscribe/post?u=0741a65a0158b3ad4a80a59d6&amp;id=a1bcf057b6&amp;f_id=00effeedf0";

    try {
      jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (err, data) => {
        if (err) {
          setErrorMessage("Something went wrong. Please try again.");
          return;
        }

        const { msg, result } = data;

        if (result === "success") {
          setIsSubscribed(true);
          setErrorMessage("");
        } else {
          // The message might include detailed error info from Mailchimp
          setErrorMessage(
            msg || "Failed to subscribe. Please check your email."
          );
        }
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
        <JoinInput label="Email" type="email" name="email" required={true} />
        {/* <label className="my-2">
          <input type="checkbox" required className="mr-2" />
          By creating an account on our platform, you agree to our terms and
          conditions and to receive all email and marketing communications.
        </label> */}
        {/* <ReCAPTCHA
          ref={recaptchaRef}
          onChange={handleCaptchaChange}
        /> */}
      </div>
      <div className="lg:w-1/2 mx-auto mt-6">
        <button
          type="submit"
          className={
            !isCaptchaVerified || isLoading
              ? "bg-gray-200 rounded-3xl h-12 w-32 border border-groove1 drop-shadow-[6px_6px_0px_rgba(58,42,60,1)] whitespace-nowrap hover:cursor-not-allowed"
              : "bg-white rounded-3xl h-12 w-32 border border-groove1 drop-shadow-[6px_6px_0px_rgba(58,42,60,1)] whitespace-nowrap hover:font-semibold"
          }
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
      {(errorMessage || isSubscribed) && (
        <div className="flex flex-col mt-2 sm:mt-8 lg:w-1/2 mx-auto">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {isSubscribed && (
            <p className="text-green-500">Subscribed successfully!</p>
          )}
        </div>
      )}
    </form>
  );
}
