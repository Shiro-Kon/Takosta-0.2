import React from 'react';
import { footerSections } from '../../Utils/FooterData';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t-2 border-sage-green">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {footerSections.map((section, index) => (
            <div key={index} className="text-olive-green">
              <div className="font-semibold mb-2 cursor-default">{section.title}</div>
              {section.details ? (
                section.details.map((item, idx) => (
                  <div key={idx} className="mb-1 text-sage-green">
                    {item.type === 'tel' ? (
                      <a href={`tel:${item.contact}`} className=" sm:text-sm md:text-lg">
                        {item.contact}
                      </a>
                    ) : item.type === 'email' ? (
                      <a href={`mailto:${item.contact}`} className=" sm:text-sm md:text-lg">
                        {item.contact}
                      </a>
                    ) : item.type === 'link' ? (
                      <a href={item.contact} className=" sm:text-sm md:text-lg">
                        {item.contact}
                      </a>
                    ) : (
                      <span className=" sm:text-sm md:text-lg">{item.contact}</span>
                    )}
                  </div>
                ))
              ) : (
                section.links.map((link, idx) => (
                  <div key={idx} className="mb-1">
                    <Link to={link.url} className="text-sage-green sm:text-sm md:text-lg duration-300 ease-in-out hover:text-sage-green/50">
                      {link.name}
                    </Link>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <div className="text-sage-green  sm:text-sm md:text-lg cursor-default ">
            TAKOSTA professional cosmetics
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
