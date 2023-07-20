const SphereTest = () => {
	return (
		<>
			<mesh>
				<sphereGeometry args={[0.3, 32, 64]} />
				<meshBasicMaterial color='red' />
			</mesh>
		</>
	)
}

export default SphereTest
