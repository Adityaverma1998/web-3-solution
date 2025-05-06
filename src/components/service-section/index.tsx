"use client";
import ServiceCard from '@/components/service-section/service-card';
import { services, IService } from '@/constant';

const ServiceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-white text-4xl font-semibold">Our Services</h2>
      <p className="text-[#E6E6E6] font-normal text-lg pt-2 text-center max-w-2xl">
        Transform your brand with our innovative digital solutions that captivate and engage your audience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-full max-w-6xl">
        {services && services.length > 0 &&
          services.map((service: IService, index: number) => (
            <ServiceCard
              key={index}
              heading={service.heading}
              description={service.description}
              services={service.services} // adjust based on your data structure
            />
          ))}
      </div>
    </div>
  );
};

export default ServiceSection;
