import * as three from 'three';
import { useTheme } from 'next-themes'

const getConeColor = (theme: string) => {
    const themes: {[key: string]: string} = {
        'light': '#000000',
        'dark': '#ffffff',
        'system': '#000000'
    }
    return themes[theme]
}

export const renderCone = (theme: string) => {

    const scene = new three.Scene();

    function animate(time: number) {

        // mesh.rotation.x = time / 2000;
        mesh.rotation.y = time / 1000;

        renderer.render(scene, camera);

    }

    //create the tetrahedron 
    const geometry = new three.ConeGeometry(10, 20, 3)
    const material = new three.LineBasicMaterial({
        color: getConeColor(theme)
    });

    //Mesh
    const mesh = new three.Mesh(geometry, material)
    scene.add(mesh)

    //Light
    const light = new three.AmbientLight(0xffffff, 1)
    light.position.set(0, 10, 10)
    scene.add(light)

    //Camera
    const camera = new three.PerspectiveCamera(45, 800 / 600)
    camera.position.z = 40
    scene.add(camera)

    //Renderer
    const canvas = document.querySelector("#cone") as HTMLElement;
    const renderer = new three.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(400, 300)
    renderer.setAnimationLoop(animate);
    renderer.render(scene, camera)
}

