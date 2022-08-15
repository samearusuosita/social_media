// creating profile modal using Mantin Core libary to enable onclick popup

import { Modal, useMantineTheme } from "@mantine/core";

import './ProfileModal.scss';

function ProfileModal({modelOpened, setModelOpened}){
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
        <form action="" className="infoForm">
            <h3>Your Info</h3>
            <div>
                <input type="text" 
                placeholder='First Name' 
                className='infoInput' 
                name='firstname'/>

                <input type="text" 
                placeholder='Last Name' 
                className='infoInput' 
                name='lastname'/> 
            </div>
            <div>
                <input type="text" 
                placeholder='Works at' 
                className='infoInput' 
                name='worksat'/> 
            </div>
            <div>
                <input type="text" 
                placeholder='Lives in' 
                className='infoInput' 
                name='livesin'/>

                <input type="text" 
                placeholder='Country' 
                className='infoInput' 
                name='country'/> 
            </div>
            <div>
                <input type="text" 
                placeholder='Relationship Status' 
                className='infoInput' 
                name='relationship'/> 
            </div>
            <div>
                Profile Image
                <input type="file" name='profileimage'/> 
                Cover Image
                <input type="file" name='coverimage'/> 
            </div>
            <button className="button infoButton">Update</button>
        </form>
        </Modal>
    )
}

export default ProfileModal;