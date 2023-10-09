import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField,FormControlLabel,MenuItem ,Select,Radio,IconButton} from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
export function Mui(){
  const [title, setTitle] = useState('');
  const [textInput, setTextInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor:"black",
    color:"orange",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleButtonClick = () => {
    setTitle(textInput);
  };

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return(
    <div>
      <h1>{title}</h1>
<Button variant="contained" onClick={handleButtonClick}>
Hello World
</Button>
<TextField variant="filled" onChange={handleInputChange} style={{ backgroundColor: 'lightblue' }}></TextField>
<CheckBox sx={{color:"black","&.Mui-checked":{color:"pink"}}}></CheckBox >
<Radio sx={{color:"orange",tabSize:"500px"}}></Radio>
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
        label="Select Option"
        variant="outlined"
        style={{ backgroundColor: 'lightblue' }}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
      </Select>
      <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
      <ShoppingCartIcon />
      </StyledBadge>
      </IconButton>
      <div id='elchi'>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            yoooo whats popinn
          </Typography>
        </Box>
      </Modal>
    </div>
 </div>
  )
}
