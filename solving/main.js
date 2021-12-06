let scene
let camera
let renderer
let mouse = {x: 0, y: 0}
let controls
let material
let ambientLight
let directionalLight


let clock = new THREE.Clock();


let cube


init()
animate()

function init(){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(90, window.innerWidth / (window.innerHeight), 0.1, 1000);

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, (window.innerHeight));
	renderer.outputEncoding = THREE.sRGBEncoding;
	document.getElementById("webgl").appendChild(renderer.domElement);

	material = new THREE.MeshBasicMaterial({color:0xffff00});
	material = new THREE.MeshLambertMaterial({color:0xffff00});

	camera.position.z = 5;
	
	ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

	directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
	directionalLight.position.set(1,2,0.5)
	
	pointLight = new THREE.DirectionalLight(0xffffff, 0.5, 1, 100);
	
  scene.add(ambientLight);
  scene.add(directionalLight);
  scene.add(pointLight);
	
	controls = new THREE.OrbitControls(camera, renderer.domElement)
	controls.rotateSpeed = 0.5

  cube = new Cube()

  resetScene()
  
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
}
function keyUp(event){
  let key = event.which || event.keyCode
	keys[key] = false
}
plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);

function animate(){
  // resetScene()
  let delta = clock.getDelta()
  requestAnimationFrame(animate); 
  
  controls.update()
  renderer.render(scene, camera);
}
function resetScene(){
  //scene = new THREE.Scene();
  scene.remove.apply(scene, scene.children);
  scene.add(ambientLight);
  scene.add(directionalLight);
  scene.add(pointLight);
  renderCube(cube)
}



function keyDown(event){
  const key = event.key
  switch(key){
    case "e":
      cube.rotate("left", 3)
      break
    case "d":
      cube.rotate("left", 1)
      break
    case "i":
      cube.rotate("right", 1)
      break
    case "k":
      cube.rotate("right", 3)
      break
    case "f":
      cube.rotate("up", 3)
      break
    case "j":
      cube.rotate("up", 1)
      break
    case "g":
      cube.rotate("front", 3)
      break
    case "h":
      cube.rotate("front", 1)
      break
    case "s":
      cube.rotate("down", 1)
      break
    case "l":
      cube.rotate("down", 3)
      break
    case "w":
      cube.rotate("back", 1)
      break
    case "o":
      cube.rotate("back", 3)
      break
  }
  resetScene()
}

window.addEventListener("resize", onWindowResize, false)
document.onkeydown = keyDown;
