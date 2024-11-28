import Image from 'next/image';
import { memo, useCallback, useEffect, useState } from 'react';
import { stripHtml } from '@/lib/utils/dataUtils';
import LeftArrowIcon from '../icons/LeftArrowIcon';
import RightArrowIcon from '../icons/RightArrowIcon';
import { useCart } from '../context/ShopCartContext';
import PlusIcon from '../icons/PlusIcon';
import Tooltip from './Tooltip';

const ProductViewerOfSubCategory = ({
  src,
  alt,
  twStyles,
  productModel,
  description,
  images,
  product,
}) => {
  const { addToCart } = useCart();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFullscreenChange = useCallback(() => {
    const isCurrentElementFullscreen =
      document.fullscreenElement &&
      document.fullscreenElement.contains(document.getElementById(src));
    setIsFullscreen(isCurrentElementFullscreen);
  }, [src]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  const openFullscreen = () => {
    const element = document.getElementById(src);
    if (element && !document.fullscreenElement) {
      element.requestFullscreen().catch((e) => {
        console.error('Error attempting to enable full-screen mode:', e);
      });
    }
  };

  const closeFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((e) => {
        console.error('Error attempting to exit full-screen mode:', e);
      });
    }
  };

  const handleImageNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div id={src} className="relative">
      <div
        onClick={openFullscreen}
        className={`cursor-zoom-in relative ${twStyles}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <Tooltip text="Dodaj u moj izbor">
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label="Dodavanje u korpu"
            className="position absolute top-5 right-5 button-effect"
          >
            <PlusIcon width={30} height={30} />
          </button>
        </Tooltip>
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center absolute bottom-0 left-0 w-full bg-black py-5 opacity-50  cursor-text"
        >
          {description ? (
            <p className="text-white font-bold px-[2rem] xl:text-[1rem]">
              {stripHtml(description)}
            </p>
          ) : null}
        </div>
      </div>
      {isFullscreen && (
        <div
          onClick={closeFullscreen}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[9999999]"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            {images && images.length > 1 && (
              <button
                className="absolute left-10 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageNavigation('prev');
                }}
              >
                <LeftArrowIcon width={60} height={60} color="#FFF" />
              </button>
            )}
            <div className="flex justify-center items-center max-w-[80%] max-h-[80%] xl:max-w-[50%] xl:max-h-[50%]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="max-[80%] max-h-[80%] xl:max-w-[50%] xl:max-h-[50%]"
                style={{
                  margin: 'auto',
                  objectFit: 'contain',
                }}
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </div>
            {images && images.length > 1 && (
              <button
                className="absolute right-10 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageNavigation('next');
                }}
              >
                <RightArrowIcon width={60} height={60} color="#FFF" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ProductViewerOfSubCategory);
