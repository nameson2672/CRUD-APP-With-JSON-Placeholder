import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpgradeIcon from '@mui/icons-material/Upgrade';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxWidth:"800px",
  '& > :not(style)': { m: 1 },
};

export default function UpdatePost({handleClose, open, id,title, body, userId, UpdatePostApiCall}) {
  const [valueTitle, setValueTitle] = useState(title);
  const [updatingPost, setUpdatingPost] = useState(false);

  const handleChangeTitle = (event) => {
    setValueTitle(event.target.value);
  };
  const [valueBody, setValueBody] = useState(body);

  const handleChangeBody = (event) => {
    setValueBody(event.target.value);
  };

  const CallUpdates =async (e)=>{
    setUpdatingPost(true);
    const newData = {
      userId : userId,
      id: parseInt(e.target.id),
      title: valueTitle,
      body:valueBody
    };
     await UpdatePostApiCall(newData);
    setUpdatingPost(false);
    handleClose();

  }

    return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}>
        <Typography variant="h5" gutterBottom component="div">
        UserId = {userId}
      </Typography>
        <TextField
          fullWidth 
          id="filled-multiline-flexible"
          label="Title"
          multiline
          color='secondary'
          maxRows={2}
          value={valueTitle}
          onChange={handleChangeTitle}
          variant="filled"
          size="large"
          
          
        />
        <TextField
          fullWidth 
          id="filled-multiline-flexible"
          label="Body"
          multiline
          maxRows={5}
          value={valueBody}
          onChange={handleChangeBody}
          variant="filled"
        />
        <LoadingButton
                    size="normal"
                    color="primary"
                    onClick={CallUpdates}
                    loading={updatingPost}
                    loadingPosition="start"
                    startIcon={<UpgradeIcon />}
                    variant="contained"
                    id={id}
                >
                    Update
      </LoadingButton>
        </Box>
        
      </Modal>
    </>
  );
}