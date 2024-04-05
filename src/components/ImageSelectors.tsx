export default function ImageSelectors({handleIncr, handleDecr, position, display}: 
                    {handleIncr: () => void, handleDecr: () => void, position: string, display: string}) {
    return (
        <div className={`z-10 absolute ${position} ${display}`}>
            <button onClick={handleDecr}  className="px-5 py-4 bg-black hover:bg-very-dark-gray" aria-labelledby="previous-image">
                <img src="src/assets/images/icon-angle-left.svg" alt=""/>
                <span className="sr-only" id="previous-image">Previous image</span>
            </button>
            <button onClick={handleIncr} className="px-5 py-4 bg-black hover:bg-very-dark-gray" aria-labelledby="next-image">
                <img src="src/assets/images/icon-angle-right.svg" alt=""/>
                <span className="sr-only" id="next-image">Next image</span>
            </button>
        </div>
    )
}