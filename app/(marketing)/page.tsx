import AboutSection from "./_sections/About"
import ReviewsSection from "./_sections/Reviews"
import LocationSection from "./_sections/Location"
import ContactSection from "./_sections/Contact"
import ServiceSection from "./_sections/Services"
import HeroSection from "./_sections/Hero"

export default async function IndexPage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ReviewsSection />
      <LocationSection />
      <ContactSection />
    </>
  )
}
