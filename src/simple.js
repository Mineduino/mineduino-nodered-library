module.exports = function(RED) {
    function TurnOnLevel(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if(config.fromPayload) {
                let parsed = parseInt(msg.payload)
                if(parsed && parsed >= 0 && parsed <= 54) {
                    msg.payload = Buffer.from([msg.payload])
                    node.send(msg);                    
                }
                

            } else {
                if(config.level >= 0 && config.level <= 54) {
                    msg.payload = Buffer.from([config.level])
                    node.send(msg);
                }
            }
        });
    }
    RED.nodes.registerType("simple", TurnOnLevel);
}