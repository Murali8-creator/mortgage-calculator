import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureSelect = ({data, setData}) => {
  const handleChange = (e) => {
    setData({
      ...data,
      loanTerm: e.target.value,
    })
  }
  return (
    <div>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.interestRate}
          onChange={handleChange}
          label="Tenure"
          
        >
          <MenuItem value={5}>5 years</MenuItem>
          <MenuItem value={10}>10 years</MenuItem>
          <MenuItem value={15}>15 years</MenuItem>
          <MenuItem value={20}>20 years</MenuItem>
          <MenuItem value={25}>25 years</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default TenureSelect
