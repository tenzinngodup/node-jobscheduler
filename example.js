var test =  require('./index');
test.server({"host":"******"});
test.all().then(function(response){
	console.log(response);
});
test.enable("job2").then(function(response){
	console.log(response);
});

var test2 =  require('./index');
test2.server({"host":"http:test2"});
console.log(test2);
