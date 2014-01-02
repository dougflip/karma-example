function EchoClient(){}
EchoClient.prototype.echo = function(text){
	return text;
}
	
define([], function(){
	return EchoClient;
});
