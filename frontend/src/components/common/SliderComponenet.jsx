import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponenet = ({ defaultValue, min, max, step, onChange , value, label,unit, amount}) => {
  

  return (
    <Stack my={2}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5"> {unit} {amount}</Typography>
      </Stack>
      <Slider
        onChange={onChange}
        defaultValue={defaultValue}
        min={min}
        max={max}
        value={value}
        marks
        step={step}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="caption" color="text.secondary">{unit} {min}</Typography>
        <Typography variant="caption" color="text.secondary">{unit} {max}</Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponenet;
