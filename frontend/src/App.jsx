import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SliderSelect from "./components/SliderSelect/SliderSelect";
import TenureSelect from "./components/TenureSelect/TenureSelect";
import Result from "./components/Result/Result";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const App = () => {
  // const [couner, setCounter] = useState(0)
  // const [homeValue, setHomeValue] = useState(3000);
  // const [downPayment, setDownPayment] = useState(3000);
  // const [loanAmount, setLoanAmount] = useState(3000);
  // const [loanTerm, setLoanTerm] = useState(3000);

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 3000,
    interestRate: 5
  });

  // setData({
  //      ...c,
  //   loanTerm:123
  // })

  return (
    <div className="App">
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
