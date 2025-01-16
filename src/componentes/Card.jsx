import {Card} from 'flowbite-react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const props = {
  images: {
    img1: img1,
    img2: img2,
    img3: img3,
  },
  sizes: {
    small: 'w-48 text-sm',
    medium: 'w-64 h-96 text-base',
    large: 'w-80  text-xl',
  },
  hrefs: {
    img1: 'https://unsplash.com/photos/fawn-pug-covered-by-burberry-textile-between-plants-U5rMrSI7Pn4',
    img2: 'https://unsplash.com/photos/black-and-white-dog-with-disguise-eyeglasses-wOHH-NUTvVc',
    img3: 'https://unsplash.com/photos/a-close-up-of-a-giraffe-with-trees-in-the-background-FV2bc1yIkME',
    google: 'https://www.google.com',
  },
};

export default function CardsComponent({
  title,
  infoText,
  image,
  alt,
  size,
  href,
  target,
}) {
  const imageClassName = props.images[image] || props.images.img1;
  const sizeClassName = props.sizes[size];
  const hrefClassName = props.hrefs[href] || props.hrefs.google;
  return (
    <Card
      href={hrefClassName}
      imgSrc={imageClassName}
      imgAlt={alt}
      className={sizeClassName}
      target={target}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{infoText}</p>
    </Card>
  );
}
