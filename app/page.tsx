import Header from '/components/Header';
import About from '/components/About';
import Footer from '/components/Footer';
import WorkCard from '/components/WorkCard';

export default function Home() {
  const workData = [
    {
      imageSrc: "/telegrambot.png",
      workName: "NFT alpha tracker",
      workDescription: "Telegram bot that tracks major market moves on any Ethereum NFT sweep/dump on a collection above a specified ETH floor.",
    },
    {
      imageSrc: "/approvals_monitor.jpg",
      workName: "Approvals Monitor",
      workDescription: "Discord bot that provides security utility to an NFT collection by monitoring the users' open approvals on the wallet storing the collection NFT.",
    },
    {
      imageSrc: "/ascii_pricks_logo.png",
      workName: "2023 - ASCII pricks collection",
      workDescription: "Collection of fully on-chain generated and displayed SVG NFTs inspired by a meme between friends.",
      links: [
        { text: "Website source code", url: "https://github.com/rookmate/AsciiPricks-website" },
        { text: "Contract source code", url: "https://github.com/rookmate/AsciiPricks" },
      ],
    },
  ];

  return (
    <div className="dark min-h-screen bg-gray-900 text-gray-200">
      <main>
        <About />
        <section className="py-20 grid gap-10 px-8 md:grid-cols-2 lg:grid-cols-3" id="work">
          <div>
            {workData.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
