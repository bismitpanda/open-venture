import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col gap-2 md:mb-0">
            <Image
              width={200}
              height={32}
              src="/logo-extended.png"
              alt="Open Venture"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-left">
              3100 Mowry Ave, Fremont, CA 94538
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-left">
              info@openventure.com | +1 (415) 654-0685
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © {`${new Date().getUTCFullYear()} `}
              <Link href="https://openventure.com/" className="hover:underline">
                Open Venture Inc
              </Link>
              . All Rights Reserved.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/greencardinc"
                    className="hover:underline "
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/greencardinc/"
                    className="hover:underline "
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x.com/greencard_inc"
                    className="hover:underline "
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/greencard_inc/"
                    className="hover:underline "
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terms"
                    className="hover:underline "
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/e/2PACX-1vSw3SRmlDvRTKsLwvMnGoJpimqIgqw2wBrkZojnQBDDAr4KiFKpYT6sQtvBGnghqA/pub"
                    className="hover:underline"
                  >
                    Data Processing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/e/2PACX-1vSFryh8tuExtEPszK-fSFsIBwxIjWKqovmb0t2EoepZk8lPfYBCw_rFg8d_qdUczlX2TDn_YhMvFokE/pub"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
