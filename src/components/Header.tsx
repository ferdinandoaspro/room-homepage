export default function Header({backgroundCount, children, openDialog} : 
                    {backgroundCount: number, children: React.ReactNode[], openDialog: () => void}) {

    const headerDesktopSrc: string = `/images/desktop-image-hero-${backgroundCount}.jpg`
    const headerMobileSrc: string = `/images/mobile-image-hero-${backgroundCount}.jpg`
    const headerAlts: Array<string> = ["Two white chairs beside a white table",
                                        "An orange, a green and a white chair",
                                        "Side view of a black chair"]
                                    
    
    return (
        <header className="relative flex flex-col justify-between min-h-[360px] text-white 
        max-md:aspect-[16/10] max-md:w-screen md:col-start-1 md:col-span-6">
            <nav className="z-10 flex items-center px-2 h-24 w-full font-[700] md:px-8 lg:px-16 lg:h-36">
                <button className="p-3 md:hidden" aria-labelledby="open-menu" onClick={openDialog}>
                   <img src="/images/icon-hamburger.svg" alt="" />
                   <span className="sr-only" id="open-menu">Open navigation menu</span>
                </button>
                <img src="/images/logo.svg" alt="Room logo"
                className="w-[62px] h-[14px] max-md:mx-auto max-md:translate-x-[-40%] md:mr-8 lg:mr-12"/>
                {children[0]}  
                {children[1]}  
            </nav>
            <picture className="absolute w-full h-full">
                <source srcSet={headerDesktopSrc} media="(min-width: 768px)"/>
                <img src={headerMobileSrc} alt={headerAlts[backgroundCount - 1]} className="w-full h-full"/>
            </picture>
            {children[2]}
        </header>
    )
}