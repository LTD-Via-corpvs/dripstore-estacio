import { footerIcons, footerLinks } from '@/constants'
import Image from 'next/image'


export const FooterStore = () => {
    return (
        <footer className="max-container">
            <div className="flex flex-wrap justify-between items-start lg:gap-44 gap-20 max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a className='flex gap-4' href="">
                        <Image src="/group.svg" alt="Digital Store" width={32} height={32} />
                        <h2 className="text-4xl font-bold text-white">Digital Store</h2>
                    </a>
                    <p className='text-white mt-8 leading-7 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum in! Possimus culpa, ad alias a eveniet nam aliquid!</p>
                    <div className='flex items-center gap-5 mt-8'>
                        {footerIcons.map((icon) => (
                            <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                                <p>{icon.src}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-1 justify-between flex-wrap lg:gap-10 gap-20'>
                    {footerLinks.map((section) => (
                        <div>
                            <h4 className='text-white text-xl leading-normal font-medium mb-6'>{section.title}</h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li className='mt-3 text-white text-base leading-normal hover:text-slate-500 cursor-pointer'>
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

