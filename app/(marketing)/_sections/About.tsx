import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about-us" className="container py-8 md:py-12 lg:py-24 ">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="mb-4 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          About Me
        </h2>
        <div className="flex w-full flex-col items-center justify-center space-y-4 align-middle leading-normal text-muted-foreground sm:text-lg sm:leading-7 lg:flex-row lg:space-x-4">
          <div className="relative flex size-[250px] items-center">
            <Image
              className="rounded-[50%]"
              src={"/images/people/mohamed_headshot.webp"}
              alt="team-images-mohamed"
              layout="responsive"
              height={360}
              width={360}
              objectFit="cover"
            />
          </div>
          <p className="my-auto max-w-[90%] lg:max-w-[60%]">
            As a Maryland resident for over 25 years, I proudly serve the DMV.
            My deep understanding of our community&apos;s unique insurance needs
            helps me provide exceptional service. At the Mohamed Kamil Agency, I
            focus on building personal connections and tailoring policies to fit
            each client&apos;s lifestyle.
          </p>
        </div>
      </div>
    </section>
  )
}
