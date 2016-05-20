function demo(){

}var demo_obj = new demo();

$(document).ready(function(){

	/*Enable socket*/
	jswalker_obj.booster({active:true},function(socket_op){
		console.log('Booster activate');
		socket_op.jswalker.prototype.hi1=function(pick,notifier){
			alert("Hi1;")
			console.log(pick);
		};
	});


	/*Socket*/
	
		jswalker_obj.booster({model:"demo",method:"test_booster",ziel:{a:0},
				success:function(success_op){
					var ziel=success_op.ziel;
					console.log(ziel);
				},
				fail:function(fail_op){
					console.log(fail_op);
				}
		 });


		jswalker_obj.booster({model:"demo",method:"test_redis",ziel:{a:0},
				success:function(success_op){
					var ziel=success_op.ziel;
					console.log(ziel);
				},
				fail:function(fail_op){
					console.log(fail_op);
				}
		 });
	/*Socket*/


	/*Wire*/
		jswalker_obj.wire({url:"/demo/select_data",ziel:{a:1},type:"POST",
				success:function(success_op){
					var ziel=success_op.ziel;
					console.log(success_op);
				},
				fail:function(fail_op){
					console.log(fail_op);
				}
		 });
	/*Wire*/	

	
});
