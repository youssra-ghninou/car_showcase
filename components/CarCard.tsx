"use client"
import React from 'react'
import {useState} from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';
import CustomButton from './CustomButton';

interface CarCardProps{
    car:CarProps;
}
const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,year, make,model,transmission, drive}=car
    const carRent = calculateCarRent(city_mpg, year)
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='car-card group'>
      <div className="car-card__content">
        <h2 className='car-card__content-title'>{make} {model} </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='selt-start text-[14px] font-semibold'>
            $
        </span>
        {carRent}
        <span className='selt-end text-[14px] font-medium'>
            /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" fill priority alt='model' className='object-contain'/>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/steering-wheel.svg" width={20} height={20} alt='steering-wheel'/>
                <p className='text-[14px]'>{transmission==='a' ? 'Automatic':'Manual'}</p>
            </div>
            <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
           </div>
           <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
           </div> 
       </div>
      </div>
    </div>
  )
}

export default CarCard
