import * as TWEEN from 'tween';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import moonImgTexture from '../../img/src/moon.jpg';

const canvas = document.querySelector('#moon');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true
});

renderer.setClearColor( 0x000000, 0 );

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(60, 80, -30);

scene.add(pointLight);

const moonTexture = new THREE.TextureLoader().load(moonImgTexture);

const controls = new OrbitControls(camera, renderer.domElement);

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(18, 64, 64),
  new THREE.MeshStandardMaterial({
    map: moonTexture
  })
);

moon.position.set(-6, -6, 0);

scene.add(moon);

export function animate() {
  requestAnimationFrame(animate);

  moon.rotation.y += 0.001;

  controls.update();
  TWEEN.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

function onMouseMove(e) {
  const windowX = window.innerWidth;
  const mousePositionX = (-e.clientX / windowX) / 5;
  
  const windowY = window.innerWidth;
  const mousePositionY = (e.clientY / windowY) / 5;

  moon.rotation.x = mousePositionY;
  moon.rotation.z = mousePositionX;
}

window.addEventListener('mousemove', onMouseMove);

function tweenCamera( targetPosition, duration ) {
  const position = new THREE.Vector3().copy( camera.position );

  const tween = new TWEEN.Tween( position )
      .to( targetPosition, duration )
      .easing( TWEEN.Easing.Back.InOut )
      .onUpdate( function () {
          camera.position.copy( position );
          camera.lookAt( controls.target );
      } )
      .onComplete( function () {
          camera.position.copy( targetPosition );
          camera.lookAt( controls.target );
          controls.enabled = true;
      } )
      .start();
}

export function moveCamera(exit) {
  const targetPosition = !!exit ? new THREE.Vector3( -10, -10, -10 ) : new THREE.Vector3( 0, 0, 30 );
  const duration = 5000;

  tweenCamera( targetPosition, duration );
}
