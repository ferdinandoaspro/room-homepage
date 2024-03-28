import Header from "./components/Header.tsx"
import PrimarySection from "./components/PrimarySection.tsx"
import AboutSection from "./components/AboutSection.tsx"
import ImageSelectors from "./components/ImageSelectors.tsx"
import {useState} from "react"

function App() {

  const [backgroundCount, setBackgroundCount] = useState(1)

  const increaseCount = () => backgroundCount === 3 ? setBackgroundCount(1) : setBackgroundCount(backgroundCount + 1)
  const decreaseCount = () => backgroundCount === 1 ? setBackgroundCount(3) : setBackgroundCount(backgroundCount - 1)

  return (
    <>
      <Header backgroundCount ={backgroundCount}>
        <ImageSelectors handleIncr={increaseCount} handleDecr={decreaseCount} position={"bottom-0 right-0"} display={"md:hidden"}/>
      </Header>
      <main className="font-league-spartan md:contents">
        <PrimarySection backgroundCount={backgroundCount}>
          <ImageSelectors handleIncr={increaseCount} handleDecr={decreaseCount} position={"bottom-0 left-0"} display={"max-md:hidden"}/>
        </PrimarySection>
        <img src="src/assets/images/image-about-dark.jpg" alt="" className="w-full h-full"/>
        <AboutSection />
        <img src="src/assets/images/image-about-light.jpg" alt="" className="w-full h-full"/>
      </main>
    </>
  )
}

export default App
