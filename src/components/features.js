// import React from 'react'
import { noPreSale,noSeed,noVcs  } from "@/assets"
import Image from "next/image"

export default function Features() {
  return (
    <section className='pt-[172px] pb-[151px] bg-section-gradient bg-no-repeat'>
        <div className='container'>
            <div className='grid grid-cols-3 gap-8'>
                <div className='border border-white rounded-[5px] p-8 flex items-center justify-center flex-col gap-[23px]'>
                  <Image src={noPreSale} alt="No Pre-Sale" width={81} height={75}></Image>
                    <h5 className='text-22 font-bold'>No Pre-Sale</h5>
                </div>
                <div className='border border-white rounded-[5px] p-8 flex items-center justify-center flex-col gap-[23px]'>
                  <Image src={noSeed} alt="No Pre-Sale" width={78} height={80}></Image>
                    <h5 className='text-22 font-bold'>No Seed Round</h5>
                </div>
                <div className='border border-white rounded-[5px] p-8 flex items-center justify-center flex-col gap-[23px]'>
                  <Image src={noPreSale} alt="NO VCS" width={75} height={77}></Image>
                    <h5 className='text-22 font-bold'>NO VCS</h5>
                </div>
            </div>
        </div>
    </section>
  )
}
