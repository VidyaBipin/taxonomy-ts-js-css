import { SiteConfig } from "types"

export const siteConfig: SiteConfig = {
  name: "Kamil Agency",
  description:
    "We'll get you the best insurance deal for your current situation.  We offer Auto Insurance, Home & Business Insurance, Renters Insurance, and more.",
  // url: "https://tx.shadcn.com",
  url: "https://tx.shadcn.com",
  quoteURL:
    "https://adb4.superioraccess.com/Platform.aspx?j=JyWP37Ak5A5VzpUOJ6EqMw%3d%3d&t=Ts2us1y3JpYfWhn3OZt9HYSD4gEC%2fk1r5rhXtiIO1A8cMiXa8oAp%2bPv2GzROr%2fa6zLwouEgCgwC8EXRpmCFaJQ%3d%3d",
  ogImage: "https://tx.shadcn.com/og.jpg",
  contactNumber: "(301) 447-0444",
  contactEmail: "mkamil@kamilagency.com",
  address: {
    googleMapsURL:
      "https://www.google.com/maps?q=5010+Branchville+Rd,+%0ACollege+Park,+%0AMaryland,+%0A20740",
    street: "5010 Branchville Rd",
    city: "College Park,",
    state: "Maryland,",
    zip: "20740",
  },
  hours: {
    Sunday: null,
    Monday: { start: "09:00 AM", end: "06:00 PM" },
    Tuesday: { start: "09:00 AM", end: "06:00 PM" },
    Wednesday: { start: "09:00 AM", end: "06:00 PM" },
    Thursday: { start: "09:00 AM", end: "06:00 PM" },
    Friday: { start: "09:00 AM", end: "06:00 PM" },
    Saturday: { start: "10:00 AM", end: "02:00 PM" },
  },
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
  },
}
