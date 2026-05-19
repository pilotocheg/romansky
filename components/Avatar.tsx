import Image from "next/image";

type AvatarProps = {
  name: string;
  avatarUrl?: string;
};

export default function Avatar({ name, avatarUrl }: AvatarProps) {
  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt={name}
        width={36}
        height={36}
        className="rounded-full object-cover shrink-0"
      />
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-brand-sky/10 text-brand-sky flex items-center justify-center shrink-0 text-sm font-bold select-none">
      {name.charAt(0)}
    </div>
  );
}
