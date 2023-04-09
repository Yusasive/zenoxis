import ImageSlider from "./ImageSlider";
const ImageData = () => {
  const slides = [
    { url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg", title: "beach" },
    { url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg", title: "boat" },
    { url: "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31", title: "forest" },
    { url: "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png", title: "city" },
    { url: "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960", title: "italy" },
  ];
  const containerStyles = {
    width: "300px",
    height: "300px",
    margin: "1rem auto",

  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default ImageData;
  