import { icons } from 'react-icons';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import {SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiReact, SiRedux, SiAxios, SiExpress, SiPostgresql, SiSequelize, SiJsonwebtokens, SiGit, SiTrello, SiDiscord, SiSlack,} from 'react-icons/si'
import {FaNodeJs, FaRobot} from 'react-icons/fa';
import {TbBrandVscode} from 'react-icons/tb';
import Image from "next/image";
import profile from '../../public/profile.jpg';
import ogm from '../../public/ogm.png';
import meute from '../../public/meute.png';
import alain from '../../public/alain.png';

export default function Home() {

  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
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
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Szimonetta Sipos Chapron</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Développeur Web FullStack JavaScript</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
            Suite à la fin de ma formation avec O'Clock et mon passage au Titre Professionnel,
            je cherche activement un poste en alternance ou en CDI en tant que développeur web fullstack.
            Je propose également mes services en tant que freelance.
            N'hésitez pas à me contacter pour discuter de votre projet ! 
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin/>
            <AiFillGithub/>
            <AiOutlineMail/>
          </div>
          <div className='relative mx-auto w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={profile} className='rounded-full'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>A propos</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
            Grâce à la formation avec O’Clock, je me sens prête à commencer ma nouvelle vie professionnelle
            en tant que développeur web. Je sais que je vais devoir relever d'autres défis pour trouver
            ma place dans ce métier, mais je suis ouverte pour envisager toutes les possibilités
            (alternance, CDI ou freelance) en vue d'acquérir plus d’expérience.
            En attendant, je vais continuer à travailler sur mes projets personnels et me former sur d'autres technologies.
            </p>
          </div>
        </section>

      <section>
      <h3 className='text-3xl py-10'>Mes compétences</h3>
        <div className='bg-gradient-to-r from-cyan-500 to-teal-500'>
          <article>
            <h4 className='text-2xl py-1 flex justify-center pt-5'>Front-end</h4>
              <ul className='text-5xl flex justify-center text-center gap-16 pt-5 text-gray-800'>
                <li>
                  <SiHtml5/>
                  <p className='text-sm pt-2'>HTML5</p>
                </li>
                <li>
                  <SiCss3/>
                  <p className='text-sm pt-2'>CSS3</p>
                </li>
                <li>
                  <SiSass/>
                  <p className='text-sm pt-2'>Sass</p>
                </li>
                <li>
                  <SiTailwindcss/>
                  <p className='text-sm pt-2'>TailwindCSS</p>
                </li>
                <li>
                  <SiJavascript/>
                  <p className='text-sm pt-2'>JavaScript</p>
                </li>
                <li>
                  <SiReact/>
                  <p className='text-sm pt-2'>React</p>
                </li>
                <li>
                  <SiRedux/>
                  <p className='text-sm pt-2'>Redux</p>
                </li>
                <li>
                  <SiAxios/>
                  <p className='text-sm pt-2'>Axios</p>
                </li>   
              </ul>
          </article>
          <article>
            <h4 className='text-2xl py-1 flex justify-center pt-5'>Back-end</h4>
              <ul className='text-5xl flex justify-center gap-16 py-5 text-gray-800'>
                <li>
                  <FaNodeJs/>
                  <p className='text-sm pt-2'>NodeJS</p>
                </li>
                <li>
                  <SiExpress/>
                  <p className='text-sm pt-2'>Express</p>
                </li>
                <li>
                  <SiPostgresql/>
                  <p className='text-sm pt-2'>PostgreSQL</p>
                </li>
                <li>
                  <SiSequelize/>
                  <p className='text-sm pt-2'>Sequelize</p>
                </li>
                <li>
                  <SiJsonwebtokens/>
                  <p className='text-sm pt-2'>JSON web token</p>
                </li>
              </ul>
          </article>
          <article>
            <h4 className='text-2xl py-1 flex justify-center pt-5'>Outils</h4>
              <ul className='text-5xl flex justify-center gap-16 py-5 text-gray-800'>
                <li>
                  <TbBrandVscode/>
                  <p className='text-sm pt-2'>VSCode</p>
                </li>
                <li>
                  <SiGit/>
                  <p className='text-sm pt-2'>Git</p>
                </li>
                <li>
                  <AiFillGithub/>
                  <p className='text-sm pt-2'>GitHub</p>
                </li>
                <li>
                  <SiTrello/>
                  <p className='text-sm pt-2'>Trello</p>
                </li>
                <li>
                  <FaRobot/>
                  <p className='text-sm pt-2'>DailyBot</p>
                </li>
                <li>
                  <SiSlack/>
                  <p className='text-sm pt-2'>Slack</p>
                </li>
                <li>
                  <SiDiscord/>
                  <p className='text-sm pt-2'>Discord</p>
                </li>
              </ul>
          </article>
        </div>
      </section>

    <section>
      <h3 className='text-3xl py-10'>Mes projets</h3>
        <div className='lg:flex gap-10'>
          <article>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={ogm} width={500} height={500}/>
              <h3 className='text-xl font-bold pt-8 pb-2 text-teal-600'>O'Game Master</h3>
              <p className='py-2'>
                Plateforme participative de partage et d'hébergement
                de scénario de jeux de rôles en ligne, développé en équipe.
              </p>
              <p className='text-sm font-bold'>
                #React #TailwindCSS #NodeJS #Express #PostgreSQL
              </p>
            </div>
          </article>

          <article>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={meute} width={500} height={500}/>
              <h3 className='text-xl font-bold pt-8 pb-2 text-teal-600'>La Meute de Garmr</h3>
              <p className='py-2'>
                Site vitrine de l'association La Meute de Garmr
                qui font de l'évocation médiévale du IXème au XVème siècle.
              </p>
              <p className='text-sm font-bold'>
                #React #TailwindCSS
              </p>
            </div>
        </article>

        <article>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={alain} width={500} height={500}/>
            <h3 className='text-xl font-bold pt-8 pb-2 text-teal-600'>Alain CG Photography</h3>
            <p className='py-2'>
              Site du photographe Alain CG pour consultez
              ses albums photos, prendre contact et lire ses actualités.
            </p>
            <p className='text-sm font-bold'>
              #React #TailwindCSS #Strapi
            </p>
          </div>
        </article>
        </div>
      </section>
      </main>
    </div>
  )
}
