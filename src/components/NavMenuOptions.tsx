export default function NavMenuOptions({display} : {display: string}) {
    const options: Array<string> = ["home", "shop", "about", "contact"];
    return (
    <menu className={`flex flex-row gap-3 sm:gap-4 ${display}`}>
        <>
        {options.map((option, index) => {
        return <li key={index}>
            <button className="p-2 align-middle focus:underline focus:decoration-4 focus:underline-offset-8 hover:underline hover:decoration-4 hover:underline-offset-8" aria-labelledby="nav-section">
                <span className="text-sm">{option}</span>
                <span className="sr-only" id="nav-section">{option} section</span>
            </button>
        </li>
        })}
        </>
    </menu>
    )
}