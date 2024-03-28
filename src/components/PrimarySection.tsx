export default function PrimarySection({backgroundCount, children} : {backgroundCount: number, children: JSX.Element}) {

    const sectionTitle: Array<string> = ["Discover innovative ways to decorate", 
                                         "We are available all across the globe",
                                         "Manufactured with the best materials"]
    const sectionDescription: Array<string> = [`We provide unmatched quality, comfort, and style for
                                                property owners across the country. Our experts combine
                                                form and function in bringing your vision to life. Create 
                                                a room in your own style with our collection and make your
                                                property a reflection of you and what you love.`,
                                                
                                                `With stores all over the world, it's easy for you to find furniture
                                                for your home or place of business. Locally, we're in most major
                                                cities throughout the country. Find the branch nearest you using our
                                                store locator. Any questions? Don't hesitate to contact us today.`,
                                            
                                                `Our modern furniture store provide a high level of quality. Our
                                                company has invested in advanced technology to ensure that every
                                                product is made as perfect and as consistent as possible. With
                                                three decades of experience in this industry, we understand what
                                                customers want for their home and office.`]

    return (
        <section className="relative px-8 py-14">
            <h1 className="mb-4 text-3xl min-[375px]:text-[2.5rem] font-[600] tracking-[-0.04em]">
                {sectionTitle[backgroundCount - 1]}
            </h1>
            <p className="section-body">
                {sectionDescription[backgroundCount - 1]}
            </p>
            <div className="flex items-center gap-6 mt-[2.25rem] mb-3">
                <span className="tracking-[0.7rem] font-[600] text-[15px]">SHOP NOW</span>
                <img src="src/assets/images/icon-arrow.svg" alt="" />
            </div>
            {children}
        </section>
    )
}