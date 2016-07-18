Array.prototype.indexByKey = function(keyName) {

  return this.reduce( (obj, el) => {
    obj[ el[keyName] ] = el;
    return obj;
  }, {});

};
