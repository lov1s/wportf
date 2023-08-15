import Image from 'next/image';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import heroImg from "@/public/hero-section.jpg"

export default function Home() {
  return (
    <main className=" bg-stone-50 px-10 font-medium text-slate-950">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">DevelopbyAK</h1>
          <ul>
            <li></li>
            <li><a href="#" className="py-2 px-4 rounded-full shadow-md bg-emerald-500 hover:bg-emerald-700">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className="text-4xl text-emerald-600">Artem Krasniak</h2>
          <h3 className="text-2xl py-2">Software Engineer</h3>
          <p className="py-5 leading-7 text-slate-700">I'm thrilled to be here, embarking on a journey to secure a dynamic Front End Developer role that aligns perfectly with my passion for crafting seamless user experiences. With a robust foundation in web development and an unwavering commitment to innovation, I'm eager to contribute my expertise to the forefront.

My journey has equipped me with a repertoire of skills that include HTML5, CSS3, JavaScript, and ReactJS. These tools, coupled with my flair for responsive design and UI/UX optimization, enable me to translate imaginative designs into captivating digital realities.</p>
          </div>
          <div className="text-5xl flex justify-center gap-10">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto w-80 h-80 mt-20">
            <Image src={heroImg} alt={'hero image'}/>
          </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-4">Services I offer</h3>
          <p className="py-2 leading-7 text-slate-700">My journey has equipped me with a repertoire of skills that include HTML5, CSS3, JavaScript, and ReactJS. These tools, coupled with my flair for responsive design and UI/UX optimization, enable me to translate imaginative designs into captivating digital realities.</p>
        </div>
      </section>
      
    </main>
  )
}
