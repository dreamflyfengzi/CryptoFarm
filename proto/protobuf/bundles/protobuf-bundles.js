var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protoMessage = (function() {

    /**
     * Namespace protoMessage.
     * @exports protoMessage
     * @namespace
     */
    var protoMessage = {};

    protoMessage.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof protoMessage
         * @interface IMessage
         * @property {protoMessage.Message.DataType|null} [type] Message type
         * @property {protoMessage.ILoginLogout|null} [loginLogout] Message loginLogout
         * @property {protoMessage.ILoginLogoutResp|null} [loginLogoutResp] Message loginLogoutResp
         * @property {protoMessage.IPlant|null} [plant] Message plant
         */

        /**
         * Constructs a new Message.
         * @memberof protoMessage
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {protoMessage.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message type.
         * @member {protoMessage.Message.DataType} type
         * @memberof protoMessage.Message
         * @instance
         */
        Message.prototype.type = 0;

        /**
         * Message loginLogout.
         * @member {protoMessage.ILoginLogout|null|undefined} loginLogout
         * @memberof protoMessage.Message
         * @instance
         */
        Message.prototype.loginLogout = null;

        /**
         * Message loginLogoutResp.
         * @member {protoMessage.ILoginLogoutResp|null|undefined} loginLogoutResp
         * @memberof protoMessage.Message
         * @instance
         */
        Message.prototype.loginLogoutResp = null;

        /**
         * Message plant.
         * @member {protoMessage.IPlant|null|undefined} plant
         * @memberof protoMessage.Message
         * @instance
         */
        Message.prototype.plant = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message dataMsg.
         * @member {"loginLogout"|"loginLogoutResp"|"plant"|undefined} dataMsg
         * @memberof protoMessage.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "dataMsg", {
            get: $util.oneOfGetter($oneOfFields = ["loginLogout", "loginLogoutResp", "plant"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof protoMessage.Message
         * @static
         * @param {protoMessage.IMessage=} [properties] Properties to set
         * @returns {protoMessage.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link protoMessage.Message.verify|verify} messages.
         * @function encode
         * @memberof protoMessage.Message
         * @static
         * @param {protoMessage.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.loginLogout != null && message.hasOwnProperty("loginLogout"))
                $root.protoMessage.LoginLogout.encode(message.loginLogout, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.loginLogoutResp != null && message.hasOwnProperty("loginLogoutResp"))
                $root.protoMessage.LoginLogoutResp.encode(message.loginLogoutResp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.plant != null && message.hasOwnProperty("plant"))
                $root.protoMessage.Plant.encode(message.plant, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protoMessage.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoMessage.Message
         * @static
         * @param {protoMessage.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof protoMessage.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoMessage.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoMessage.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.loginLogout = $root.protoMessage.LoginLogout.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.loginLogoutResp = $root.protoMessage.LoginLogoutResp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.plant = $root.protoMessage.Plant.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoMessage.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoMessage.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof protoMessage.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.loginLogout != null && message.hasOwnProperty("loginLogout")) {
                properties.dataMsg = 1;
                {
                    var error = $root.protoMessage.LoginLogout.verify(message.loginLogout);
                    if (error)
                        return "loginLogout." + error;
                }
            }
            if (message.loginLogoutResp != null && message.hasOwnProperty("loginLogoutResp")) {
                if (properties.dataMsg === 1)
                    return "dataMsg: multiple values";
                properties.dataMsg = 1;
                {
                    var error = $root.protoMessage.LoginLogoutResp.verify(message.loginLogoutResp);
                    if (error)
                        return "loginLogoutResp." + error;
                }
            }
            if (message.plant != null && message.hasOwnProperty("plant")) {
                if (properties.dataMsg === 1)
                    return "dataMsg: multiple values";
                properties.dataMsg = 1;
                {
                    var error = $root.protoMessage.Plant.verify(message.plant);
                    if (error)
                        return "plant." + error;
                }
            }
            return null;
        };

        /**
         * DataType enum.
         * @name protoMessage.Message.DataType
         * @enum {string}
         * @property {number} LoginLogout=0 LoginLogout value
         * @property {number} LoginLogoutResp=1 LoginLogoutResp value
         * @property {number} Plant=2 Plant value
         */
        Message.DataType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LoginLogout"] = 0;
            values[valuesById[1] = "LoginLogoutResp"] = 1;
            values[valuesById[2] = "Plant"] = 2;
            return values;
        })();

        return Message;
    })();

    protoMessage.LoginLogout = (function() {

        /**
         * Properties of a LoginLogout.
         * @memberof protoMessage
         * @interface ILoginLogout
         * @property {protoMessage.LoginLogout.LoginoutType|null} [action] LoginLogout action
         * @property {string|null} [code] LoginLogout code
         */

        /**
         * Constructs a new LoginLogout.
         * @memberof protoMessage
         * @classdesc Represents a LoginLogout.
         * @implements ILoginLogout
         * @constructor
         * @param {protoMessage.ILoginLogout=} [properties] Properties to set
         */
        function LoginLogout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginLogout action.
         * @member {protoMessage.LoginLogout.LoginoutType} action
         * @memberof protoMessage.LoginLogout
         * @instance
         */
        LoginLogout.prototype.action = 0;

        /**
         * LoginLogout code.
         * @member {string} code
         * @memberof protoMessage.LoginLogout
         * @instance
         */
        LoginLogout.prototype.code = "";

        /**
         * Creates a new LoginLogout instance using the specified properties.
         * @function create
         * @memberof protoMessage.LoginLogout
         * @static
         * @param {protoMessage.ILoginLogout=} [properties] Properties to set
         * @returns {protoMessage.LoginLogout} LoginLogout instance
         */
        LoginLogout.create = function create(properties) {
            return new LoginLogout(properties);
        };

        /**
         * Encodes the specified LoginLogout message. Does not implicitly {@link protoMessage.LoginLogout.verify|verify} messages.
         * @function encode
         * @memberof protoMessage.LoginLogout
         * @static
         * @param {protoMessage.ILoginLogout} message LoginLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginLogout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified LoginLogout message, length delimited. Does not implicitly {@link protoMessage.LoginLogout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoMessage.LoginLogout
         * @static
         * @param {protoMessage.ILoginLogout} message LoginLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginLogout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginLogout message from the specified reader or buffer.
         * @function decode
         * @memberof protoMessage.LoginLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoMessage.LoginLogout} LoginLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginLogout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoMessage.LoginLogout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginLogout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoMessage.LoginLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoMessage.LoginLogout} LoginLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginLogout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginLogout message.
         * @function verify
         * @memberof protoMessage.LoginLogout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginLogout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * LoginoutType enum.
         * @name protoMessage.LoginLogout.LoginoutType
         * @enum {string}
         * @property {number} LOGIN=0 LOGIN value
         * @property {number} LOGOUT=1 LOGOUT value
         */
        LoginLogout.LoginoutType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LOGIN"] = 0;
            values[valuesById[1] = "LOGOUT"] = 1;
            return values;
        })();

        return LoginLogout;
    })();

    protoMessage.LoginLogoutResp = (function() {

        /**
         * Properties of a LoginLogoutResp.
         * @memberof protoMessage
         * @interface ILoginLogoutResp
         */

        /**
         * Constructs a new LoginLogoutResp.
         * @memberof protoMessage
         * @classdesc Represents a LoginLogoutResp.
         * @implements ILoginLogoutResp
         * @constructor
         * @param {protoMessage.ILoginLogoutResp=} [properties] Properties to set
         */
        function LoginLogoutResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LoginLogoutResp instance using the specified properties.
         * @function create
         * @memberof protoMessage.LoginLogoutResp
         * @static
         * @param {protoMessage.ILoginLogoutResp=} [properties] Properties to set
         * @returns {protoMessage.LoginLogoutResp} LoginLogoutResp instance
         */
        LoginLogoutResp.create = function create(properties) {
            return new LoginLogoutResp(properties);
        };

        /**
         * Encodes the specified LoginLogoutResp message. Does not implicitly {@link protoMessage.LoginLogoutResp.verify|verify} messages.
         * @function encode
         * @memberof protoMessage.LoginLogoutResp
         * @static
         * @param {protoMessage.ILoginLogoutResp} message LoginLogoutResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginLogoutResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LoginLogoutResp message, length delimited. Does not implicitly {@link protoMessage.LoginLogoutResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoMessage.LoginLogoutResp
         * @static
         * @param {protoMessage.ILoginLogoutResp} message LoginLogoutResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginLogoutResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginLogoutResp message from the specified reader or buffer.
         * @function decode
         * @memberof protoMessage.LoginLogoutResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoMessage.LoginLogoutResp} LoginLogoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginLogoutResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoMessage.LoginLogoutResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginLogoutResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoMessage.LoginLogoutResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoMessage.LoginLogoutResp} LoginLogoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginLogoutResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginLogoutResp message.
         * @function verify
         * @memberof protoMessage.LoginLogoutResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginLogoutResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return LoginLogoutResp;
    })();

    protoMessage.Plant = (function() {

        /**
         * Properties of a Plant.
         * @memberof protoMessage
         * @interface IPlant
         * @property {protoMessage.Plant.Action|null} [action] Plant action
         * @property {string|null} [target] Plant target
         */

        /**
         * Constructs a new Plant.
         * @memberof protoMessage
         * @classdesc Represents a Plant.
         * @implements IPlant
         * @constructor
         * @param {protoMessage.IPlant=} [properties] Properties to set
         */
        function Plant(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Plant action.
         * @member {protoMessage.Plant.Action} action
         * @memberof protoMessage.Plant
         * @instance
         */
        Plant.prototype.action = 0;

        /**
         * Plant target.
         * @member {string} target
         * @memberof protoMessage.Plant
         * @instance
         */
        Plant.prototype.target = "";

        /**
         * Creates a new Plant instance using the specified properties.
         * @function create
         * @memberof protoMessage.Plant
         * @static
         * @param {protoMessage.IPlant=} [properties] Properties to set
         * @returns {protoMessage.Plant} Plant instance
         */
        Plant.create = function create(properties) {
            return new Plant(properties);
        };

        /**
         * Encodes the specified Plant message. Does not implicitly {@link protoMessage.Plant.verify|verify} messages.
         * @function encode
         * @memberof protoMessage.Plant
         * @static
         * @param {protoMessage.IPlant} message Plant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Plant.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.target != null && message.hasOwnProperty("target"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.target);
            return writer;
        };

        /**
         * Encodes the specified Plant message, length delimited. Does not implicitly {@link protoMessage.Plant.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoMessage.Plant
         * @static
         * @param {protoMessage.IPlant} message Plant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Plant.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Plant message from the specified reader or buffer.
         * @function decode
         * @memberof protoMessage.Plant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoMessage.Plant} Plant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Plant.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoMessage.Plant();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.target = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Plant message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoMessage.Plant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoMessage.Plant} Plant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Plant.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Plant message.
         * @function verify
         * @memberof protoMessage.Plant
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Plant.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.target != null && message.hasOwnProperty("target"))
                if (!$util.isString(message.target))
                    return "target: string expected";
            return null;
        };

        /**
         * Action enum.
         * @name protoMessage.Plant.Action
         * @enum {string}
         * @property {number} NEW=0 NEW value
         * @property {number} Watering=1 Watering value
         * @property {number} Upgrade=2 Upgrade value
         * @property {number} Pick=3 Pick value
         */
        Plant.Action = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NEW"] = 0;
            values[valuesById[1] = "Watering"] = 1;
            values[valuesById[2] = "Upgrade"] = 2;
            values[valuesById[3] = "Pick"] = 3;
            return values;
        })();

        return Plant;
    })();

    return protoMessage;
})();