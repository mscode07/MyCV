import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abhishek Thakur",
  initials: "mscode07",
  location: "Bengaluru, Karnataka, IST",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Full Stack Engineer specializing in high-performance React applications,
      scalable Node.js services, and real-time collaboration systems.
      Experienced in technical architecture design and remote team leadership.
    </>
  ),
  avatarUrl: "https://github.com/mscode07.png",
  personalWebsiteUrl: "https://github.com/mscode07",
  contact: {
    email: "mscode7777@gmail.com",
    tel: "+91 9034919796",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mscode07",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/msabhi7777/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/mscode07",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Kurukshetra University",
      degree: "Bachelor's Degree in Computer Applications",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "onmouseclick ",
      link: "https://film.io",
      badges: ["React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Collaborated with a dynamic team to develop software solutions
              tailored to the unique organizational architectures and
              operational needs of diverse institutions.
            </li>
            <li>
              Enhanced client satisfaction by ensuring 100% customization
              options and free lifetime support, offering an amazing and
              personalized user experience.
            </li>
            <li>
              Contributed to the development of user-friendly interfaces and
              robust backend systems to ensure seamless functionality and ease
              of use.
            </li>
            <li>
              Developed and maintained flexible and scalable software to cater
              to the specific requirements of clients, adapting to changing
              operational needs.
            </li>
          </ul>
        </>
      ),
    },
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: [
    //     "Remote",
    //     "React",
    //     "TypeScript",
    //     "Node.js",
    //     "GraphQL",
    //     "Tailwind CSS",
    //   ],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description: (
    //     <>
    //       Senior developer and squad leader for an enterprise agile meeting
    //       platform.
    //       <ul className="list-inside list-disc">
    //         <li>
    //           Built design system with Tailwind CSS, improving development speed
    //           and time to market
    //         </li>
    //         <li>
    //           Implemented engineering practices: PR automation, code review
    //           guidelines, and workflows
    //         </li>
    //         <li>
    //           Open source contributions to Relay DevTools and React i18n tooling
    //         </li>
    //       </ul>
    //     </>
    //   ),
    // },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description: (
    //     <>
    //       Successfully transitioned from mobile to full-stack development while
    //       leading distributed teams.
    //       <ul className="list-inside list-disc">
    //         <li>
    //           Led frontend team at Evercast, building real-time platform
    //           supporting 30+ users per room with HD streaming and collaboration
    //           tools
    //         </li>
    //         <li>
    //           Developed offline-first Android app for DKMS, improving donor
    //           registration process
    //         </li>
    //         <li>
    //           Led development teams across multiple successful client projects
    //         </li>
    //       </ul>
    //     </>
    //   ),
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: ["On Site", "Android", "Java", "Kotlin"],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description: (
    //     <>
    //       First Android developer, grew and led a team of 15+ engineers while
    //       establishing engineering culture.
    //       <ul className="list-inside list-disc">
    //         <li>
    //           Developed apps for major Polish companies including LOT, Polskie
    //           Radio, and Agora
    //         </li>
    //         <li>Built and mentored high-performing mobile development team</li>
    //       </ul>
    //     </>
    //   ),
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: ["On Site", "C/C++", "LTE", "Agile"],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description:
    //     "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    // },
  ],
  skills: [
    "React/Next.js/Recoil",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "Redis",
    "Docker",
    "System Architecture",
    "AWS",
    "CI/CD",
    "Linux",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "Project 𝕏 ",
      techStack: ["TypeScript", "Next.js", "Docker", "PostgreSQL"],
      description:
        "ProjectX is a modern clone of the social media platform 𝕏 (formerly Twitter), built using a powerful full-stack tech stack.",
      logo: "𝕏",
      link: {
        label: "monito.dev",
        href: "https://github.com/mscode07/ProjectX",
      },
    },
    {
      title: "CodeINN ",
      techStack: ["TypeScript", "React", "Docker", "Supabase/PostgreSQL"],
      description:
        "CodeINN is an innovative AI-powered web development tool designed to transform user ideas into stunning, production-ready websites in real-time.",
      logo: "",
      link: {
        label: "monito.dev",
        href: "https://github.com/mscode07/ProjectX",
      },
    },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //     "Tailwind CSS",
    //     "PostgreSQL",
    //     "Redis",
    //   ],
    //   description:
    //     "Platform for online consultations with real-time video meetings and scheduling",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    // {
    //   title: "Minimalist CV",
    //   techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    //   description:
    //     "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "Minimalist CV",
    //     href: "https://github.com/BartoszJarocki/cv",
    //   },
    // },
  ],
} as const;
