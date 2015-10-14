
var serverHost = "http://localhost:3000";

chrome.extension.onRequest.addListener(function(request, sender) 
{
	console.log("Background script has received a text from contentscript:'" + request.message + "'");
	
	var jax = new XMLHttpRequest();
	jax.open("POST", serverHost+'/submit_text.json', true);
	jax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	jax.send("text="+request.message);
	jax.onreadystatechange = function() { if(jax.readyState==4) { 
		json = jax.responseText
		obj = JSON.parse(json); 
		returnMessage(obj.message);
	}
  }
	
	
});

function returnMessage(messageToReturn)
{
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendMessage(tab.id, {message: messageToReturn});
	});
}
