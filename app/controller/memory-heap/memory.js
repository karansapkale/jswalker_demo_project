var memory = {
		index:function(op,callback){
		      var system_op=op;
         	      var model=op.model;

         	      var memory_model=model.get(system_op,"memory-heap/memory");	
         	 	memory_model.memory(system_op,function(memory_model_op){
         	              callback({page:"memory.html",ziel:memory_model_op.ziel});		
         	 	});
        }
};
module.exports = memory;