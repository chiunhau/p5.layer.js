### Usage
```html
<head>
	<script src="p5.js"></script>
	<script src="p5.layer.js"></script>
	<script>
		//sketch...
	</script>
</head>
```

### Example

```js
//With p5.layer

function setup() {
	createCanvas(500, 500);
	enableLayer()
}

function draw() {
	clear();
	ellipseLayer(100, 100, 50, 50, 'ellipse1');
}

function mouseClicked() {
	layer('ellipse1').w += 10;
	layer('ellipse1').h += 10;
}

```
```js
//Without p5.layer

function setup() {
	createCanvas(500, 500);
}

function draw() {
	clear();
	ellipse1.draw();
}

function mouseClicked() {
	ellipse1.w += 10;
	ellipse1.h += 10;
}


var MyEllipse = function(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.draw = function() {
		ellipse(this.x, this.y, this.w, this.h);
	}
}

var ellipse1 = new MyEllipse(100, 100, 50, 50);
```
