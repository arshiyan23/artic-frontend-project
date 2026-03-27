<!-- components/Globe.vue -->
<template>
  <div>
    <div class="mainGlobeWrapper">
      <div class="globeWrapper">
        <div ref="container" id="globeViz">
        </div>
      </div>
    </div>
  </div>

    <!-- <UButton label="Open" @click="isOpen = true" /> -->
    
    
  <!-- <UModal v-model="isOpen" class="globeModal" prevent-close>
      <div class="p-4">
        <div class="popupglob">
          <div class="flex items-center justify-between">
        <h1 class="fs-4 text-primary">{{ selectedMapData.name }}</h1>
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
      </div>
        <p>{{ selectedMapData.city }}, {{ selectedMapData.country }}</p>
        <p>{{ selectedMapData.lat }} , {{ selectedMapData.long }}</p>
        <a :href="selectedMapData.website?.uri" target="_blank" class="fs-6">Visit Website</a>
        </div>
      </div>
    </UModal> -->
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as THREE from 'three';
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import {RGBELoader } from "three/addons/loaders/RGBELoader.js";
  import { render } from 'vue';

  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

const isOpen = ref(false)
const selectedMapData =ref();
let clickedMarkerData:any;
const props = defineProps<Props>();
  interface Props {
    markersData: {
      type: Array
    }
}
const emit = defineEmits(['selectedMapData1']);

  
// const props =defineProps({
//   markersData: {
//       type: Array
//     }
// });

// if (process.client) {
// let winheight=window.innerHeight;
// let winWidth=window.innerWidth;
// alert(winheight+'='+winWidth);
// }
const container = ref(null);
let scene:any,camera:any , renderer:any ,controls :any, globe:any,markerMesh:any;
let markerGreen:any, markerBlack:any , envMapLoader : any;
let raycaster = new THREE.Raycaster(),mouse = new THREE.Vector2(),SELECTED:any;
let markerStore: any[] = [];

onMounted(() => {
  // Target the globe element
  const globe = document.querySelector(".gsapGlobe");

  // Check for passive event listener support
  let supportsPassive = false;
  try {
    const options = {
      get passive() {
        supportsPassive = true;
        return false;
      }
    };
    window.addEventListener("testPassive", null as any, options);
    window.removeEventListener("testPassive", null as any, options);
  } catch (e) {}

  loadingScene();

  // Define the options object based on passive support
  const passiveOption: AddEventListenerOptions | boolean = supportsPassive
    ? { passive: false }
    : false;

  // Add event listeners only for the globe rendering area
  if (globe) {
    globe.addEventListener('touchmove', (event: TouchEvent) => {
      if (event.target === globe) {
        event.preventDefault(); // Prevent default touch behavior only within the globe area
      }
    }, passiveOption as AddEventListenerOptions);

    globe.addEventListener('wheel', (event: WheelEvent) => {
      if (event.target === globe) {
        event.preventDefault(); // Prevent default scroll behavior only within the globe area
      }
    }, passiveOption as AddEventListenerOptions);
  }

  // Pointer down event to start interactions
  renderer.domElement.addEventListener('pointerdown', onDocumentMouseDown, true);
});

