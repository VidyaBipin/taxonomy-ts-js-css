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
      className="mb-10 flex min-h-[85svh] items-center overflow-hidden px-4 py-8 lg:min-h-screen"
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-4 text-center lg:w-2/3 ">
        <div className=" w-full rounded-xl leading-normal text-white sm:text-lg sm:leading-7">
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
