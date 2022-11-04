import { Sparkles } from "@react-three/drei"

export default function Sphere({ size, amount, color, emissive, ...props })
{
    console.log(props)
    return (<mesh {...props}>
        <sphereGeometry args={[ size, 64, 64 ]} />
        <meshPhysicalMaterial 
            roughness={ 0 } 
            color={ color } 
            emissive={ emissive || color } 
            envMapIntensity={ 0.2 }
        />
        <Sparkles
            count={ amount }
            scale={ size * 2 }
            size={ 6 }
            speed={ 0.4 }
        />
    </mesh>)
}