import { ReactNode } from "react";
import FeaturesIcon from "./FeaturesIcon";
import ProductIcon from "./ProductIcon";
import CoachingIcon from "./CoachingIcon";

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

export default function Services() {
  return (
    <div className="max-w-5xl p-4 md:p-6 lg:p-8 bg-white text-black">
      <Section>
        <SectionContent>
          <SectionHeader>Feature Delivery</SectionHeader>
          <SectionText>
            We help you develop new features or reduce the number of bugs in your codebase. We align
            with your roadmap to ensure that our work delivers the best value.
          </SectionText>
        </SectionContent>
        <SectionImage>
          <FeaturesIcon title="Features icon" className="fill-secondary" />
        </SectionImage>
      </Section>
      <Section>
        <SectionImage>
          <ProductIcon title="Product icon" className="fill-secondary" />
        </SectionImage>
        <SectionContent>
          <SectionHeader>Product Development</SectionHeader>
          <SectionText>
            We specialise in Web Development in Javascript. Do you have a new project in mind and
            want to build an MVP to test the market? We can help you.
          </SectionText>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <SectionHeader>Coaching</SectionHeader>
          <SectionText>
            Does your team need training? We can help you adopt best practices to help you deliver
            faster. We embrace Continuous Delivery through XP practices such as Test-Driven
            Development and Pair Programming.
          </SectionText>
        </SectionContent>
        <SectionImage>
          <CoachingIcon title="Coaching icon" className="fill-secondary" />
        </SectionImage>
      </Section>
    </div>
  );
}
