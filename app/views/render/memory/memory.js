<script script-chunk='memory-script'>

try{


/*Init template */
 dot_obj.template['demo_init']="{{ for(var i=0;i<it.length;i++) {  }}"+
 		
"{{ } }}";
/*Init template */

  var model_data= [[= JSON.stringify(model) ]];
  console.log("**********************");
  console.log("You can Get whole model data from server here");  
  console.log(model_data);
  console.log("**********************");

  var i=0;
  memory_obj.rss_arr = Object.keys(model_data.memory).map(function (key) { if(key){return parseInt(model_data.memory[i++].rss,10)} else {return 0;} });
  i=0;
  memory_obj.heap_total_arr = Object.keys(model_data.memory).map(function (key) { if(key){return parseInt(model_data.memory[i++].heapTotal,10)} else {return 0;} });
  i=0;
  memory_obj.heap_used_arr = Object.keys(model_data.memory).map(function (key) { if(key){return parseInt(model_data.memory[i++].heapUsed,10)} else {return 0;} });
    

}catch(err){
 console.log(err);
}


try{

  /*Dynamic template*/
  /*Dynamic template*/

}catch(err){

	dot_obj.template['demo_init']="{{ for(var i=0;i<it.length;i++) {  }}"+

 		"<p>Test value : {{=it[i].test_value}} </p>"+

 		"<p>Test string : {{=it[i].test_string}} </p>"+

	"{{ } }}";
  console.log(err);
}
</script>
