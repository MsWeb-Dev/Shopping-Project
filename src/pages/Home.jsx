import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./css/home.css"
import "../../public/img/fudbolka.jpg"
function Home() {

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img className="carusel_img" src="../../public/img/fudbolka.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className="carusel_img" src="../../public/img/futbolka2.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className="carusel_img" src="../../public/img/ayollarFutbolkasi.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className="carusel_img" src="../../public/img/ayollarFutbolkasi2.jpg" onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <>
      <h1 style={{ color: "blueviolet", textAlign: "center" }}>Mavsumiy chegirmalar</h1>
      <AliceCarousel mouseTracking items={items} infinite={true} autoPlayStrategy="action" />

    </>
  );
}

export default Home