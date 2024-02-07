import Image from 'next/image';
import Header from '/components/Header';
import About from '/components/About';
import Footer from '/components/Footer';
import WorkCard from '/components/WorkCard';

export default function Home() {
  return (
    <div className="dark min-h-screen bg-gray-900 text-gray-200">
      <main>
        <About />
        <section className="py-20 grid gap-10 px-8 md:grid-cols-2 lg:grid-cols-3" id="work">
          <WorkCard
            imageSrc="/vercel.svg"
            workName="NFT alpha tracker"
            workDescription="Description of work 3"
          />
          <WorkCard
            imageSrc="/approvals_monitor.jpeg"
            workName="Approvals Monitor"
            workDescription="Description of work 2"
          />
          <WorkCard
            imageSrc="/ascii_pricks_logo.png"
            workName="2023 - ASCII pricks collection"
            workDescription={`A collection of fully on-chain generated and displayed SVG NFTs inspired by a meme between friends.

[Website source code](https://github.com/rookmate/AsciiPricks-website) | [Contract source code](https://github.com/rookmate/AsciiPricks)`}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
