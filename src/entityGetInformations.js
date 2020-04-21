module.exports = function(RED) {
    function TurnOnLevel(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = {
                type: config.actionType
            }
            node.send(msg)
        });
    }
    RED.nodes.registerType("entityGetInformations", TurnOnLevel);
}