import React from 'react';
import {Dialog, DialogContent,} from '@mui/material';
import Image from "next/image";

interface DialogProps {
    openDialog: boolean;
    handleClose: () => void;
}

const CongratulationDialog: React.FC<DialogProps> = ({openDialog, handleClose}) => {


    return (
        <div className={'w-full bg-transparent'}>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                // className={'backdrop-blur-[3px] bg-transparent shadow-none z-10'}
                fullWidth={true}
                maxWidth="md"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    backdropFilter: 'blur(8px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                    padding: '0',
                }}
            >
                <DialogContent sx={{
                    border: '0px solid',
                    borderRadius: '16px',
                    borderImageSlice: 1,
                    backgroundColor: 'rgba(17, 25, 40, 0.75)',
                    padding: '0 0 2rem 2rem',
                    // backdropFilter: 'blur(16px) saturate(180%) !important',
                    // WebkitBackdropFilter: 'blur(16px) saturate(180%) !important'
                }} className={'congratulation-dialog'}>

                    <div className={'flex flex-col gap-2'}>
                        <div className={'flex justify-end pt-[0.5rem] pr-[0.5rem]'}>
                            <button onClick={handleClose} style={{background: 'none', border: 'none', padding: 0}}>
                                <Image className={''} src={'/images/close-icon.svg'} alt={'star'} width={25}
                                       height={25}/>
                            </button>
                        </div>
                        <div className={'flex flex-col items-center justify-center gap-6 pb-3'}>
                            <Image className={'bg-white rounded-3xl'} src={'/images/ok-tick-green.svg'} alt={'star'}
                                   width={50}
                                   height={50}/>
                            <p className={'font-bold text-3xl text-white font-montserrat'}>Thanks for your
                                interest!!!</p>
                            <p className={'text-white font-inter'}>We appreciate your interest in BucléLabs Pvt. Ltd. Our business development team will contact you shortly.</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}


export default CongratulationDialog;