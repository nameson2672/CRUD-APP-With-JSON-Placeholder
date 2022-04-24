import { Box, Typography, IconButton, Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import UpdatePost from './UpdatePost';

const style = {
    minWidth: [250,400,500,600],
    bgcolor: 'background.paper',
    boxShadow: 5,
    p: 2,
    m: 1,
    transition: "transform 0.3s",
    '&:hover': {
        transform: "scale(1.05)"
    }
};

function Post({ title, body, userId, id, deletPost, UpdatePostApiCall }) {
    const [delProssing, setDelPreooing] = useState(false);
    const [updateProcessing, setUpdateProcessing] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false); setUpdateProcessing(false);}

    const deletItem = (e) => {
        setDelPreooing(true);
        deletPost(parseInt(e.target.id));
    }

    const updateItem = (e) => {
        setUpdateProcessing(true);
        setOpen(true);

    }

    return (
        <Box sx={style} key={id} userId={userId}>
            
            <Typography gutterBottom variant="h5" width={[250,400,500,600]}>
                {title}

            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary" width={[250,400,500,600]}>
                {body}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
                <LoadingButton
                    size="small"
                    color="secondary"
                    onClick={updateItem}
                    loading={updateProcessing}
                    loadingPosition="start"
                    startIcon={<CreateIcon />}
                    variant="text"
                    id={id}
                >
                    Update
                </LoadingButton>


                <LoadingButton
                    size="small"
                    color="error"
                    onClick={deletItem}
                    loading={delProssing}
                    loadingPosition="start"
                    startIcon={<DeleteOutlineIcon />}
                    variant="text"
                    id={id}
                >
                    Delete
                </LoadingButton>

                {/* { !delProssing &&
            <DeleteOutlineIcon   id={id}/>
        } */}

            </Stack>
            <UpdatePost id={id} open={open} handleClose={handleClose} userId={userId} title={title} body={body} UpdatePostApiCall={UpdatePostApiCall} />
        </Box>
    )
}

export default Post