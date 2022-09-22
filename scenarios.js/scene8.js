//scenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2FD0ED);

//fondo
 var loader = new  THREE.TextureLoader();
 loader.load("../imagenes/starsinthesky.jpg", function(texture){
    scene.background = texture;
 });

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry1 = new THREE.CapsuleGeometry( 6, 6, 14, 22 );

const TextureLoader1 = new THREE.TextureLoader();
const matcap1 = TextureLoader1.load("/imagenes/img4.jpg");

const edges1 = new THREE.EdgesGeometry(geometry1);
const line1 = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line1 );

const material = new THREE.MeshNormalMaterial();
material.flashading = true;
const capsule = new THREE.Mesh( geometry1, material );
scene.add( capsule );
capsule.position.x = -45;
line1.position.x = -45;

//geometria

const geometry2 = new THREE.BoxGeometry( 12, 12, 12 );

const TextureLoader2 = new THREE.TextureLoader();
const matcap2 = TextureLoader2.load("/imagenes/img4.jpg");

const edges2 = new THREE.EdgesGeometry(geometry2);
const line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line2 );

const material2 = new THREE.MeshMatcapMaterial();
material2.matcap2 = matcap2;
material2.flashading = true;
const box = new THREE.Mesh( geometry2, material2 );
scene.add(box);
box.position.x = -15;
line2.position.x = -15;


//geometria

const geometry3 = new THREE.SphereGeometry( 10, 32, 16 );

const TextureLoader3 = new THREE.TextureLoader();
const matcap3 = TextureLoader3.load("/imagenes/img4.jpg");

const edges3 = new THREE.EdgesGeometry(geometry3);
const line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line3 );

const material3 = new THREE.MeshMatcapMaterial();
material3.matcap3 = matcap3;
material3.flashading = true;
const sphere = new THREE.Mesh( geometry3 , material3 );
scene.add( sphere );
sphere.position.x = 15;
line3.position.x = 15;

//geometria
const geometry4 = new THREE.TorusKnotGeometry( 5, 3, 44, 12, 12, 11 );

const TextureLoader4 = new THREE.TextureLoader();
const matcap4 = TextureLoader4.load("/imagenes/img4.jpg");

const material4 = new THREE.MeshMatcapMaterial();
const torusKnot = new THREE.Mesh( geometry4 , material4 );
scene.add( torusKnot );

const edges4 = new THREE.EdgesGeometry( geometry4);
const line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line4 );

material4.matcap4 = matcap4;
material4.flashading = true;
scene.add( torusKnot );
torusKnot.position.x = 45;
line4.position.x = 45;

//orbitControls

/* const control = new THREE.OrbitControls(camera, renderer.domElement);
control.minDistance = 5;
control.maxDistance = 10; */

//pointerLockControls

/* const control = new THREE.PointerLockControls(camera, renderer.domElement)
document.getElementById("btnplay").onclick = ( ) => {
	control.lock();
} */

//DragControls.js

const control = new THREE.DragControls([capsule,line1, box, line2, sphere, line3, torusKnot, line4] ,camera, renderer.domElement);//
control.deactivate();
control.activate();

 control.addEventListener("hoveron", function(event){
   // console.log(event.object.material1)
    event.object.material.wireframe = true;
	event.object.scale.y *= 4;
});

control.addEventListener("hoveroff", function(event){
    console.log(event.object.material)
    event.object.material.wireframe = false
	event.object.scale.y /= 4;

}) 


camera.position.z =50;
camera.position.y =0;
camera.position.x =0;

//animación
function animate() {
	requestAnimationFrame( animate );
	capsule.rotation.y += 0.05;
	line1.rotation.y += 0.05;
	box.rotation.y += 0.05;
	line2.rotation.y += 0.05;
	sphere.rotation.y += 0.05;
	line3.rotation.y += 0.05;
	torusKnot.rotation.y += 0.05;
	line4.rotation.y += 0.05;
	renderer.render( scene, camera );
}
animate();