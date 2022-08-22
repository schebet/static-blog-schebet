import React, { FunctionComponent } from "react";

export interface Footer {
  copyrightOwner: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  dribble?: string;
  linkedin?: string;
}

export const Footer: FunctionComponent<Footer> = ({
  copyrightOwner,
  facebook,
  instagram,
  twitter,
  github,
  dribble,
  linkedin,
}) => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2">
          {facebook && (
            <a href={facebook} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
          
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6 text-gray-400">
            © {new Date().getFullYear()} {copyrightOwner}. 
          </p>
        </div>
      </div>
    </div>
  );
};
