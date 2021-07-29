module.exports = function toAspectRatio(manipulate, width, height, toWidth, toHeight) {
  if(validate(width, height, toWidth, toHeight)) {
    if(manipulate === 'height') {
      let newWidthRatio = width / toWidth;
      let newHeightRatio = height / toHeight;
      height = (newWidthRatio / newHeightRatio) * height;
      console.log(`Aspect ratio: ${toWidth}:${toHeight}\n${width}x${height} `)
    } else if (manipulate === 'width') {
      let newWidthRatio = width / toWidth;
      let newHeightRatio = height / toHeight;
      width = (newHeightRatio / newWidthRatio) * width;
      console.log(`Aspect ratio: ${toWidth}:${toHeight}\n${width}x${height} `)
    } 
  } else {
    console.error('Make sure to fill all fields correctly.');
  }
}

function validate(width, height, toWidth, toHeight) {
  return [width, height, toWidth, toHeight]
  .map((v) => {
    if(Number.isInteger(parseFloat(v)) && v) return true
    else return false 
  }).every((v) => v)  
}









