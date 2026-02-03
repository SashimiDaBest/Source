import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to Soleil Pham's portfolio!" },
  ];
}

/** Small helpers to keep JSX clean */
const shell = "mx-auto w-full max-w-6xl px-4";
const section = "mx-auto max-w-6xl px-4";
const sectionTitle = "text-3xl font-bold";
const sectionSub = "opacity-70 mt-1";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      {/* <section className={`${section} py-14`}>
        <Hero />
      </section> */}

      <section id="projects" className={`${section} pb-14`}>
        <div className="flex items-end justify-between gap-4">
          <div className="mt-20"></div>
          <span className="badge badge-outline">More soon</span>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* <ProjectCard
            title="Project Name"
            desc="Project Description"
            tags={["", "", ""]}
            detailsUrl=""
            liveUrl=""
          /> */}
          <ProjectCard
            title="PickleBall Match Footage Splicer"
            desc="ML-driven program that automatically identifies segment of deadtime and splices video."
            tags={["Docker", "YOLOv8", "Python", "Typescript"]}
            detailsUrl="https://github.com/SashimiDaBest/match-splicer-cli"
            liveUrl=""
          />
          <ProjectCard
            title="PGSG Grant App"
            desc="Grant-handling application that implements double-blind for application processing and reimbursement."
            tags={["Typescript", "Python", "FastAPI", "React", "Posgres"]}
            detailsUrl="https://github.com/Purdue-ACM-SIGAPP/pgsg-grant-app-2526"
            liveUrl=""
          />
          <ProjectCard
            title="Boiler Buzz - Backend"
            desc=""
            tags={["Postgres", "Node.js", "Javascript"]}
            detailsUrl="https://github.com/Purdue-ACM-SIGAPP/boilerbuzz-backend"
            liveUrl=""
          />
          <ProjectCard
            title="Boiler Buzz - Frontend"
            desc=""
            tags={["Typescript", "React Native"]}
            detailsUrl="https://github.com/Purdue-ACM-SIGAPP/boilerbuzz-frontend"
            liveUrl=""
          />
          <ProjectCard
            title="Bucket List"
            desc="A social media app for users to create, modify, and complete their bucketlists with others."
            tags={["Javascript", "Node.js", "React Native"]}
            detailsUrl="https://github.com/Purdue-ACM-SIGAPP/BucketList"
            liveUrl=""
          />
          <ProjectCard
            title="Boiler Rooms - Backend"
            desc="Backend project to power mobile app that displays housing options for students on Purdue campus."
            tags={["C#", ".NET", "MongoDB"]}
            detailsUrl="https://github.com/Purdue-ACM-SIGAPP/BoilerRooms-backend"
            liveUrl=""
          />
          <ProjectCard
            title="Talking Slides"
            desc="Purdue Boiler Make Hackathon 2025 project that creates AI-generated study podcasts given specific study materials as inputs."
            tags={["Django", "MongoDB", "Python", "Javascript"]}
            detailsUrl="https://github.com/SashimiDaBest/TalkingSlides"
            // liveUrl=""
          />
          <ProjectCard
            title="Boiler Gram - Social Media App"
            desc="A Multi-threaded Java client-server social media platform."
            tags={["Java", "Swing UI", "JUnit"]}
            detailsUrl="https://github.com/SashimiDaBest/social-media-app"
            // liveUrl=""
          />
          <ProjectCard
            title="Roadie Rescue"
            desc="3rd place project @ Purdue Hello World Hackathon 2024."
            tags={["MongoDB", "Express", "React", "Node", "Javascript", "HTML", "CSS"]}
            detailsUrl="https://github.com/SashimiDaBest/hello-world-hack-24"
            // liveUrl=""
          />
          <ProjectCard
            title="Hexagon World"
            desc="Automatic world-building simulation through instatiating hexagons."
            tags={["C#", "Unity"]}
            detailsUrl="https://github.com/SashimiDaBest/hexagon-world"
            liveUrl="https://sashimidabest.github.io/hexagon-world-build/"
          />
          <ProjectCard
            title="Save The Chicken Game"
            desc="Simple reflex-testing game with the motive of haulting Santa's sleigh before a chicken is run over."
            tags={["C#", "Unity"]}
            detailsUrl="https://github.com/SashimiDaBest/save-chickens"
            liveUrl="https://sashimidabest.github.io/save-chickens-build/"
          />
        </div>
      </section>

      <section id="contact" className={`${section} pb-16`}>
        <Card title="Contact">
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn btn-primary" 
              href="mailto:soleilpham@gmail.com"
            >
              Email
            </a>
            <a
              className="btn btn-outline"
              href="https://github.com/SashimiDaBest"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/chan-nhu-p-4876a127a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-6 text-sm opacity-60">
            © {new Date().getFullYear()} Soleil Pham
          </p>
        </Card>
      </section>
    </main>
  );
}

function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b border-base-300">
      <div className={shell}>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Soleil Pham</a>
        </div>

        <div className="flex-none gap-2">
          <a className="btn btn-ghost btn-sm" href="#projects">
            Projects
          </a>
          <a className="btn btn-primary btn-sm" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  detailsUrl,
  liveUrl,
}: {
  title: string;
  desc: string;
  tags: string[];
  detailsUrl?: string;
  liveUrl?: string;
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="opacity-80">{desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="badge badge-outline">
              {t}
            </span>
          ))}
        </div>

        <div className="card-actions justify-end mt-4">
          {detailsUrl && (
            <a
              href={detailsUrl}
              className="btn btn-sm btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Details
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              className="btn btn-sm btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
