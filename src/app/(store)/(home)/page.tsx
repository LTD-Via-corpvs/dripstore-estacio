import { FeaturedCollections } from './components/FeaturedCollections/FeaturedCollections'
import { HeroCarousel } from './components/HeroCarousel'
import { TrendingProducts } from './components/TrendingProducts/TrendingProducts'

const HomePage = () => {
  return (
    <div className="flex flex-col bg-[#F9F8FE]">
      <HeroCarousel />
      <FeaturedCollections />
      <TrendingProducts />
    </div>
  )
}

export default HomePage
