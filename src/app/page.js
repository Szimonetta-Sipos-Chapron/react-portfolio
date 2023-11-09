import { icons } from 'react-icons';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import profile from '../../public/profile.jpg'

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">developedby</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Szimonetta Sipos Chapron</h2>
          <h3 className='text-2xl py-2'>Développeur Web FullStack JavaScript</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
          Suite à la fin de ma formation avec O'Clock et mon passage au Titre Professionnel, je cherche activement un poste en alternance ou en CDI en tant que développeur web fullstack. Je propose également mes services en tant que freelance. N'hésitez pas à me contacter pour discuter de votre projet ! 
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillLinkedin/>
          <AiFillGithub/>
        </div>
        <div className='relative mx-auto w-80 h-80 mt-20'>
          <Image src={profile} className='rounded-full'  />
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1'>A propos</h3>
          <p>
            
          </p>
        </div>
      </section>
    </main>
  )
}
