import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = ["image1.jpg", "image2.jpg", /* ... */];

const ImageCarousel = () => (
    <Carousel>
        {images.map((image, index) => (
            <div key={index}>
                <img src={image} alt={`Пейзаж ${index + 1}`} />
                <p>Подпись к фотографии {index + 1}</p>
            </div>
        ))}
    </Carousel>
);

export default ImageCarousel;
