/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxImage
 *
 * Encapsulates the URL, width, height, x and y of an image.
 *
 * Constructor: mxImage
 *
 * Constructs a new image.
 */
function mxImage(src, width, height, x, y) {
  this.src = src;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
}

/**
 * Variable: src
 *
 * String that specifies the URL of the image.
 */
mxImage.prototype.src = null;

/**
 * Variable: width
 *
 * Integer that specifies the width of the image.
 */
mxImage.prototype.width = null;

/**
 * Variable: height
 *
 * Integer that specifies the height of the image.
 */
mxImage.prototype.height = null;

/**
 * Variable: x
 *
 * Integer that specifies the x of the image.
 */
mxImage.prototype.x = 0;

/**
 * Variable: y
 *
 * Integer that specifies the y of the image.
 */
mxImage.prototype.y = 0;
