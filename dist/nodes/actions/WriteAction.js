"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.default = (RED, type) => {
    class WriteAction {
        constructor(props) {
            RED.nodes.createNode(this, props);
            this.on('input', (msg) => {
                if (msg.sid) {
                    msg.payload = {
                        cmd: "write",
                        data: {
                            status: this.type.replace(`${constants_1.Constants.NODES_PREFIX}-actions `, ''),
                            sid: msg.sid
                        }
                    };
                    this.send(msg);
                }
            });
        }
    }
    RED.nodes.registerType(`${constants_1.Constants.NODES_PREFIX}-actions ${type}`, WriteAction);
};
