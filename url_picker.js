
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

  /* Listen for message from the popup */
  chrome.runtime.onMessage.addListener(function(msg, sender, response) {
      /* First, validate the message's structure */
      if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
		  alert("In if condn");
          /* Collect the necessary data 
           * (For your specific requirements `document.querySelectorAll(...)`
           *  should be equivalent to jquery's `$(...)`) */
          var domInfo = {
              // total:   document.querySelectorAll('*').length,
//               inputs:  document.querySelectorAll('input').length,
//               buttons: document.querySelectorAll('button').length
			  test: 4
          };
          /* Directly respond to the sender (popup), 
           * through the specified callback */
          response(domInfo);
      }
  });
