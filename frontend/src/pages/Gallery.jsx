import { useState, useEffect, useCallback } from 'react'
import HederGallery from '../components/HederGallery'
import Cover1 from '../assets/cover1.jpg'
import Cover2 from '../assets/cover2.jpg'
import Cover3 from '../assets/cover3.jpg'
import Cover4 from '../assets/cover4.jpg'
import Cover5 from '../assets/cover5.jpg'
import Cover6 from '../assets/cover6.jpg'

const images = [
  { src: Cover1, alt: 'Gallery Image 1' },
  { src: Cover2, alt: 'Gallery Image 2' },
  { src: Cover3, alt: 'Gallery Image 3' },
  { src: Cover4, alt: 'Gallery Image 4' },
  { src: Cover5, alt: 'Gallery Image 5' },
  { src: Cover6, alt: 'Gallery Image 6' },
]

function Gallery() {

  const [selectedIndex, setSelectedIndex] = useState(null)

  const openLightbox = (index) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const prev = useCallback(() => {
    setSelectedIndex((i) => (i - 1 + images.length) % images.length)
  }, [])

  const next = useCallback(() => {
    setSelectedIndex((i) => (i + 1) % images.length)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedIndex, next, prev])

  // Prevent background scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedIndex])

  return (
    <div>
      <HederGallery />
      <div className='mx-5 my-32 md:mx-10 lg:mx-20'>
        <div className="">

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden cursor-pointer rounded-xl group aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-3-3v6m-3-3h6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              onClick={closeLightbox}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute z-10 p-2 text-white top-4 right-4 hover:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute z-10 p-2 text-white transition rounded-full left-4 bg-white/10 hover:bg-white/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute z-10 p-2 text-white transition rounded-full right-4 bg-white/10 hover:bg-white/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Counter */}
              <p className="absolute text-sm text-white/50 bottom-6">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery
