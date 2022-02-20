import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { debounce } from "lodash";
import { useState } from "react";


const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "black",
  height: 4,
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    border: "2px solid black",
    boxShadow: "2px 2px 0px #c4c4c4",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)"
    },
    "&:before": {
      display: "none",
    }
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 14,
    fontWeight: "medium",
    top: -6,
    backgroundColor: "unset",
    color: "black", //based on theme
    "&:before": {
      display: "none"
    },
    "& *": {
      background: "transparent",
      color: 'black'
    }
  },
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "#DEF348"
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    height: "2px",
    backgroundColor: "#000"
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#000",
    opacity: 0.7,
    borderRadius: '50%',
    height: 3,
    width: 1.2,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor"
    }
  }
}));

export default function PriceSlider() {
  const [sliderValue, setSliderValue] = useState(2000)
  const handleChange = debounce(value => {
    setSliderValue(value)
    console.log(sliderValue);
  }, 300)
  return (
      <CustomSlider
        aria-label="price slider"
        defaultValue={2000}
        marks
        min={0}
        step={2000}
        max={10000}
        valueLabelDisplay="on"
        onChange={e => handleChange(e.target.value)}
      />
  );
}
