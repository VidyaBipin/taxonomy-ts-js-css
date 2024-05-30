import { siteConfig } from "@/config/site"
import { Day } from "@/types"
import Link from "next/link"

export default function LocationSection() {
  return (
    <section className="mx-auto flex max-w-[80%] flex-col items-center">
      <h2 className="mb-8 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Locations & Hours
      </h2>
      <div
        id="location"
        className=" mb-8 grid h-fit w-full justify-center gap-4 rounded-lg sm:grid-cols-1 lg:flex lg:bg-secondary"
      >
        <div className="flex min-w-[50%] flex-col justify-center rounded-lg bg-secondary p-6 lg:w-1/2 lg:bg-transparent">
          <h3 className="mb-4 self-center text-3xl font-semibold">Hours</h3>
          {Object.keys(siteConfig.hours).map((day: Day) => (
            <div className="flex justify-between py-1">
              <span className="flex items-center font-semibold"> {day} </span>
              <span className="flex items-center text-sm text-muted-foreground">
                {siteConfig.hours[day]
                  ? `${siteConfig.hours[day]?.start} - ${siteConfig.hours[day]?.end}`
                  : `Closed`}
              </span>
            </div>
          ))}
        </div>

        <iframe
          src="https://storage.googleapis.com/maps-solutions-hkl2kro3e4/locator-plus/4rrc/locator-plus.html"
          width="100%"
          className="rounded-lg"
          height={400}
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
