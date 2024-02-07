import ReactMarkdown from 'react-markdown';

interface WorkCardProps {
  imageSrc: string;
  workName: string;
  workDescription: string;
}

export default function WorkCard({ imageSrc, workName, workDescription }: WorkCardProps) {
  return (
    <div className="card">
      <img
        alt={workName}
        className="w-full h-auto object-contain"
        src={imageSrc}
        style={{
          maxHeight: "200px", // Adjust the maximum height as needed
        }}
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{workName}</h3>
        <p className="mt-2">
          <ReactMarkdown>{workDescription}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
}
