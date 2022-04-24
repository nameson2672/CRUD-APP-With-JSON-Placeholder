import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from "@mui/material/Link";


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function DeveloperInfoModel({handleClose, open}) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}>
        <Typography  variant="p">
            Made by:
          </Typography>
          <Typography gutterBottom variant="h5" >
            Nameson Gaudel
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" >
            This is the basic CRUD operation app. It uses the <Link href="https://jsonplaceholder.typicode.com/">JSON Placeholder</Link> API.
          </Typography>
          <Button variant="contained" href='https://www.nameson.com.np/'>More About Developer</Button>
        </Box>
      </Modal>
    </>
  );
}