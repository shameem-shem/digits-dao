import Accordion from "./accordion"

export default function FAQ() {
  return (
    <section className='md:pt-[41px] lg:pb-[151px] sm:pt-12 sm:pb-16 pt-8 pb-12'>
        <div className='container'>
          <h2 className="md:text-37 text-3xl font-bold sm:mb-10 mb-6 text-center">Frequently Asked Questions</h2>
           <div className="bg-dark max-w-[904px] mx-auto">
            <Accordion/>
           </div>
        </div>
    </section>
  )
}
