import Image from "next/image";
import Link from "next/link";
import Lanyard from "./components/lanyard";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";
import AnimatedContent from "./components/AnimatedContent";
import Squares from "./components/Squares";
import GradientText from "./components/GradientText";
import CircularText from "./components/CircularText";
import Dock from "./components/Dock";
import { Timeline } from "./components/timeline";


export default function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-[#2E313D]'>
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5} 
          squareSize={50}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#6A6A6A'
          hoverFillColor='#75D500'
        />
      </div>      
      <div className="container mx-auto min-h-screen py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="hidden lg:block col-span-6 relative">
            <Lanyard 
              position={[0, 0, 12]} 
              gravity={[0, -40, 0]}
              />
          <div className="hidden lg:block absolute top-10 right-10 z-50">
              <CircularText
                text="RHENALD ✦ ADRIAN ✦ NAINGGOLAN ✦ "
                onHover="speedUp"
                spinDuration={20}
                className=""
              />
            </div>
          </div> 
          <div className="lg:col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent 
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-white">Colab with me</h1>
                      <RotatingText
                        texts={['Web Development', 'Data Analytics', 'Software Engineering', 'UI/UX Design']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#75D500] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                      />
                  </div>
                </AnimatedContent>
             
              <div className="flex flex-col items-start">
                <SplitText
                  text="Rhenald Nainggolan"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-start"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"  
                />
                <SplitText
                  text="Software Engineering"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-start text-[#75D500]"
                  delay={80}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </div>
                <BlurText
                  text="Fresh graduate Informatics Engineering from Universitas Katolik Santo Thomas with interests in software engineering, full-stack development, and data analytics. Experienced in coding and technical problem-solving through academic and internship projects, and eager to grow in a collaborative, dynamic environment."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />
                <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/rhenaldnainggolan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GradientText
                    colors = {[
                      '#0A66C2',
                      '#0077B5',
                      '#0084BF',
                      '#00A0DC',
                      '#0A66C2'
                    ]}
                    animationSpeed={3.5}
                    showBorder
                    className="px-4 py-2 sm:px-6 sm:py-4 rounded-lg"
                  >
                    Linkedin
                  </GradientText>
                </Link>
                <Link
                  href="https://www.instagram.com/renal.a.n"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GradientText
                    colors = {[
                      '#F58529',
                      '#DD2A7B',
                      '#8134AF',
                      '#515BD4',
                      '#F58529'
                    ]}
                    animationSpeed={3.5}
                    showBorder
                    className="px-4 py-2 sm:px-6 sm:py-4 rounded-lg"
                  >
                    Instagram
                  </GradientText>
                </Link>
                <Link
                  href="https://github.com/renallll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GradientText
                    colors = {[
                      '#F5F7FA', // silver terang (flash)
                      '#E4E7EC', // silver muda
                      '#C9CED6', // silver utama
                      '#FFFFFF', // kilat putih
                      '#F5F7FA'  // loop halus
                    ]}
                    animationSpeed={3.5}
                    showBorder
                    className="px-4 py-2 sm:px-6 sm:py-4 rounded-lg"
                  >
                    Github
                  </GradientText>
                </Link>
                <Link
                  href="https://wa.me/qr/6QBDQPT3TB4TF1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GradientText
                    colors = {[
                      '#25D366',
                      '#1EBEA5',
                      '#20C997',
                      '#128C7E',
                      '#25D366'
                    ]}
                    animationSpeed={3.5}
                    showBorder
                    className="px-4 py-2 sm:px-6 sm:py-4 rounded-lg"
                  >
                    Whatsapp
                  </GradientText>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
       
    </div>
  );
}
