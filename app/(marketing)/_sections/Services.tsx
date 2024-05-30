import ServiceCard from "@/components/service-card"
import { buttonVariants } from "@/components/ui/button"
import { services } from "@/config/services"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Services
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our comprehensive insurance solutions. From Home and Auto, to
          commercial and renters, We&apos;ve got you covered. Discover tailored
          coverage and exceptional service.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service, ind) =>
          ind < 5 ? <ServiceCard service={service} /> : <></>
        )}

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col items-center justify-center rounded-md p-6 text-center">
            <div className="flex flex-col space-y-2">
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ size: "sm", variant: "outline" }),
                  "w-1/2",
                  "self-center"
                )}
              >
                View All
              </Link>

              <p className="text-sm text-muted-foreground">
                Explore our full range of insurance solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
