import React from "react";
import { Link } from "react-router-dom";
import { SignupForm } from "wasp/client/auth";

export default function Signup() {
  return (
    <div>
      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="relative isolate overflow-hidden bg-gray-900 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              class="absolute items-center top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fill-opacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32">
              <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <h1 class="underline">Advisor.Ai</h1>
                <br />
                AI Assistant for the Stars
              </h2>
              <div className="flex items-center justify-center">
                <div>
                  <div>
                    <SignupForm
                      appearance={{
                        colors: {
                          brand: "var(--auth-form-brand)",
                          brandAccent: "var(--auth-form-brand-accent)",
                          submitButtonText:
                            "var(--auth-form-submit-button-text-color)",
                        },
                      }}
                    />
                    <div className="mt-4 text-center text-white">
                      If you already have an account go to{" "}
                      <Link
                        to="/login"
                        className="text-primary-500 hover:text-primary-800 underline"
                      >
                        login
                      </Link>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
