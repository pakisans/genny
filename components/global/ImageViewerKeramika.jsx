import { memo, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/ShopCartContext';
import PlusIcon from '../icons/PlusIcon';

const ImageViewerKeramika = ({
  src,
  alt,
  twStyles,
  productModel,
  attributes,
  description,
  product,
  twStylesDescription,
  noFull = false,
}) => {
  const { addToCart } = useCart();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dimenzija = attributes.filter((a) => a.slug === 'pa_velicina')[0];

  const openFullscreen = () => {
    const element = document.getElementById(src);
    if (element && !document.fullscreenElement) {
      element.requestFullscreen().catch((e) => {
        console.error('Error attempting to enable full-screen mode:', e);
      });
    }
  };

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

  const closeFullscreen = () => {
    if (document.fullscreenElement != null) {
      document.exitFullscreen().catch((e) => {
        console.error('Error attempting to exit full-screen mode:', e);
      });
      setIsFullscreen(false);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log(product);
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
        <button
          type="button"
          onClick={handleAddToCart}
          className="position absolute top-5 right-5 button-effect"
        >
          <PlusIcon width={30} height={30} />
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center absolute bottom-0 left-0 w-full bg-black py-5 opacity-50  cursor-text"
        >
          <div
            className={`text-white text-[1.2rem] ${twStylesDescription || ''}`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {dimenzija?.options && dimenzija.options.length > 0 ? (
            <p className="text-white text-[1.2rem]">
              {dimenzija?.options[0]}mm
            </p>
          ) : null}
        </div>
      </div>
      {isFullscreen && (
        <div
          onClick={closeFullscreen}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[9999999]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{
              objectFit: 'contain',
              maxHeight: noFull ? '50vh' : '100vh',
              maxWidth: noFull ? '50vw' : '100vw',
              margin: 'auto',
            }}
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        </div>
      )}
    </div>
  );
};

export default memo(ImageViewerKeramika);
