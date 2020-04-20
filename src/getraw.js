module.exports = function(RED) {
    function TurnOnLevel(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if(config.percent) {
                let value = msg.payload[0]
                msg.payload = (value / config.maxPercent)*100
                node.send(msg)                

            } else {
                msg.payload = msg.payload[0]
                node.send(msg)
            }
        });
    }
    RED.nodes.registerType("getraw", TurnOnLevel);
}