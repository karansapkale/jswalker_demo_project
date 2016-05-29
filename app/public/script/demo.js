function demo(){
}var demo_obj = new demo();


$(document).ready(function(){

	
	/*Enable socket*/
	jswalker_obj.booster({active:true},function(socket_op){
		console.log('Booster activate');
		socket_op.jswalker.prototype.group_proto=function(pick,notifier){
			console.log(pick);
		};
	});

	
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
					console.log(fail_op.status.info);
				}
		 });
	/*Socket*/


	/*Wire*/
		
		jswalker_obj.wire({url:"/demo/select_data",ziel:{a:1,hi:{test:"Test value"}},
				success:function(success_op){
					var ziel=success_op.ziel;
					console.log(success_op);
				},
				fail:function(fail_op){
					console.log(fail_op);
				}
		 });

		jswalker_obj.booster({model:"demo",method:"test_model",ziel:{a:1,hi:{test:"Test value"}},
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
