
if (window == top) {
	addEventListener('mouseup', sendSelectedText, false);
}

function sendSelectedText(e){
	
	var sel = window.getSelection().toString();
	if(sel != " " && sel.length > 0 ){
		console.log("Submitting the request to store the url =>"+sel);
		chrome.extension.sendRequest({message: sel});
	}
	
}

chrome.runtime.onMessage.addListener(
	function(request, sender) {
		console.log("Extension has received a message from from remote server: '" + request.message + "'");
  });
