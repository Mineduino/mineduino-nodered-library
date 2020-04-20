module.exports = function(RED) {
    function TurnOn(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if(config.level === true) {
                msg.payload = Buffer.from([15])
            } else {
                msg.payload = Buffer.from([0])                 
            }
            node.send(msg) 
        });
    }
    RED.nodes.registerType("turnRawOnOff",TurnOn);
}