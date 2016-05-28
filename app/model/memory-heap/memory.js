module.exports.memory=function(op,callback){
    
    /*Read json file of Memory heap data */
 		 	 //var fs   = require('fs');
             var system_op = op;
             var _memory_="select * from (select * from memory_trace order by memory_trace_id desc limit 1000 ) memory_trace order by memory_trace_id asc";

             require("jswalker_query").select({
                 system_op:system_op,
                 query:_memory_,
                 nested_table:false
             },function(op){
                 if(op.flag==true){
                     callback({ status:{flag:"success",info:""},ziel:{memory:op.res} });
                 }else{
                     //console.log(op.err);
                     callback({ status:{flag:"fail",info:op.query_trace},ziel:{} });
                 }
             });


 
 //    fs.readFile(process.cwd()+"/memory.log",'utf-8', function(err, data) {
 //    if (err) throw err;

 //    var lines = data.trim().split('\n');
 //    var lastLine = lines.slice(-1)[0];

 //    //var fields = lastLine.split(',');
 //    //var audioFile = fields.slice(-1)[0].replace('file:\\\\', '');

 //    console.log(lastLine);

 //    callback({status:{flag:"success",info:""},ziel:{} });
    
	// });


    /*Send to client*/
//      var sample_counter=op.sample_counter;
// 		 var rss=[],heapTotal=[],heapUsed=[],timestamp=[];
// 		 // var json_obj=[]
// 		 // var json_obj=JSON.parse(data);
		
// 		 	 var sample_counter=0,sample_size=op.sample_size;

// 		 	 var fs   = require('fs'),
//     lazy = require('lazy');

// var x =0;
// var y = sample_size-1;
// var lines = (
//    //lazy(fs.readFile(process.cwd()+"/memory.log"))
//    lazy(fs.createReadStream(process.cwd()+"/memory.log")).on("end",function(){
//    	console.log("sample counter = "+sample_counter);
   		
// 		callback({data:{rss:rss,heapTotal:heapTotal,heapUsed:heapUsed,timestamp:timestamp}});		 			   	
//    })
//      .lines
//      .skip(x - 1)
//      .take(y - x + 1)

// );



// lines.forEach(function(line) {
//    // console.log(line.toString('utf-8'));
//    var line=line.toString('utf-8');
//    sample_counter++;
//    //console.log(sample_counter);
//     	var re = /RSS:.+?,/img; 
// 			var str = line;
// 			var m= re.exec(str);			
// 		 	rss.push(parseFloat(m[0].substr(4,m[0].length-1))).toFixed(2);
// 		 	line=line.substr(m[0].length+1);

// 		 	var re = /heapTotal:.+?,/img; 
// 			var str = line;
// 			var m= re.exec(str);			
// 		 	heapTotal.push(parseFloat(m[0].substr(10,m[0].length-1))).toFixed(2);
// 		 	line=line.substr(m[0].length);

// 		 	var re = /heapUsed:.+?,/img; 
// 			var str = line;
// 			var m= re.exec(str);			
// 		 	heapUsed.push(parseFloat(m[0].substr(9,m[0].length))).toFixed(2);


// 		 	var re = /timestamp:.+?}/img; 
// 			var str = line;
// 			var m= re.exec(str);			

// 			var date_=parseInt(m[0].substr(10,m[0].length),10);
// 		 	//timestamp.push(parseInt(m[0].substr(10,m[0].length),10));
// 		 	var new_date=new Date(date_);
		 	
// 		 		new_date=(parseInt(new_date.getMonth(),10)+1)+"/"+new_date.getDate()+"/"+new_date.getFullYear();
// 		 		//console.log(new_date);
// 		 		timestamp.push("'"+new_date.toString()+"'");
		 		
// 		 		//console.log(timestamp[timestamp.length-1]);
// 		 		// if(sample_counter>=sample_size){
// 		 		// 	// console.log("done");		 			
// 		 		// 	// console.log(timestamp);
// 				 //  	callback({data:{rss:rss,heapTotal:heapTotal,heapUsed:heapUsed,timestamp:timestamp}});		 			
// 		 		// }


// });



    

};