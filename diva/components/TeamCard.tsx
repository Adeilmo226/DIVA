import Image from "next/image";

interface Props {
  name: string;
  focus: string;
  school: string;
  photo?: string;
}

export default function TeamCard({ name, focus, school, photo }: Props) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center text-center gap-4 p-4">
      <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-primary shrink-0 bg-surface">
        {photo ? (
          <Image
            src={photo}
            alt={`Photo of ${name}`}
            fill
            sizes="(max-width: 768px) 50vw, 144px"
            className="object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center bg-primary/10"
            aria-label={`Avatar for ${name}`}
          >
            <span className="font-serif text-3xl text-primary font-bold select-none">
              {initials}
            </span>
          </div>
        )}
      </div>
      <div>
        <h3 className="font-serif text-lg text-ink leading-snug mb-1">
          {name}
        </h3>
        <p className="font-sans text-sm text-primary font-medium mb-1">
          {focus}
        </p>
        <p className="font-sans text-xs text-ink/55">{school}</p>
      </div>
    </div>
  );
}
