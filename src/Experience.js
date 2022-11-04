import { OrbitControls, Environment } from '@react-three/drei'
import Shark from './components/Shark'
import sharks from './utils/sharks'

// import Sphere from './components/Sphere'
// import spheres from './utils/spheres'

export default function Experience() {
    return (<>
        {/* CONTROLS */}
        <OrbitControls minPolarAngle={ Math.PI / 2.5 } maxPolarAngle={ Math.PI / 2.55 } enableZoom={ false } enablePan={ false } />

        {/* ENVIRONMENT */}
        <Environment preset="dawn" background={ false } />

        {/* LIGHTS */}
        <ambientLight intensity={ 0.5 } color="#c90225" />
        <directionalLight position={ [ 0, 2, 3 ] } intensity={ 0.5 } />
        <directionalLight useHelper position={[ 0, 5, 0 ]} color="darkblue"  intensity={ 2.5 }/>
        
        {/* SHARKS */}
        { sharks.map(({ color, sparkle, floatFactor }, index) => {
                return <Shark key={ index } scale={ 0.75 } modelName={ color } sparkle={ sparkle } floatFactor={ floatFactor } />                
        }) }

        {/* SPHERES */}
        {/* { spheres.map(({ size, amount, color, emissive, position }, index) => {
            return <Sphere key={ index } size={ size } amount={ amount } color={ color } emissive={ emissive } position={ position } />
        })} */}
       
    </>)
}