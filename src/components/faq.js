import Accordion from "./accordion"

export default function FAQ() {
  return (
    <section className='pt-[41px] pb-[151px]'>
        <div className='container'>
          <h2 className="text-37 font-bold mb-10 text-center">Frequently Asked Questions</h2>
           <div className="bg-dark max-w-[904px] mx-auto">
            <Accordion/>
           </div>
        </div>
    </section>
  )
}
