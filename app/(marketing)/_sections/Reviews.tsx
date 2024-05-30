// async function getLocationsForBusiness() {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: "./key.json",
//     scopes: ["https://www.googleapis.com/auth/business.manage"],
//   })

//   const info = google.mybusinessbusinessinformation({
//     version: "v1",
//     auth,
//   })

//   const readMask =
//     "name,storeCode,title,phoneNumbers,storefrontAddress,specialHours,serviceArea,metadata,profile,moreHours"
//   // const locations = info.locations.get({ name:"", readMask })
//   const locations = info.accounts.locations.list({
//     parent: "accounts/{438095296120896097}",
//   })

//   console.log("locations:", JSON.stringify(locations))
//   return (await locations).data
// }

"use client"
import Script from "next/script"

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="container rounded-xl px-4 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-4 text-center lg:w-[80%] ">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Reviews
        </h2>
        <div className=" w-full rounded-xl p-4 leading-normal text-white sm:text-lg sm:leading-7">
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></Script>
          <div
            className="elfsight-app-d1d396e8-0e54-4136-9fba-d76234cf2b80"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  )
}
