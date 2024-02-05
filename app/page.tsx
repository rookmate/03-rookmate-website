import Image from "next/image";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-gray-900 text-gray-200">
      <header className="flex items-center justify-between px-8 py-4">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a className="hover:underline" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Work
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="text-center py-20">
          <img
            alt="Profile Picture"
            className="mx-auto rounded-full h-40 w-40 object-cover"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
          <h2 className="text-4xl font-bold mt-4">Hello, I'm John Doe</h2>
          <p className="text-xl mt-2">
            A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with
            JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.
          </p>
        </section>
        <section className="py-20 grid gap-10 px-8 md:grid-cols-2 lg:grid-cols-3" id="work">
          <div className="card">
            <img
              alt="Work 1"
              className="w-full h-40 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Work 1</h3>
              <p className="mt-2">Description of work 1</p>
            </div>
          </div>
          <div className="card">
            <img
              alt="Work 2"
              className="w-full h-40 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Work 2</h3>
              <p className="mt-2">Description of work 2</p>
            </div>
          </div>
          <div className="card">
            <img
              alt="Work 3"
              className="w-full h-40 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Work 3</h3>
              <p className="mt-2">Description of work 3</p>
            </div>
          </div>
          <div className="card">
            <img
              alt="Work 4"
              className="w-full h-40 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Work 4</h3>
              <p className="mt-2">Description of work 4</p>
            </div>
          </div>
          <div className="card">
            <img
              alt="Work 5"
              className="w-full h-40 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Work 5</h3>
              <p className="mt-2">Description of work 5</p>
            </div>
          </div>
          <div className="card">
            <img
              alt="Work 6"
              className="w-full h-40 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Work 6</h3>
              <p className="mt-2">Description of work 6</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center py-8">
        <p>© 2024 John Doe</p>
      </footer>
    </div>
  );
}
