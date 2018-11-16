var elements = document.getElementByTagName('*')

// for (var i = 0; i < elements.length; i++) {
// 	var element = elements[i];

// 	for (var j = 0; j < element.childNodes.length; j++) {
// 		var node = element.childNodes[j];

// 		if (node.nodeType === 3) { // text
// 			var text = node.nodeValue;
// 			var replacedText = text.replace(/she/gi, 'they');

// 			console.log("replaced text", replacedText);

// 			if (replacedText !== text) {
// 				element.replaceChild(document.createTextNode(replacedText), node);
// 			}
// 		}
// 	}
// }