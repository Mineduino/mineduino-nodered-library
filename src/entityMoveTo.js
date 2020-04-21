module.exports = function(RED) {
    function TurnOnLevel(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if(config.fromPayload) {
                let newPayload = {
                    type: config.actionType,
                    pathFinder: msg.payload.pathFinder == undefined ? true: (msg.payload.pathFinder ? true : false)
                }
                if(msg.payload.deltaX) {
                    newPayload.deltaX = parseFloat(msg.payload.deltaX)
                }
                if(msg.payload.deltaY) {
                    newPayload.deltaY = parseFloat(msg.payload.deltaY)
                }
                if(msg.payload.deltaZ) {
                    newPayload.deltaZ = parseFloat(msg.payload.deltaZ)
                }
                if(msg.payload.speed) {
                    newPayload.speed = parseFloat(msg.payload.speed)
                }
                if(msg.payload.distance) {
                    newPayload.distance = parseFloat(msg.payload.distance)
                }
                msg.payload =  newPayload
                node.send(msg)

            } else {
                let newPayload = {
                    deltaX: parseFloat(config.newX),
                    deltaY: parseFloat(config.newY),
                    deltaZ: parseFloat(config.newZ),
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
    RED.nodes.registerType("entityMoveTo", TurnOnLevel);
}