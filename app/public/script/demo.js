function demo(){
}var demo_obj = new demo();

function a(){
	 alert("a");
}
$(document).ready(function(){

	
	/*Enable socket*/
	jswalker_obj.booster({active:true},function(socket_op){
		console.log('Booster activate');
		socket_op.jswalker.prototype.group_proto=function(pick,notifier){
			console.log(pick);
		};
	});



// console.log(blob);
//  var worker = new Worker(URL.createObjectURL(dot_obj.worker_block['loop_worker']));  

// worker.onmessage = function(event) {  
//   console.log("from worker : "+event.data); //echo-worker
// };
// worker.postMessage(); // send a message to the worker  


	/*Socket*/
	
	// jswalker_obj.booster({model:"demo",method:"select_data",ziel:{a:1},
	// 			success:function(success_op){
	// 				var ziel=success_op.ziel;
	// 				console.log(success_op);
	// 			},
	// 			fail:function(fail_op){
	// 				console.log(fail_op.status.info);
	// 			}
	// 	 });
	
		jswalker_obj.booster({model:"demo",method:"test_booster",ziel:{a:0},
				success:function(success_op){
					var ziel=success_op.ziel;
					console.log(ziel);
				},
				fail:function(fail_op){
					console.log(fail_op.status.info);
				}
		 });


		// jswalker_obj.booster({model:"demo",method:"test_redis",ziel:{a:0},
		// 		success:function(success_op){
		// 			var ziel=success_op.ziel;
		// 			console.log(ziel);
		// 		},
		// 		fail:function(fail_op){
		// 			console.log(fail_op.status.info);
		// 		}
		//  });
	/*Socket*/


	/*Wire*/
		
		jswalker_obj.wire({url:"/demo/select_data",ziel:{a:1},
				success:function(success_op){
					var ziel=success_op.ziel;
					console.log(success_op);
				},
				fail:function(fail_op){
					console.log(fail_op.status.info);
				}
		 });

		
	/*Wire*/	


	

	
});
