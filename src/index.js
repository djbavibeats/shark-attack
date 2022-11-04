import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas 
        shadows
        camera={{
            position: [ 0, 0, 7 ],
            fov: 30
        }}
    >
        <Experience />
    </Canvas>
)