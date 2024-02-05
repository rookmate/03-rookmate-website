import Image from "next/image";
import NavMenu from './NavMenu';
import About from '/components/About';
import Footer from '/components/Footer';
import WorkCard from '/components/WorkCard';

export default function Home() {
  return (
    <div className="dark min-h-screen bg-gray-900 text-gray-200">
      <header className="flex items-center justify-between px-8 py-4">
        <h1 className="text-3xl font-bold">Rookmate</h1>
        <NavMenu />
      </header>
      <main>
        <About />
        <section className="py-20 grid gap-10 px-8 md:grid-cols-2 lg:grid-cols-3" id="work">
          <WorkCard
            imageSrc="/vercel.svg"
            workName="Work 1"
            workDescription="Description of work 1"
          />
          <WorkCard
            imageSrc="/vercel.svg"
            workName="Work 2"
            workDescription="Description of work 2"
          />
          <WorkCard
            imageSrc="/vercel.svg"
            workName="Work 3"
            workDescription="Description of work 3"
          />
          <WorkCard
            imageSrc="/vercel.svg"
            workName="Work 4"
            workDescription="Description of work 4"
          />
          <WorkCard
            imageSrc="/vercel.svg"
            workName="Work 5"
            workDescription="Description of work 5"
          />
          <WorkCard
            imageSrc="/vercel.svg"
            workName="Work 6"
            workDescription="Description of work 6"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
