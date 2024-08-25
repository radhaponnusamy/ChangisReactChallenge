// src/components/ImageGallery.tsx
import React, { useState } from 'react';
import { ImageData } from '../types/ImageData';
import Search from './Search';
import '../css/ImageGallery.css'; 
import defaultImage from '../images/defaultImage.png';

interface ImageGalleryProps {
    images: ImageData[];
    searchTerm: string;
    sortOrder: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<string>('asc');

    // Filter and sort images based on search term and sort order
    const filteredImages = images
        .filter(image =>
            image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            image.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });

    return (
        <div className="image-gallery-container">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <div className="image-gallery">
                {filteredImages.map((image, index) => (
                    <div key={index} className="image-card">
                        <img
                            src={image.url}
                            alt={image.title}
                            width={image.width}
                            height={image.height}
                            onError={(e) => (e.currentTarget.src = defaultImage)} // Use actual path for default image
                        />
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
