import { useTweaks } from 'use-tweaks'

const SphereTest = () => {
	const { speed, factor } = useTweaks({
		speed: 1,
		factor: { value: 1, min: 10, max: 100 },
	})
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
