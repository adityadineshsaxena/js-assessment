exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        index = i;
        break;
      }
      else {
        index = -1;
      }
    }
    return index;
  },

  sum : function(arr) {
    var sum = 0;
    for(var i = 0; i<arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var tempArray = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] !== item) {
        tempArray.push(arr[i]);
      }
    }
    return tempArray;
  },

  removeWithoutCopy : function removeWithoutCopy(arr, item) {
    // I didn't want to use Array methods here which people always google about :-) Just saying

    var initLength = arr.length,
    nullCount = 0;
    for(var i = 0; i <arr.length; i++) {
      if(arr[i] === item) {
        arr[i] = null;
        nullCount++;
      }
    }

    function shiftNulls(arr, j) {
      for(var i = j; i < arr.length; i++) {
        arr[i] = arr[i+1]|| null;
      }
    }

    var j = 0;
    for(var k = 0; k < nullCount; k++) {
      for(; j < arr.length; j++) {
        if(!arr[j]) {
          shiftNulls(arr, j);
          arr[j] && j++;
          break;
        }
      }
    }

    arr.length = initLength - nullCount; //remove the nulls at the end
    return arr;
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.length -= 1;
    return arr;
  },

  prepend : function(arr, item) {
    for(var i = arr.length; i > 0; i--) {
      arr[i] = arr[i-1];
    }
    arr[0] = item;
    return arr;
  },

  curtail : function(arr) {
    for(var i = 0; i < arr.length; i++) {
      arr[i] = arr[i+1];
    }
    arr.length -= 1;
    return arr;
  },

  concat : function(arr1, arr2) {
    
  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
