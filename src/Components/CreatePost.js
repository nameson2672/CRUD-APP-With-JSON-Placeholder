import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { uuid } from 'uuidv4';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: "800px",
    '& > :not(style)': { m: 1 },
};

export default function CreatePost({id, handleClose, open, CreatePostApiCall }) {
    const [valueTitle, setValueTitle] = useState(null);
    const [titleError, settitleError] = useState(false);
    const [bodyError, setBodyError] = useState(false);
    const [creatingPost, setcreatingPost] = useState(null);
    const handleChangeTitle = (event) => {
        setValueTitle(event.target.value);
    };
    const [valueBody, setValueBody] = useState(null);

    const handleChangeBody = (event) => {
        setValueBody(event.target.value);
    };

    const CallCreate = async (e) => {
        if(valueTitle !== null && valueBody !== null){
            setBodyError(false);
            settitleError(false);
            setcreatingPost(true);
        const newData = {
            userId: 1,
            id: parseInt(e.target.id),
            title: valueTitle,
            body: valueBody
        };
        await CreatePostApiCall(newData);
        setcreatingPost(false);
        handleClose();
        setValueTitle(null);
        setValueBody(null);
        }
        if(valueBody === null){
            setBodyError(true);
        }
        if(valueTitle === null){
            settitleError(true);
        }
        

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
                {titleError &&
                    <Typography variant="subtitle1" gutterBottom component="div" color={"error"}>
                    Please write a valid title text.
                  </Typography>

                }
                {bodyError &&
                    <Typography variant="subtitle1" gutterBottom component="div" color={"error"}>
                    Please write a valid body text.
                  </Typography>

                }
                    <Typography variant="h5" gutterBottom component="div">
                        UserId = 1
                    </Typography>
                    <TextField
                        fullWidth
                        id="filled-multiline-flexible"
                        label="Title"
                        multiline
                        error={titleError}
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
                        error={bodyError}
                    />
                    <LoadingButton
                        size="normal"
                        color="primary"
                        onClick={CallCreate}
                        loading={creatingPost}
                        loadingPosition="start"
                        startIcon={<UpgradeIcon />}
                        variant="contained"
                        id={id}
                    >
                        Create
                    </LoadingButton>
                </Box>

            </Modal>
        </>
    );
}