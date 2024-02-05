import React from 'react';

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
        className="w-full h-40 object-cover"
        height="200"
        src={imageSrc}
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{workName}</h3>
        <p className="mt-2">{workDescription}</p>
      </div>
    </div>
  );
};
