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
function setup() {
	createCanvas(500, 500);
	enableLayer()
}

function draw() {
	ellipseLayer(100, 100, 50, 50, 'myEllipse');
}

function mouseClicked() {
	layer('myEllipse').x += 10;
}

```