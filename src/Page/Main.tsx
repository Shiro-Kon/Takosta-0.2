import BrandIntroduction from "../Component/Main/BrandIntroduction/BrandIntroduction"
import Carousel from "../Component/Main/Carousel/Carousel"
import HeroBlock from "../Component/Main/HeroBlock"
import ImagesBlock from "../Component/Main/ImagesBlock"
import ReviewsSection from "../Component/Main/ReviewsSection/ReviewsSection"
import ServicesSection from "../Component/Main/ServicesSection/ServicesSection"
import WhyUs from "../Component/Main/WhyUs"





type Props = {}

const Main = (props: Props) => {
  return (
    <>
      <HeroBlock />
      <Carousel />
      <BrandIntroduction />
      <ImagesBlock/>
      <WhyUs/>
      <ServicesSection/>
      <ReviewsSection/>
    </>
  )
}

export default Main