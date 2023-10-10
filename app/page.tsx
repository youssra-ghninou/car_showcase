import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars= await fetchCars()
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'> Car Catalog</h1>
          <p>Explore the cars you might like</p>
          <div className="home__filters">
            <SearchBar />
            {/* <div className="home__filter-container">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div> */}
            {!isDataEmpty ? (
              <section>
                We have cars
              </section>
            ) : (
              <div className='home__error-container'>
                <h2 className='text-black text-xl font-bold'>Oooops no results</h2>
                <p> {allCars?.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
