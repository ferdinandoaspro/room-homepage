export default function ImageSelectors({handleIncr, handleDecr, position, display}: 
                    {handleIncr: () => void, handleDecr: () => void, position: string, display: string}) {

    const buttonStyle: string = "inline-grid place-items-center bg-black h-14 w-14 focus:bg-very-dark-gray md:w-[50%] md:h-[3rem] lg:h-[4rem] xl:h-[5rem] hover:bg-very-dark-gray"

    return (
        <div className={`z-10 absolute md:w-full md:grid md:grid-cols-4 ${position} ${display}`}>
            <div className="col-span-1">
                <button onClick={handleDecr}  className={buttonStyle} aria-labelledby="previous-image">
                    <img src="src/assets/images/icon-angle-left.svg" alt="" className="w-[13px] h-[17px] md-[14px] md:h-[24px]"/>
                    <span className="sr-only" id="previous-image">Previous image</span>
                </button>
                <button onClick={handleIncr}  className={buttonStyle} aria-labelledby="next-image">
                    <img src="src/assets/images/icon-angle-right.svg" alt="" className="w-[13px] h-[17px] md-[14px] md:h-[24px]"/>
                    <span className="sr-only" id="next-image">Next image</span>
                </button>
            </div>          
        </div>
    )
}