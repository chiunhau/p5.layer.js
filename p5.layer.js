p5.prototype.enableLayer = function() {
	this._layerManager = new p5.Layer(this);
}

p5.prototype.ellipseLayer = function(x, y, w, h, id) {
	this._layerManager.ellipseLayer(x, y, w, h, id);
}

p5.prototype.layer = function(id) {
	return this._layerManager.layers[id];
}



p5.Layer = function(pInst) {
	this._pInst = pInst;
	this.layers = {};
}

p5.Layer.prototype.ellipseLayer = function(x, y, w, h, id) {
	var newEllipseLayer = new EllipseLayer(x, y, w, h, id, this._pInst);
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

var EllipseLayer = function(x, y, w, h, id, pInst) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.id = id;
	this._pInst = pInst;
}

// EllipseLayer.prototype.collide = function(x, y) {
// 	return this._pInst.collidePointCircle(x, y, this.x, this.y, this.h);
// }



