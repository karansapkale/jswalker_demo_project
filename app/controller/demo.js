var demo = {
	index:function(op,callback){
		
		//callback({page:'demo.html',ziel:{ server_data:[{test_value:0,test_string:'str-0'}] } });  //simple page rendering
		var system_op=op;
		
		/*With Authentication*/
		var model=op.model;

		var demo_model=model.get(system_op,"demo");


 demo_model.select_data(op,function(demo_model_op){
				
				if(demo_model_op.status.flag=="success"){
				}else{
				}
			});

		var auth=op.auth;
			auth.test(op,function(auth_op){
				if(auth_op.status==true){
						var server_data={server_data:[{test_value:1,test_string:"str-1"}] };
						callback({page:'demo.html',ziel:server_data});
				 }
			});

	},

	select_data:function(op,callback){
		var system_op=op;
		var model=op.model; /**/
		var demo_model=model.get(system_op,"demo");

			/*Select*/
			demo_model.select_data(op,function(demo_model_op){
				
				if(demo_model_op.status.flag=="success"){
					callback({ status:{flag:"success",info:""},ziel:demo_model_op.ziel });
				}else{
					callback({ status:{flag:"fail",info:demo_model_op.status.info},ziel:{} });
				}
			});

			/*Select*/
	},

	insert_data:function(op,callback){

		var system_op=op;
		var model=op.model; /**/
		var demo_model=model.get(system_op,"demo");

			/*Insert*/
			demo_model.insert_data(op,function(demo_model_op){
				if(demo_model_op.status.flag=="success"){
					callback({ status:{flag:"success",info:""},ziel:demo_model_op.ziel });
				}else{
					callback({ status:{flag:"fail",info:demo_model_op.status.info},ziel:{} });					
				}
			});
			/*Insert*/
	},


	update_data:function(op,callback){
		var system_op=op;
		var model=op.model; /**/
		var demo_model=model.get(system_op,"demo");

			/*Insert*/
			demo_model.update_data(op,function(demo_model_op){
				if(demo_model_op.status.flag=="success"){
					callback({ status:{flag:"success",info:""},ziel:demo_model_op.ziel });
				}else{
					callback({ status:{flag:"fail",info:demo_model_op.status.info},ziel:{} });
				}
			});
			/*Insert*/
	},


	delete_data:function(op,callback){
		var system_op=op;
		var model=op.model; /**/
		var demo_model=model.get(system_op,"demo");

			/*Insert*/
			demo_model.delete_data(op,function(demo_model_op){
				if(demo_model_op.status.flag=="success"){
					callback({ status:{flag:"success",info:""},ziel:demo_model_op.ziel });
				}else{
					callback({ status:{flag:"fail",info:demo_model_op.status.info},ziel:{} });
				}
			});
			/*Insert*/
	}


};
module.exports = demo;
