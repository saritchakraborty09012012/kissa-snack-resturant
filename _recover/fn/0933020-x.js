function x(t) {
  return t.isWebGLCubeRenderTarget
    ? e.TEXTURE_CUBE_MAP
    : t.isWebGL3DRenderTarget
      ? e.TEXTURE_3D
      : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture
        ? e.TEXTURE_2D_ARRAY
        : e.TEXTURE_2D
}
