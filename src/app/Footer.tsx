import Image from "next/image";
import Link from "next/link";

type FooterLinkProps = {
  href: string;
  text: string;
};

function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <Link className="text-primary" href={href}>
      {text}
    </Link>
  );
}

type FooterMediaLinkProps = {
  href: string;
  src: string;
  label: string;
};

function FooterMediaLink({ href, src, label }: FooterMediaLinkProps) {
  return (
    <Link className="m-1 md:m-2 p-1 md:p-2" href={href} aria-label={label}>
      <Image src={src} alt={label} width={24} height={24} />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-black text-white">
      <div className="max-w-5xl w-full self-center pt-4 md:pt-6 lg:pt-8 px-4 md:px-6 lg:px-8 pb-2 md:pb-4 lg:pb-6">
        <div className="flex flex-col items-start">
          How can we help? <FooterLink href="/contact-us" text="Contact us" />
        </div>
        <div className="flex justify-center pt-4 md:pt-6 lg:pt-8">
          <FooterLink href="/privacy-policy" text="Privacy Policy" />
          <span className="ml-4 md:ml-8 lg:ml-24">
            <FooterLink href="/cookies-policy" text="Cookies Policy" />
          </span>
        </div>
        <hr className="mt-4 md:mt-6 lg:mt-8 border-gray-700" />
        <div className="flex justify-center pt-4 md:pt-6 lg:pt-8">
          <FooterLink href="/" text="© Bare Metal Software" />
        </div>
        <div className="flex justify-center pt-2 md:pt-4 lg:pt-6">
          <FooterMediaLink
            href="https://github.com/baremetalsoftware"
            src="github-mark-white.svg"
            label="GitHub"
          />
        </div>
      </div>
    </footer>
  );
}
