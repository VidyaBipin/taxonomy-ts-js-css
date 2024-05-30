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

export default function ReviewsSection() {
  return (
    <section id="reviews" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Reviews
        </h2>
        <div className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Coming Soon!
        </div>
      </div>
    </section>
  )
}
