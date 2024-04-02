import Image from 'next/image'

import { footerIcons, footerLinks } from '@/constants'

export const FooterStore = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col lg:gap-44">
        {/* Footer logo */}
        <div className="flex flex-col items-start">
          <a className="flex gap-4" href="">
            <Image
              src="/group.svg"
              alt="Digital Store"
              width={32}
              height={32}
            />
            <h2 className="text-4xl font-bold text-white">Digital Store</h2>
          </a>
          <p className="mt-8 leading-7 text-white sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            earum in! Possimus culpa, ad alias a eveniet nam aliquid!
          </p>
          <div className="mt-8 flex items-center gap-5">
            {/* Footer links */}
            {footerIcons.map((icon, ix) => (
              <div
                key={ix}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        {/* Sections */}
        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((section, ix) => (
            <div key={ix}>
              <h4 className="mb-6 select-none text-xl font-medium leading-normal text-white">
                {section.title}
              </h4>
              <ul>
                {/* Section links */}
                {section.links.map((link, ix) => (
                  <li
                    key={ix}
                    className="mt-3 cursor-pointer select-none text-base leading-normal text-white hover:text-light-gray-2"
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-10" />
      {/* Copyright */}
      <div className="mt-4 flex justify-center">
        <p className="text-white">
          &copy;All rights reserved - Drip Store 2024
        </p>
      </div>
    </footer>
  )
}
