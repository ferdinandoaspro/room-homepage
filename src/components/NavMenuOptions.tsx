export default function NavMenuOptions({display} : {display: string}) {
    const options: Array<string> = ["home", "shop", "about", "contact"];
    return (
    <menu className={`flex flex-row gap-3 sm:gap-4 ${display}`}>
        <>
        {options.map((option, index) => {
        return <li key={index}>
            <button className="p-2 align-middle" aria-labelledby="nav-section">
                <span className="text-[15px]">{option}</span>
                <span className="sr-only" id="nav-section">{option} section</span>
            </button>
        </li>
        })}
        </>
    </menu>
    )
}