import { FeaturedCollections } from './components/FeaturedCollections/FeaturedCollections'

const HomePage = () => {
  return (
    <div className="flex flex-col bg-[#F9F8FE]">
      <div className="h-[680px]  w-full bg-light-gray-3   "></div>
      <FeaturedCollections />
    </div>
  )
}

export default HomePage
