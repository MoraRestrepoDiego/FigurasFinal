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
const matcap = TextureLoader.load("/imagenes/img4.jpg");

const geometry = new THREE.SphereGeometry( 15, 32, 16 );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flashading = true;
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z =50;
camera.position.y =0;
camera.position.x =0;

//animación
function animate() {
	requestAnimationFrame( animate );
	sphere.rotation.y += 0.01;
	renderer.render( scene, camera );
	line.rotation.y += 0.01;
}
animate();