import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { ModeToggle } from "@/components/mode-toggle"
import SocialsIconList from "@/components/socials-list"
import { siteConfig } from "@/config/site"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-center ">
      <header className="container sticky top-0 z-40 bg-background lg:self-center ">
        <div className="flex  items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Link
              href={siteConfig.quoteURL}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
              target="_blank"
              rel="nofollow"
            >
              Get A Quote
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <section id="contact-us">
        <SiteFooter className="border-t" />
      </section>
    </div>
  )
}
