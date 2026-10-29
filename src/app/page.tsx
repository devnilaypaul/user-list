import UserCard, { type UserCardData } from "@/components/UserCard/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Starter Frontend",
  description: "Production grade Next.js starter template",
};

const demoUsers: UserCardData[] = [
  {
    name: "Aarav Mehta",
    role: "Frontend Engineer",
    email: "aarav.mehta@example.com",
    location: "Bengaluru, India",
    initials: "AM",
    accent: {
      wash: "from-amber-400/20",
      avatar:
        "bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-400",
    },
    status: {
      label: "Available",
      dot: "bg-emerald-500",
    },
  },
  {
    name: "Sofia Rossi",
    role: "Product Designer",
    email: "sofia.rossi@example.com",
    location: "Milan, Italy",
    initials: "SR",
    accent: {
      wash: "from-emerald-400/20",
      avatar:
        "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-400",
    },
    status: {
      label: "In a meeting",
      dot: "bg-amber-500",
    },
  },
  {
    name: "Daniel Kim",
    role: "Data Scientist",
    email: "daniel.kim@example.com",
    location: "Seoul, South Korea",
    initials: "DK",
    accent: {
      wash: "from-sky-400/20",
      avatar: "bg-sky-500/10 text-sky-700 ring-sky-500/20 dark:text-sky-400",
    },
    status: {
      label: "Offline",
      dot: "bg-muted-foreground/60",
    },
  },
];

const page = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="mx-auto max-w-2xl text-center">
        <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
          Demo directory
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Meet the people behind the product
        </h1>

        <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-pretty">
          A trio of sample profiles showing how the directory looks. Connect
          with the team or use these cards as a starting point.
        </p>
      </section>

      <section
        aria-label="Demo users"
        className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {demoUsers.map((user) => (
          <UserCard
            key={user.email}
            user={user}
          />
        ))}
      </section>
    </div>
  );
};

export default page;
