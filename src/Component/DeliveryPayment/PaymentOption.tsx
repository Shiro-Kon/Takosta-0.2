
import React from 'react';

type PaymentOptionProps = {
  logos?: string[];
  logo?: string;
  title: string;
  description: string;
};

const PaymentOption: React.FC<PaymentOptionProps> = ({ logos, logo, title, description }) => (
  <div className="bg-sage-green/15  rounded-xl p-4 text-olive-drab my-2">
    {logos ? (
      <div className="flex flex-row gap-6">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Payment Option" className="w-8 h-8 object-scale-down mb-4" />
        ))}
      </div>
    ) : (
      <img src={logo} alt="Payment Option" className="w-8 h-8 object-scale-down mb-4" />
    )}
    <div className="font-extrabold text-lg md:text-lg mb-2">{title}</div>
    <p className="font-semibold text-justify text-sm md:text-sm lg:text-md mb-2">{description}</p>
  </div>
);

export default PaymentOption;
