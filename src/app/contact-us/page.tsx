import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="max-w-5xl p-4 md:p-6 lg:p-8 bg-white text-black">
      <h1 className="mt-2 md:mt-3 lg:mt-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Technology is our drive. Delighting clients is our mission.
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-12 lg:mt-16">
        <div className="mr-0 mb-8 md:mr-8 md:mb-0">
          <address>
            <div>Unit 36 Silk Mill Industrial Estate</div>
            <div>Brook Street</div>
            <div>Tring, HP23 5EF</div>
            <div>United Kingdom</div>
          </address>
          <Link className="text-primary" href="mailto:hello@baremetalsoftwarelimited.com">
            hello@baremetalsoftwarelimited.com
          </Link>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d373.44227705306884!2d-0.659714655503469!3d51.798159937328556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUnit%2036%20Silk%20Mill%20Industrial%20Estate%20Brook%20Street%20Tring%20HP23%205EF!5e0!3m2!1sen!2suk!4v1674996539068!5m2!1sen!2suk"
          width="350"
          height="300"
          loading="lazy"
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
