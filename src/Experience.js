import { 
    OrbitControls,
    Environment,
    Sky,
    ContactShadows
} from '@react-three/drei'
import { Suspense } from 'react'
import Shark from './components/Shark'

const sparkles = {
    count: 100,
    speed: 0.3,
    opacity: 1,
    color: 'red',
    size: 5,
    scale: 0.75,
    noise: 1
}

export default function Experience() {
    return (<>
        <OrbitControls 
            minPolarAngle={ Math.PI / 2.5 }
            maxPolarAngle={ Math.PI / 2.55 }
            enableZoom={false}
            enablePan={false}
        />
        <Environment preset="dawn" color="#c90225" background={true} blur={1} />
        {/* <directionalLight position={ [ 0, 2, 3 ] } intensity={ 0.5 } /> */}
        <ambientLight intensity={ 0.5 } color="#c90225" />
        <Sky color="#c90225" distance={10} sunPosition={[0, 4, 0]} inclination={0} azimuth={0.25} />
        <Suspense fallback={null}>
            <Shark scale={ 0.75 } modelName="green-shark"
                sparkle="#c90225"
                floatFactor={ Math.random() }
            />   
            <Shark scale={ 0.75 } modelName="blue-shark"
                sparkle="#c90225"
                floatFactor={ Math.random() }
            />   
            <Shark scale={ 0.75 } modelName="purple-shark"
                sparkle="#c90225"
                floatFactor={ Math.random() }
            />
            <Shark scale={ 0.75 }  modelName="red-shark"
                sparkle="#c90225"
                floatFactor={ Math.random() }
            />
            <Shark scale={ 0.75 }  modelName="yellow-shark"
                sparkle="#c90225"
                floatFactor={ Math.random() }
            />
        </Suspense>
        {/* <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} /> */}
        <mesh rotation-x={ Math.PI * -.5 } position-y={-2} scale={[ 10, 10 ]}>
            <planeGeometry  />
        </mesh>
        {/* <directionalLight useHelper position={[ 0, 5, 0 ]} color="darkblue"  intensity={ 2.5 }/> */}
        {/* <Reflector resolution={ 512 } args={[50, 50]} position-z="-2.76" /> */}
    </>)
}