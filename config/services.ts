import { Service } from "@/types"
import { Icons } from "@/components/icons"
import { siteConfig } from "./site"

export const services: Service[] = [
  {
    name: "Homeowners",
    description: "Comprehensive coverage for your home and belongings.",
    icon: Icons.home({}),
    quoteURL: siteConfig.quoteURL,
  },
  {
    name: "Auto",
    description: "Reliable protection for you and your vehicle.",
    icon: Icons.car({}),
    quoteURL: siteConfig.quoteURL,
  },
  {
    name: "Commercial",
    description: "Customized solutions to safeguard your business.",
    icon: Icons.commercial({}),
    quoteURL: siteConfig.quoteURL,
  },
  {
    name: "Renters",
    description: "Affordable coverage for your belongings.",
    icon: Icons.renter({}),
    quoteURL: siteConfig.quoteURL,
  },
  {
    name: "Landlord",
    description: "Protect your rental properties with ease.",
    icon: Icons.landlord({}),
    quoteURL: siteConfig.quoteURL,
  },
  {
    name: "General Liability",
    description: "Protect your rental properties with ease.",
    icon: Icons.landlord({}),
    quoteURL: siteConfig.quoteURL,
  },
  {
    name: "Umbrella",
    description: "Protect your rental properties with ease.",
    icon: Icons.landlord({}),
    quoteURL: siteConfig.quoteURL,
  },
  {
    name: "Life",
    description: "Protect your rental properties with ease.",
    icon: Icons.life({}),
    quoteURL: siteConfig.quoteURL,
  },
]
