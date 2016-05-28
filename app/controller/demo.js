
var demo = {
	index:function(op,callback){
		
		var system_op=op;
		
		var model=op.model;

		var ziel=op.ziel;
		var params=op.params;

		/*With Authentication*/
		// var model_data=model.get(system_op,"demo");
		// model_data.select_data(system_op,function(){
			
		// });

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
					//demo_model_op.ziel.b={c:"Hello jayesh"};
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

			/*Update*/
			demo_model.update_data(op,function(demo_model_op){
				if(demo_model_op.status.flag=="success"){
					callback({ status:{flag:"success",info:""},ziel:demo_model_op.ziel });
				}else{
					callback({ status:{flag:"fail",info:demo_model_op.status.info},ziel:{} });
				}
			});
			/*Update*/
	},


	delete_data:function(op,callback){
		var system_op=op;
		var model=op.model; /**/
		var demo_model=model.get(system_op,"demo");

			/*Delete*/
			demo_model.delete_data(op,function(demo_model_op){
				if(demo_model_op.status.flag=="success"){
					callback({ status:{flag:"success",info:""},ziel:demo_model_op.ziel });
				}else{
					callback({ status:{flag:"fail",info:demo_model_op.status.info},ziel:{} });
				}
			});
			/*Delete*/
	}


};
module.exports = demo;
