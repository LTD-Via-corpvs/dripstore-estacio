import { FeaturedCollections } from './components/FeaturedCollections/FeaturedCollections'
import { HeroCarousel } from './components/HeroCarousel'

const HomePage = () => {
  return (
    <div className="flex flex-col bg-[#F9F8FE]">
      <HeroCarousel />
      <FeaturedCollections />
    </div>
  )
}

export default HomePage
