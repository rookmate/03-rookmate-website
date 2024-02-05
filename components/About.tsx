import Image from 'next/image';

export default  function About() {
  return (
    <section className="text-center py-20">
      <Image
        alt="Profile Picture"
        className="mx-auto rounded-full h-40 w-40 object-cover"
        height="400"
        src="/next.svg"
        style={{
          aspectRatio: "400/400",
          objectFit: "cover",
        }}
        width="400"
      />
      <h2 className="text-4xl font-bold mt-4">Hello, I'm Rookmate</h2>
      <p className="text-xl mt-2">
        Insert awesome text about me
      </p>
    </section>
  );
}