async function loadingScene() {
    await createScene();
    await createLight();
    await loadControls();
    await createGlobe();
    await loadMarkers();
    await animate();
    onWindowResize();

}
const createScene = async()=>{
  scene  = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
  if(window.innerWidth < 500){
  camera.zoom=1.5
  camera = new THREE.PerspectiveCamera(96, window.innerWidth / window.innerHeight, 0.1, 600);
  camera.setViewOffset( window.innerWidth , window.innerHeight,0 ,-30,window.innerWidth ,window.innerHeight );
  camera.position.z = 12; // for larger sizes it should increase
  }else if(window.innerWidth < 789){
  camera.zoom=1.5
  camera = new THREE.PerspectiveCamera(69, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.setViewOffset( window.innerWidth , window.innerHeight,0 ,-150,window.innerWidth ,window.innerHeight );
  camera.position.z = 12; // for larger sizes it should increase
  }else if(window.innerWidth < 1033){
  camera.zoom=1.2
  camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.setViewOffset( window.innerWidth , window.innerHeight,0 ,-150,window.innerWidth ,window.innerHeight );
  camera.position.z = 12; // for larger sizes it should increase
}else if(window.innerWidth < 1280){
  camera.zoom=1.2
  camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.setViewOffset( window.innerWidth , window.innerHeight,0 ,-100,window.innerWidth ,window.innerHeight );
  camera.position.z = 12; // for larger sizes it should increase
}else if(window.innerWidth < 1480){
  camera.zoom=1.2
  camera = new THREE.PerspectiveCamera(35.5, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.setViewOffset( window.innerWidth , window.innerHeight,0 ,-200,window.innerWidth ,window.innerHeight );
  camera.position.z = 12; // for larger sizes it should increase
}else if(window.innerWidth < 1800){
  camera.zoom=1.2
  camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.setViewOffset( window.innerWidth , window.innerHeight,0 ,-230,window.innerWidth ,window.innerHeight );
  camera.position.z = 12; // for larger sizes it should increase
}else if(window.innerWidth < 2560){
  camera.zoom=1.2
  camera = new THREE.PerspectiveCamera(38.5, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.setViewOffset( window.innerWidth , window.innerHeight,0 ,-180,window.innerWidth ,window.innerHeight );
  camera.position.z = 12; // for larger sizes it should increase
}else {
  camera.zoom=1.5
  camera.position.z = 15;
  camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.setViewOffset( window.innerWidth , window.innerHeight,0 ,-220,window.innerWidth ,window.innerHeight );
 

  }
  
  camera.position.y = 0;
  renderer = new THREE.WebGLRenderer({antialias: false});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0xEBF0F8); 
  // renderer.outputEncoding = THREE.sRGBEncoding;
  // renderer.toneMapping    = THREE.ACESFilmicToneMapping;
  // renderer.toneMappingExposure = 1.25;
  container.value.appendChild(renderer.domElement);
  envMapLoader = new THREE.PMREMGenerator(renderer);
}
const loadControls = async () => {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.02;
  controls.enablePan = false;
  controls.enableZoom=false;
  controls.target = new THREE.Vector3(0, 0, 0);
  controls.maxPolarAngle = 60/50;
  controls.minPolarAngle = 56/58;
  controls.minDistance = 12; 
  if(window.innerWidth < 500){
  // alert(window.innerWidth);
  controls.target = new THREE.Vector3(0, -1, 0);// for smaller should be decrease
   controls.maxDistance = 12;
  }else if(window.innerWidth < 768){
   // alert(window.innerWidth);
  controls.target = new THREE.Vector3(0, 0, 0);// for smaller should be decrease
  controls.maxDistance = 8;
  }else if(window.innerWidth < 1033){
   // alert(window.innerWidth);
  controls.target = new THREE.Vector3(0, 0, 0);// for smaller should be decrease
  controls.maxDistance = 8;
}else if(window.innerWidth < 1280){
   // alert(window.innerWidth);
  controls.target = new THREE.Vector3(0, 0, 0);// for smaller should be decrease
  controls.maxDistance = 8;
} else if(window.innerWidth < 1480){
   // alert(window.innerWidth);
  controls.target = new THREE.Vector3(0, 0, 0);// for smaller should be decrease
  controls.maxDistance = 8;
   }
   else if(window.innerWidth < 1800){
   // alert(window.innerWidth);
  controls.target = new THREE.Vector3(0, 0, 0);// for smaller should be decrease
  controls.maxDistance = 8;
   }
   else if(window.innerWidth < 2560){
   // alert(window.innerWidth);
  controls.target = new THREE.Vector3(0, 0, 0);// for smaller should be decrease
  controls.maxDistance = 8;
   }
   else{
   controls.target = new THREE.Vector3(0, 0, 0);
   controls.maxDistance = 12
   }
}
const testGlobe = async () => {
  var cubeTextureLoader = new THREE.CubeTextureLoader();
  var cubeMap = cubeTextureLoader.load([
    '/00/nx.jpg',
    '/00/ny.jpg',
    '/00/nz.jpg',
    '/00/px.jpg',
    '/00/py.jpg',
    '/00/pz.jpg',

    // '03/right.webp', // Right
    // '03/left.webp', // Left
    // '03/top.webp', // Top
    // '03/bottom.webp', // Bottom
    // '03/front.webp', // Front
    // '03/back.webp'  // Back
]);
  var textureUrls = [
      '03/right.webp', // Right
     '03/left.webp', // Left
      '03/top.webp', // Top
     '03/bottom.webp', // Bottom
     '03/front.webp', // Front
     '03/back.webp'  // Back
];
  var materials = [];
  for (var i = 0; i < textureUrls.length; i++) {
      var texture = new THREE.TextureLoader().load(textureUrls[i]);
      var material = new THREE.MeshBasicMaterial({ map: texture });
      materials.push(material);
  }
// Create a sphere geometry
var geometry = new THREE.SphereGeometry(1, 32, 32);
// Adjust UVs to apply different textures to each face
geometry.faceVertexUvs[0][1][0].set(0.5, 0);
geometry.faceVertexUvs[0][1][1].set(0, 1);
geometry.faceVertexUvs[0][1][2].set(1, 1);
geometry.faceVertexUvs[0][3][0].set(0.5, 1);
geometry.faceVertexUvs[0][3][1].set(1, 1);
geometry.faceVertexUvs[0][3][2].set(0, 0);
var material = materials;
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

/*
// Create a cube geometry
var geometry = new THREE.BoxGeometry(4, 4, 4);
var material = materials;
var cube = new THREE.Mesh(geometry, material);
scene.add(cube); */
}
const createGlobe = async () => {
  new RGBELoader().setPath('/').load('studio_small_08_1k.hdr',function(hdriMap : any){
    let envMapTex = envMapLoader.fromCubemap(hdriMap);
    const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load('/earth_texture_04.jpg');
    textureLoader.load('/earth_texture_04.jpg',(texture:any)=>{
      const earthMaterial = {
      // clearCoat:1.0,
      // clearCoatRoughness:0.5,
      metalness:0.9,
      roughness : 0.5,
      color:0xe0e0e0,
      map: texture,
      envMap : envMapTex.texture,
      envMapIntensity : .5
    }
    const geometry = new THREE.SphereGeometry(5, 32, 32);  
    const material = new THREE.MeshPhysicalMaterial(earthMaterial);
    globe = new THREE.Mesh(geometry, material);
    globe.rotation.y = Math.PI /1;
    scene.add(globe);
    })
  })
}
const loadMarkers = async () => {
  markerGreen = new THREE.TextureLoader().load('/green.svg');
  markerBlack = new THREE.TextureLoader().load('/black.svg');
  let sGeo = new THREE.SphereGeometry(.2, 32, 32); 
  let sMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  markerMesh = new THREE.Mesh(sGeo, sMat);
  scene.add(markerMesh);
  props.markersData.forEach((element: { field_latitude: any; field_longitude: any; field_city_name: any; }) => {
    let marker = createMarker(element.field_latitude, element.field_longitude, element.field_city_name); // Red marker
    markerMesh.add(marker);
  });
}
const animate = () => {
  requestAnimationFrame(animate);
  controls?.update();
  renderer.render(scene, camera);

  if (globe) {
    globe.rotation.y += .0004;
  }

  if (markerMesh) {
    markerMesh.rotation.y += .0004;
  }
}
// const preventScroll = (event: { preventDefault: () => void; }) => {   event.preventDefault(); };
const shouldPreventScroll = (event: { target: any; }) => {
  const targetElement = event.target;
  // Prevent scroll on the globe but allow it elsewhere
  return targetElement.id === 'globeViz';
};
let onDocumentMouseDown = (event: { preventDefault: () => void; clientX: number; clientY: number; }) =>{
  event.preventDefault();
  const rect = renderer.domElement.getBoundingClientRect();     
  mouse.x = ( ( event.clientX - rect.left ) / ( rect.right - rect.left ) ) * 2 - 1;
  mouse.y = - ( ( event.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;
  raycaster.setFromCamera( mouse, camera );
  let intersects = raycaster.intersectObjects( markerStore,true );
  if ( intersects.length > 0 ) {	 
    SELECTED = intersects[ 0 ].object;
    // SELECTED.material.map = markerBlack;
    SELECTED.material.needsUpdate = true;	
    scene.traverse((child:any)=>{
      if(child.type === "Sprite"){
        if(child.name !== SELECTED.name){
          child.material.map = markerGreen;
          child.material.needsUpdate = true;
          // data = SELECTED.name;
          // data=SELECTED.name;
          isOpen.value=true;
          
          // emit("isVisible",isOpen.value)
        }
      }
    })
  clickedMarkerData = props.markersData.filter((e: { field_city_name: any; }) => e.field_city_name === SELECTED.name).map((e: { field_latitude: any; field_longitude: any; field_city_name: any; field_country: any; field_website_link: any; field_property_name: any; field_image: { field_media_image: { image_style_uri: { map_image: any; }; meta: { alt: any; }; }; }; }) => { return {id:props.markersData.indexOf(e),lat: e.field_latitude,long: e.field_longitude, city:e.field_city_name, country:e.field_country,website:e.field_website_link,name:e.field_property_name,image_url:e.field_image.field_media_image.image_style_uri.map_image,image_alt:e.field_image.field_media_image.meta.alt}});
        selectedMapData.value=clickedMarkerData[0];
        emit("selectedMapData1",selectedMapData.value)
        
  }
}
const createMarker = (latitude:any, longitude:any, name:any) => {
  let markerMaterial = new THREE.SpriteMaterial({
    map: markerGreen,
  });

  let marker = new THREE.Sprite(markerMaterial);
      marker.scale.set(.25, .25, .1);
      if(window.innerWidth < 500){
        marker.scale.set(.32, .32, .1);
      }else {
        marker.scale.set(.25, .25, .1);
      } 
      marker.name = name;
  let phi = (90 - latitude) * Math.PI / 180;
  let theta = (180 - longitude) * Math.PI / 180;
      marker.position.x = 5.01 * Math.sin(phi) * Math.cos(theta);
      marker.position.y = 5.15 * Math.cos(phi);
      marker.position.z = 5 * Math.sin(phi) * Math.sin(theta);
      markerStore.push(marker);
      return marker;
}
const createLight = async() => {
  const light = new THREE.AmbientLight( 0xffffff,4 ); // soft white light
  scene.add( light );
}
const onWindowResize = () => {
  const container = document.getElementById('globe-container');
  if (container) {
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
};
// Debounce function
const debounce = (fn: { apply: (arg0: any, arg1: any[]) => void; }, delay: number | undefined) => {
  let timeoutId: string | number | NodeJS.Timeout | undefined;
  return function(...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
</script>
<style scoped>
#globeViz {
  overflow: hidden; /* Ensure proper overflow settings */
}

.mainGlobeWrapper {height: 700px; overflow: hidden;   -webkit-overflow-scrolling: touch; /* For smoother scrolling on iOS */ }
.globeWrapper #globeViz { z-index: 1000; width:100%;   display: flex; justify-content: center; /* Prevent touch actions on the canvas */}

canvas {
    width: calc(100vw - 1%) !important;
    height: calc(100% - 100px) !important;
    margin: 0 auto;
    /* width: 500px; */
    /* height: 500px; */
    position: relative;
    left: 0;
    top: -38px;
    right: 0;
    z-index: 1000;
    object-fit: cover;
    touch-action: auto!important;
}

  
  #popup{ height:200px;   width:200px;  background-color:#ffff00; }

  @media (min-width: 2048.99px) and (max-width: 3840000.99px) {.mainGlobeWrapper {height: 57rem  !important; max-height: 37.99vw !important;}}
  @media (max-width: 1920.99px) {.mainGlobeWrapper { height: 40rem  !important;}}
  @media (max-width: 1480.99px) { .mainGlobeWrapper { height: 564px !important; overflow: hidden; width: 100%;margin: 0 auto;}}

@media (max-width: 1031.99px) {
  .mainGlobeWrapper { height: 70vh !important;    overflow: hidden;  width: 100%;    margin-top: -290px;}
  #globalPresense .globpopup { display: flex;    flex-wrap: wrap-reverse;}
  #globalPresense .globpopup .img-popup {margin-bottom: 20px;}
}

@media (max-width: 810px) {

.mainGlobeWrapper {
  height: 68vh !important;
  overflow: hidden;
  width: 100%;
  margin-top: -286px !important;
}

}

  @media (max-width: 768.99px) {
    .globalPresense {
    padding: 20px 0;
}
   .mainGlobeWrapper {
    height: 68vh !important;
    overflow: hidden;
    width: 100%;
    margin-top: -275px!important;
}
    canvas {
    width: calc(100% - 1%) !important;
    height: calc(77vh - 100px) !important;
    margin: 0 auto;
    position: relative;
    left: 0;
    top: 0px;
    right: 0;
    z-index: 1000;
    touch-action: auto!important;
}
}
@media (max-width: 500.99px) {

  .globeModal a {
    text-decoration: underline;
    border: 0px;
    font-size: 12px !important;
}
.globalPresense p {
    
    font-size: 12px !important;
}
.popup-content h1 {
    
    font-size: 21px !important;
}

.globpopup .nextpreviousbutton button img{
    width: 12px;
}
.globpopup .nextpreviousbutton {
    margin-top: 30px;
}
  .globalPresense {
    padding: 20px 0;
}
   .mainGlobeWrapper {
    height: 50vh !important;
        overflow: hidden;
        width: 100%;
        margin-top: -166px !important;
    
}

}

</style>