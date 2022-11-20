




const canvasContainer = document.querySelector('#canvascontainer');
const scene = new THREE.Scene();
let aspectratio = canvasContainer.offsetWidth/canvasContainer.offsetHeight;
const camera = new THREE.PerspectiveCamera(75,aspectratio,0.1,100);
const renderer = new THREE.WebGLRenderer({
    antialias : true,
    canvas : document.querySelector('canvas')
})





renderer.setSize(canvasContainer.offsetWidth,canvasContainer.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio)



const geometry = new THREE.SphereGeometry(5,50,50);
const material = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('./img/globe.jpeg')});
const sphere = new THREE.Mesh(geometry,material);

scene.add(sphere);

camera.position.z = 10;


const group = new THREE.Group()
group.add(sphere)
scene.add(group)



const mouse = {
    x : undefined,
    y : undefined
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    sphere.rotation.y += 0.002


    gsap.to(group.rotation,{
        x:-mouse.y * 0.5,
        y:mouse.x * 0.5,
        duration : 0.2
    })
}
animate();


addEventListener('mousemove', ()=>{
    mouse.x = (window.event.clientX/ innerWidth) * 2 - 1
    mouse.y = -(window.event.clientY/innerHeight) * 2 + 1
    console.log(mouse)
})


