import { useTweaks } from 'use-tweaks'

const SphereTest = () => {
	const { radius, segments } = useTweaks({
		radius: { value: 0.3, min: 0.1, max: 10 },
		segments: { value: 32, min: 1, max: 200 },
	})
	return (
		<>
			<mesh>
				<sphereGeometry args={[radius, segments, 2 * segmen]} />
				<meshBasicMaterial color='red' />
			</mesh>
		</>
	)
}

export default SphereTest
