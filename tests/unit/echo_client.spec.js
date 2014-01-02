describe("Functions", function(){
	var echoClient;
	
	beforeEach(function(){
		echoClient = new window.EchoClient();
	})

	it("should provide an echo function", function(){
		result = echoClient.echo("testing")
		expect(result).toBe("testing");
	})
});
