var text = require('./hello');
require('style-loader!css-loader!./index.css');
document.write(text);
document.body.appendChild(document.createElement('div'));