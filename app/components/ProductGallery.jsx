"use client"

import { useState } from 'react';

export default function ProductGallery({ product }) {
    const [currentImgSrc, setCurrentImgSrc] = useState(product.thumbnail);

    const handleImgChange = (imgSrc) => {
        setCurrentImgSrc(imgSrc);
    }

    return (
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <img src={currentImgSrc} className="w-[400px] h-[500px] mx-auto object-cover" alt="" />

            <div className="flex gap-4 mt-4">
                {
                    product.images.map((img, i) => (
                        <img
                            src={img}
                            key={i}
                            className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
                            alt=""
                            onClick={() => handleImgChange(img)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
