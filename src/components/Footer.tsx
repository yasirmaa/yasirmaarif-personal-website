import { RiGithubFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-12">
      <div className="mx-auto px-8 2xl:px-0 lg:px-10 w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#  " className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Yasirmaarif
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://react.dev/" className="hover:underline hover:text-cyan-500">
                    React JS
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline hover:text-cyan-500"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/yasirmaa"
                    target="_blank"
                    className="hover:underline hover:text-cyan-500 "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yasirmaarif/"
                    target="_blank"
                    className="hover:underline hover:text-cyan-500"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="#" className="hover:underline ">
              Yasirmaarif™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaInstagram className="w-4 h-4" />
              <span className="sr-only">Instagram page</span>
            </a>

            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <AiFillTikTok className="w-4 h-4" />
              <span className="sr-only">TikTok page</span>
            </a>

            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <RiGithubFill className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>

            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaLinkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
