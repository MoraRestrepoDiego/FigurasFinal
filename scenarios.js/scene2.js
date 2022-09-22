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

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material = new THREE.MeshStandardMaterial();
material.metalness = 1;
material.roughness = 0;

const directionalLight = new THREE.DirectionalLight(0xffa600, 1000);

directionalLight.position.set(2,4,1);

scene.add(directionalLight);

/* const ambientlight = new THREE.AmbientLight (0xffffff, 3);
scene.add(ambientlight)

const pointlight = new THREE.PointLight (0xffffff, 3);
scene.add(pointlight)
pointlight.position.set(5,2,2) */

const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z =5;

//animación
function animate() {
	requestAnimationFrame( animate );
	capsule.rotation.x += 0.01;
	renderer.render( scene, camera );
	line.rotation.x += 0.01;
}
animate();