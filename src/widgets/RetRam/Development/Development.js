import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import "./Development.style.scss";

const photos = [
  {
    src:
      "https://res.cloudinary.com/wow-your-client/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1579631525/davidkrumreiinventions/PressureTankunattached.jpg",
    width: 3,
    height: 6,
    title: "Unattached RET RAM® Pressure Tank"
  },
  {
    src:
      "https://res.cloudinary.com/wow-your-client/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1579631525/davidkrumreiinventions/InTheLab.jpg",
    width: 1,
    height: 1,
    title: "RET RAM® research development at Milwaukee School of Engineering."
  },
  {
    src:
      "https://res.cloudinary.com/wow-your-client/image/upload/v1579631525/davidkrumreiinventions/BarrellshotBest.jpg",
    width: 4,
    height: 3,
    title: "Barrel View of RET RAM®"
  },
  {
    src:
      "https://res.cloudinary.com/wow-your-client/image/upload/v1579631524/davidkrumreiinventions/PressureMeterInLab.png",
    width: 5,
    height: 4,
    title: "RET RAM® on test stand at Milwaukee School of Engineering"
  },
  {
    src:
      "https://res.cloudinary.com/wow-your-client/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_sharpen/v1579631525/davidkrumreiinventions/Barrellshot2.jpg",
    width: 1,
    height: 1,
    title: "Business end of RET RAM®"
  },
  {
    src:
      "https://res.cloudinary.com/wow-your-client/image/upload/v1581294307/davidkrumreiinventions/InnerBearingsConstruction.jpg",
    width: 800,
    height: 562,
    title: "Early RET RAM® prototype under construction"
  },
  {
    src:
      "https://res.cloudinary.com/wow-your-client/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1579631525/davidkrumreiinventions/Ramhead_compared_to_quarter.jpg",
    width: 1,
    height: 1,
    title: "High impact tool-steel battering face in reference to quarter."
  },
  {
    src:
      "https://res.cloudinary.com/wow-your-client/image/upload/v1581294306/davidkrumreiinventions/EarlyRetRamPrototypeUnderConstruction.jpg",
    width: 800,
    height: 683,
    title: "RET RAM® computer analytics at Milwaukee School of Engineering"
  }
];

const Development = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section id="development" class="gallery">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">Ret Ram&reg; Development Gallery</h2>
      </div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(photo => ({
                ...photo,
                caption: photo.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </section>
  );
};

export default Development;
