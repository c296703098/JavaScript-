Function.prototype.before=function(beforefn){
	var self=this;
	return function(){
		beforefn.apply(this,arguments);
		return self.apply(this,arguments);
	}
};
Function.prototype.after=function(afterfn){
	var self=this;
	//console.log(this)
	//ƒ (){
	//	beforefn.apply(this,arguments);
	//	return self.apply(this,arguments);
	//}
	
	return function(){
		var ret=self.apply(this,arguments);
		afterfn.apply(this,arguments);
		return ret;
	}
};
var func = function(){ 
    console.log('main'); 
}; 
func = func.before(function(){ 
    console.log('before'); 
}).after(function(){ 
    console.log('after'); 
}); 

 func();  
