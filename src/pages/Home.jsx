import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.jsx'
import Space from '../models/Space.jsx';
import Sky  from "../models/Sky.jsx"
import Bird from '../models/Bird.jsx';
import Plane from './Plane.jsx';
import HomeInfo from '../components/HomeInfo.jsx';
import CTA from '../components/CTA.jsx';

const Home = () => {
  const [isRotating, setIsRotating] = useState();
  const [currentStage, setCurrentStage] = useState(1);

  const adjustSpceForScreenSize = () => {
    let screenScale = null
    let screenPosition;
    let rotation = [0.5,6.3,0];

    if(window.innerWidth < 768){
      screenScale = [1,1,1];
      screenPosition = [0,-2.5, -22];
    }else{
      screenScale = [1.3,1.3,1.3];
      screenPosition = [0,-2.3, -14];
    }
    return [screenScale,screenPosition,rotation];
  }
  // const adjustPlaneForScreenSize = () => {
  //   let screenScale;
  //   let screenPosition;

  //   if(window.innerWidth < 768){
  //     screenScale = [1.5,1.5,1.5];
  //     screenPosition = [0,-1.5, 0];
  //   }else{
  //     screenScale = [3,3,3];
  //     screenPosition = [0,-4, -4];
  //   }
  //   return [screenScale,screenPosition];
  // }

  const [spaceScale, spacePosition,spaceRotation] = adjustSpceForScreenSize();
  // const [planeScale, planePosition ] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas  
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
        >
          <Suspense fallback={<Loader/>}>
          
            <directionalLight position={[1,1,2]} intensity ={1}/>
            <ambientLight intensity={0.5}/>
            {/* <pointLight /> */}
            {/* <spotLight/> */}
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"/>

            {/* <Bird/>  */}
            <Sky/>
            <Space 
              position={spacePosition}
              scale={spaceScale} 
              rotation={spaceRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
            {/* <Plane 
              isRotating ={isRotating}
              planeScale ={planeScale}
              planePosition={planePosition}
              rotation = {[0,20,0]}
            /> */}
          </Suspense>

      </Canvas>
    </section>
  )
}

export default Home
