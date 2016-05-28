
/*Ajax*/
module.exports.select_data=function(op,callback){

	var system_op=op;
	var ziel=op.ziel; // Data from client 
	var mongo=op.mongo;


	var _test_="select * from test";
//console.log(system_op.mysql_pool);
	require("jswalker_query").select({
		system_op:system_op,
		query:_test_,
		table_separator:true
		
	},function(op){
		callback({ status:{flag:"success",info:""},ziel:{a:1} });		
	});


			
};


module.exports.insert_data=function(op,callback){

	var system_op=op;
	var ziel=op.ziel; // Data from client 
	var _test="insert into test(test_value,test_string) values(12,'test-string-1') ";/*use this query when no fiel:value passed */

	require("jswalker_query").select({
		system_op:system_op,
		query:{test_value:100,test_string:'hello jswalker'},
		table:"test"
	},function(op){
		if(op.flag==true){
			callback({ status:{flag:"success",info:""},ziel:op.res });
		}else{
			callback({ status:{flag:"fail",info:op.query_trace},ziel:{} });
		}
	});

};



module.exports.update_data=function(op,callback){

	var system_op=op;
	var ziel=op.ziel; // Data from client 
	var _test="update test set test_value=101 where test_value = 100";

	require("jswalker_query").update({
		system_op:system_op,
		query:test
	},function(op){
		if(op.flag==true){
			callback({ status:{flag:"success",info:""},ziel:op.res });
		}else{
			callback({ status:{flag:"fail",info:op.query_trace},ziel:{} });
		}
	});

};



module.exports.delete_data=function(op,callback){
	var system_op=op;
	var ziel=op.ziel; // Data from client 
	var _test="delete from test where test_value = 101";

	require("jswalker_query").update({
		system_op:system_op,
		query:test
	},function(op){
		if(op.flag==true){
			callback({ status:{flag:"success",info:""},ziel:op.res });
		}else{
			callback({ status:{flag:"fail",info:op.query_trace},ziel:{} });
		}
	});
};
/*Ajax*/


/*Socket*/
module.exports.test_booster=function(op,callback){
    //console.log("Booster working");
    var system_op=op;
    var ziel=op.ziel;
    require("jswalker_query").select({
		system_op:system_op,
		query:"select * from test",
		table_separator:true,
		database:"jswalker_test"
	},function(op){
	
		
if(ziel.a>0){
		callback({ status:{flag:"success",info:""},ziel:{a:"No data"} });
    }else{
		callback({ status:{flag:"fail",info:"Data is less than a Zero"},ziel:{a:"Data value passed > 0"} });    	
    }

	});
    
};

module.exports.test_redis=function(op,callback){
  var system_op=op;
    var ziel=op.ziel;
	//console.log("Redis model working");
	var redis_client=op.redis_client;


	if(redis_client){

		 
		console.log("Redis Block");

			/*setex*/
			// require("jswalker_redis").setex(redis_client,{key:"test-key-1",value:{field:'test-value'},ttl:10 },function(err,data){	asd
			// 	//console.log(err);
			// 	//console.log(data);
			// });


			// // /*Set Redis*/
			// require("jswalker_redis").set(redis_client,{key:"test-key",value:{field:'test-value'} },function(err,data){	
			// 	//console.log(err);
			// 	//console.log(data);
			// });

			// /*update Redis*/
			// require("jswalker_redis").update(redis_client,{key:"test-key",value:{field:'new-test-value'} },function(err,data){	
			// 	//console.log(err);
			// 	//console.log(data);
			// });


			// // /*Get Redis*/
			// require("jswalker_redis").get(redis_client,{key:"test-key"},function(err,data){	
			// 	//console.log(err);
			// 	//console.log(data);
			// 	callback({ status:{flag:"success",info:""},ziel:{redis_data:data} });
			// });




			// /*delete Redis*/
			// require("jswalker_redis").del(redis_client,{key:"test-key"},function(err,data){	
			// 	//console.log(err);
			// 	//console.log(data);
			// });
	}else{
		console.log("REDIS FUNCTIONALITY ONLY WORK WHEN REDIS IS RUNNING AND FLAG SET TRUE IN APP.JS");	
	}
	

};
/*Socket*/