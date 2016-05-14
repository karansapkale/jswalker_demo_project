var authentication = {
		test:function(op,callback){
          /* Check your session */
          callback({status:true});                
        },
};
module.exports = authentication;