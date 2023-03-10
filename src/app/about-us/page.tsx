import { ReactNode } from "react";

function Section({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center mt-8 md:mt-12 lg:mt-16">
      <div className="max-w-3xl mx-4">{children}</div>
    </div>
  );
}

function SectionHeader({ children }: { children: ReactNode }) {
  return <h2 className="mt-2 md:mt-3 lg:mt-4 text-xl font-bold text-center">{children}</h2>;
}

function SectionText({ children }: { children: ReactNode }) {
  return <p className="mt-2 md:mt-3 lg:mt-4">{children}</p>;
}

export default function Services() {
  return (
    <div className="max-w-5xl p-4 md:p-6 lg:p-8 bg-white text-black">
      <h1 className="mt-2 md:mt-3 lg:mt-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Helping clients deliver outstanding software that improves people&#39;s lives with modern
        technology
      </h1>
      <Section>
        <SectionHeader>Our Values</SectionHeader>
        <SectionText>
          We believe in engineering software that delivers the highest value by fueling the use of
          the latest technology with our passion for software development. We take responsibility
          for writing clean code that is self-tested, in line with the industry best practices.
          Customer satisfaction is our priority, making sure that we understand the problems that
          our clients face and focus on finding the optimal solutions that fit their particular
          case.
        </SectionText>
      </Section>
    </div>
  );
}
