type Long = protobuf.Long;

/** Namespace protoMessage. */
declare namespace protoMessage {

    /** Properties of a Message. */
    interface IMessage {

        /** Message type */
        type?: (protoMessage.Message.DataType|null);

        /** Message loginLogout */
        loginLogout?: (protoMessage.ILoginLogout|null);

        /** Message loginLogoutResp */
        loginLogoutResp?: (protoMessage.ILoginLogoutResp|null);

        /** Message plant */
        plant?: (protoMessage.IPlant|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoMessage.IMessage);

        /** Message type. */
        public type: protoMessage.Message.DataType;

        /** Message loginLogout. */
        public loginLogout?: (protoMessage.ILoginLogout|null);

        /** Message loginLogoutResp. */
        public loginLogoutResp?: (protoMessage.ILoginLogoutResp|null);

        /** Message plant. */
        public plant?: (protoMessage.IPlant|null);

        /** Message dataMsg. */
        public dataMsg?: ("loginLogout"|"loginLogoutResp"|"plant");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: protoMessage.IMessage): protoMessage.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link protoMessage.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoMessage.IMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protoMessage.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoMessage.IMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protoMessage.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protoMessage.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace Message {

        /** DataType enum. */
        enum DataType {
            LoginLogout = 0,
            LoginLogoutResp = 1,
            Plant = 2
        }
    }

    /** Properties of a LoginLogout. */
    interface ILoginLogout {

        /** LoginLogout action */
        action?: (protoMessage.LoginLogout.LoginoutType|null);

        /** LoginLogout code */
        code?: (string|null);
    }

    /** Represents a LoginLogout. */
    class LoginLogout implements ILoginLogout {

        /**
         * Constructs a new LoginLogout.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoMessage.ILoginLogout);

        /** LoginLogout action. */
        public action: protoMessage.LoginLogout.LoginoutType;

        /** LoginLogout code. */
        public code: string;

        /**
         * Creates a new LoginLogout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginLogout instance
         */
        public static create(properties?: protoMessage.ILoginLogout): protoMessage.LoginLogout;

        /**
         * Encodes the specified LoginLogout message. Does not implicitly {@link protoMessage.LoginLogout.verify|verify} messages.
         * @param message LoginLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoMessage.ILoginLogout, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginLogout message, length delimited. Does not implicitly {@link protoMessage.LoginLogout.verify|verify} messages.
         * @param message LoginLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoMessage.ILoginLogout, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginLogout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protoMessage.LoginLogout;

        /**
         * Decodes a LoginLogout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protoMessage.LoginLogout;

        /**
         * Verifies a LoginLogout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace LoginLogout {

        /** LoginoutType enum. */
        enum LoginoutType {
            LOGIN = 0,
            LOGOUT = 1
        }
    }

    /** Properties of a LoginLogoutResp. */
    interface ILoginLogoutResp {
    }

    /** Represents a LoginLogoutResp. */
    class LoginLogoutResp implements ILoginLogoutResp {

        /**
         * Constructs a new LoginLogoutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoMessage.ILoginLogoutResp);

        /**
         * Creates a new LoginLogoutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginLogoutResp instance
         */
        public static create(properties?: protoMessage.ILoginLogoutResp): protoMessage.LoginLogoutResp;

        /**
         * Encodes the specified LoginLogoutResp message. Does not implicitly {@link protoMessage.LoginLogoutResp.verify|verify} messages.
         * @param message LoginLogoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoMessage.ILoginLogoutResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginLogoutResp message, length delimited. Does not implicitly {@link protoMessage.LoginLogoutResp.verify|verify} messages.
         * @param message LoginLogoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoMessage.ILoginLogoutResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginLogoutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginLogoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protoMessage.LoginLogoutResp;

        /**
         * Decodes a LoginLogoutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginLogoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protoMessage.LoginLogoutResp;

        /**
         * Verifies a LoginLogoutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Plant. */
    interface IPlant {

        /** Plant action */
        action?: (protoMessage.Plant.Action|null);

        /** Plant target */
        target?: (string|null);
    }

    /** Represents a Plant. */
    class Plant implements IPlant {

        /**
         * Constructs a new Plant.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoMessage.IPlant);

        /** Plant action. */
        public action: protoMessage.Plant.Action;

        /** Plant target. */
        public target: string;

        /**
         * Creates a new Plant instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Plant instance
         */
        public static create(properties?: protoMessage.IPlant): protoMessage.Plant;

        /**
         * Encodes the specified Plant message. Does not implicitly {@link protoMessage.Plant.verify|verify} messages.
         * @param message Plant message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoMessage.IPlant, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Plant message, length delimited. Does not implicitly {@link protoMessage.Plant.verify|verify} messages.
         * @param message Plant message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoMessage.IPlant, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Plant message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Plant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protoMessage.Plant;

        /**
         * Decodes a Plant message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Plant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protoMessage.Plant;

        /**
         * Verifies a Plant message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace Plant {

        /** Action enum. */
        enum Action {
            NEW = 0,
            Watering = 1,
            Upgrade = 2,
            Pick = 3
        }
    }
}
