import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const images = [image1, image2, image3, image4];

const Partners = () => {
  return (
    <section className="pt-1 bg-[#D9D9D9] overflow-hidden">
      <div className="scroll-container">
        <div className="scroll-content">
          {images.concat(images).map((image, index) => (
            <img key={index} src={image} alt={`Partner ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
