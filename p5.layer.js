// p5.prototype.layers = {};

// p5.prototype.ellipseLayer = function(x, y, w, h, id) {
// 	if (this.layers.hasOwnProperty(id)) {
// 		//if already created
// 		this.layers[id].collide();
// 	}
// 	else {
// 		this.layers[id] = new this._ellipseLayer(x, y, w, h, id, this);
// 	}
// 	var currLayer = this.layers[id];
// 	this._renderer.ellipse(currLayer.x, currLayer.y, currLayer.w, currLayer.h);
// }

// p5.prototype._ellipseLayer = function(x, y, w, h, id, pInst) {
// 	console.log(this);
// 	// this.type = 'ellipse';
// 	// this.x = x;
// 	// this.y = y;
// 	// this.w = w;
// 	// this.h = h;
// 	// this.id = id;
// 	// this.fill = pInst._renderer.drawingContext.fillStyle;
// 	// this.stroke = pInst._renderer.drawingContext.strokeStyle;
// 	// this.collide = function() {
// 	// 	if(collidePointCircle(this.mouseX, this.mouseY, this.x, this.y, this.w/2)) {
// 	// 		console.log("collide!!")
// 	// 	}
// 	// }.bind(this);
// }

// var collidePointCircle = function (x, y, cx, cy, d) {
// 	//2d
// 	if( dist(x,y,cx,cy) <= d/2 ){
// 	  return true;
// 	}
// 	return false;
// };


p5.prototype.enableLayer = function() {
	this._layerManager = new p5.Layer(this);
}

p5.prototype.ellipseLayer = function(x, y, w, h, id) {
	this._layerManager.ellipseLayer(x, y, w, h, id);
}


p5.Layer = function(pInst) {
	this._pInst = pInst;
	this.layers = {};
}

p5.Layer.prototype.ellipseLayer = function(x, y, w, h, id) {
	var newEllipseLayer = new EllipseLayer(x, y, w, h, id);
	newEllipseLayer.fill = this._pInst._renderer.drawingContext.fillStyle;
	newEllipseLayer.stroke = this._pInst._renderer.drawingContext.strokeStyle;

	if (this.layers.hasOwnProperty(id)) {

	}
	else {
		this.layers[id] = newEllipseLayer;
	}
	var currLayer = this.layers[id];
	this._pInst._renderer.ellipse(currLayer.x, currLayer.y, currLayer.w, currLayer.h);
}

var EllipseLayer = function(x, y, w, h, id) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.id = id;
}



