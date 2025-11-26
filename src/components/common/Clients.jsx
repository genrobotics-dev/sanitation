"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Clients({ clientsData, isStatic = false }) {
  console.log(isStatic);

  return (
    <section className="clients_sec">
      <div
        className={` clients-container ${clientsData && clientsData.length > 5 ? "md:container-fluid" : "md:container"
          } `}
      >
        <div className="headings_">
          <h1>Our Esteemed Clients</h1>
          <p>
            We are privileged to partner with a diverse range of organizations
            across various sectors, helping them achieve their sanitation and
            operational goals.
          </p>
        </div>
        <div>
          {isStatic ? (
            <div className="flex justify-center flex-wrap gap-8 items-center">
              {clientsData &&
                clientsData.map((item, idx) => (
                  <div key={idx}>
                    <Image
                      src={item.image?.src}
                      alt={`item - ${idx}`}
                      width={item.width}
                      height={item.height}
                      className="object-contain max-h-16 md:max-h-20 2xl:max-h-24"
                    />
                  </div>
                ))}
            </div>
          ) : (
            <Marquee autoFill={true}>
              {clientsData &&
                clientsData.map((item, idx) => (
                  <div key={idx} className="mx-8">
                    <Image
                      src={item.image?.src}
                      alt={`item - ${idx}`}
                      width={item.width}
                      height={item.height}
                      className="object-contain max-h-16 md:max-h-20 2xl:max-h-24"
                    />
                  </div>
                ))}
            </Marquee>
          )}
        </div>
      </div>
    </section>
  );
}

export default Clients;
