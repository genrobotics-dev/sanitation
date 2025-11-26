"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

function KeyFeatures({ featuresData, title, subTitle, className = "" }) {
  const [showAll, setShowAll] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0); // Initialize with 0 or a default to prevent hydration mismatch

  useEffect(() => {
    // Set initial screenWidth after component mounts
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine displayedFeatures based on screenWidth and showAll state
  const displayedFeatures = React.useMemo(() => {
    if (screenWidth === 0) return []; // Prevent displaying data before screenWidth is set
    if (screenWidth > 1024) {
      return featuresData;
    } else {
      return showAll ? featuresData : featuresData.slice(0, 4);
    }
  }, [featuresData, screenWidth, showAll]);

  const handleShowMore = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <section className={`key_features md:${className || ""}`} id="key_features">
      <div className="lg:container-fluid feature_container">
        <div>
          <div className="title_area">
            <div>
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: subTitle }} />
            </div>
          </div>
          <div className="feature_large">
            <div className="flex flex-col items-center">
              <div
                className="grid
                 grid-cols-1 
                 md:grid-cols-2 
                 lg:grid-cols-4
                 gap-2 md:gap-4 lg:gap-8"
              >
                {displayedFeatures &&
                  Array.isArray(displayedFeatures) &&
                  displayedFeatures.map((data, idx) => (
                    <div key={idx} className="card feature_card text-center">
                      <div className="image_wrapper">
                        <Image
                          src={data?.image}
                          width={0}
                          height={0}
                          alt="smaple image"
                        />
                      </div>
                      <div className="feature_content">
                        <div className="head_title">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: data?.title.replace(/\n/g, "<br />"),
                            }}
                          />
                        </div>
                        <p>{data?.description}</p>
                      </div>
                    </div>
                  ))}
              </div>

              {screenWidth < 1024 && featuresData.length > 4 && (
                <div className="text-center mt-4">
                  <button
                    onClick={handleShowMore}
                    className="show_more_btn"
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div >
      </div >
    </section >
  );
}

export default KeyFeatures;
