import { cn } from "@/lib/utils"

export function SiteFooter({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex w-full flex-col items-center justify-between gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-md text-center leading-loose md:text-left">
            © 2019 KamilAgency
          </p>
          {children}
        </div>
      </div>
    </footer>
  )
}
