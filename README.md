[![Build Status](https://travis-ci.org/wearefractal/rover.png?branch=master)](https://travis-ci.org/wearefractal/rover)

[![NPM version](https://badge.fury.io/js/rover.png)](http://badge.fury.io/js/rover)

## Information

<table>
<tr> 
<td>Package</td><td>rover</td>
</tr>
<tr>
<td>Description</td>
<td>A node.js client for controlling BrookStone Rover 2.0s</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>

![rover](http://www.brookstone.com/webassets/product_images/300x300/792593.jpg)

## Slideshow explaining this

http://slid.es/contra/rover

## Usage

```javascript
var rover = require('rover');
var async = require('async');

var client = rover.createClient();

client.forward(cb);
client.backward(cb);
client.right(cb);
client.left(cb);

client.cameraUp(30, cb); // 30 deg up
client.cameraDown(30, cb); // 30 deg down
```

## CLI

Make sure you are connected to the rover WiFi before starting this.

```
sudo npm install rover -g
rover

w - forward
a - left
s - backward
d - right
arrow up - camera up
arrow down - camera down
<space> - stop
```

## Examples

You can view more examples in the [example folder.](https://github.com/wearefractal/rover/tree/master/examples)

## LICENSE

(MIT License)

Copyright (c) 2013 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
