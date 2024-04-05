import { useEffect, useRef, RefObject } from "react";

export default function useDialog() {
    const dialogRef: RefObject<HTMLDialogElement> = useRef(null)

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
            dialogRef.current.classList.add("h-[6rem]")
            dialogRef.current.classList.remove("h-0")
            }
        }

    const closeDialog = () => {
        if (dialogRef.current) {
                dialogRef.current.close()
                dialogRef.current.classList.add("h-0")
                dialogRef.current.classList.remove("h-[6rem]")    
            }
        }
    
    useEffect(() => {
        const handleDialog = () => {
            const width = window.innerWidth;
            if (width >= 768) {
                closeDialog();
            }
        }

        window.addEventListener("resize", handleDialog);

        return () => {
            window.removeEventListener("resize", handleDialog);
        }
    }, [])

    return {dialogRef, openDialog, closeDialog} 
}