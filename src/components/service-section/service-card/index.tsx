"use client";
import { IService } from '@/constant'
interface ServiceItemsProps {
  text: string;
}

const ServiceItems = ({ text }: ServiceItemsProps) => {
  return (
    <div className={' border-1 border-[#5A5A5A] py-2 px-4 rounded-[8px] shadow-custom-multi backdrop-blur-80 bg-opacity-30'}>
      <p className="text-white text-sm lg:text-base">{text}</p>
    </div>
  );
};

const ServiceCard = ({ heading, description, services }: IService) => {
  return (
    <div className="border border-[#D9D9D933] rounded-[12px] p-6 bg-[#1A1A1A]">
      <div
        className="h-[50px] w-[50px] rounded-full mb-4"
        style={{
          backgroundImage: `
            linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%),
            linear-gradient(229.29deg, rgba(158, 255, 0, 0.2) -68.25%, rgba(158, 255, 0, 0) 32.16%)
          `,
        }}
      />

      <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
        {heading}
      </h3>

      <p className="text-[#A7A7A7] text-sm lg:text-base font-normal mb-4">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-full max-w-6xl">

        {services.length > 0 && services.map((item: string, index: number) => {
          return (<ServiceItems text={item} />
          )
        })}
      </div>
      <div className={'w-full py-4'}>
      <button
        type="button"
        className="border border-[#5A5A5A] py-2 px-4 rounded-[8px] bg-[#262626] text-white text-sm lg:text-base w-full cursor-pointer"
      >
        Read more
      </button>

      </div>
    </div>
  );
};

export default ServiceCard;
