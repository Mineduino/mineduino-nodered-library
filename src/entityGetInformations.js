module.exports = function(RED) {
    function TurnOnLevel(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if(!config.onlyIfChanged) {
                this.lastValueWas = msg.payload
                node.send(msg)
            } else {
                if(this.lastValueWas == undefined) {
                    this.lastValueWas = msg.payload
                    if(!config.ommitFirst) {
                        node.send(msg)
                    }                   
                    
                }
                else if(checkIfDifferent(msg.payload, this.lastValueWas)) {
                    this.lastValueWas = msg.payload
                    node.send(msg)
                }
            }
        });
    }
    function checkIfDifferent(arr1, arr2) {
        if (arr1.length !== arr2.length) return true;
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return true;
        }
    
        return false;
    }
    RED.nodes.registerType("entityGetInformations", TurnOnLevel);
}