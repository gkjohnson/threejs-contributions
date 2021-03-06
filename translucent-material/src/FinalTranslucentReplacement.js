import { MeshPhysicalMaterial, LessEqualDepth } from '//unpkg.com/three@0.116.1/build/three.module.js';
import { ShaderReplacement } from '../../shader-replacement/src/ShaderReplacement.js';

export class FinalTranslucentReplacement extends ShaderReplacement {

	createMaterial( object ) {

		return new MeshPhysicalMaterial();

	}

	updateUniforms( object, material, target ) {

		target.color.copy( material.color );
		target.depthWrite = false;
		target.transparent = true;
		target.transparency = 1.0 - ( material.diffusion || 0.0 );
		target.premultipliedAlpha = true;
		target.roughness = material.roughness;
		target.metalness = material.metalness;
		target.depthFunc = LessEqualDepth;
		target.dithering = true;

	}

}
