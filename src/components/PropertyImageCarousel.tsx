import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface PropertyImageCarouselProps {
  images: string[];
  title: string;
}

const PropertyImageCarousel = ({
  images,
  title,
}: PropertyImageCarouselProps) => {
  return (
    // <section className="relative h-full md:h-[70vh] w-full overflow-hidden bg-black/60">
    //   <Carousel className="w-full h-full">
    //     <CarouselContent className="h-full">
    //       {images.map((image, index) => (
    //         <CarouselItem key={index} className="h-full">
    //           <div className="relative h-full w-full flex items-center justify-center">
    //             <img
    //               src={image}
    //               alt={`${title} - Image ${index + 1}`}
    //               className=" h-full max-sm:aspect-square md:object-contain object-center"
    //               style={{
    //                 objectFit: "cover",
    //               }}
    //             />
    //             <div className="absolute inset-0 bg-black/20" />
    //           </div>
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>
    //     <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a365d] border-0 shadow-lg" />
    //     <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a365d] border-0 shadow-lg" />
    //   </Carousel>

    //   {/* Gradient overlay for better text readability */}
    //   <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    // </section>
    <section className="relative h-full md:h-[70vh] w-full overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                {/* Blurred Background */}
                <img
                  src={image}
                  alt={`Background ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover blur-xs brightness-50 scale-110 z-0"
                />

                {/* Foreground Image */}
                <div className="relative h-full w-full flex items-center justify-center z-10">
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className=" h-full max-sm:aspect-square md:object-contain object-center"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 z-20" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a365d] border-0 shadow-lg z-30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a365d] border-0 shadow-lg z-30" />
      </Carousel>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-20" />
    </section>
  );
};

export default PropertyImageCarousel;
