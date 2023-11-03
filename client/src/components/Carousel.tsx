import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import classes from './Carousel.module.css';

const images: any = [
  "https://cdn.create.vista.com/api/media/medium/532262682/stock-photo-denim-jacket-pants-shirt-hat-shoes-autumn-leaves-color-background?token=",
  "https://cdn.create.vista.com/api/media/medium/241895634/stock-photo-top-view-green-shirt-shoes-jeans-wooden-background?token=",
  "https://cdn.create.vista.com/api/media/medium/241895634/stock-photo-top-view-green-shirt-shoes-jeans-wooden-background?token=",
  "https://cdn.stocksnap.io/img-thumbs/960w/woman-shopping_JN0TSD4UG5.jpg",
];
const Slider = () => {
  const slides = images.map((url: any) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators 
    height={500} 
    classNames={classes} style={{  margin: '0 auto', backgroundColor: 'transparent' }} >
      {slides}
    </Carousel>
  );
};

export default Slider;