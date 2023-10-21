// import React from 'react'
import Image from "next/image"
import { statistics } from "@/assets"

export default function Statistics() {
  return (
    <section className="pt-8 pb-16">
        <div className="container">
            <h2 className="md:text-37 text-3xl font-bold text-center mb-8">Our Statistics</h2>
            <div className="grid md:grid-cols-2">
                <div>
                    <h3 className="md:text-41 text-3xl font-bold mb-7">Tokenomics</h3>
                    <ul className="list-[square]">
                        <li className="mb-4">Each buy/sell transaction comes with a 5% tax. This tax is distributed to the treasury.</li>
                        <li className="mb-4">The treasury is used for farming between different low/medium/high risk cross chain strategies.</li>
                        <li className="mb-4">Discretionary buy backs are performed on the $DIGITS token using treasury profits frequently.</li>
                        <li className="mb-4">Reflections are paid back to holders in DAI (Reducing sell pressure)</li>
                    </ul>
                </div>
                <div>
                    <Image src={statistics} alt="" width={565} height={381} />
                </div>
            </div>
        </div>
    </section>
  )
}
