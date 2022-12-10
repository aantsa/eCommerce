import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";

export default function HomePage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src="/images/homepage1.jpg"
            alt="homepage"
            style={{ display: "block", width: "100%", maxHeight: 500 }}
          />
        </div>
        <div>
          <img
            src="/images/homepage2.jpg"
            alt="homepage"
            style={{ display: "block", width: "100%", maxHeight: 500 }}
          />
        </div>
        <div>
          <img
            src="/images/homepage3.jpg"
            alt="homepage"
            style={{ display: "block", width: "100%", maxHeight: 500 }}
          />
        </div>
      </Slider>
      <Box display="flex" justifyContent="center" sx={{ px: 4 }}>
        <Typography variant="h1">Welcome - browse the catalog</Typography>
      </Box>
    </>
  );
}
