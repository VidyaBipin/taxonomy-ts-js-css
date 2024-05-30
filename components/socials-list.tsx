import { socials } from "@/config/socials"
import { Social } from "@/types"
import Link from "next/link"
import { Icons } from "./icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

function SocialIcon(props: Social) {
  return (
    <Link
      className={cn(buttonVariants({ size: "icon" }), "bg-white")}
      href={props.url}
    >
      {props.icon}
    </Link>
  )
}

export default function SocialsIconList() {
  return (
    <div className="m-2 flex space-x-2  p-2">
      {Object.keys(socials).map((social) => (
        <SocialIcon {...socials[social]} />
      ))}
    </div>
  )
}
