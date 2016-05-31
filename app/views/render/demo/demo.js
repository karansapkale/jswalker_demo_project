

<script script-chunk='demo-script'>




try{


/*Init template */
 dot_obj.chunk['demo_init']="{{ for(var i=0;i<it.length;i++) {  }}"+

 		"<p>Test value : {{=it[i].test_value}} </p>"+

 		"<p>Test string : {{=it[i].test_string}} </p>"+

"{{ } }}";
/*Init template */

/*Model Data from server */
  var model_data= [[= JSON.stringify(model) ]];
  console.log("**********************");
  console.log("You can Get whole model data from server here");  
  console.log(model_data);
  console.log("**********************");
/*Model Data from server */


/*Template compile*/
  var data=model_data.server_data;
  var demo_template=doT.template(dot_obj.chunk['demo_init']);
  var html=demo_template(data);
  $(".dot-template-client-side-rendering-result").html(html);
/*Template compile*/



}catch(err){
 console.log(err);
}


try{

  /*Dynamic template*/
  /*Dynamic template*/

}catch(err){

	dot_obj.chunk['demo_init']="{{ for(var i=0;i<it.length;i++) {  }}"+

 		"<p>Test value : {{=it[i].test_value}} </p>"+

 		"<p>Test string : {{=it[i].test_string}} </p>"+

	"{{ } }}";
  console.log(err);
}
</script>
