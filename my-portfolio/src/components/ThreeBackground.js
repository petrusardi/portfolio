// src/components/ThreeBackground.js
import React, { useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const container = document.getElementById('three-background');
    container.appendChild(renderer.domElement);

    // Create gradient background
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradient = context.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
    gradient.addColorStop(0, '#1a202c'); // from-gray-900
    gradient.addColorStop(0.5, '#2d3748'); // via-gray-800
    gradient.addColorStop(1, '#1a202c'); // to-gray-900

    context.fillStyle = gradient;
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    const texture = new THREE.CanvasTexture(canvas);
    const backgroundMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });

    const backgroundGeometry = new THREE.PlaneGeometry(100, 100);
    const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
    backgroundMesh.position.z = -50; // Place it behind the particles
    scene.add(backgroundMesh);

    // Create galaxy effect with particles
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 10;
      positions[i * 3] = radius * Math.cos(angle);
      positions[i * 3 + 1] = radius * Math.sin(angle);
      positions[i * 3 + 2] = Math.random() * 10 - 5;

      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      transparent: true,
      opacity: 0.7
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      const positions = particleSystem.geometry.attributes.position.array;
      const velocities = particleSystem.geometry.attributes.velocity.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];
        
        if (Math.abs(positions[i]) > 20) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 20) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 20) velocities[i + 2] *= -1;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="three-background" className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default ThreeBackground;
