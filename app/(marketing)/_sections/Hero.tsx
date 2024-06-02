import { buttonVariants } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function HeroSection() {
  const locations = [
    "Washington D.C",
    "Maryland",
    "Virginia",
    "Delaware",
    "Pennsylvania",
    "Ohio",
    "Indiana",
    "West Virginia",
    "North Carolina",
  ]

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className=" relative text-nowrap font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Your Insurance Experts In
          <br /> <FlipWords words={locations} />
        </div>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Our expert team is dedicated to providing personalized service,
          ensuring peace of mind and protection for you and your loved ones.
        </p>
        <div className="space-x-4">
          <Link
            href={siteConfig.quoteURL}
            className={cn(buttonVariants({ size: "lg" }))}
            target="_blank"
            rel="nofollow"
          >
            Get A Quote
          </Link>
          <Link
            href="/docs"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
