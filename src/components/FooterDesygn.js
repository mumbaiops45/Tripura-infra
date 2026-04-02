import React from 'react'


const FooterDesygn = () => {
      const image = "/building4.jpg"; // your single image
  const images = Array.from({ length: 30 }).fill(image);

  return (
    <div>
    <div className="w-screen overflow-hidden">
            <div className="flex">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="pattern"
                  className="h-6 w-auto flex-shrink-0"
                />
              ))}
            </div>
          </div>
    </div>
  )
}

export default FooterDesygn