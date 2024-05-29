const _ = require("lodash");
function deepCloneObject(object1){
    return _.defaultsDeep(object1);
}
function mergeObjects(object1, object2){
    return _.merge(object1, object2);
}

module.exports = {
    deepCloneObject,
    mergeObjects
}