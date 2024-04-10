import Header from "./components/Header.tsx"
import PrimarySection from "./components/PrimarySection.tsx"
import AboutSection from "./components/AboutSection.tsx"
import ImageSelectors from "./components/ImageSelectors.tsx"
import NavMenu from "./components/NavMenu.tsx"
import NavMenuOptions from "./components/NavMenuOptions.tsx"
import useDialog from "./assets/hooks/useDialog.tsx"
import useLayout from "./assets/hooks/useLayout.tsx"
import {useState} from "react"

function App() {

  const [backgroundCount, setBackgroundCount] = useState(1)
  const layoutHook = useLayout();
  const dialogHook = useDialog();
 
  const increaseCount = () => backgroundCount === 3 ? setBackgroundCount(1) : setBackgroundCount(backgroundCount + 1)
  const decreaseCount = () => backgroundCount === 1 ? setBackgroundCount(3) : setBackgroundCount(backgroundCount - 1)

  return (
    <>
      <Header backgroundCount={backgroundCount} openDialog={dialogHook.openDialog}>
        {layoutHook.width < 786 && <NavMenu dialogRef={dialogHook.dialogRef} closeDialog={dialogHook.closeDialog}/>}
        {layoutHook.width >= 768 && <NavMenuOptions display={"max-md:hidden"}/>}
        {layoutHook.width < 768 && <ImageSelectors handleIncr={increaseCount} 
                        handleDecr={decreaseCount} 
                        position={"bottom-0 right-0"} 
                        display={"md:hidden"} />}
      </Header>
      <main className="font-league-spartan md:contents">
        <PrimarySection backgroundCount={backgroundCount}>
          {layoutHook.width >= 768 && <ImageSelectors handleIncr={increaseCount} 
                          handleDecr={decreaseCount} 
                          position={"bottom-0 left-0"} 
                          display={"max-md:hidden"} />}
        </PrimarySection>
        <img src="/images/image-about-dark.jpg" alt="" className="w-full h-full md:col-span-3"/>
        <AboutSection />
        <img src="/images/image-about-light.jpg" alt="" className="w-full h-full md:col-span-3"/>
      </main>
    </>
  )
}

export default App
