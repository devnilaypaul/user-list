import { Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export type UserCardData = {
  name: string;
  role: string;
  email: string;
  location: string;
  initials: string;
  accent: {
    wash: string;
    avatar: string;
  };
  status: {
    label: string;
    dot: string;
  };
};

type UserCardProps = {
  user: UserCardData;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <article className="group bg-card hover:border-foreground/20 relative flex flex-col overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b to-transparent",
          user.accent.wash,
        )}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex size-14 items-center justify-center rounded-full text-base font-semibold ring-1 ring-inset",
            user.accent.avatar,
          )}>
          {user.initials}
        </div>

        <span className="bg-background/60 text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm">
          <span
            className={cn("size-1.5 rounded-full", user.status.dot)}
            aria-hidden="true"
          />
          {user.status.label}
        </span>
      </div>

      <div className="relative mt-5">
        <h2 className="text-lg font-semibold tracking-tight">{user.name}</h2>
        <p className="text-muted-foreground mt-0.5 text-sm">{user.role}</p>
      </div>

      <div className="relative mt-5 space-y-2 border-t pt-4 text-sm">
        <a
          href={`mailto:${user.email}`}
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
          <Mail
            className="size-4 shrink-0"
            aria-hidden="true"
          />
          <span className="truncate">{user.email}</span>
        </a>

        <p className="text-muted-foreground flex items-center gap-2">
          <MapPin
            className="size-4 shrink-0"
            aria-hidden="true"
          />
          {user.location}
        </p>
      </div>
    </article>
  );
};

export default UserCard;
