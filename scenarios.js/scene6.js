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

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("/imagenes/img2.jpg");

const geometry = new THREE.TorusKnotGeometry( 5.985, 3.3066, 44, 12, 12, 11 );
const material = new THREE.MeshMatcapMaterial();
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

material.matcap = matcap;
material.flashading = true;
scene.add( torusKnot );

camera.position.z =50;

//animación
function animate() {
	requestAnimationFrame( animate );
	torusKnot.rotation.x += 0.01;
	torusKnot.rotation.y += 0.01;
	renderer.render( scene, camera );
	line.rotation.y += 0.01;
	line.rotation.x += 0.01;
}
animate();