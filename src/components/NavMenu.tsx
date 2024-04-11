import { RefObject } from "react"
import NavMenuOptions from "./NavMenuOptions.tsx"

export default function NavMenu({dialogRef, closeDialog} : {dialogRef: RefObject<HTMLDialogElement>, closeDialog: () => void}) {

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === e.currentTarget) {  
            closeDialog()
        }
    }

    return (
        <dialog className="h-0 max-w-screen-md mt-0 transition-all bg-white backdrop:bg-black/50" ref={dialogRef} onClick={handleBackdropClick}>
            <div className="flex flex-row items-center justify-between w-screen h-full px-2">
                <button className="p-3 text-dark-gray" aria-labelledby="close-menu" onClick={closeDialog}>
                    <img src="/images/icon-close.svg" alt="" className="w-[20px] h-[20px]"/>
                    <span className="sr-only" id="close-menu">Close navigation menu</span>
                </button>
                <NavMenuOptions display={"flex"}/>
            </div>
        </dialog>
    )
}