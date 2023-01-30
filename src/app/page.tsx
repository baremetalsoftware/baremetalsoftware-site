import { Inter } from "@next/font/google";
import Link from "next/link";
import { ReactNode } from "react";

import ConstructionIcon from "./ConstructionIcon";
import EngineeringIcon from "./EngineeringIcon";
import InsightsIcon from "./InsightsIcon";
import LaptopIcon from "./LaptopIcon";

const inter = Inter({ subsets: ["latin"] });

function Section({ children }: { children: ReactNode }) {
  return <div className="flex items-center mt-8 md:mt-12 lg:mt-16">{children}</div>;
}

function SectionContent({ children }: { children: ReactNode }) {
  return <div className="mx-4">{children}</div>;
}

function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-2 md:mt-3 lg:mt-4 text-xl font-bold text-center md:text-left">{children}</h2>
  );
}

function SectionText({ children }: { children: ReactNode }) {
  return <p className="mt-2 md:mt-3 lg:mt-4">{children}</p>;
}

function SectionImage({ children }: { children: ReactNode }) {
  return (
    <div className="hidden md:block w-[25rem] h-[10rem] mx-4 mt-2 md:mt-3 lg:mt-4">{children}</div>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl p-4 md:p-6 lg:p-8 bg-white text-black">
      <h1 className="mt-2 md:mt-3 lg:mt-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Technology is our drive. Delighting clients is our mission.
      </h1>
      <div className="flex w-full justify-center mt-8 md:mt-12 lg:mt-16">
        <Link href="/contact-us" className="p-4 rounded-2xl bg-primary text-white">
          How can we help?
        </Link>
      </div>
      <Section>
        <SectionContent>
          <SectionHeader>What do we do?</SectionHeader>
          <SectionText>
            We help you deliver high quality software by partnering with you on your projects and
            holistically improve your team skills. From delivering features to coaching your team on
            best practices, we make sure that our work has a lasting and intrinsic impact in your
            company.
          </SectionText>
        </SectionContent>
        <SectionImage>
          <LaptopIcon title="Laptop icon" className="fill-secondary" />
        </SectionImage>
      </Section>
      <Section>
        <SectionImage>
          <EngineeringIcon title="Engineering icon" className="fill-secondary" />
        </SectionImage>
        <SectionContent>
          <SectionHeader>What is our expertise?</SectionHeader>
          <SectionText>
            We specialise in Web Development in JavaScript. We build responsive websites with
            state-of-the-art technology to enhance user experience. Our main focus is in front-end
            development with React and TypeScript, although we can deliver full-stack solutions.
          </SectionText>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <SectionHeader>How do we do this?</SectionHeader>
          <SectionText>
            XP (Extreme Programming) practices are in our DNA. We embrace Test-Driven Development,
            Pair Programming, and Continuous Delivery as the pillars of steadily delivering robust
            software. We help you adopt these techniques to improve your ways of working, so your
            teams can thrive for the years to come after our work is complete. Minimal efforts for
            maximum results.
          </SectionText>
        </SectionContent>
        <SectionImage>
          <ConstructionIcon title="Construction icon" className="fill-secondary" />
        </SectionImage>
      </Section>
      <Section>
        <SectionImage>
          <InsightsIcon title="Insights icon" className="fill-secondary" />
        </SectionImage>
        <SectionContent>
          <SectionHeader>What is our motivation?</SectionHeader>
          <SectionText>
            We love technology. Programming is our profession, as well as our passion. Our culture
            of learning is contagious, and we love spreading the joy when working with your teams.
            The work done is always better when there is genuine care and passion behind it.
          </SectionText>
        </SectionContent>
      </Section>
    </div>
  );
}
