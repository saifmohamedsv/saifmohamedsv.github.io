import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import lnkrLogo from "public/work/lnkr.jpeg";
import springyUniverseLogo from "public/work/springyuniverse-logo.jpeg";
import taqneenLogo from "public/work/taqneen-logo.jpeg";
import advertLeapLogo from "public/work/advertleap-logo.jpeg";
import xponLogo from "public/work/xpon-logo.jpeg";

import hawamahal from "public/gallery/hawa-mahal.jpeg";
import indiatrip from "public/gallery/india-trip.jpeg";

export const metadata: Metadata = {
  title: "About | Saif Mohamed",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Just a quick glimpse.
        </p>
      </div>
      <div className="mb-8 lg:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={hawamahal}
            alt={"Hawa Mahal"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={indiatrip}
            alt={"Jaipur, India"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello world, I&apos;m Saif Mohamed!</p>

            <p>
              I have a passion for design and am always looking for ways to
              incorporate it into my engineering work.
            </p>
            <p>
              In addition to coding, I also mentor junior developers to be
              better and be job-ready at my{" "}
              <Link
                className="underline"
                href="https://discord.com/invite/XEYBTnDEXu"
              >
                Discord
              </Link>{" "}
              server
            </p>
            <p>
              When I&apos;m not at my desk I am probably doing martial arts,
              watching movies, or at a coffee shop :)
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link href="mailto:saifmohamed.dev@gmail.com">email me</Link>. Try
              finding me anywhere else at @saifmohamedsv
            </p>
            <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
              {ConnectLinks.map((link) => (
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-auto h-5 w-5 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              {new Date().getFullYear() - 2020}+ years of professional
              development experience.
            </p>
            <p>
              I started my career , which I will always be appreciative of. Then
              I worked at a few small local companies. Now I&apos;m a full stack
              frontend engineer currently working at{" "}
              <Link
                className="underline"
                href="https://linkedin.com/in/saifmohamedsv"
              >
                None
              </Link>
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Frontend Developer",
    company: "XPON",
    time: "2023",
    imageSrc: xponLogo,
    link: "https://advertleap.com/",
  },
  {
    title: "Frontend Developer",
    company: "Advert Leap",
    time: "2023",
    imageSrc: advertLeapLogo,
    link: "https://advertleap.com/",
  },
  {
    title: "Frontend Developer",
    company: "Taqneen",
    time: "2022 - 2023",
    imageSrc: taqneenLogo,
    link: "https://taqneen.com/",
  },
  {
    title: "Frontend Developer",
    company: "LNKR",
    time: "2022",
    imageSrc: lnkrLogo,
    link: "https://www.linkedin.com/company/lnkr-ai/",
  },
  {
    title: "Junior Frontend Developer",
    company: "Springy Universe",
    time: "2021 - 2022",
    imageSrc: springyUniverseLogo,
    link: "https://www.linkedin.com/company/springyuniverse",
  },
];
