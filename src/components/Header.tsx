export default function Header({backgroundCount, children} : {backgroundCount: number, children: JSX.Element}) {

    const headerDesktopSrc: string = `src/assets/images/desktop-image-hero-${backgroundCount}.jpg`
    const headerMobileSrc: string = `src/assets/images/mobile-image-hero-${backgroundCount}.jpg`
    const headerAlts: Array<string> = ["Two white chairs beside a white table",
                                        "An orange, a green and a white chair",
                                        "Side view of a black chair"]
    
    return (
        <header className="relative flex flex-col justify-between min-h-[360px] max-md:w-full aspect-[16/10] text-white">
            <nav className="z-10 flex items-center px-2 h-[6rem] text-white">
                <button className="p-3 md:hidden" aria-labelledby="open-menu">
                   <img src="src/assets/images/icon-hamburger.svg" alt="" />
                   <span className="sr-only" id="open-menu">Open navigation menu</span>
                </button>
                <img src="src/assets/images/logo.svg" alt="Room logo" className="w-[62px] h-[14px] max-md:mx-auto max-md:translate-x-[-40%]"/>             
            </nav>
            <picture className="absolute w-full h-full">
                <source srcSet={headerDesktopSrc} media="(min-width: 768px)"/>
                <img src={headerMobileSrc} alt={headerAlts[backgroundCount - 1]} className="w-full h-full"/>
            </picture> 
            {children}
        </header>
    )
}