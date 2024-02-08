interface Link {
  text: string;
  url: string;
}

interface WorkCardProps {
  imageSrc: string;
  workName: string;
  workDescription: string;
  links?: Link[];
}

export default function WorkCard({ imageSrc, workName, workDescription, links }: WorkCardProps) {
  return (
    <div className="card">
      <img
        alt={workName}
        className="w-full h-auto object-contain"
        src={imageSrc}
        style={{
          maxHeight: "200px",
        }}
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{workName}</h3>
        <p className="mt-2">{workDescription}</p>
        {links && links.length > 0 && (
          <div className="mt-4">
            <h5 className="text-lg font-bold">Related links:</h5>
            <ul className="list-disc ml-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
