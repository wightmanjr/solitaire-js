Array.prototype.sortNum = function() {
	return this.sort( function (a,b) { return a-b; } );
}

Array.prototype.find = function(searchStr) {
	var returnArray = false;
	for (i=0; i<this.length; i++) {
		if (typeof(searchStr) == 'function') {
			if (searchStr.test(this[i])) {
				if (!returnArray) { returnArray = [] }
				returnArray.push(i);
			}
			} else {
				if (this[i]===searchStr) {
				if (!returnArray) { returnArray = [] }
				returnArray.push(i);
			}
		}
	}
	return returnArray;
}

Array.prototype.shuffle = function (){ 
	for(var rnd, tmp, i=this.length; i; rnd=parseInt(Math.random()*i), tmp=this[--i], this[i]=this[rnd], this[rnd]=tmp);
};

Array.prototype.compare = function(testArr) {
	if (this.length != testArr.length) {
		return false;
	}
	for (var i = 0; i < testArr.length; i++) {
		if (this[i].compare) { 
			if (!this[i].compare(testArr[i])) {
				return false;
			}
		}
		if (this[i] !== testArr[i]) {
			return false;
		}
	}
	return true;
}