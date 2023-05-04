export const updateCropWithAspectRatio = (crop, image, aspect, cropShape = "rectangle") => {
  let newCrop = { ...crop };

  if (aspect === -1) {
    aspect = image.width / image.height;
  }

  if (cropShape !== 'rectangle') {
    if (cropShape === 'circle') {
      newCrop = {
        ...crop,
        aspect,
        width: Math.min(image.height, image.width),
        height: Math.min(image.height, image.width),
      }
    }
    return newCrop;
  }
  if (aspect > 1.0) {
    if (image.aspectRatio > aspect) {
      newCrop = {
        ...crop,
        height: image.height,
        width: aspect * image.height,
        aspect,
      };
    } else if (image.aspectRatio < aspect) {
      newCrop = {
        ...crop,
        width: image.width,
        height: image.width / aspect,
        aspect,
      }
    } else {
      newCrop = {
        ...crop,
        width: image.width,
        height: image.height,
        aspect,
      }
    }
  } else if (aspect < 1.0) {
    if (image.aspectRatio < aspect) {
      newCrop = {
        ...crop,
        width: image.width,
        height: image.width / aspect,
        aspect,
      }
    } else if (image.aspectRatio > aspect) {
      newCrop = {
        ...crop,
        height: image.height,
        width: aspect * image.height,
        aspect,
      };
    } else {
      newCrop = {
        ...crop,
        width: image.width,
        height: image.height,
        aspect,
      }
    }
  } else {
    newCrop = {
      ...crop,
      width: Math.min(image.height, image.width),
      height: Math.min(image.height, image.width),
      aspect,
    };
  }

  newCrop = { 
    ...newCrop,
    x: 0,
    y: 0,
  }

  return newCrop;
}

export const lockAspectRatio = (crop, prevCrop, image, cropOption) => {
  if (cropOption && cropOption.id === CropOptionMap.FreeForm.id) {
    return crop;
  }

  const MAX_HEIGHT = image.height - crop.y;
  const MAX_WIDTH = image.width - crop.x;

  const prevHeight = prevCrop.height;
  const prevWidth = prevCrop.width;
  const height = Math.min(MAX_HEIGHT, crop.height);
  const width = Math.min(MAX_WIDTH, crop.width);
  const aspect = prevCrop.aspect;

  if (width != prevWidth) {
    const newHeight = width / aspect;
    if (newHeight > MAX_HEIGHT) {
      return {
        ...crop,
        width: prevWidth,
        height: MAX_HEIGHT,
        aspect,
      }
    } else {
      return {
        ...crop,
        height: newHeight,
        aspect,
      }
    }
  } else {
    const newWidth = height * aspect;
    if (newWidth > MAX_WIDTH) {
      return {
        ...crop,
        height: prevHeight,
        width: MAX_WIDTH,
        aspect,
      }
    } else {
      return {
        ...crop,
        width: newWidth,
        aspect,
      }
    }
  }
}