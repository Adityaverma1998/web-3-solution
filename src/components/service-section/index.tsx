"use client"
import ServiceCard from '@/components/service-section/service-card'

const ServiceSection = ()=>{
    return(
        <>
        <div className={'flex flex-col items-center justify-center'}>
            <h2 className="text-[#ffffff] text-4xl font-semibold">Our Service </h2>
            <p className="text-[#E6E6E6] font-normal  text-lg pt-2"> Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
           <div className={''}>
            <ServiceCard/>
           </div>
        </div>
        </>
    )
}

export default ServiceSection;