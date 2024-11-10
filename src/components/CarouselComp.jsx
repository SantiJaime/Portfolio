import { Typography } from '@material-tailwind/react'
import { IMAGES } from '../constants/const'

const CarouselComp = () => {
  return (
    <div
    className="mx-auto max-w-7xl px-6 lg:px-8 mb-5"
    data-aos="flip-right"
  >
    <Typography variant="h1" color="white" className="text-center">
      Tecnologías utilizadas
    </Typography>
    <hr />
    <div className="mx-auto grid max-w-lg grid-cols-2 sm:max-w-xl sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 lg:mx-0 lg:max-w-none lg:grid-cols-6 items-center">
      {IMAGES.map((img, index) => (
        <img
          className="col-span-1 max-h-24 w-full object-contain my-4"
          src={img}
          alt={img.split("/")[2]}
          key={index}
        />
      ))}
    </div>
  </div>
  )
}

export default CarouselComp