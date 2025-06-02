"use client";

import Image from "next/image";

type AttachedFilesProps = {
  files: { name: string; url: string }[];
  onRemove: (index: number) => void;
};

export default function AttachedFiles({ files, onRemove }: AttachedFilesProps) {
  if (files.length === 0) return null;

  return (
    <div className="mb-2 flex flex-wrap gap-3 px-4">
      {files.map((file, index) => (
        <div
          key={index}
          className="relative flex items-center gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-sm"
        >
          {file.name.match(/\.(jpg|jpeg|png)$/i) ? (
            <Image
              src={file.url}
              alt={file.name}
              width={64}
              height={64}
              className="rounded-md object-cover"
            />
          ) : (
            <div className="text-sm text-gray-700">{file.name}</div>
          )}

          <button
            onClick={() => onRemove(index)}
            className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs text-white shadow hover:bg-red-600"
            title="Премахни"
            type="button"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
