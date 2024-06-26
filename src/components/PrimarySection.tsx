export default function PrimarySection({backgroundCount, children} : {backgroundCount: number, children: React.ReactNode}) {

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
        <div className="relative px-8 md:max-lg:px-5 py-14 section-tablet-layout md:row-start-1 
                        md:col-start-6 md:col-span-5 lg:col-start-7 lg:col-span-4 lg:px-[5.25rem] lg:py-28 2xl:px-40">
            <section>
                <h1 className="mb-4 text-3xl font-[600] tracking-[-0.04em] min-[375px]:text-[2.5rem] md:mb-1 md:max-lg:tracking-[-0.05em] lg:mb-3 md:text-[1.75rem] lg:text-4xl xl:text-5xl">
                    {sectionTitle[backgroundCount]}
                </h1>
                <p className="section-body">
                    {sectionDescription[backgroundCount]}
                </p>
                <button className="flex items-center gap-6 mb-3 mt-9 group md:mt-1 lg:mt-5 hover:text-dark-gray">
                    <span className="tracking-[0.7rem] font-[600] text-[15px] lg:text-[1rem] md:font-[500]">SHOP NOW</span>
                    <svg className="group-hover:fill-dark-gray" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.05 0l5.481 5.527h.008v.008L40
                                6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668
                                4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" 
                                fill="currentColor" fillRule="nonzero"/>
                    </svg>
                </button>
            </section>
            {children}
        </div>
        
    )
}