define(['echo_client'], function(EchoClient){
	describe("Functions", function(){
		var echoClient;
		
		beforeEach(function(){
			echoClient = new EchoClient();
		})

		it("should provide an echo function", function(){
			result = echoClient.echo("testing")
			expect(result).toBe("testing");
		})
	});
});
