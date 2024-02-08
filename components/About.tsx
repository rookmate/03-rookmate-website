import Image from 'next/image';

export default  function About() {
  return (
    <section className="text-center py-20">
      <Image
        alt="Profile Picture"
        className="mx-auto rounded-full h-40 w-40 object-cover"
        height="400"
        src="/pfp.jpg"
        style={{
          aspectRatio: "400/400",
          objectFit: "cover",
        }}
        width="400"
      />
      <h2 className="text-4xl font-bold mt-4">gm, I&apos;m Rookmate</h2>
      <p className="text-xl mt-2">
        Digital Craftsman, Product Enthusiast, Solidity Developer, Artist
      </p>
    </section>
  );
}
