// creating profile modal using Mantin Core libary to enable onclick popup

import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostSide/PostShare/PostShare";

import './ShareModal.scss';

function ShareModal({modelOpened, setModelOpened}){
    const theme = useMantineTheme();

    return(
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size='55%'
        opened={modelOpened}
        onClose={()=>setModelOpened(false)}
        >
        <PostShare/>
        </Modal>
    )
}

export default ShareModal;