import { useGLTF, Sparkles, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/three'

import * as THREE from 'three'

export default function Shark({ modelName, scale, floatFactor, sparkle })
{
    const model = useGLTF(`./models/${modelName}.glb`)

    const shark = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        // shark.current.rotation.x = THREE.MathUtils.lerp(shark.current.rotation.x, Math.cos(t / 10) / 10 + 0.25)
        shark.current.rotation.x = THREE.MathUtils.lerp(shark.current.rotation.x, Math.cos(t / 10) / 10 + - .25, 0.1)
        shark.current.rotation.y = THREE.MathUtils.lerp(shark.current.rotation.y, Math.sin(t / 10) / 4, 0.1)
        shark.current.rotation.z = THREE.MathUtils.lerp(shark.current.rotation.z, Math.sin(t / 10) / 15, 0.1)
        shark.current.position.y = THREE.MathUtils.lerp(shark.current.position.y, (-6 + Math.sin(t)) / 3, floatFactor) 
    })

    const buttonClick = () => 
    {
        setActive(true)
    }

    return <>   
        <animated.mesh 
            scale={ scale }
            ref={ shark }
            position={ [ 0, 10, 0 ] }
        >
            <primitive object={ model.scene } />
            <Sparkles
                count={ 10 }
                scale={ 3 * 2 }
                size={ 3 }
                speed={ 0.09 }
                color={ sparkle }
                opacity={ 0.95 }
                position-y={ 2.0 }
            />
        </animated.mesh>
    </>
}