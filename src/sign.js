module.exports = function(RED) {
    function TurnOnLevel(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if(config.fromPayload) {
                if(!Array.isArray(msg.payload) || msg.payload.length > 4) {
                    return
                }
                for (let index = 0; index < msg.payload.length; index++) {
                    msg.payload[index] = String(msg.payload[index])          
                }
                node.send(msg)                

            } else {
                msg.payload = [String(config.line1), String(config.line2), String(config.line3), String(config.line4)]
                node.send(msg)
            }
        });
    }
    RED.nodes.registerType("sign", TurnOnLevel);
}