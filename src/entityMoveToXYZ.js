module.exports = function(RED) {
    function TurnOnLevel(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if(config.fromPayload) {
                let newPayload = {
                    x: parseFloat(msg.payload.x),
                    y: parseFloat(msg.payload.y),
                    z: parseFloat(msg.payload.z),
                    type: config.actionType,
                    speed: parseFloat(msg.payload.speed),
                    distance: parseFloat(msg.payload.distance),
                    pathFinder: msg.payload.pathFinder ? true: false
                }
                msg.payload = JSON.stringify(newPayload)
                node.send(msg)

            } else {
                let newPayload = {
                    x: parseFloat(config.newX),
                    y: parseFloat(config.newY),
                    z: parseFloat(config.newZ),
                    type: config.actionType,
                    speed: parseFloat(config.speed),
                    distance: parseFloat(config.distance),
                    pathFinder: config.pathFinder
                }
                msg.payload = JSON.stringify(newPayload)
                node.send(msg)
            }
        });
    }
    RED.nodes.registerType("entityMoveToXYZ", TurnOnLevel);
}