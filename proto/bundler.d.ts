import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace base. */
export namespace base {

    /** Properties of an InitReq. */
    interface IInitReq {

        /** InitReq c2s */
        c2s: base.InitReq.IC2S;
    }

    /** 初始化请求 */
    class InitReq implements IInitReq {

        /**
         * Constructs a new InitReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IInitReq);

        /** InitReq c2s. */
        public c2s: base.InitReq.IC2S;

        /**
         * Creates a new InitReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitReq instance
         */
        public static create(properties?: base.IInitReq): base.InitReq;

        /**
         * Encodes the specified InitReq message. Does not implicitly {@link base.InitReq.verify|verify} messages.
         * @param message InitReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IInitReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitReq message, length delimited. Does not implicitly {@link base.InitReq.verify|verify} messages.
         * @param message InitReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IInitReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.InitReq;

        /**
         * Decodes an InitReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.InitReq;

        /**
         * Verifies an InitReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitReq
         */
        public static fromObject(object: { [k: string]: any }): base.InitReq;

        /**
         * Creates a plain object from an InitReq message. Also converts values to other types if specified.
         * @param message InitReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.InitReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InitReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InitReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** 客户端版本号，clientVer = "."以前的数 * 100 + "."以后的，举例：1.1版本的 clientVer 为1 * 100 + 1 = 101，2.21版本为2 * 100 + 21 = 221 */
            clientVer: number;

            /** 客户端唯一标识，无生具体生成规则，客户端自己保证唯一性即可 */
            clientID: string;

            /** 此连接是否接收市场状态、交易需要重新解锁等等事件通知，true 代表接收，OpenD 就会向此连接推送这些通知，反之 false 代表不接收不推送如果通信要加密，首先得在 OpenD 和客户端都配置 RSA 密钥，不配置始终不加密 */
            recvNotify?: (boolean|null);

            /**
             * 如果配置了 RSA 密钥且指定的加密算法不为 PacketEncAlgo_None 则加密(即便这里不设置，配置了 RSA 密钥，也会采用默认加密方式)，默认采用 FTAES_ECB 算法
             * 指定包加密算法，参见 Common.PacketEncAlgo 的枚举定义
             */
            packetEncAlgo?: (number|null);

            /** 指定这条连接上的推送协议格式，若不指定则使用 push_proto_type 配置项 */
            pushProtoFmt?: (number|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.InitReq.IC2S);

            /** 客户端版本号，clientVer = "."以前的数 * 100 + "."以后的，举例：1.1版本的 clientVer 为1 * 100 + 1 = 101，2.21版本为2 * 100 + 21 = 221 */
            public clientVer: number;

            /** 客户端唯一标识，无生具体生成规则，客户端自己保证唯一性即可 */
            public clientID: string;

            /** 此连接是否接收市场状态、交易需要重新解锁等等事件通知，true 代表接收，OpenD 就会向此连接推送这些通知，反之 false 代表不接收不推送如果通信要加密，首先得在 OpenD 和客户端都配置 RSA 密钥，不配置始终不加密 */
            public recvNotify: boolean;

            /**
             * 如果配置了 RSA 密钥且指定的加密算法不为 PacketEncAlgo_None 则加密(即便这里不设置，配置了 RSA 密钥，也会采用默认加密方式)，默认采用 FTAES_ECB 算法
             * 指定包加密算法，参见 Common.PacketEncAlgo 的枚举定义
             */
            public packetEncAlgo: number;

            /** 指定这条连接上的推送协议格式，若不指定则使用 push_proto_type 配置项 */
            public pushProtoFmt: number;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.InitReq.IC2S): base.InitReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.InitReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.InitReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.InitReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.InitReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.InitReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.InitReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.InitReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.InitReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an InitRes. */
    interface IInitRes {

        /** InitRes retType */
        retType: number;

        /** InitRes retMsg */
        retMsg?: (string|null);

        /** InitRes errCode */
        errCode?: (number|null);

        /** InitRes s2c */
        s2c?: (base.InitRes.IS2C|null);
    }

    /** 初始化响应 */
    class InitRes implements IInitRes {

        /**
         * Constructs a new InitRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IInitRes);

        /** InitRes retType. */
        public retType: number;

        /** InitRes retMsg. */
        public retMsg: string;

        /** InitRes errCode. */
        public errCode: number;

        /** InitRes s2c. */
        public s2c?: (base.InitRes.IS2C|null);

        /**
         * Creates a new InitRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitRes instance
         */
        public static create(properties?: base.IInitRes): base.InitRes;

        /**
         * Encodes the specified InitRes message. Does not implicitly {@link base.InitRes.verify|verify} messages.
         * @param message InitRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IInitRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitRes message, length delimited. Does not implicitly {@link base.InitRes.verify|verify} messages.
         * @param message InitRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IInitRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.InitRes;

        /**
         * Decodes an InitRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.InitRes;

        /**
         * Verifies an InitRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitRes
         */
        public static fromObject(object: { [k: string]: any }): base.InitRes;

        /**
         * Creates a plain object from an InitRes message. Also converts values to other types if specified.
         * @param message InitRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.InitRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InitRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InitRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** OpenD 的版本号 */
            serverVer: number;

            /** OpenD 登录的用户 ID */
            loginUserID: (number|Long);

            /** 此连接的连接 ID，连接的唯一标识 */
            connID: (number|Long);

            /** 此连接后续 AES 加密通信的 Key，固定为16字节长字符串 */
            connAESKey: string;

            /** 心跳保活间隔 */
            keepAliveInterval: number;

            /** AES 加密通信 CBC 加密模式的 iv，固定为16字节长字符串 */
            aesCBCiv?: (string|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.InitRes.IS2C);

            /** OpenD 的版本号 */
            public serverVer: number;

            /** OpenD 登录的用户 ID */
            public loginUserID: (number|Long);

            /** 此连接的连接 ID，连接的唯一标识 */
            public connID: (number|Long);

            /** 此连接后续 AES 加密通信的 Key，固定为16字节长字符串 */
            public connAESKey: string;

            /** 心跳保活间隔 */
            public keepAliveInterval: number;

            /** AES 加密通信 CBC 加密模式的 iv，固定为16字节长字符串 */
            public aesCBCiv: string;

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.InitRes.IS2C): base.InitRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.InitRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.InitRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.InitRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.InitRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.InitRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.InitRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.InitRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.InitRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an UnlockReq. */
    interface IUnlockReq {

        /** UnlockReq c2s */
        c2s: base.UnlockReq.IC2S;
    }

    /** 交易解锁请求 */
    class UnlockReq implements IUnlockReq {

        /**
         * Constructs a new UnlockReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IUnlockReq);

        /** UnlockReq c2s. */
        public c2s: base.UnlockReq.IC2S;

        /**
         * Creates a new UnlockReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnlockReq instance
         */
        public static create(properties?: base.IUnlockReq): base.UnlockReq;

        /**
         * Encodes the specified UnlockReq message. Does not implicitly {@link base.UnlockReq.verify|verify} messages.
         * @param message UnlockReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IUnlockReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnlockReq message, length delimited. Does not implicitly {@link base.UnlockReq.verify|verify} messages.
         * @param message UnlockReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IUnlockReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnlockReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnlockReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.UnlockReq;

        /**
         * Decodes an UnlockReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnlockReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.UnlockReq;

        /**
         * Verifies an UnlockReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnlockReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnlockReq
         */
        public static fromObject(object: { [k: string]: any }): base.UnlockReq;

        /**
         * Creates a plain object from an UnlockReq message. Also converts values to other types if specified.
         * @param message UnlockReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.UnlockReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnlockReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UnlockReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace UnlockReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S unlock */
            unlock: boolean;

            /** C2S pwdMD5 */
            pwdMD5?: (string|null);

            /** C2S securityFirm */
            securityFirm?: (common.SecurityFirm|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.UnlockReq.IC2S);

            /** C2S unlock. */
            public unlock: boolean;

            /** C2S pwdMD5. */
            public pwdMD5: string;

            /** C2S securityFirm. */
            public securityFirm: common.SecurityFirm;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.UnlockReq.IC2S): base.UnlockReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.UnlockReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.UnlockReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.UnlockReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.UnlockReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.UnlockReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.UnlockReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.UnlockReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.UnlockReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an UnlockRes. */
    interface IUnlockRes {

        /** UnlockRes retType */
        retType: number;

        /** UnlockRes retMsg */
        retMsg?: (string|null);

        /** UnlockRes errCode */
        errCode?: (number|null);

        /** UnlockRes s2c */
        s2c?: (base.UnlockRes.IS2C|null);
    }

    /** 交易解锁响应 */
    class UnlockRes implements IUnlockRes {

        /**
         * Constructs a new UnlockRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IUnlockRes);

        /** UnlockRes retType. */
        public retType: number;

        /** UnlockRes retMsg. */
        public retMsg: string;

        /** UnlockRes errCode. */
        public errCode: number;

        /** UnlockRes s2c. */
        public s2c?: (base.UnlockRes.IS2C|null);

        /**
         * Creates a new UnlockRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnlockRes instance
         */
        public static create(properties?: base.IUnlockRes): base.UnlockRes;

        /**
         * Encodes the specified UnlockRes message. Does not implicitly {@link base.UnlockRes.verify|verify} messages.
         * @param message UnlockRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IUnlockRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnlockRes message, length delimited. Does not implicitly {@link base.UnlockRes.verify|verify} messages.
         * @param message UnlockRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IUnlockRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnlockRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnlockRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.UnlockRes;

        /**
         * Decodes an UnlockRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnlockRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.UnlockRes;

        /**
         * Verifies an UnlockRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnlockRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnlockRes
         */
        public static fromObject(object: { [k: string]: any }): base.UnlockRes;

        /**
         * Creates a plain object from an UnlockRes message. Also converts values to other types if specified.
         * @param message UnlockRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.UnlockRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnlockRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UnlockRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace UnlockRes {

        /** Properties of a S2C. */
        interface IS2C {
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.UnlockRes.IS2C);

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.UnlockRes.IS2C): base.UnlockRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.UnlockRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.UnlockRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.UnlockRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.UnlockRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.UnlockRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.UnlockRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.UnlockRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.UnlockRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Ping. */
    interface IPing {

        /** Ping c2s */
        c2s: base.Ping.IC2S;
    }

    /** 心跳检测：ping */
    class Ping implements IPing {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IPing);

        /** Ping c2s. */
        public c2s: base.Ping.IC2S;

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: base.IPing): base.Ping;

        /**
         * Encodes the specified Ping message. Does not implicitly {@link base.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link base.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.Ping;

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.Ping;

        /**
         * Verifies a Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ping
         */
        public static fromObject(object: { [k: string]: any }): base.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Ping {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S time */
            time: (number|Long);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.Ping.IC2S);

            /** C2S time. */
            public time: (number|Long);

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.Ping.IC2S): base.Ping.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.Ping.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.Ping.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.Ping.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.Ping.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.Ping.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.Ping.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.Ping.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.Ping.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Pong. */
    interface IPong {

        /** Pong retType */
        retType: number;

        /** Pong retMsg */
        retMsg?: (string|null);

        /** Pong errCode */
        errCode?: (number|null);

        /** Pong s2c */
        s2c?: (base.Pong.IS2C|null);
    }

    /** 心跳响应 */
    class Pong implements IPong {

        /**
         * Constructs a new Pong.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IPong);

        /** Pong retType. */
        public retType: number;

        /** Pong retMsg. */
        public retMsg: string;

        /** Pong errCode. */
        public errCode: number;

        /** Pong s2c. */
        public s2c?: (base.Pong.IS2C|null);

        /**
         * Creates a new Pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pong instance
         */
        public static create(properties?: base.IPong): base.Pong;

        /**
         * Encodes the specified Pong message. Does not implicitly {@link base.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link base.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.Pong;

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.Pong;

        /**
         * Verifies a Pong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pong
         */
        public static fromObject(object: { [k: string]: any }): base.Pong;

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @param message Pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Pong
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Pong {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C time */
            time: (number|Long);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.Pong.IS2C);

            /** S2C time. */
            public time: (number|Long);

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.Pong.IS2C): base.Pong.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.Pong.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.Pong.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.Pong.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.Pong.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.Pong.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.Pong.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.Pong.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.Pong.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an AccReq. */
    interface IAccReq {

        /** AccReq c2s */
        c2s: base.AccReq.IC2S;
    }

    /** 获取账户列表请求 */
    class AccReq implements IAccReq {

        /**
         * Constructs a new AccReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IAccReq);

        /** AccReq c2s. */
        public c2s: base.AccReq.IC2S;

        /**
         * Creates a new AccReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccReq instance
         */
        public static create(properties?: base.IAccReq): base.AccReq;

        /**
         * Encodes the specified AccReq message. Does not implicitly {@link base.AccReq.verify|verify} messages.
         * @param message AccReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IAccReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccReq message, length delimited. Does not implicitly {@link base.AccReq.verify|verify} messages.
         * @param message AccReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IAccReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.AccReq;

        /**
         * Decodes an AccReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.AccReq;

        /**
         * Verifies an AccReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccReq
         */
        public static fromObject(object: { [k: string]: any }): base.AccReq;

        /**
         * Creates a plain object from an AccReq message. Also converts values to other types if specified.
         * @param message AccReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.AccReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AccReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S userID */
            userID: (number|Long);

            /** C2S trdCategory */
            trdCategory?: (common.TrdCategory|null);

            /** C2S needGeneralSecAccount */
            needGeneralSecAccount?: (boolean|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.AccReq.IC2S);

            /** C2S userID. */
            public userID: (number|Long);

            /** C2S trdCategory. */
            public trdCategory: common.TrdCategory;

            /** C2S needGeneralSecAccount. */
            public needGeneralSecAccount: boolean;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.AccReq.IC2S): base.AccReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.AccReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.AccReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.AccReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.AccReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.AccReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.AccReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.AccReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.AccReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an AccRes. */
    interface IAccRes {

        /** AccRes retType */
        retType: number;

        /** AccRes retMsg */
        retMsg?: (string|null);

        /** AccRes errCode */
        errCode?: (number|null);

        /** AccRes s2c */
        s2c?: (base.AccRes.IS2C|null);
    }

    /** 获取账户列表响应 */
    class AccRes implements IAccRes {

        /**
         * Constructs a new AccRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IAccRes);

        /** AccRes retType. */
        public retType: number;

        /** AccRes retMsg. */
        public retMsg: string;

        /** AccRes errCode. */
        public errCode: number;

        /** AccRes s2c. */
        public s2c?: (base.AccRes.IS2C|null);

        /**
         * Creates a new AccRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccRes instance
         */
        public static create(properties?: base.IAccRes): base.AccRes;

        /**
         * Encodes the specified AccRes message. Does not implicitly {@link base.AccRes.verify|verify} messages.
         * @param message AccRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IAccRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccRes message, length delimited. Does not implicitly {@link base.AccRes.verify|verify} messages.
         * @param message AccRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IAccRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.AccRes;

        /**
         * Decodes an AccRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.AccRes;

        /**
         * Verifies an AccRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccRes
         */
        public static fromObject(object: { [k: string]: any }): base.AccRes;

        /**
         * Creates a plain object from an AccRes message. Also converts values to other types if specified.
         * @param message AccRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.AccRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AccRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C accList */
            accList?: (common.ITrdAcc[]|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.AccRes.IS2C);

            /** S2C accList. */
            public accList: common.ITrdAcc[];

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.AccRes.IS2C): base.AccRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.AccRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.AccRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.AccRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.AccRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.AccRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.AccRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.AccRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.AccRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a FundReq. */
    interface IFundReq {

        /** FundReq c2s */
        c2s: base.FundReq.IC2S;
    }

    /** 查询账户资金请求 */
    class FundReq implements IFundReq {

        /**
         * Constructs a new FundReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IFundReq);

        /** FundReq c2s. */
        public c2s: base.FundReq.IC2S;

        /**
         * Creates a new FundReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FundReq instance
         */
        public static create(properties?: base.IFundReq): base.FundReq;

        /**
         * Encodes the specified FundReq message. Does not implicitly {@link base.FundReq.verify|verify} messages.
         * @param message FundReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IFundReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FundReq message, length delimited. Does not implicitly {@link base.FundReq.verify|verify} messages.
         * @param message FundReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IFundReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FundReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FundReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.FundReq;

        /**
         * Decodes a FundReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FundReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.FundReq;

        /**
         * Verifies a FundReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FundReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FundReq
         */
        public static fromObject(object: { [k: string]: any }): base.FundReq;

        /**
         * Creates a plain object from a FundReq message. Also converts values to other types if specified.
         * @param message FundReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.FundReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FundReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FundReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FundReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S header */
            header: common.ITrdHeader;

            /** C2S refreshCache */
            refreshCache?: (boolean|null);

            /** C2S currency */
            currency?: (number|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.FundReq.IC2S);

            /** C2S header. */
            public header: common.ITrdHeader;

            /** C2S refreshCache. */
            public refreshCache: boolean;

            /** C2S currency. */
            public currency: number;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.FundReq.IC2S): base.FundReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.FundReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.FundReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.FundReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.FundReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.FundReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.FundReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.FundReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.FundReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a FundRes. */
    interface IFundRes {

        /** FundRes retType */
        retType: number;

        /** FundRes retMsg */
        retMsg?: (string|null);

        /** FundRes errCode */
        errCode?: (number|null);

        /** FundRes s2c */
        s2c?: (base.FundRes.IS2C|null);
    }

    /** 查询账户资金响应 */
    class FundRes implements IFundRes {

        /**
         * Constructs a new FundRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IFundRes);

        /** FundRes retType. */
        public retType: number;

        /** FundRes retMsg. */
        public retMsg: string;

        /** FundRes errCode. */
        public errCode: number;

        /** FundRes s2c. */
        public s2c?: (base.FundRes.IS2C|null);

        /**
         * Creates a new FundRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FundRes instance
         */
        public static create(properties?: base.IFundRes): base.FundRes;

        /**
         * Encodes the specified FundRes message. Does not implicitly {@link base.FundRes.verify|verify} messages.
         * @param message FundRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IFundRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FundRes message, length delimited. Does not implicitly {@link base.FundRes.verify|verify} messages.
         * @param message FundRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IFundRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FundRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FundRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.FundRes;

        /**
         * Decodes a FundRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FundRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.FundRes;

        /**
         * Verifies a FundRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FundRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FundRes
         */
        public static fromObject(object: { [k: string]: any }): base.FundRes;

        /**
         * Creates a plain object from a FundRes message. Also converts values to other types if specified.
         * @param message FundRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.FundRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FundRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FundRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FundRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C header */
            header: common.ITrdHeader;

            /** S2C funds */
            funds?: (common.IFunds|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.FundRes.IS2C);

            /** S2C header. */
            public header: common.ITrdHeader;

            /** S2C funds. */
            public funds?: (common.IFunds|null);

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.FundRes.IS2C): base.FundRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.FundRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.FundRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.FundRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.FundRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.FundRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.FundRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.FundRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.FundRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a stockReq. */
    interface IstockReq {

        /** stockReq c2s */
        c2s: base.stockReq.IC2S;
    }

    /** 查询股票基本信息请求 */
    class stockReq implements IstockReq {

        /**
         * Constructs a new stockReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IstockReq);

        /** stockReq c2s. */
        public c2s: base.stockReq.IC2S;

        /**
         * Creates a new stockReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns stockReq instance
         */
        public static create(properties?: base.IstockReq): base.stockReq;

        /**
         * Encodes the specified stockReq message. Does not implicitly {@link base.stockReq.verify|verify} messages.
         * @param message stockReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IstockReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified stockReq message, length delimited. Does not implicitly {@link base.stockReq.verify|verify} messages.
         * @param message stockReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IstockReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a stockReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns stockReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.stockReq;

        /**
         * Decodes a stockReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns stockReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.stockReq;

        /**
         * Verifies a stockReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a stockReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns stockReq
         */
        public static fromObject(object: { [k: string]: any }): base.stockReq;

        /**
         * Creates a plain object from a stockReq message. Also converts values to other types if specified.
         * @param message stockReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.stockReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this stockReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for stockReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace stockReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S securityList */
            securityList?: (common.ISecurity[]|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.stockReq.IC2S);

            /** C2S securityList. */
            public securityList: common.ISecurity[];

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.stockReq.IC2S): base.stockReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.stockReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.stockReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.stockReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.stockReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.stockReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.stockReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.stockReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.stockReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a stockRes. */
    interface IstockRes {

        /** stockRes retType */
        retType: number;

        /** stockRes retMsg */
        retMsg?: (string|null);

        /** stockRes errCode */
        errCode?: (number|null);

        /** stockRes s2c */
        s2c?: (base.stockRes.IS2C|null);
    }

    /** 查询股票基本信息响应 */
    class stockRes implements IstockRes {

        /**
         * Constructs a new stockRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IstockRes);

        /** stockRes retType. */
        public retType: number;

        /** stockRes retMsg. */
        public retMsg: string;

        /** stockRes errCode. */
        public errCode: number;

        /** stockRes s2c. */
        public s2c?: (base.stockRes.IS2C|null);

        /**
         * Creates a new stockRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns stockRes instance
         */
        public static create(properties?: base.IstockRes): base.stockRes;

        /**
         * Encodes the specified stockRes message. Does not implicitly {@link base.stockRes.verify|verify} messages.
         * @param message stockRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IstockRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified stockRes message, length delimited. Does not implicitly {@link base.stockRes.verify|verify} messages.
         * @param message stockRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IstockRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a stockRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns stockRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.stockRes;

        /**
         * Decodes a stockRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns stockRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.stockRes;

        /**
         * Verifies a stockRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a stockRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns stockRes
         */
        public static fromObject(object: { [k: string]: any }): base.stockRes;

        /**
         * Creates a plain object from a stockRes message. Also converts values to other types if specified.
         * @param message stockRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.stockRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this stockRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for stockRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace stockRes {

        /** Properties of a Snapshot. */
        interface ISnapshot {

            /** 快照基本数据 */
            basic: common.ISnapshotBasicData;

            /** 正股快照额外数据 */
            equityExData?: (common.IEquitySnapshotExData|null);

            /** Snapshot warrantExData */
            warrantExData?: (common.IWarrantSnapshotExData|null);

            /** Snapshot optionExData */
            optionExData?: (common.IOptionSnapshotExData|null);

            /** Snapshot indexExData */
            indexExData?: (common.IIndexSnapshotExData|null);

            /** Snapshot plateExData */
            plateExData?: (common.IPlateSnapshotExData|null);

            /** Snapshot futureExData */
            futureExData?: (common.IFutureSnapshotExData|null);

            /** Snapshot trustExData */
            trustExData?: (common.ITrustSnapshotExData|null);
        }

        /** Represents a Snapshot. */
        class Snapshot implements ISnapshot {

            /**
             * Constructs a new Snapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.stockRes.ISnapshot);

            /** 快照基本数据 */
            public basic: common.ISnapshotBasicData;

            /** 正股快照额外数据 */
            public equityExData?: (common.IEquitySnapshotExData|null);

            /** Snapshot warrantExData. */
            public warrantExData?: (common.IWarrantSnapshotExData|null);

            /** Snapshot optionExData. */
            public optionExData?: (common.IOptionSnapshotExData|null);

            /** Snapshot indexExData. */
            public indexExData?: (common.IIndexSnapshotExData|null);

            /** Snapshot plateExData. */
            public plateExData?: (common.IPlateSnapshotExData|null);

            /** Snapshot futureExData. */
            public futureExData?: (common.IFutureSnapshotExData|null);

            /** Snapshot trustExData. */
            public trustExData?: (common.ITrustSnapshotExData|null);

            /**
             * Creates a new Snapshot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Snapshot instance
             */
            public static create(properties?: base.stockRes.ISnapshot): base.stockRes.Snapshot;

            /**
             * Encodes the specified Snapshot message. Does not implicitly {@link base.stockRes.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.stockRes.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Snapshot message, length delimited. Does not implicitly {@link base.stockRes.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.stockRes.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Snapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.stockRes.Snapshot;

            /**
             * Decodes a Snapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.stockRes.Snapshot;

            /**
             * Verifies a Snapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Snapshot
             */
            public static fromObject(object: { [k: string]: any }): base.stockRes.Snapshot;

            /**
             * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
             * @param message Snapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.stockRes.Snapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Snapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Snapshot
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C snapshotList */
            snapshotList?: (base.stockRes.ISnapshot[]|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.stockRes.IS2C);

            /** S2C snapshotList. */
            public snapshotList: base.stockRes.ISnapshot[];

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.stockRes.IS2C): base.stockRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.stockRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.stockRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.stockRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.stockRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.stockRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.stockRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.stockRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.stockRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CapFlowReq. */
    interface ICapFlowReq {

        /** CapFlowReq c2s */
        c2s: base.CapFlowReq.IC2S;
    }

    /** 获取资金流向请求 */
    class CapFlowReq implements ICapFlowReq {

        /**
         * Constructs a new CapFlowReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.ICapFlowReq);

        /** CapFlowReq c2s. */
        public c2s: base.CapFlowReq.IC2S;

        /**
         * Creates a new CapFlowReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CapFlowReq instance
         */
        public static create(properties?: base.ICapFlowReq): base.CapFlowReq;

        /**
         * Encodes the specified CapFlowReq message. Does not implicitly {@link base.CapFlowReq.verify|verify} messages.
         * @param message CapFlowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.ICapFlowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CapFlowReq message, length delimited. Does not implicitly {@link base.CapFlowReq.verify|verify} messages.
         * @param message CapFlowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.ICapFlowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CapFlowReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CapFlowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapFlowReq;

        /**
         * Decodes a CapFlowReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CapFlowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapFlowReq;

        /**
         * Verifies a CapFlowReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CapFlowReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CapFlowReq
         */
        public static fromObject(object: { [k: string]: any }): base.CapFlowReq;

        /**
         * Creates a plain object from a CapFlowReq message. Also converts values to other types if specified.
         * @param message CapFlowReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.CapFlowReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CapFlowReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CapFlowReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CapFlowReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S security */
            security: common.ISecurity;

            /** C2S periodType */
            periodType?: (number|null);

            /** C2S beginTime */
            beginTime?: (string|null);

            /** C2S endTime */
            endTime?: (string|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.CapFlowReq.IC2S);

            /** C2S security. */
            public security: common.ISecurity;

            /** C2S periodType. */
            public periodType: number;

            /** C2S beginTime. */
            public beginTime: string;

            /** C2S endTime. */
            public endTime: string;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.CapFlowReq.IC2S): base.CapFlowReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.CapFlowReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.CapFlowReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.CapFlowReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.CapFlowReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapFlowReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapFlowReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.CapFlowReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.CapFlowReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CapFlowRes. */
    interface ICapFlowRes {

        /** CapFlowRes retType */
        retType: number;

        /** CapFlowRes retMsg */
        retMsg?: (string|null);

        /** CapFlowRes errCode */
        errCode?: (number|null);

        /** CapFlowRes s2c */
        s2c?: (base.CapFlowRes.IS2C|null);
    }

    /** 获取资金流向响应 */
    class CapFlowRes implements ICapFlowRes {

        /**
         * Constructs a new CapFlowRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.ICapFlowRes);

        /** CapFlowRes retType. */
        public retType: number;

        /** CapFlowRes retMsg. */
        public retMsg: string;

        /** CapFlowRes errCode. */
        public errCode: number;

        /** CapFlowRes s2c. */
        public s2c?: (base.CapFlowRes.IS2C|null);

        /**
         * Creates a new CapFlowRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CapFlowRes instance
         */
        public static create(properties?: base.ICapFlowRes): base.CapFlowRes;

        /**
         * Encodes the specified CapFlowRes message. Does not implicitly {@link base.CapFlowRes.verify|verify} messages.
         * @param message CapFlowRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.ICapFlowRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CapFlowRes message, length delimited. Does not implicitly {@link base.CapFlowRes.verify|verify} messages.
         * @param message CapFlowRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.ICapFlowRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CapFlowRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CapFlowRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapFlowRes;

        /**
         * Decodes a CapFlowRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CapFlowRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapFlowRes;

        /**
         * Verifies a CapFlowRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CapFlowRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CapFlowRes
         */
        public static fromObject(object: { [k: string]: any }): base.CapFlowRes;

        /**
         * Creates a plain object from a CapFlowRes message. Also converts values to other types if specified.
         * @param message CapFlowRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.CapFlowRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CapFlowRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CapFlowRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CapFlowRes {

        /** Properties of a CapitalFlowItem. */
        interface ICapitalFlowItem {

            /** CapitalFlowItem inFlow */
            inFlow: number;

            /** CapitalFlowItem time */
            time?: (string|null);

            /** CapitalFlowItem timestamp */
            timestamp?: (number|null);

            /** CapitalFlowItem mainInFlow */
            mainInFlow?: (number|null);

            /** CapitalFlowItem superInFlow */
            superInFlow?: (number|null);

            /** CapitalFlowItem bigInFlow */
            bigInFlow?: (number|null);

            /** CapitalFlowItem midInFlow */
            midInFlow?: (number|null);

            /** CapitalFlowItem smlInFlow */
            smlInFlow?: (number|null);
        }

        /** Represents a CapitalFlowItem. */
        class CapitalFlowItem implements ICapitalFlowItem {

            /**
             * Constructs a new CapitalFlowItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.CapFlowRes.ICapitalFlowItem);

            /** CapitalFlowItem inFlow. */
            public inFlow: number;

            /** CapitalFlowItem time. */
            public time: string;

            /** CapitalFlowItem timestamp. */
            public timestamp: number;

            /** CapitalFlowItem mainInFlow. */
            public mainInFlow: number;

            /** CapitalFlowItem superInFlow. */
            public superInFlow: number;

            /** CapitalFlowItem bigInFlow. */
            public bigInFlow: number;

            /** CapitalFlowItem midInFlow. */
            public midInFlow: number;

            /** CapitalFlowItem smlInFlow. */
            public smlInFlow: number;

            /**
             * Creates a new CapitalFlowItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CapitalFlowItem instance
             */
            public static create(properties?: base.CapFlowRes.ICapitalFlowItem): base.CapFlowRes.CapitalFlowItem;

            /**
             * Encodes the specified CapitalFlowItem message. Does not implicitly {@link base.CapFlowRes.CapitalFlowItem.verify|verify} messages.
             * @param message CapitalFlowItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.CapFlowRes.ICapitalFlowItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CapitalFlowItem message, length delimited. Does not implicitly {@link base.CapFlowRes.CapitalFlowItem.verify|verify} messages.
             * @param message CapitalFlowItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.CapFlowRes.ICapitalFlowItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CapitalFlowItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CapitalFlowItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapFlowRes.CapitalFlowItem;

            /**
             * Decodes a CapitalFlowItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CapitalFlowItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapFlowRes.CapitalFlowItem;

            /**
             * Verifies a CapitalFlowItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CapitalFlowItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CapitalFlowItem
             */
            public static fromObject(object: { [k: string]: any }): base.CapFlowRes.CapitalFlowItem;

            /**
             * Creates a plain object from a CapitalFlowItem message. Also converts values to other types if specified.
             * @param message CapitalFlowItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.CapFlowRes.CapitalFlowItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CapitalFlowItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CapitalFlowItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C flowItemList */
            flowItemList?: (base.CapFlowRes.ICapitalFlowItem[]|null);

            /** S2C lastValidTime */
            lastValidTime?: (string|null);

            /** S2C lastValidTimestamp */
            lastValidTimestamp?: (number|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.CapFlowRes.IS2C);

            /** S2C flowItemList. */
            public flowItemList: base.CapFlowRes.ICapitalFlowItem[];

            /** S2C lastValidTime. */
            public lastValidTime: string;

            /** S2C lastValidTimestamp. */
            public lastValidTimestamp: number;

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.CapFlowRes.IS2C): base.CapFlowRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.CapFlowRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.CapFlowRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.CapFlowRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.CapFlowRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapFlowRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapFlowRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.CapFlowRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.CapFlowRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CapDistReq. */
    interface ICapDistReq {

        /** CapDistReq c2s */
        c2s: base.CapDistReq.IC2S;
    }

    /** 获取资金分布请求 */
    class CapDistReq implements ICapDistReq {

        /**
         * Constructs a new CapDistReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.ICapDistReq);

        /** CapDistReq c2s. */
        public c2s: base.CapDistReq.IC2S;

        /**
         * Creates a new CapDistReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CapDistReq instance
         */
        public static create(properties?: base.ICapDistReq): base.CapDistReq;

        /**
         * Encodes the specified CapDistReq message. Does not implicitly {@link base.CapDistReq.verify|verify} messages.
         * @param message CapDistReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.ICapDistReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CapDistReq message, length delimited. Does not implicitly {@link base.CapDistReq.verify|verify} messages.
         * @param message CapDistReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.ICapDistReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CapDistReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CapDistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapDistReq;

        /**
         * Decodes a CapDistReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CapDistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapDistReq;

        /**
         * Verifies a CapDistReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CapDistReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CapDistReq
         */
        public static fromObject(object: { [k: string]: any }): base.CapDistReq;

        /**
         * Creates a plain object from a CapDistReq message. Also converts values to other types if specified.
         * @param message CapDistReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.CapDistReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CapDistReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CapDistReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CapDistReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S security */
            security: common.ISecurity;
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.CapDistReq.IC2S);

            /** C2S security. */
            public security: common.ISecurity;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.CapDistReq.IC2S): base.CapDistReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.CapDistReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.CapDistReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.CapDistReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.CapDistReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapDistReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapDistReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.CapDistReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.CapDistReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CapDistRes. */
    interface ICapDistRes {

        /** CapDistRes retType */
        retType: number;

        /** CapDistRes retMsg */
        retMsg?: (string|null);

        /** CapDistRes errCode */
        errCode?: (number|null);

        /** CapDistRes s2c */
        s2c?: (base.CapDistRes.IS2C|null);
    }

    /** 获取资金分布响应 */
    class CapDistRes implements ICapDistRes {

        /**
         * Constructs a new CapDistRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.ICapDistRes);

        /** CapDistRes retType. */
        public retType: number;

        /** CapDistRes retMsg. */
        public retMsg: string;

        /** CapDistRes errCode. */
        public errCode: number;

        /** CapDistRes s2c. */
        public s2c?: (base.CapDistRes.IS2C|null);

        /**
         * Creates a new CapDistRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CapDistRes instance
         */
        public static create(properties?: base.ICapDistRes): base.CapDistRes;

        /**
         * Encodes the specified CapDistRes message. Does not implicitly {@link base.CapDistRes.verify|verify} messages.
         * @param message CapDistRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.ICapDistRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CapDistRes message, length delimited. Does not implicitly {@link base.CapDistRes.verify|verify} messages.
         * @param message CapDistRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.ICapDistRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CapDistRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CapDistRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapDistRes;

        /**
         * Decodes a CapDistRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CapDistRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapDistRes;

        /**
         * Verifies a CapDistRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CapDistRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CapDistRes
         */
        public static fromObject(object: { [k: string]: any }): base.CapDistRes;

        /**
         * Creates a plain object from a CapDistRes message. Also converts values to other types if specified.
         * @param message CapDistRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.CapDistRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CapDistRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CapDistRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CapDistRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C capitalInSuper */
            capitalInSuper?: (number|null);

            /** S2C capitalInBig */
            capitalInBig: number;

            /** S2C capitalInMid */
            capitalInMid: number;

            /** S2C capitalInSmall */
            capitalInSmall: number;

            /** S2C capitalOutSuper */
            capitalOutSuper?: (number|null);

            /** S2C capitalOutBig */
            capitalOutBig: number;

            /** S2C capitalOutMid */
            capitalOutMid: number;

            /** S2C capitalOutSmall */
            capitalOutSmall: number;

            /** S2C updateTime */
            updateTime?: (string|null);

            /** S2C updateTimestamp */
            updateTimestamp?: (number|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.CapDistRes.IS2C);

            /** S2C capitalInSuper. */
            public capitalInSuper: number;

            /** S2C capitalInBig. */
            public capitalInBig: number;

            /** S2C capitalInMid. */
            public capitalInMid: number;

            /** S2C capitalInSmall. */
            public capitalInSmall: number;

            /** S2C capitalOutSuper. */
            public capitalOutSuper: number;

            /** S2C capitalOutBig. */
            public capitalOutBig: number;

            /** S2C capitalOutMid. */
            public capitalOutMid: number;

            /** S2C capitalOutSmall. */
            public capitalOutSmall: number;

            /** S2C updateTime. */
            public updateTime: string;

            /** S2C updateTimestamp. */
            public updateTimestamp: number;

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.CapDistRes.IS2C): base.CapDistRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.CapDistRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.CapDistRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.CapDistRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.CapDistRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.CapDistRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.CapDistRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.CapDistRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.CapDistRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a PositionReq. */
    interface IPositionReq {

        /** PositionReq c2s */
        c2s: base.PositionReq.IC2S;
    }

    /** 获取账户持仓请求 */
    class PositionReq implements IPositionReq {

        /**
         * Constructs a new PositionReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IPositionReq);

        /** PositionReq c2s. */
        public c2s: base.PositionReq.IC2S;

        /**
         * Creates a new PositionReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PositionReq instance
         */
        public static create(properties?: base.IPositionReq): base.PositionReq;

        /**
         * Encodes the specified PositionReq message. Does not implicitly {@link base.PositionReq.verify|verify} messages.
         * @param message PositionReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IPositionReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PositionReq message, length delimited. Does not implicitly {@link base.PositionReq.verify|verify} messages.
         * @param message PositionReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IPositionReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PositionReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PositionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.PositionReq;

        /**
         * Decodes a PositionReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PositionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.PositionReq;

        /**
         * Verifies a PositionReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PositionReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PositionReq
         */
        public static fromObject(object: { [k: string]: any }): base.PositionReq;

        /**
         * Creates a plain object from a PositionReq message. Also converts values to other types if specified.
         * @param message PositionReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.PositionReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PositionReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PositionReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PositionReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S header */
            header: common.ITrdHeader;

            /** C2S filterConditions */
            filterConditions?: (common.ITrdFilterConditions|null);

            /** 过滤盈亏百分比下限，高于此比例的会返回，比如传10.0，返回盈亏比例大于10%的持仓 */
            filterPLRatioMin?: (number|null);

            /** 过滤盈亏百分比上限，低于此比例的会返回，比如传20.0，返回盈亏比例小于20%的持仓 */
            filterPLRatioMax?: (number|null);

            /**
             * 立即刷新 OpenD 缓存的此数据，默认不填。true 向服务器获取最新数据更新缓存并返回；flase 或没填则返回 OpenD 缓存的数据，不会向服务器请求。
             *
             * 正常情况下，服务器有更新就会立即推送到 OpenD，OpenD 缓存着数据，API 请求过来，返回同步的缓存数据，一般不需要指定刷新缓存，保证快速返回且减少对服务器的压力。如果遇到丢包等情况，可能出现缓存数据与服务器不一致，用户如果发现数据更新有异样，可指定刷新缓存，解决数据同步的问题。
             */
            refreshCache?: (boolean|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.PositionReq.IC2S);

            /** C2S header. */
            public header: common.ITrdHeader;

            /** C2S filterConditions. */
            public filterConditions?: (common.ITrdFilterConditions|null);

            /** 过滤盈亏百分比下限，高于此比例的会返回，比如传10.0，返回盈亏比例大于10%的持仓 */
            public filterPLRatioMin: number;

            /** 过滤盈亏百分比上限，低于此比例的会返回，比如传20.0，返回盈亏比例小于20%的持仓 */
            public filterPLRatioMax: number;

            /**
             * 立即刷新 OpenD 缓存的此数据，默认不填。true 向服务器获取最新数据更新缓存并返回；flase 或没填则返回 OpenD 缓存的数据，不会向服务器请求。
             *
             * 正常情况下，服务器有更新就会立即推送到 OpenD，OpenD 缓存着数据，API 请求过来，返回同步的缓存数据，一般不需要指定刷新缓存，保证快速返回且减少对服务器的压力。如果遇到丢包等情况，可能出现缓存数据与服务器不一致，用户如果发现数据更新有异样，可指定刷新缓存，解决数据同步的问题。
             */
            public refreshCache: boolean;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.PositionReq.IC2S): base.PositionReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.PositionReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.PositionReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.PositionReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.PositionReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.PositionReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.PositionReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.PositionReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.PositionReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a PositionRes. */
    interface IPositionRes {

        /** PositionRes retType */
        retType: number;

        /** PositionRes retMsg */
        retMsg?: (string|null);

        /** PositionRes errCode */
        errCode?: (number|null);

        /** PositionRes s2c */
        s2c?: (base.PositionRes.IS2C|null);
    }

    /** 获取账户持仓响应 */
    class PositionRes implements IPositionRes {

        /**
         * Constructs a new PositionRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IPositionRes);

        /** PositionRes retType. */
        public retType: number;

        /** PositionRes retMsg. */
        public retMsg: string;

        /** PositionRes errCode. */
        public errCode: number;

        /** PositionRes s2c. */
        public s2c?: (base.PositionRes.IS2C|null);

        /**
         * Creates a new PositionRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PositionRes instance
         */
        public static create(properties?: base.IPositionRes): base.PositionRes;

        /**
         * Encodes the specified PositionRes message. Does not implicitly {@link base.PositionRes.verify|verify} messages.
         * @param message PositionRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IPositionRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PositionRes message, length delimited. Does not implicitly {@link base.PositionRes.verify|verify} messages.
         * @param message PositionRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.IPositionRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PositionRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PositionRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.PositionRes;

        /**
         * Decodes a PositionRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PositionRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.PositionRes;

        /**
         * Verifies a PositionRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PositionRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PositionRes
         */
        public static fromObject(object: { [k: string]: any }): base.PositionRes;

        /**
         * Creates a plain object from a PositionRes message. Also converts values to other types if specified.
         * @param message PositionRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.PositionRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PositionRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PositionRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PositionRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C header */
            header: common.ITrdHeader;

            /** S2C positionList */
            positionList?: (common.IPosition[]|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.PositionRes.IS2C);

            /** S2C header. */
            public header: common.ITrdHeader;

            /** S2C positionList. */
            public positionList: common.IPosition[];

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.PositionRes.IS2C): base.PositionRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.PositionRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.PositionRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.PositionRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.PositionRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.PositionRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.PositionRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.PositionRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.PositionRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SellableReq. */
    interface ISellableReq {

        /** SellableReq c2s */
        c2s: base.SellableReq.IC2S;
    }

    /** 获取可卖数量请求 */
    class SellableReq implements ISellableReq {

        /**
         * Constructs a new SellableReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.ISellableReq);

        /** SellableReq c2s. */
        public c2s: base.SellableReq.IC2S;

        /**
         * Creates a new SellableReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SellableReq instance
         */
        public static create(properties?: base.ISellableReq): base.SellableReq;

        /**
         * Encodes the specified SellableReq message. Does not implicitly {@link base.SellableReq.verify|verify} messages.
         * @param message SellableReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.ISellableReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SellableReq message, length delimited. Does not implicitly {@link base.SellableReq.verify|verify} messages.
         * @param message SellableReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.ISellableReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SellableReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SellableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.SellableReq;

        /**
         * Decodes a SellableReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SellableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.SellableReq;

        /**
         * Verifies a SellableReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SellableReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SellableReq
         */
        public static fromObject(object: { [k: string]: any }): base.SellableReq;

        /**
         * Creates a plain object from a SellableReq message. Also converts values to other types if specified.
         * @param message SellableReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.SellableReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SellableReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SellableReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SellableReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S header */
            header: common.ITrdHeader;

            /** C2S orderType */
            orderType: common.OrderType;

            /** C2S code */
            code: string;

            /** C2S price */
            price: number;

            /** C2S orderID */
            orderID?: (number|Long|null);

            /** C2S adjustPrice */
            adjustPrice?: (boolean|null);

            /** C2S adjustSideAndLimit */
            adjustSideAndLimit?: (number|null);

            /** C2S secMarket */
            secMarket?: (common.TrdSecMarket|null);

            /** C2S orderIDEx */
            orderIDEx?: (string|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.SellableReq.IC2S);

            /** C2S header. */
            public header: common.ITrdHeader;

            /** C2S orderType. */
            public orderType: common.OrderType;

            /** C2S code. */
            public code: string;

            /** C2S price. */
            public price: number;

            /** C2S orderID. */
            public orderID: (number|Long);

            /** C2S adjustPrice. */
            public adjustPrice: boolean;

            /** C2S adjustSideAndLimit. */
            public adjustSideAndLimit: number;

            /** C2S secMarket. */
            public secMarket: common.TrdSecMarket;

            /** C2S orderIDEx. */
            public orderIDEx: string;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: base.SellableReq.IC2S): base.SellableReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link base.SellableReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.SellableReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link base.SellableReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.SellableReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.SellableReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.SellableReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): base.SellableReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.SellableReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SellableRes. */
    interface ISellableRes {

        /** SellableRes retType */
        retType: number;

        /** SellableRes retMsg */
        retMsg?: (string|null);

        /** SellableRes errCode */
        errCode?: (number|null);

        /** SellableRes s2c */
        s2c?: (base.SellableRes.IS2C|null);
    }

    /** 获取可卖数量响应 */
    class SellableRes implements ISellableRes {

        /**
         * Constructs a new SellableRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.ISellableRes);

        /** SellableRes retType. */
        public retType: number;

        /** SellableRes retMsg. */
        public retMsg: string;

        /** SellableRes errCode. */
        public errCode: number;

        /** SellableRes s2c. */
        public s2c?: (base.SellableRes.IS2C|null);

        /**
         * Creates a new SellableRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SellableRes instance
         */
        public static create(properties?: base.ISellableRes): base.SellableRes;

        /**
         * Encodes the specified SellableRes message. Does not implicitly {@link base.SellableRes.verify|verify} messages.
         * @param message SellableRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.ISellableRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SellableRes message, length delimited. Does not implicitly {@link base.SellableRes.verify|verify} messages.
         * @param message SellableRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: base.ISellableRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SellableRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SellableRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.SellableRes;

        /**
         * Decodes a SellableRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SellableRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.SellableRes;

        /**
         * Verifies a SellableRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SellableRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SellableRes
         */
        public static fromObject(object: { [k: string]: any }): base.SellableRes;

        /**
         * Creates a plain object from a SellableRes message. Also converts values to other types if specified.
         * @param message SellableRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.SellableRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SellableRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SellableRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SellableRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C header */
            header: common.ITrdHeader;

            /** S2C maxTrdQtys */
            maxTrdQtys?: (common.IMaxTrdQtys[]|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: base.SellableRes.IS2C);

            /** S2C header. */
            public header: common.ITrdHeader;

            /** S2C maxTrdQtys. */
            public maxTrdQtys: common.IMaxTrdQtys[];

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: base.SellableRes.IS2C): base.SellableRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link base.SellableRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: base.SellableRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link base.SellableRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: base.SellableRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.SellableRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): base.SellableRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): base.SellableRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: base.SellableRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace common. */
export namespace common {

    /** PeriodType enum. */
    enum PeriodType {
        PeriodType_INTRADAY = 0,
        PeriodType_DAY = 1,
        PeriodType_WEEK = 2,
        PeriodType_MONTH = 3
    }

    /** Properties of a PreAfterMarketData. */
    interface IPreAfterMarketData {

        /** PreAfterMarketData price */
        price?: (number|null);

        /** PreAfterMarketData highPrice */
        highPrice?: (number|null);

        /** PreAfterMarketData lowPrice */
        lowPrice?: (number|null);

        /** PreAfterMarketData volume */
        volume?: (number|Long|null);

        /** PreAfterMarketData turnover */
        turnover?: (number|null);

        /** PreAfterMarketData changeVal */
        changeVal?: (number|null);

        /** PreAfterMarketData changeRate */
        changeRate?: (number|null);

        /** PreAfterMarketData amplitude */
        amplitude?: (number|null);
    }

    /**
     * 美股支持盘前盘后数据
     *
     * 科创板仅支持盘后数据：成交量，成交额
     */
    class PreAfterMarketData implements IPreAfterMarketData {

        /**
         * Constructs a new PreAfterMarketData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPreAfterMarketData);

        /** PreAfterMarketData price. */
        public price: number;

        /** PreAfterMarketData highPrice. */
        public highPrice: number;

        /** PreAfterMarketData lowPrice. */
        public lowPrice: number;

        /** PreAfterMarketData volume. */
        public volume: (number|Long);

        /** PreAfterMarketData turnover. */
        public turnover: number;

        /** PreAfterMarketData changeVal. */
        public changeVal: number;

        /** PreAfterMarketData changeRate. */
        public changeRate: number;

        /** PreAfterMarketData amplitude. */
        public amplitude: number;

        /**
         * Creates a new PreAfterMarketData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreAfterMarketData instance
         */
        public static create(properties?: common.IPreAfterMarketData): common.PreAfterMarketData;

        /**
         * Encodes the specified PreAfterMarketData message. Does not implicitly {@link common.PreAfterMarketData.verify|verify} messages.
         * @param message PreAfterMarketData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPreAfterMarketData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreAfterMarketData message, length delimited. Does not implicitly {@link common.PreAfterMarketData.verify|verify} messages.
         * @param message PreAfterMarketData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPreAfterMarketData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreAfterMarketData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreAfterMarketData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.PreAfterMarketData;

        /**
         * Decodes a PreAfterMarketData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreAfterMarketData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.PreAfterMarketData;

        /**
         * Verifies a PreAfterMarketData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreAfterMarketData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreAfterMarketData
         */
        public static fromObject(object: { [k: string]: any }): common.PreAfterMarketData;

        /**
         * Creates a plain object from a PreAfterMarketData message. Also converts values to other types if specified.
         * @param message PreAfterMarketData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.PreAfterMarketData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreAfterMarketData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PreAfterMarketData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SubInfo. */
    interface ISubInfo {

        /** SubInfo subType */
        subType: common.SubType;

        /** SubInfo securityList */
        securityList?: (common.ISecurity[]|null);
    }

    /** 订阅详情 */
    class SubInfo implements ISubInfo {

        /**
         * Constructs a new SubInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISubInfo);

        /** SubInfo subType. */
        public subType: common.SubType;

        /** SubInfo securityList. */
        public securityList: common.ISecurity[];

        /**
         * Creates a new SubInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubInfo instance
         */
        public static create(properties?: common.ISubInfo): common.SubInfo;

        /**
         * Encodes the specified SubInfo message. Does not implicitly {@link common.SubInfo.verify|verify} messages.
         * @param message SubInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISubInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubInfo message, length delimited. Does not implicitly {@link common.SubInfo.verify|verify} messages.
         * @param message SubInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISubInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.SubInfo;

        /**
         * Decodes a SubInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.SubInfo;

        /**
         * Verifies a SubInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubInfo
         */
        public static fromObject(object: { [k: string]: any }): common.SubInfo;

        /**
         * Creates a plain object from a SubInfo message. Also converts values to other types if specified.
         * @param message SubInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.SubInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnSubInfo. */
    interface IConnSubInfo {

        /** ConnSubInfo subInfoList */
        subInfoList?: (common.ISubInfo[]|null);

        /** ConnSubInfo usedQuota */
        usedQuota: number;

        /** ConnSubInfo isOwnConnData */
        isOwnConnData: boolean;
    }

    /** 链接订阅信息 */
    class ConnSubInfo implements IConnSubInfo {

        /**
         * Constructs a new ConnSubInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IConnSubInfo);

        /** ConnSubInfo subInfoList. */
        public subInfoList: common.ISubInfo[];

        /** ConnSubInfo usedQuota. */
        public usedQuota: number;

        /** ConnSubInfo isOwnConnData. */
        public isOwnConnData: boolean;

        /**
         * Creates a new ConnSubInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnSubInfo instance
         */
        public static create(properties?: common.IConnSubInfo): common.ConnSubInfo;

        /**
         * Encodes the specified ConnSubInfo message. Does not implicitly {@link common.ConnSubInfo.verify|verify} messages.
         * @param message ConnSubInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IConnSubInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnSubInfo message, length delimited. Does not implicitly {@link common.ConnSubInfo.verify|verify} messages.
         * @param message ConnSubInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IConnSubInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnSubInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnSubInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ConnSubInfo;

        /**
         * Decodes a ConnSubInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnSubInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ConnSubInfo;

        /**
         * Verifies a ConnSubInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnSubInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnSubInfo
         */
        public static fromObject(object: { [k: string]: any }): common.ConnSubInfo;

        /**
         * Creates a plain object from a ConnSubInfo message. Also converts values to other types if specified.
         * @param message ConnSubInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ConnSubInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnSubInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnSubInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** TrdCategory enum. */
    enum TrdCategory {
        TrdCategory_Unknown = 0,
        TrdCategory_Security = 1,
        TrdCategory_Future = 2
    }

    /** 系统通知类型 */
    enum NotifyType {
        NotifyType_None = 0,
        NotifyType_GtwEvent = 1,
        NotifyType_ProgramStatus = 2,
        NotifyType_ConnStatus = 3,
        NotifyType_QotRight = 4,
        NotifyType_APILevel = 5,
        NotifyType_APIQuota = 6,
        NotifyType_UsedQuota = 7
    }

    /** Properties of a TrdHeader. */
    interface ITrdHeader {

        /** TrdHeader trdEnv */
        trdEnv: common.TrdEnv;

        /** TrdHeader accID */
        accID: (number|Long);

        /** TrdHeader trdMarket */
        trdMarket: common.TrdMarket;
    }

    /** Represents a TrdHeader. */
    class TrdHeader implements ITrdHeader {

        /**
         * Constructs a new TrdHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ITrdHeader);

        /** TrdHeader trdEnv. */
        public trdEnv: common.TrdEnv;

        /** TrdHeader accID. */
        public accID: (number|Long);

        /** TrdHeader trdMarket. */
        public trdMarket: common.TrdMarket;

        /**
         * Creates a new TrdHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TrdHeader instance
         */
        public static create(properties?: common.ITrdHeader): common.TrdHeader;

        /**
         * Encodes the specified TrdHeader message. Does not implicitly {@link common.TrdHeader.verify|verify} messages.
         * @param message TrdHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ITrdHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TrdHeader message, length delimited. Does not implicitly {@link common.TrdHeader.verify|verify} messages.
         * @param message TrdHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ITrdHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TrdHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TrdHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.TrdHeader;

        /**
         * Decodes a TrdHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TrdHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.TrdHeader;

        /**
         * Verifies a TrdHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TrdHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TrdHeader
         */
        public static fromObject(object: { [k: string]: any }): common.TrdHeader;

        /**
         * Creates a plain object from a TrdHeader message. Also converts values to other types if specified.
         * @param message TrdHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.TrdHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TrdHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TrdHeader
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TrdAcc. */
    interface ITrdAcc {

        /** TrdAcc trdEnv */
        trdEnv: common.TrdEnv;

        /** TrdAcc accID */
        accID: (number|Long);

        /** TrdAcc trdMarketAuthList */
        trdMarketAuthList?: (common.TrdMarket[]|null);

        /** TrdAcc accType */
        accType?: (common.TrdAccType|null);

        /** TrdAcc cardNum */
        cardNum?: (string|null);

        /** TrdAcc securityFirm */
        securityFirm?: (common.SecurityFirm|null);

        /** TrdAcc simAccType */
        simAccType?: (number|null);

        /** TrdAcc uniCardNum */
        uniCardNum?: (string|null);

        /** TrdAcc accStatus */
        accStatus?: (common.TrdAccStatus|null);
    }

    /** Represents a TrdAcc. */
    class TrdAcc implements ITrdAcc {

        /**
         * Constructs a new TrdAcc.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ITrdAcc);

        /** TrdAcc trdEnv. */
        public trdEnv: common.TrdEnv;

        /** TrdAcc accID. */
        public accID: (number|Long);

        /** TrdAcc trdMarketAuthList. */
        public trdMarketAuthList: common.TrdMarket[];

        /** TrdAcc accType. */
        public accType: common.TrdAccType;

        /** TrdAcc cardNum. */
        public cardNum: string;

        /** TrdAcc securityFirm. */
        public securityFirm: common.SecurityFirm;

        /** TrdAcc simAccType. */
        public simAccType: number;

        /** TrdAcc uniCardNum. */
        public uniCardNum: string;

        /** TrdAcc accStatus. */
        public accStatus: common.TrdAccStatus;

        /**
         * Creates a new TrdAcc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TrdAcc instance
         */
        public static create(properties?: common.ITrdAcc): common.TrdAcc;

        /**
         * Encodes the specified TrdAcc message. Does not implicitly {@link common.TrdAcc.verify|verify} messages.
         * @param message TrdAcc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ITrdAcc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TrdAcc message, length delimited. Does not implicitly {@link common.TrdAcc.verify|verify} messages.
         * @param message TrdAcc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ITrdAcc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TrdAcc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TrdAcc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.TrdAcc;

        /**
         * Decodes a TrdAcc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TrdAcc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.TrdAcc;

        /**
         * Verifies a TrdAcc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TrdAcc message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TrdAcc
         */
        public static fromObject(object: { [k: string]: any }): common.TrdAcc;

        /**
         * Creates a plain object from a TrdAcc message. Also converts values to other types if specified.
         * @param message TrdAcc
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.TrdAcc, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TrdAcc to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TrdAcc
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Funds. */
    interface IFunds {

        /** Funds power */
        power: number;

        /** Funds totalAssets */
        totalAssets: number;

        /** Funds cash */
        cash: number;

        /** Funds marketVal */
        marketVal: number;

        /** Funds frozenCash */
        frozenCash: number;

        /** Funds debtCash */
        debtCash: number;

        /** Funds avlWithdrawalCash */
        avlWithdrawalCash: number;

        /** Funds currency */
        currency?: (common.Currency|null);

        /** Funds availableFunds */
        availableFunds?: (number|null);

        /** Funds unrealizedPL */
        unrealizedPL?: (number|null);

        /** Funds realizedPL */
        realizedPL?: (number|null);

        /** Funds riskLevel */
        riskLevel?: (number|null);

        /** Funds initialMargin */
        initialMargin?: (number|null);

        /** Funds maintenanceMargin */
        maintenanceMargin?: (number|null);

        /** Funds cashInfoList */
        cashInfoList?: (common.IAccCashInfo[]|null);

        /** Funds maxPowerShort */
        maxPowerShort?: (number|null);

        /** Funds netCashPower */
        netCashPower?: (number|null);

        /** Funds longMv */
        longMv?: (number|null);

        /** Funds shortMv */
        shortMv?: (number|null);

        /** Funds pendingAsset */
        pendingAsset?: (number|null);

        /** Funds maxWithdrawal */
        maxWithdrawal?: (number|null);

        /** Funds riskStatus */
        riskStatus?: (number|null);

        /** Funds marginCallMargin */
        marginCallMargin?: (number|null);

        /** Funds isPdt */
        isPdt?: (boolean|null);

        /** Funds pdtSeq */
        pdtSeq?: (string|null);

        /** Funds beginningDTBP */
        beginningDTBP?: (number|null);

        /** Funds remainingDTBP */
        remainingDTBP?: (number|null);

        /** Funds dtCallAmount */
        dtCallAmount?: (number|null);

        /** Funds dtStatus */
        dtStatus?: (number|null);

        /** Funds securitiesAssets */
        securitiesAssets?: (number|null);

        /** Funds fundAssets */
        fundAssets?: (number|null);

        /** Funds bondAssets */
        bondAssets?: (number|null);

        /** Funds marketInfoList */
        marketInfoList?: (common.IAccMarketInfo[]|null);
    }

    /** Represents a Funds. */
    class Funds implements IFunds {

        /**
         * Constructs a new Funds.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IFunds);

        /** Funds power. */
        public power: number;

        /** Funds totalAssets. */
        public totalAssets: number;

        /** Funds cash. */
        public cash: number;

        /** Funds marketVal. */
        public marketVal: number;

        /** Funds frozenCash. */
        public frozenCash: number;

        /** Funds debtCash. */
        public debtCash: number;

        /** Funds avlWithdrawalCash. */
        public avlWithdrawalCash: number;

        /** Funds currency. */
        public currency: common.Currency;

        /** Funds availableFunds. */
        public availableFunds: number;

        /** Funds unrealizedPL. */
        public unrealizedPL: number;

        /** Funds realizedPL. */
        public realizedPL: number;

        /** Funds riskLevel. */
        public riskLevel: number;

        /** Funds initialMargin. */
        public initialMargin: number;

        /** Funds maintenanceMargin. */
        public maintenanceMargin: number;

        /** Funds cashInfoList. */
        public cashInfoList: common.IAccCashInfo[];

        /** Funds maxPowerShort. */
        public maxPowerShort: number;

        /** Funds netCashPower. */
        public netCashPower: number;

        /** Funds longMv. */
        public longMv: number;

        /** Funds shortMv. */
        public shortMv: number;

        /** Funds pendingAsset. */
        public pendingAsset: number;

        /** Funds maxWithdrawal. */
        public maxWithdrawal: number;

        /** Funds riskStatus. */
        public riskStatus: number;

        /** Funds marginCallMargin. */
        public marginCallMargin: number;

        /** Funds isPdt. */
        public isPdt: boolean;

        /** Funds pdtSeq. */
        public pdtSeq: string;

        /** Funds beginningDTBP. */
        public beginningDTBP: number;

        /** Funds remainingDTBP. */
        public remainingDTBP: number;

        /** Funds dtCallAmount. */
        public dtCallAmount: number;

        /** Funds dtStatus. */
        public dtStatus: number;

        /** Funds securitiesAssets. */
        public securitiesAssets: number;

        /** Funds fundAssets. */
        public fundAssets: number;

        /** Funds bondAssets. */
        public bondAssets: number;

        /** Funds marketInfoList. */
        public marketInfoList: common.IAccMarketInfo[];

        /**
         * Creates a new Funds instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Funds instance
         */
        public static create(properties?: common.IFunds): common.Funds;

        /**
         * Encodes the specified Funds message. Does not implicitly {@link common.Funds.verify|verify} messages.
         * @param message Funds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IFunds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Funds message, length delimited. Does not implicitly {@link common.Funds.verify|verify} messages.
         * @param message Funds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IFunds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Funds message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Funds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Funds;

        /**
         * Decodes a Funds message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Funds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Funds;

        /**
         * Verifies a Funds message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Funds message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Funds
         */
        public static fromObject(object: { [k: string]: any }): common.Funds;

        /**
         * Creates a plain object from a Funds message. Also converts values to other types if specified.
         * @param message Funds
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Funds, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Funds to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Funds
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccCashInfo. */
    interface IAccCashInfo {

        /** AccCashInfo currency */
        currency?: (common.Currency|null);

        /** AccCashInfo cash */
        cash?: (number|null);

        /** AccCashInfo availableBalance */
        availableBalance?: (number|null);

        /** AccCashInfo netCashPower */
        netCashPower?: (number|null);
    }

    /** Represents an AccCashInfo. */
    class AccCashInfo implements IAccCashInfo {

        /**
         * Constructs a new AccCashInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAccCashInfo);

        /** AccCashInfo currency. */
        public currency: common.Currency;

        /** AccCashInfo cash. */
        public cash: number;

        /** AccCashInfo availableBalance. */
        public availableBalance: number;

        /** AccCashInfo netCashPower. */
        public netCashPower: number;

        /**
         * Creates a new AccCashInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccCashInfo instance
         */
        public static create(properties?: common.IAccCashInfo): common.AccCashInfo;

        /**
         * Encodes the specified AccCashInfo message. Does not implicitly {@link common.AccCashInfo.verify|verify} messages.
         * @param message AccCashInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAccCashInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccCashInfo message, length delimited. Does not implicitly {@link common.AccCashInfo.verify|verify} messages.
         * @param message AccCashInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAccCashInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccCashInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccCashInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AccCashInfo;

        /**
         * Decodes an AccCashInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccCashInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AccCashInfo;

        /**
         * Verifies an AccCashInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccCashInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccCashInfo
         */
        public static fromObject(object: { [k: string]: any }): common.AccCashInfo;

        /**
         * Creates a plain object from an AccCashInfo message. Also converts values to other types if specified.
         * @param message AccCashInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AccCashInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccCashInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccCashInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccMarketInfo. */
    interface IAccMarketInfo {

        /** AccMarketInfo trdMarket */
        trdMarket?: (common.TrdMarket|null);

        /** AccMarketInfo assets */
        assets?: (number|null);
    }

    /** Represents an AccMarketInfo. */
    class AccMarketInfo implements IAccMarketInfo {

        /**
         * Constructs a new AccMarketInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAccMarketInfo);

        /** AccMarketInfo trdMarket. */
        public trdMarket: common.TrdMarket;

        /** AccMarketInfo assets. */
        public assets: number;

        /**
         * Creates a new AccMarketInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccMarketInfo instance
         */
        public static create(properties?: common.IAccMarketInfo): common.AccMarketInfo;

        /**
         * Encodes the specified AccMarketInfo message. Does not implicitly {@link common.AccMarketInfo.verify|verify} messages.
         * @param message AccMarketInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAccMarketInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccMarketInfo message, length delimited. Does not implicitly {@link common.AccMarketInfo.verify|verify} messages.
         * @param message AccMarketInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAccMarketInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccMarketInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccMarketInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AccMarketInfo;

        /**
         * Decodes an AccMarketInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccMarketInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AccMarketInfo;

        /**
         * Verifies an AccMarketInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccMarketInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccMarketInfo
         */
        public static fromObject(object: { [k: string]: any }): common.AccMarketInfo;

        /**
         * Creates a plain object from an AccMarketInfo message. Also converts values to other types if specified.
         * @param message AccMarketInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AccMarketInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccMarketInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccMarketInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** GtwEventType enum. */
    enum GtwEventType {
        GtwEventType_None = 0,
        GtwEventType_LocalCfgLoadFailed = 1,
        GtwEventType_APISvrRunFailed = 2,
        GtwEventType_ForceUpdate = 3,
        GtwEventType_LoginFailed = 4,
        GtwEventType_UnAgreeDisclaimer = 5,
        GtwEventType_NetCfgMissing = 6,
        GtwEventType_KickedOut = 7,
        GtwEventType_LoginPwdChanged = 8,
        GtwEventType_BanLogin = 9,
        GtwEventType_NeedPicVerifyCode = 10,
        GtwEventType_NeedPhoneVerifyCode = 11,
        GtwEventType_AppDataNotExist = 12,
        GtwEventType_NessaryDataMissing = 13,
        GtwEventType_TradePwdChanged = 14,
        GtwEventType_EnableDeviceLock = 15
    }

    /** Properties of a GtwEvent. */
    interface IGtwEvent {

        /** GtwEvent eventType */
        eventType: common.GtwEventType;

        /** GtwEvent desc */
        desc: string;
    }

    /** Represents a GtwEvent. */
    class GtwEvent implements IGtwEvent {

        /**
         * Constructs a new GtwEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGtwEvent);

        /** GtwEvent eventType. */
        public eventType: common.GtwEventType;

        /** GtwEvent desc. */
        public desc: string;

        /**
         * Creates a new GtwEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GtwEvent instance
         */
        public static create(properties?: common.IGtwEvent): common.GtwEvent;

        /**
         * Encodes the specified GtwEvent message. Does not implicitly {@link common.GtwEvent.verify|verify} messages.
         * @param message GtwEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGtwEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GtwEvent message, length delimited. Does not implicitly {@link common.GtwEvent.verify|verify} messages.
         * @param message GtwEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGtwEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GtwEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GtwEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GtwEvent;

        /**
         * Decodes a GtwEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GtwEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GtwEvent;

        /**
         * Verifies a GtwEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GtwEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GtwEvent
         */
        public static fromObject(object: { [k: string]: any }): common.GtwEvent;

        /**
         * Creates a plain object from a GtwEvent message. Also converts values to other types if specified.
         * @param message GtwEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GtwEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GtwEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GtwEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ProgramStatusType enum. */
    enum ProgramStatusType {
        ProgramStatusType_None = 0,
        ProgramStatusType_Loaded = 1,
        ProgramStatusType_Loging = 2,
        ProgramStatusType_NeedPicVerifyCode = 3,
        ProgramStatusType_NeedPhoneVerifyCode = 4,
        ProgramStatusType_LoginFailed = 5,
        ProgramStatusType_ForceUpdate = 6,
        ProgramStatusType_NessaryDataPreparing = 7,
        ProgramStatusType_NessaryDataMissing = 8,
        ProgramStatusType_UnAgreeDisclaimer = 9,
        ProgramStatusType_Ready = 10,
        ProgramStatusType_ForceLogout = 11,
        ProgramStatusType_DisclaimerPullFailed = 12
    }

    /** Properties of a ProgramStatus. */
    interface IProgramStatus {

        /** ProgramStatus type */
        type: common.ProgramStatusType;

        /** ProgramStatus strExtDesc */
        strExtDesc?: (string|null);
    }

    /** Represents a ProgramStatus. */
    class ProgramStatus implements IProgramStatus {

        /**
         * Constructs a new ProgramStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IProgramStatus);

        /** ProgramStatus type. */
        public type: common.ProgramStatusType;

        /** ProgramStatus strExtDesc. */
        public strExtDesc: string;

        /**
         * Creates a new ProgramStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProgramStatus instance
         */
        public static create(properties?: common.IProgramStatus): common.ProgramStatus;

        /**
         * Encodes the specified ProgramStatus message. Does not implicitly {@link common.ProgramStatus.verify|verify} messages.
         * @param message ProgramStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IProgramStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProgramStatus message, length delimited. Does not implicitly {@link common.ProgramStatus.verify|verify} messages.
         * @param message ProgramStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IProgramStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProgramStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProgramStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ProgramStatus;

        /**
         * Decodes a ProgramStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProgramStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ProgramStatus;

        /**
         * Verifies a ProgramStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProgramStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProgramStatus
         */
        public static fromObject(object: { [k: string]: any }): common.ProgramStatus;

        /**
         * Creates a plain object from a ProgramStatus message. Also converts values to other types if specified.
         * @param message ProgramStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ProgramStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProgramStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProgramStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QotRight. */
    interface IQotRight {

        /** QotRight hkQotRight */
        hkQotRight: number;

        /** QotRight usQotRight */
        usQotRight: number;

        /** QotRight cnQotRight */
        cnQotRight: number;

        /** QotRight hkOptionQotRight */
        hkOptionQotRight?: (number|null);

        /** QotRight hasUSOptionQotRight */
        hasUSOptionQotRight?: (boolean|null);
    }

    /** Represents a QotRight. */
    class QotRight implements IQotRight {

        /**
         * Constructs a new QotRight.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IQotRight);

        /** QotRight hkQotRight. */
        public hkQotRight: number;

        /** QotRight usQotRight. */
        public usQotRight: number;

        /** QotRight cnQotRight. */
        public cnQotRight: number;

        /** QotRight hkOptionQotRight. */
        public hkOptionQotRight: number;

        /** QotRight hasUSOptionQotRight. */
        public hasUSOptionQotRight: boolean;

        /**
         * Creates a new QotRight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QotRight instance
         */
        public static create(properties?: common.IQotRight): common.QotRight;

        /**
         * Encodes the specified QotRight message. Does not implicitly {@link common.QotRight.verify|verify} messages.
         * @param message QotRight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IQotRight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QotRight message, length delimited. Does not implicitly {@link common.QotRight.verify|verify} messages.
         * @param message QotRight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IQotRight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QotRight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QotRight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.QotRight;

        /**
         * Decodes a QotRight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QotRight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.QotRight;

        /**
         * Verifies a QotRight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QotRight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QotRight
         */
        public static fromObject(object: { [k: string]: any }): common.QotRight;

        /**
         * Creates a plain object from a QotRight message. Also converts values to other types if specified.
         * @param message QotRight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.QotRight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QotRight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QotRight
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a APILevel. */
    interface IAPILevel {

        /** APILevel apiLevel */
        apiLevel: string;
    }

    /** Represents a APILevel. */
    class APILevel implements IAPILevel {

        /**
         * Constructs a new APILevel.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAPILevel);

        /** APILevel apiLevel. */
        public apiLevel: string;

        /**
         * Creates a new APILevel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns APILevel instance
         */
        public static create(properties?: common.IAPILevel): common.APILevel;

        /**
         * Encodes the specified APILevel message. Does not implicitly {@link common.APILevel.verify|verify} messages.
         * @param message APILevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAPILevel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified APILevel message, length delimited. Does not implicitly {@link common.APILevel.verify|verify} messages.
         * @param message APILevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAPILevel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a APILevel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns APILevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.APILevel;

        /**
         * Decodes a APILevel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns APILevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.APILevel;

        /**
         * Verifies a APILevel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a APILevel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns APILevel
         */
        public static fromObject(object: { [k: string]: any }): common.APILevel;

        /**
         * Creates a plain object from a APILevel message. Also converts values to other types if specified.
         * @param message APILevel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.APILevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this APILevel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for APILevel
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectStatus. */
    interface IConnectStatus {

        /** ConnectStatus qotLogined */
        qotLogined: boolean;

        /** ConnectStatus trdLogined */
        trdLogined: boolean;
    }

    /** Represents a ConnectStatus. */
    class ConnectStatus implements IConnectStatus {

        /**
         * Constructs a new ConnectStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IConnectStatus);

        /** ConnectStatus qotLogined. */
        public qotLogined: boolean;

        /** ConnectStatus trdLogined. */
        public trdLogined: boolean;

        /**
         * Creates a new ConnectStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectStatus instance
         */
        public static create(properties?: common.IConnectStatus): common.ConnectStatus;

        /**
         * Encodes the specified ConnectStatus message. Does not implicitly {@link common.ConnectStatus.verify|verify} messages.
         * @param message ConnectStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IConnectStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectStatus message, length delimited. Does not implicitly {@link common.ConnectStatus.verify|verify} messages.
         * @param message ConnectStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IConnectStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ConnectStatus;

        /**
         * Decodes a ConnectStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ConnectStatus;

        /**
         * Verifies a ConnectStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectStatus
         */
        public static fromObject(object: { [k: string]: any }): common.ConnectStatus;

        /**
         * Creates a plain object from a ConnectStatus message. Also converts values to other types if specified.
         * @param message ConnectStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ConnectStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a APIQuota. */
    interface IAPIQuota {

        /** APIQuota subQuota */
        subQuota: number;

        /** APIQuota historyKLQuota */
        historyKLQuota: number;
    }

    /** Represents a APIQuota. */
    class APIQuota implements IAPIQuota {

        /**
         * Constructs a new APIQuota.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAPIQuota);

        /** APIQuota subQuota. */
        public subQuota: number;

        /** APIQuota historyKLQuota. */
        public historyKLQuota: number;

        /**
         * Creates a new APIQuota instance using the specified properties.
         * @param [properties] Properties to set
         * @returns APIQuota instance
         */
        public static create(properties?: common.IAPIQuota): common.APIQuota;

        /**
         * Encodes the specified APIQuota message. Does not implicitly {@link common.APIQuota.verify|verify} messages.
         * @param message APIQuota message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAPIQuota, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified APIQuota message, length delimited. Does not implicitly {@link common.APIQuota.verify|verify} messages.
         * @param message APIQuota message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAPIQuota, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a APIQuota message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns APIQuota
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.APIQuota;

        /**
         * Decodes a APIQuota message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns APIQuota
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.APIQuota;

        /**
         * Verifies a APIQuota message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a APIQuota message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns APIQuota
         */
        public static fromObject(object: { [k: string]: any }): common.APIQuota;

        /**
         * Creates a plain object from a APIQuota message. Also converts values to other types if specified.
         * @param message APIQuota
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.APIQuota, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this APIQuota to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for APIQuota
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Security. */
    interface ISecurity {

        /** QotMarket，行情市场 */
        market: common.QotMarket;

        /** 股票代码 */
        code: string;
    }

    /** 证券标识 */
    class Security implements ISecurity {

        /**
         * Constructs a new Security.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISecurity);

        /** QotMarket，行情市场 */
        public market: common.QotMarket;

        /** 股票代码 */
        public code: string;

        /**
         * Creates a new Security instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Security instance
         */
        public static create(properties?: common.ISecurity): common.Security;

        /**
         * Encodes the specified Security message. Does not implicitly {@link common.Security.verify|verify} messages.
         * @param message Security message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISecurity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Security message, length delimited. Does not implicitly {@link common.Security.verify|verify} messages.
         * @param message Security message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISecurity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Security message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Security
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Security;

        /**
         * Decodes a Security message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Security
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Security;

        /**
         * Verifies a Security message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Security message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Security
         */
        public static fromObject(object: { [k: string]: any }): common.Security;

        /**
         * Creates a plain object from a Security message. Also converts values to other types if specified.
         * @param message Security
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Security, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Security to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Security
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** 行情市场 */
    enum QotMarket {
        QotMarket_Unknown = 0,
        QotMarket_HK_Security = 1,
        QotMarket_HK_Future = 2,
        QotMarket_US_Security = 11,
        QotMarket_CNSH_Security = 21,
        QotMarket_CNSZ_Security = 22,
        QotMarket_SG_Security = 31,
        QotMarket_JP_Security = 41,
        QotMarket_AU_Security = 51,
        QotMarket_MY_Security = 61,
        QotMarket_CA_Security = 71,
        QotMarket_FX_Security = 81
    }

    /** SubType enum. */
    enum SubType {
        SubType_None = 0,
        SubType_Basic = 1,
        SubType_OrderBook = 2,
        SubType_Ticker = 4,
        SubType_RT = 5,
        SubType_KL_Day = 6,
        SubType_KL_5Min = 7,
        SubType_KL_15Min = 8,
        SubType_KL_30Min = 9,
        SubType_KL_60Min = 10,
        SubType_KL_1Min = 11,
        SubType_KL_Week = 12,
        SubType_KL_Month = 13,
        SubType_Broker = 14,
        SubType_KL_Qurater = 15,
        SubType_KL_Year = 16,
        SubType_KL_3Min = 17
    }

    /** Properties of a FutureBasicQotExData. */
    interface IFutureBasicQotExData {

        /** FutureBasicQotExData lastSettlePrice */
        lastSettlePrice: number;

        /** FutureBasicQotExData position */
        position: number;

        /** FutureBasicQotExData positionChange */
        positionChange: number;

        /** FutureBasicQotExData expiryDateDistance */
        expiryDateDistance?: (number|null);
    }

    /** Represents a FutureBasicQotExData. */
    class FutureBasicQotExData implements IFutureBasicQotExData {

        /**
         * Constructs a new FutureBasicQotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IFutureBasicQotExData);

        /** FutureBasicQotExData lastSettlePrice. */
        public lastSettlePrice: number;

        /** FutureBasicQotExData position. */
        public position: number;

        /** FutureBasicQotExData positionChange. */
        public positionChange: number;

        /** FutureBasicQotExData expiryDateDistance. */
        public expiryDateDistance: number;

        /**
         * Creates a new FutureBasicQotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FutureBasicQotExData instance
         */
        public static create(properties?: common.IFutureBasicQotExData): common.FutureBasicQotExData;

        /**
         * Encodes the specified FutureBasicQotExData message. Does not implicitly {@link common.FutureBasicQotExData.verify|verify} messages.
         * @param message FutureBasicQotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IFutureBasicQotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FutureBasicQotExData message, length delimited. Does not implicitly {@link common.FutureBasicQotExData.verify|verify} messages.
         * @param message FutureBasicQotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IFutureBasicQotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FutureBasicQotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FutureBasicQotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.FutureBasicQotExData;

        /**
         * Decodes a FutureBasicQotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FutureBasicQotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.FutureBasicQotExData;

        /**
         * Verifies a FutureBasicQotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FutureBasicQotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FutureBasicQotExData
         */
        public static fromObject(object: { [k: string]: any }): common.FutureBasicQotExData;

        /**
         * Creates a plain object from a FutureBasicQotExData message. Also converts values to other types if specified.
         * @param message FutureBasicQotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.FutureBasicQotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FutureBasicQotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FutureBasicQotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WarrantBasicQotExData. */
    interface IWarrantBasicQotExData {

        /** WarrantBasicQotExData delta */
        delta?: (number|null);

        /** WarrantBasicQotExData impliedVolatility */
        impliedVolatility?: (number|null);

        /** WarrantBasicQotExData premium */
        premium: number;
    }

    /** Represents a WarrantBasicQotExData. */
    class WarrantBasicQotExData implements IWarrantBasicQotExData {

        /**
         * Constructs a new WarrantBasicQotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IWarrantBasicQotExData);

        /** WarrantBasicQotExData delta. */
        public delta: number;

        /** WarrantBasicQotExData impliedVolatility. */
        public impliedVolatility: number;

        /** WarrantBasicQotExData premium. */
        public premium: number;

        /**
         * Creates a new WarrantBasicQotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarrantBasicQotExData instance
         */
        public static create(properties?: common.IWarrantBasicQotExData): common.WarrantBasicQotExData;

        /**
         * Encodes the specified WarrantBasicQotExData message. Does not implicitly {@link common.WarrantBasicQotExData.verify|verify} messages.
         * @param message WarrantBasicQotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IWarrantBasicQotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WarrantBasicQotExData message, length delimited. Does not implicitly {@link common.WarrantBasicQotExData.verify|verify} messages.
         * @param message WarrantBasicQotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IWarrantBasicQotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WarrantBasicQotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarrantBasicQotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.WarrantBasicQotExData;

        /**
         * Decodes a WarrantBasicQotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarrantBasicQotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.WarrantBasicQotExData;

        /**
         * Verifies a WarrantBasicQotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WarrantBasicQotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WarrantBasicQotExData
         */
        public static fromObject(object: { [k: string]: any }): common.WarrantBasicQotExData;

        /**
         * Creates a plain object from a WarrantBasicQotExData message. Also converts values to other types if specified.
         * @param message WarrantBasicQotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.WarrantBasicQotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WarrantBasicQotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WarrantBasicQotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BasicQot. */
    interface IBasicQot {

        /** BasicQot security */
        security: common.ISecurity;

        /** BasicQot name */
        name?: (string|null);

        /** BasicQot isSuspended */
        isSuspended: boolean;

        /** BasicQot listTime */
        listTime: string;

        /** BasicQot priceSpread */
        priceSpread: number;

        /** BasicQot updateTime */
        updateTime: string;

        /** BasicQot highPrice */
        highPrice: number;

        /** BasicQot openPrice */
        openPrice: number;

        /** BasicQot lowPrice */
        lowPrice: number;

        /** BasicQot curPrice */
        curPrice: number;

        /** BasicQot lastClosePrice */
        lastClosePrice: number;

        /** BasicQot volume */
        volume: (number|Long);

        /** BasicQot turnover */
        turnover: number;

        /** BasicQot turnoverRate */
        turnoverRate: number;

        /** BasicQot amplitude */
        amplitude: number;

        /** BasicQot darkStatus */
        darkStatus?: (number|null);

        /** BasicQot optionExData */
        optionExData?: (common.IOptionBasicQotExData|null);

        /** BasicQot listTimestamp */
        listTimestamp?: (number|null);

        /** BasicQot updateTimestamp */
        updateTimestamp?: (number|null);

        /** BasicQot preMarket */
        preMarket?: (common.IPreAfterMarketData|null);

        /** BasicQot afterMarket */
        afterMarket?: (common.IPreAfterMarketData|null);

        /** BasicQot secStatus */
        secStatus?: (number|null);

        /** BasicQot futureExData */
        futureExData?: (common.IFutureBasicQotExData|null);

        /** BasicQot warrantExData */
        warrantExData?: (common.IWarrantBasicQotExData|null);
    }

    /** Represents a BasicQot. */
    class BasicQot implements IBasicQot {

        /**
         * Constructs a new BasicQot.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBasicQot);

        /** BasicQot security. */
        public security: common.ISecurity;

        /** BasicQot name. */
        public name: string;

        /** BasicQot isSuspended. */
        public isSuspended: boolean;

        /** BasicQot listTime. */
        public listTime: string;

        /** BasicQot priceSpread. */
        public priceSpread: number;

        /** BasicQot updateTime. */
        public updateTime: string;

        /** BasicQot highPrice. */
        public highPrice: number;

        /** BasicQot openPrice. */
        public openPrice: number;

        /** BasicQot lowPrice. */
        public lowPrice: number;

        /** BasicQot curPrice. */
        public curPrice: number;

        /** BasicQot lastClosePrice. */
        public lastClosePrice: number;

        /** BasicQot volume. */
        public volume: (number|Long);

        /** BasicQot turnover. */
        public turnover: number;

        /** BasicQot turnoverRate. */
        public turnoverRate: number;

        /** BasicQot amplitude. */
        public amplitude: number;

        /** BasicQot darkStatus. */
        public darkStatus: number;

        /** BasicQot optionExData. */
        public optionExData?: (common.IOptionBasicQotExData|null);

        /** BasicQot listTimestamp. */
        public listTimestamp: number;

        /** BasicQot updateTimestamp. */
        public updateTimestamp: number;

        /** BasicQot preMarket. */
        public preMarket?: (common.IPreAfterMarketData|null);

        /** BasicQot afterMarket. */
        public afterMarket?: (common.IPreAfterMarketData|null);

        /** BasicQot secStatus. */
        public secStatus: number;

        /** BasicQot futureExData. */
        public futureExData?: (common.IFutureBasicQotExData|null);

        /** BasicQot warrantExData. */
        public warrantExData?: (common.IWarrantBasicQotExData|null);

        /**
         * Creates a new BasicQot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BasicQot instance
         */
        public static create(properties?: common.IBasicQot): common.BasicQot;

        /**
         * Encodes the specified BasicQot message. Does not implicitly {@link common.BasicQot.verify|verify} messages.
         * @param message BasicQot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBasicQot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BasicQot message, length delimited. Does not implicitly {@link common.BasicQot.verify|verify} messages.
         * @param message BasicQot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IBasicQot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BasicQot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BasicQot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BasicQot;

        /**
         * Decodes a BasicQot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BasicQot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.BasicQot;

        /**
         * Verifies a BasicQot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BasicQot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BasicQot
         */
        public static fromObject(object: { [k: string]: any }): common.BasicQot;

        /**
         * Creates a plain object from a BasicQot message. Also converts values to other types if specified.
         * @param message BasicQot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BasicQot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BasicQot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BasicQot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OptionBasicQotExData. */
    interface IOptionBasicQotExData {

        /** OptionBasicQotExData strikePrice */
        strikePrice: number;

        /** OptionBasicQotExData contractSize */
        contractSize: number;

        /** OptionBasicQotExData contractSizeFloat */
        contractSizeFloat?: (number|null);

        /** OptionBasicQotExData openInterest */
        openInterest: number;

        /** OptionBasicQotExData impliedVolatility */
        impliedVolatility: number;

        /** OptionBasicQotExData premium */
        premium: number;

        /** OptionBasicQotExData delta */
        delta: number;

        /** OptionBasicQotExData gamma */
        gamma: number;

        /** OptionBasicQotExData vega */
        vega: number;

        /** OptionBasicQotExData theta */
        theta: number;

        /** OptionBasicQotExData rho */
        rho: number;

        /** OptionBasicQotExData netOpenInterest */
        netOpenInterest?: (number|null);

        /** OptionBasicQotExData expiryDateDistance */
        expiryDateDistance?: (number|null);

        /** OptionBasicQotExData contractNominalValue */
        contractNominalValue?: (number|null);

        /** OptionBasicQotExData ownerLotMultiplier */
        ownerLotMultiplier?: (number|null);

        /** OptionBasicQotExData optionAreaType */
        optionAreaType?: (number|null);

        /** OptionBasicQotExData contractMultiplier */
        contractMultiplier?: (number|null);

        /** OptionBasicQotExData indexOptionType */
        indexOptionType?: (number|null);
    }

    /** Represents an OptionBasicQotExData. */
    class OptionBasicQotExData implements IOptionBasicQotExData {

        /**
         * Constructs a new OptionBasicQotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IOptionBasicQotExData);

        /** OptionBasicQotExData strikePrice. */
        public strikePrice: number;

        /** OptionBasicQotExData contractSize. */
        public contractSize: number;

        /** OptionBasicQotExData contractSizeFloat. */
        public contractSizeFloat: number;

        /** OptionBasicQotExData openInterest. */
        public openInterest: number;

        /** OptionBasicQotExData impliedVolatility. */
        public impliedVolatility: number;

        /** OptionBasicQotExData premium. */
        public premium: number;

        /** OptionBasicQotExData delta. */
        public delta: number;

        /** OptionBasicQotExData gamma. */
        public gamma: number;

        /** OptionBasicQotExData vega. */
        public vega: number;

        /** OptionBasicQotExData theta. */
        public theta: number;

        /** OptionBasicQotExData rho. */
        public rho: number;

        /** OptionBasicQotExData netOpenInterest. */
        public netOpenInterest: number;

        /** OptionBasicQotExData expiryDateDistance. */
        public expiryDateDistance: number;

        /** OptionBasicQotExData contractNominalValue. */
        public contractNominalValue: number;

        /** OptionBasicQotExData ownerLotMultiplier. */
        public ownerLotMultiplier: number;

        /** OptionBasicQotExData optionAreaType. */
        public optionAreaType: number;

        /** OptionBasicQotExData contractMultiplier. */
        public contractMultiplier: number;

        /** OptionBasicQotExData indexOptionType. */
        public indexOptionType: number;

        /**
         * Creates a new OptionBasicQotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OptionBasicQotExData instance
         */
        public static create(properties?: common.IOptionBasicQotExData): common.OptionBasicQotExData;

        /**
         * Encodes the specified OptionBasicQotExData message. Does not implicitly {@link common.OptionBasicQotExData.verify|verify} messages.
         * @param message OptionBasicQotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IOptionBasicQotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OptionBasicQotExData message, length delimited. Does not implicitly {@link common.OptionBasicQotExData.verify|verify} messages.
         * @param message OptionBasicQotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IOptionBasicQotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OptionBasicQotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OptionBasicQotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.OptionBasicQotExData;

        /**
         * Decodes an OptionBasicQotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OptionBasicQotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.OptionBasicQotExData;

        /**
         * Verifies an OptionBasicQotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OptionBasicQotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OptionBasicQotExData
         */
        public static fromObject(object: { [k: string]: any }): common.OptionBasicQotExData;

        /**
         * Creates a plain object from an OptionBasicQotExData message. Also converts values to other types if specified.
         * @param message OptionBasicQotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.OptionBasicQotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OptionBasicQotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OptionBasicQotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PacketID. */
    interface IPacketID {

        /** PacketID connID */
        connID: (number|Long);

        /** PacketID serialNo */
        serialNo: number;
    }

    /** Represents a PacketID. */
    class PacketID implements IPacketID {

        /**
         * Constructs a new PacketID.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPacketID);

        /** PacketID connID. */
        public connID: (number|Long);

        /** PacketID serialNo. */
        public serialNo: number;

        /**
         * Creates a new PacketID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketID instance
         */
        public static create(properties?: common.IPacketID): common.PacketID;

        /**
         * Encodes the specified PacketID message. Does not implicitly {@link common.PacketID.verify|verify} messages.
         * @param message PacketID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPacketID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketID message, length delimited. Does not implicitly {@link common.PacketID.verify|verify} messages.
         * @param message PacketID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPacketID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.PacketID;

        /**
         * Decodes a PacketID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.PacketID;

        /**
         * Verifies a PacketID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketID
         */
        public static fromObject(object: { [k: string]: any }): common.PacketID;

        /**
         * Creates a plain object from a PacketID message. Also converts values to other types if specified.
         * @param message PacketID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.PacketID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PacketID
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /**
     * 交易环境
     *
     * TrdEnv_Simulate = 0; //模拟环境
     *
     * TrdEnv_Real = 1; //真实环境
     */
    enum TrdEnv {
        TrdEnv_Simulate = 0,
        TrdEnv_Real = 1
    }

    /** TrdSide enum. */
    enum TrdSide {
        TrdSide_Unknown = 0,
        TrdSide_Buy = 1,
        TrdSide_Sell = 2,
        TrdSide_SellShort = 3,
        TrdSide_BuyBack = 4
    }

    /** 订单类型 */
    enum OrderType {
        OrderType_Unknown = 0,
        OrderType_Normal = 1,
        OrderType_Market = 2,
        OrderType_AbsoluteLimit = 5,
        OrderType_Auction = 6,
        OrderType_AuctionLimit = 7,
        OrderType_SpecialLimit = 8,
        OrderType_SpecialLimit_All = 9,
        OrderType_Stop = 10,
        OrderType_StopLimit = 11,
        OrderType_MarketifTouched = 12,
        OrderType_LimitifTouched = 13,
        OrderType_TrailingStop = 14,
        OrderType_TrailingStopLimit = 15,
        OrderType_TWAP = 16,
        OrderType_TWAP_LIMIT = 17,
        OrderType_VWAP = 18,
        OrderType_VWAP_LIMIT = 19
    }

    /** 交易市场 */
    enum TrdMarket {
        TrdMarket_Unknown = 0,
        TrdMarket_HK = 1,
        TrdMarket_US = 2,
        TrdMarket_CN = 3,
        TrdMarket_HKCC = 4,
        TrdMarket_Futures = 5,
        TrdMarket_SG = 6,
        TrdMarket_AU = 8,
        TrdMarket_Futures_Simulate_HK = 10,
        TrdMarket_Futures_Simulate_US = 11,
        TrdMarket_Futures_Simulate_SG = 12,
        TrdMarket_Futures_Simulate_JP = 13,
        TrdMarket_JP = 15,
        TrdMarket_MY = 111,
        TrdMarket_CA = 112,
        TrdMarket_HK_Fund = 113,
        TrdMarket_US_Fund = 123
    }

    /** 订单有效期 */
    enum TimeInForce {
        TimeInForce_DAY = 0,
        TimeInForce_GTC = 1
    }

    /** 订单跟踪类型 */
    enum TrailType {
        TrailType_Unknown = 0,
        TrailType_Ratio = 1,
        TrailType_Amount = 2
    }

    /** 交易证券市场 */
    enum TrdSecMarket {
        TrdSecMarket_Unknown = 0,
        TrdSecMarket_HK = 1,
        TrdSecMarket_US = 2,
        TrdSecMarket_CN_SH = 31,
        TrdSecMarket_CN_SZ = 32,
        TrdSecMarket_SG = 41,
        TrdSecMarket_JP = 51,
        TrdSecMarket_AU = 61,
        TrdSecMarket_MY = 71,
        TrdSecMarket_CA = 81,
        TrdSecMarket_FX = 91
    }

    /** TrdAccStatus enum. */
    enum TrdAccStatus {
        TrdAccStatus_Active = 0,
        TrdAccStatus_Disabled = 1
    }

    /** TrdAccType enum. */
    enum TrdAccType {
        TrdAccType_Unknown = 0,
        TrdAccType_Cash = 1,
        TrdAccType_Margin = 2
    }

    /** SecurityFirm enum. */
    enum SecurityFirm {
        SecurityFirm_Unknown = 0,
        SecurityFirm_FutuSecurities = 1,
        SecurityFirm_FutuInc = 2,
        SecurityFirm_FutuSG = 3,
        SecurityFirm_FutuAU = 4
    }

    /** Properties of an Order. */
    interface IOrder {

        /** Order trdSide */
        trdSide: common.TrdSide;

        /** Order orderType */
        orderType: common.OrderType;

        /** Order orderStatus */
        orderStatus: common.OrderStatus;

        /** Order orderID */
        orderID: (number|Long);

        /** Order orderIDEx */
        orderIDEx: string;

        /** Order code */
        code: string;

        /** Order name */
        name: string;

        /** Order qty */
        qty: number;

        /** Order price */
        price?: (number|null);

        /** Order createTime */
        createTime: string;

        /** Order updateTime */
        updateTime: string;

        /** Order fillQty */
        fillQty?: (number|null);

        /** Order fillAvgPrice */
        fillAvgPrice?: (number|null);

        /** Order lastErrMsg */
        lastErrMsg?: (string|null);

        /** Order secMarket */
        secMarket?: (common.TrdSecMarket|null);

        /** Order createTimestamp */
        createTimestamp?: (number|null);

        /** Order updateTimestamp */
        updateTimestamp?: (number|null);

        /** Order remark */
        remark?: (string|null);

        /** Order auxPrice */
        auxPrice?: (number|null);

        /** Order trailType */
        trailType?: (common.TrailType|null);

        /** Order trailValue */
        trailValue?: (number|null);

        /** Order trailSpread */
        trailSpread?: (number|null);

        /** Order currency */
        currency?: (common.Currency|null);

        /** Order trdMarket */
        trdMarket?: (number|null);
    }

    /** Represents an Order. */
    class Order implements IOrder {

        /**
         * Constructs a new Order.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IOrder);

        /** Order trdSide. */
        public trdSide: common.TrdSide;

        /** Order orderType. */
        public orderType: common.OrderType;

        /** Order orderStatus. */
        public orderStatus: common.OrderStatus;

        /** Order orderID. */
        public orderID: (number|Long);

        /** Order orderIDEx. */
        public orderIDEx: string;

        /** Order code. */
        public code: string;

        /** Order name. */
        public name: string;

        /** Order qty. */
        public qty: number;

        /** Order price. */
        public price: number;

        /** Order createTime. */
        public createTime: string;

        /** Order updateTime. */
        public updateTime: string;

        /** Order fillQty. */
        public fillQty: number;

        /** Order fillAvgPrice. */
        public fillAvgPrice: number;

        /** Order lastErrMsg. */
        public lastErrMsg: string;

        /** Order secMarket. */
        public secMarket: common.TrdSecMarket;

        /** Order createTimestamp. */
        public createTimestamp: number;

        /** Order updateTimestamp. */
        public updateTimestamp: number;

        /** Order remark. */
        public remark: string;

        /** Order auxPrice. */
        public auxPrice: number;

        /** Order trailType. */
        public trailType: common.TrailType;

        /** Order trailValue. */
        public trailValue: number;

        /** Order trailSpread. */
        public trailSpread: number;

        /** Order currency. */
        public currency: common.Currency;

        /** Order trdMarket. */
        public trdMarket: number;

        /**
         * Creates a new Order instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Order instance
         */
        public static create(properties?: common.IOrder): common.Order;

        /**
         * Encodes the specified Order message. Does not implicitly {@link common.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link common.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Order;

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Order;

        /**
         * Verifies an Order message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Order
         */
        public static fromObject(object: { [k: string]: any }): common.Order;

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @param message Order
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Order to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Order
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** OrderStatus enum. */
    enum OrderStatus {
        OrderStatus_Unknown = -1,
        OrderStatus_WaitingSubmit = 1,
        OrderStatus_Submitting = 2,
        OrderStatus_Submitted = 5,
        OrderStatus_Filled_Part = 10,
        OrderStatus_Filled_All = 11,
        OrderStatus_Cancelled_Part = 14,
        OrderStatus_Cancelled_All = 15,
        OrderStatus_Failed = 21,
        OrderStatus_Disabled = 22,
        OrderStatus_Deleted = 23,
        OrderStatus_FillCancelled = 24
    }

    /** Properties of an OrderFill. */
    interface IOrderFill {

        /** OrderFill trdSide */
        trdSide: common.TrdSide;

        /** OrderFill fillID */
        fillID: (number|Long);

        /** OrderFill fillIDEx */
        fillIDEx: string;

        /** OrderFill orderID */
        orderID?: (number|Long|null);

        /** OrderFill orderIDEx */
        orderIDEx?: (string|null);

        /** OrderFill code */
        code: string;

        /** OrderFill name */
        name: string;

        /** OrderFill qty */
        qty: number;

        /** OrderFill price */
        price: number;

        /** OrderFill createTime */
        createTime: string;

        /** OrderFill counterBrokerID */
        counterBrokerID?: (number|null);

        /** OrderFill counterBrokerName */
        counterBrokerName?: (string|null);

        /** OrderFill secMarket */
        secMarket?: (common.TrdSecMarket|null);

        /** OrderFill createTimestamp */
        createTimestamp?: (number|null);

        /** OrderFill updateTimestamp */
        updateTimestamp?: (number|null);

        /** OrderFill status */
        status?: (common.OrderFillStatus|null);

        /** OrderFill trdMarket */
        trdMarket?: (common.TrdMarket|null);
    }

    /** Represents an OrderFill. */
    class OrderFill implements IOrderFill {

        /**
         * Constructs a new OrderFill.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IOrderFill);

        /** OrderFill trdSide. */
        public trdSide: common.TrdSide;

        /** OrderFill fillID. */
        public fillID: (number|Long);

        /** OrderFill fillIDEx. */
        public fillIDEx: string;

        /** OrderFill orderID. */
        public orderID: (number|Long);

        /** OrderFill orderIDEx. */
        public orderIDEx: string;

        /** OrderFill code. */
        public code: string;

        /** OrderFill name. */
        public name: string;

        /** OrderFill qty. */
        public qty: number;

        /** OrderFill price. */
        public price: number;

        /** OrderFill createTime. */
        public createTime: string;

        /** OrderFill counterBrokerID. */
        public counterBrokerID: number;

        /** OrderFill counterBrokerName. */
        public counterBrokerName: string;

        /** OrderFill secMarket. */
        public secMarket: common.TrdSecMarket;

        /** OrderFill createTimestamp. */
        public createTimestamp: number;

        /** OrderFill updateTimestamp. */
        public updateTimestamp: number;

        /** OrderFill status. */
        public status: common.OrderFillStatus;

        /** OrderFill trdMarket. */
        public trdMarket: common.TrdMarket;

        /**
         * Creates a new OrderFill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderFill instance
         */
        public static create(properties?: common.IOrderFill): common.OrderFill;

        /**
         * Encodes the specified OrderFill message. Does not implicitly {@link common.OrderFill.verify|verify} messages.
         * @param message OrderFill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IOrderFill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderFill message, length delimited. Does not implicitly {@link common.OrderFill.verify|verify} messages.
         * @param message OrderFill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IOrderFill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderFill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderFill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.OrderFill;

        /**
         * Decodes an OrderFill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderFill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.OrderFill;

        /**
         * Verifies an OrderFill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderFill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderFill
         */
        public static fromObject(object: { [k: string]: any }): common.OrderFill;

        /**
         * Creates a plain object from an OrderFill message. Also converts values to other types if specified.
         * @param message OrderFill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.OrderFill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderFill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderFill
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** OrderFillStatus enum. */
    enum OrderFillStatus {
        OrderFillStatus_OK = 0,
        OrderFillStatus_Cancelled = 1,
        OrderFillStatus_Changed = 2
    }

    /** Properties of an OrderFee. */
    interface IOrderFee {

        /** OrderFee orderIDEx */
        orderIDEx: string;

        /** OrderFee feeAmount */
        feeAmount?: (number|null);

        /** OrderFee feeList */
        feeList?: (common.IOrderFeeItem[]|null);
    }

    /** Represents an OrderFee. */
    class OrderFee implements IOrderFee {

        /**
         * Constructs a new OrderFee.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IOrderFee);

        /** OrderFee orderIDEx. */
        public orderIDEx: string;

        /** OrderFee feeAmount. */
        public feeAmount: number;

        /** OrderFee feeList. */
        public feeList: common.IOrderFeeItem[];

        /**
         * Creates a new OrderFee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderFee instance
         */
        public static create(properties?: common.IOrderFee): common.OrderFee;

        /**
         * Encodes the specified OrderFee message. Does not implicitly {@link common.OrderFee.verify|verify} messages.
         * @param message OrderFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IOrderFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderFee message, length delimited. Does not implicitly {@link common.OrderFee.verify|verify} messages.
         * @param message OrderFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IOrderFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderFee message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.OrderFee;

        /**
         * Decodes an OrderFee message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.OrderFee;

        /**
         * Verifies an OrderFee message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderFee message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderFee
         */
        public static fromObject(object: { [k: string]: any }): common.OrderFee;

        /**
         * Creates a plain object from an OrderFee message. Also converts values to other types if specified.
         * @param message OrderFee
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.OrderFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderFee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderFee
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderFeeItem. */
    interface IOrderFeeItem {

        /** OrderFeeItem title */
        title?: (string|null);

        /** OrderFeeItem value */
        value?: (number|null);
    }

    /** Represents an OrderFeeItem. */
    class OrderFeeItem implements IOrderFeeItem {

        /**
         * Constructs a new OrderFeeItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IOrderFeeItem);

        /** OrderFeeItem title. */
        public title: string;

        /** OrderFeeItem value. */
        public value: number;

        /**
         * Creates a new OrderFeeItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderFeeItem instance
         */
        public static create(properties?: common.IOrderFeeItem): common.OrderFeeItem;

        /**
         * Encodes the specified OrderFeeItem message. Does not implicitly {@link common.OrderFeeItem.verify|verify} messages.
         * @param message OrderFeeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IOrderFeeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderFeeItem message, length delimited. Does not implicitly {@link common.OrderFeeItem.verify|verify} messages.
         * @param message OrderFeeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IOrderFeeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderFeeItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderFeeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.OrderFeeItem;

        /**
         * Decodes an OrderFeeItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderFeeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.OrderFeeItem;

        /**
         * Verifies an OrderFeeItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderFeeItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderFeeItem
         */
        public static fromObject(object: { [k: string]: any }): common.OrderFeeItem;

        /**
         * Creates a plain object from an OrderFeeItem message. Also converts values to other types if specified.
         * @param message OrderFeeItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.OrderFeeItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderFeeItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderFeeItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Currency enum. */
    enum Currency {
        Currency_Unknown = 0,
        Currency_HKD = 1,
        Currency_USD = 2,
        Currency_CNH = 3,
        Currency_JPY = 4,
        Currency_SGD = 5,
        Currency_AUD = 6,
        Currency_CAD = 7,
        Currency_MYR = 8
    }

    /** Properties of a SnapshotBasicData. */
    interface ISnapshotBasicData {

        /** SnapshotBasicData security */
        security: common.ISecurity;

        /** SnapshotBasicData name */
        name?: (string|null);

        /** SnapshotBasicData type */
        type: common.SecurityType;

        /** SnapshotBasicData isSuspend */
        isSuspend: boolean;

        /** SnapshotBasicData listTime */
        listTime: string;

        /** SnapshotBasicData lotSize */
        lotSize: number;

        /** SnapshotBasicData priceSpread */
        priceSpread: number;

        /** SnapshotBasicData updateTime */
        updateTime: string;

        /** SnapshotBasicData highPrice */
        highPrice: number;

        /** SnapshotBasicData openPrice */
        openPrice: number;

        /** SnapshotBasicData lowPrice */
        lowPrice: number;

        /** SnapshotBasicData lastClosePrice */
        lastClosePrice: number;

        /** SnapshotBasicData curPrice */
        curPrice: number;

        /** SnapshotBasicData volume */
        volume: (number|Long);

        /** SnapshotBasicData turnover */
        turnover: number;

        /** SnapshotBasicData turnoverRate */
        turnoverRate: number;

        /** SnapshotBasicData listTimestamp */
        listTimestamp?: (number|null);

        /** SnapshotBasicData updateTimestamp */
        updateTimestamp?: (number|null);

        /** SnapshotBasicData askPrice */
        askPrice?: (number|null);

        /** SnapshotBasicData bidPrice */
        bidPrice?: (number|null);

        /** SnapshotBasicData askVol */
        askVol?: (number|Long|null);

        /** SnapshotBasicData bidVol */
        bidVol?: (number|Long|null);

        /** SnapshotBasicData enableMargin */
        enableMargin?: (boolean|null);

        /** SnapshotBasicData mortgageRatio */
        mortgageRatio?: (number|null);

        /** SnapshotBasicData longMarginInitialRatio */
        longMarginInitialRatio?: (number|null);

        /** SnapshotBasicData enableShortSell */
        enableShortSell?: (boolean|null);

        /** SnapshotBasicData shortSellRate */
        shortSellRate?: (number|null);

        /** SnapshotBasicData shortAvailableVolume */
        shortAvailableVolume?: (number|Long|null);

        /** SnapshotBasicData shortMarginInitialRatio */
        shortMarginInitialRatio?: (number|null);

        /** SnapshotBasicData amplitude */
        amplitude?: (number|null);

        /** SnapshotBasicData avgPrice */
        avgPrice?: (number|null);

        /** SnapshotBasicData bidAskRatio */
        bidAskRatio?: (number|null);

        /** SnapshotBasicData volumeRatio */
        volumeRatio?: (number|null);

        /** SnapshotBasicData highest52WeeksPrice */
        highest52WeeksPrice?: (number|null);

        /** SnapshotBasicData lowest52WeeksPrice */
        lowest52WeeksPrice?: (number|null);

        /** SnapshotBasicData highestHistoryPrice */
        highestHistoryPrice?: (number|null);

        /** SnapshotBasicData lowestHistoryPrice */
        lowestHistoryPrice?: (number|null);

        /** SnapshotBasicData preMarket */
        preMarket?: (common.IPreAfterMarketData|null);

        /** SnapshotBasicData afterMarket */
        afterMarket?: (common.IPreAfterMarketData|null);

        /** SnapshotBasicData secStatus */
        secStatus?: (number|null);

        /** SnapshotBasicData closePrice5Minute */
        closePrice5Minute?: (number|null);
    }

    /** 快照基本数据 */
    class SnapshotBasicData implements ISnapshotBasicData {

        /**
         * Constructs a new SnapshotBasicData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISnapshotBasicData);

        /** SnapshotBasicData security. */
        public security: common.ISecurity;

        /** SnapshotBasicData name. */
        public name: string;

        /** SnapshotBasicData type. */
        public type: common.SecurityType;

        /** SnapshotBasicData isSuspend. */
        public isSuspend: boolean;

        /** SnapshotBasicData listTime. */
        public listTime: string;

        /** SnapshotBasicData lotSize. */
        public lotSize: number;

        /** SnapshotBasicData priceSpread. */
        public priceSpread: number;

        /** SnapshotBasicData updateTime. */
        public updateTime: string;

        /** SnapshotBasicData highPrice. */
        public highPrice: number;

        /** SnapshotBasicData openPrice. */
        public openPrice: number;

        /** SnapshotBasicData lowPrice. */
        public lowPrice: number;

        /** SnapshotBasicData lastClosePrice. */
        public lastClosePrice: number;

        /** SnapshotBasicData curPrice. */
        public curPrice: number;

        /** SnapshotBasicData volume. */
        public volume: (number|Long);

        /** SnapshotBasicData turnover. */
        public turnover: number;

        /** SnapshotBasicData turnoverRate. */
        public turnoverRate: number;

        /** SnapshotBasicData listTimestamp. */
        public listTimestamp: number;

        /** SnapshotBasicData updateTimestamp. */
        public updateTimestamp: number;

        /** SnapshotBasicData askPrice. */
        public askPrice: number;

        /** SnapshotBasicData bidPrice. */
        public bidPrice: number;

        /** SnapshotBasicData askVol. */
        public askVol: (number|Long);

        /** SnapshotBasicData bidVol. */
        public bidVol: (number|Long);

        /** SnapshotBasicData enableMargin. */
        public enableMargin: boolean;

        /** SnapshotBasicData mortgageRatio. */
        public mortgageRatio: number;

        /** SnapshotBasicData longMarginInitialRatio. */
        public longMarginInitialRatio: number;

        /** SnapshotBasicData enableShortSell. */
        public enableShortSell: boolean;

        /** SnapshotBasicData shortSellRate. */
        public shortSellRate: number;

        /** SnapshotBasicData shortAvailableVolume. */
        public shortAvailableVolume: (number|Long);

        /** SnapshotBasicData shortMarginInitialRatio. */
        public shortMarginInitialRatio: number;

        /** SnapshotBasicData amplitude. */
        public amplitude: number;

        /** SnapshotBasicData avgPrice. */
        public avgPrice: number;

        /** SnapshotBasicData bidAskRatio. */
        public bidAskRatio: number;

        /** SnapshotBasicData volumeRatio. */
        public volumeRatio: number;

        /** SnapshotBasicData highest52WeeksPrice. */
        public highest52WeeksPrice: number;

        /** SnapshotBasicData lowest52WeeksPrice. */
        public lowest52WeeksPrice: number;

        /** SnapshotBasicData highestHistoryPrice. */
        public highestHistoryPrice: number;

        /** SnapshotBasicData lowestHistoryPrice. */
        public lowestHistoryPrice: number;

        /** SnapshotBasicData preMarket. */
        public preMarket?: (common.IPreAfterMarketData|null);

        /** SnapshotBasicData afterMarket. */
        public afterMarket?: (common.IPreAfterMarketData|null);

        /** SnapshotBasicData secStatus. */
        public secStatus: number;

        /** SnapshotBasicData closePrice5Minute. */
        public closePrice5Minute: number;

        /**
         * Creates a new SnapshotBasicData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SnapshotBasicData instance
         */
        public static create(properties?: common.ISnapshotBasicData): common.SnapshotBasicData;

        /**
         * Encodes the specified SnapshotBasicData message. Does not implicitly {@link common.SnapshotBasicData.verify|verify} messages.
         * @param message SnapshotBasicData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISnapshotBasicData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SnapshotBasicData message, length delimited. Does not implicitly {@link common.SnapshotBasicData.verify|verify} messages.
         * @param message SnapshotBasicData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISnapshotBasicData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SnapshotBasicData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SnapshotBasicData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.SnapshotBasicData;

        /**
         * Decodes a SnapshotBasicData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SnapshotBasicData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.SnapshotBasicData;

        /**
         * Verifies a SnapshotBasicData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SnapshotBasicData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SnapshotBasicData
         */
        public static fromObject(object: { [k: string]: any }): common.SnapshotBasicData;

        /**
         * Creates a plain object from a SnapshotBasicData message. Also converts values to other types if specified.
         * @param message SnapshotBasicData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.SnapshotBasicData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SnapshotBasicData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SnapshotBasicData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EquitySnapshotExData. */
    interface IEquitySnapshotExData {

        /** EquitySnapshotExData issuedShares */
        issuedShares: (number|Long);

        /** EquitySnapshotExData issuedMarketVal */
        issuedMarketVal: number;

        /** EquitySnapshotExData netAsset */
        netAsset: number;

        /** EquitySnapshotExData netProfit */
        netProfit: number;

        /** EquitySnapshotExData earningsPershare */
        earningsPershare: number;

        /** EquitySnapshotExData outstandingShares */
        outstandingShares: (number|Long);

        /** EquitySnapshotExData outstandingMarketVal */
        outstandingMarketVal: number;

        /** EquitySnapshotExData netAssetPershare */
        netAssetPershare: number;

        /** EquitySnapshotExData eyRate */
        eyRate: number;

        /** EquitySnapshotExData peRate */
        peRate: number;

        /** EquitySnapshotExData pbRate */
        pbRate: number;

        /** EquitySnapshotExData peTTMRate */
        peTTMRate: number;

        /** EquitySnapshotExData dividendTTM */
        dividendTTM?: (number|null);

        /** EquitySnapshotExData dividendRatioTTM */
        dividendRatioTTM?: (number|null);

        /** EquitySnapshotExData dividendLFY */
        dividendLFY?: (number|null);

        /** EquitySnapshotExData dividendLFYRatio */
        dividendLFYRatio?: (number|null);
    }

    /** 正股快照额外数据 */
    class EquitySnapshotExData implements IEquitySnapshotExData {

        /**
         * Constructs a new EquitySnapshotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEquitySnapshotExData);

        /** EquitySnapshotExData issuedShares. */
        public issuedShares: (number|Long);

        /** EquitySnapshotExData issuedMarketVal. */
        public issuedMarketVal: number;

        /** EquitySnapshotExData netAsset. */
        public netAsset: number;

        /** EquitySnapshotExData netProfit. */
        public netProfit: number;

        /** EquitySnapshotExData earningsPershare. */
        public earningsPershare: number;

        /** EquitySnapshotExData outstandingShares. */
        public outstandingShares: (number|Long);

        /** EquitySnapshotExData outstandingMarketVal. */
        public outstandingMarketVal: number;

        /** EquitySnapshotExData netAssetPershare. */
        public netAssetPershare: number;

        /** EquitySnapshotExData eyRate. */
        public eyRate: number;

        /** EquitySnapshotExData peRate. */
        public peRate: number;

        /** EquitySnapshotExData pbRate. */
        public pbRate: number;

        /** EquitySnapshotExData peTTMRate. */
        public peTTMRate: number;

        /** EquitySnapshotExData dividendTTM. */
        public dividendTTM: number;

        /** EquitySnapshotExData dividendRatioTTM. */
        public dividendRatioTTM: number;

        /** EquitySnapshotExData dividendLFY. */
        public dividendLFY: number;

        /** EquitySnapshotExData dividendLFYRatio. */
        public dividendLFYRatio: number;

        /**
         * Creates a new EquitySnapshotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquitySnapshotExData instance
         */
        public static create(properties?: common.IEquitySnapshotExData): common.EquitySnapshotExData;

        /**
         * Encodes the specified EquitySnapshotExData message. Does not implicitly {@link common.EquitySnapshotExData.verify|verify} messages.
         * @param message EquitySnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEquitySnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EquitySnapshotExData message, length delimited. Does not implicitly {@link common.EquitySnapshotExData.verify|verify} messages.
         * @param message EquitySnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEquitySnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquitySnapshotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquitySnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.EquitySnapshotExData;

        /**
         * Decodes an EquitySnapshotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquitySnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.EquitySnapshotExData;

        /**
         * Verifies an EquitySnapshotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquitySnapshotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquitySnapshotExData
         */
        public static fromObject(object: { [k: string]: any }): common.EquitySnapshotExData;

        /**
         * Creates a plain object from an EquitySnapshotExData message. Also converts values to other types if specified.
         * @param message EquitySnapshotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.EquitySnapshotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquitySnapshotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EquitySnapshotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OptionSnapshotExData. */
    interface IOptionSnapshotExData {

        /** OptionSnapshotExData type */
        type: common.OptionType;

        /** OptionSnapshotExData owner */
        owner: common.ISecurity;

        /** OptionSnapshotExData strikeTime */
        strikeTime: string;

        /** OptionSnapshotExData strikePrice */
        strikePrice: number;

        /** OptionSnapshotExData contractSize */
        contractSize: number;

        /** OptionSnapshotExData contractSizeFloat */
        contractSizeFloat?: (number|null);

        /** OptionSnapshotExData openInterest */
        openInterest: number;

        /** OptionSnapshotExData impliedVolatility */
        impliedVolatility: number;

        /** OptionSnapshotExData premium */
        premium: number;

        /** OptionSnapshotExData delta */
        delta: number;

        /** OptionSnapshotExData gamma */
        gamma: number;

        /** OptionSnapshotExData vega */
        vega: number;

        /** OptionSnapshotExData theta */
        theta: number;

        /** OptionSnapshotExData rho */
        rho: number;

        /** OptionSnapshotExData strikeTimestamp */
        strikeTimestamp?: (number|null);

        /** OptionSnapshotExData indexOptionType */
        indexOptionType?: (common.IndexOptionType|null);

        /** OptionSnapshotExData netOpenInterest */
        netOpenInterest?: (number|null);

        /** OptionSnapshotExData expiryDateDistance */
        expiryDateDistance?: (number|null);

        /** OptionSnapshotExData contractNominalValue */
        contractNominalValue?: (number|null);

        /** OptionSnapshotExData ownerLotMultiplier */
        ownerLotMultiplier?: (number|null);

        /** OptionSnapshotExData optionAreaType */
        optionAreaType?: (common.OptionAreaType|null);

        /** OptionSnapshotExData contractMultiplier */
        contractMultiplier?: (number|null);
    }

    /** 期权类型额外数据 */
    class OptionSnapshotExData implements IOptionSnapshotExData {

        /**
         * Constructs a new OptionSnapshotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IOptionSnapshotExData);

        /** OptionSnapshotExData type. */
        public type: common.OptionType;

        /** OptionSnapshotExData owner. */
        public owner: common.ISecurity;

        /** OptionSnapshotExData strikeTime. */
        public strikeTime: string;

        /** OptionSnapshotExData strikePrice. */
        public strikePrice: number;

        /** OptionSnapshotExData contractSize. */
        public contractSize: number;

        /** OptionSnapshotExData contractSizeFloat. */
        public contractSizeFloat: number;

        /** OptionSnapshotExData openInterest. */
        public openInterest: number;

        /** OptionSnapshotExData impliedVolatility. */
        public impliedVolatility: number;

        /** OptionSnapshotExData premium. */
        public premium: number;

        /** OptionSnapshotExData delta. */
        public delta: number;

        /** OptionSnapshotExData gamma. */
        public gamma: number;

        /** OptionSnapshotExData vega. */
        public vega: number;

        /** OptionSnapshotExData theta. */
        public theta: number;

        /** OptionSnapshotExData rho. */
        public rho: number;

        /** OptionSnapshotExData strikeTimestamp. */
        public strikeTimestamp: number;

        /** OptionSnapshotExData indexOptionType. */
        public indexOptionType: common.IndexOptionType;

        /** OptionSnapshotExData netOpenInterest. */
        public netOpenInterest: number;

        /** OptionSnapshotExData expiryDateDistance. */
        public expiryDateDistance: number;

        /** OptionSnapshotExData contractNominalValue. */
        public contractNominalValue: number;

        /** OptionSnapshotExData ownerLotMultiplier. */
        public ownerLotMultiplier: number;

        /** OptionSnapshotExData optionAreaType. */
        public optionAreaType: common.OptionAreaType;

        /** OptionSnapshotExData contractMultiplier. */
        public contractMultiplier: number;

        /**
         * Creates a new OptionSnapshotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OptionSnapshotExData instance
         */
        public static create(properties?: common.IOptionSnapshotExData): common.OptionSnapshotExData;

        /**
         * Encodes the specified OptionSnapshotExData message. Does not implicitly {@link common.OptionSnapshotExData.verify|verify} messages.
         * @param message OptionSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IOptionSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OptionSnapshotExData message, length delimited. Does not implicitly {@link common.OptionSnapshotExData.verify|verify} messages.
         * @param message OptionSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IOptionSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OptionSnapshotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OptionSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.OptionSnapshotExData;

        /**
         * Decodes an OptionSnapshotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OptionSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.OptionSnapshotExData;

        /**
         * Verifies an OptionSnapshotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OptionSnapshotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OptionSnapshotExData
         */
        public static fromObject(object: { [k: string]: any }): common.OptionSnapshotExData;

        /**
         * Creates a plain object from an OptionSnapshotExData message. Also converts values to other types if specified.
         * @param message OptionSnapshotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.OptionSnapshotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OptionSnapshotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OptionSnapshotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WarrantSnapshotExData. */
    interface IWarrantSnapshotExData {

        /** WarrantSnapshotExData conversionRate */
        conversionRate: number;

        /** WarrantSnapshotExData warrantType */
        warrantType: common.WarrantType;

        /** WarrantSnapshotExData strikePrice */
        strikePrice: number;

        /** WarrantSnapshotExData maturityTime */
        maturityTime: string;

        /** WarrantSnapshotExData endTradeTime */
        endTradeTime: string;

        /** WarrantSnapshotExData owner */
        owner: common.ISecurity;

        /** WarrantSnapshotExData recoveryPrice */
        recoveryPrice: number;

        /** WarrantSnapshotExData streetVolumn */
        streetVolumn: (number|Long);

        /** WarrantSnapshotExData issueVolumn */
        issueVolumn: (number|Long);

        /** WarrantSnapshotExData streetRate */
        streetRate: number;

        /** WarrantSnapshotExData delta */
        delta: number;

        /** WarrantSnapshotExData impliedVolatility */
        impliedVolatility: number;

        /** WarrantSnapshotExData premium */
        premium: number;

        /** WarrantSnapshotExData maturityTimestamp */
        maturityTimestamp?: (number|null);

        /** WarrantSnapshotExData endTradeTimestamp */
        endTradeTimestamp?: (number|null);

        /** WarrantSnapshotExData leverage */
        leverage?: (number|null);

        /** WarrantSnapshotExData ipop */
        ipop?: (number|null);

        /** WarrantSnapshotExData breakEvenPoint */
        breakEvenPoint?: (number|null);

        /** WarrantSnapshotExData conversionPrice */
        conversionPrice?: (number|null);

        /** WarrantSnapshotExData priceRecoveryRatio */
        priceRecoveryRatio?: (number|null);

        /** WarrantSnapshotExData score */
        score?: (number|null);

        /** WarrantSnapshotExData upperStrikePrice */
        upperStrikePrice?: (number|null);

        /** WarrantSnapshotExData lowerStrikePrice */
        lowerStrikePrice?: (number|null);

        /** WarrantSnapshotExData inLinePriceStatus */
        inLinePriceStatus?: (common.PriceType|null);

        /** WarrantSnapshotExData issuerCode */
        issuerCode?: (string|null);
    }

    /** 窝轮类型额外数据 */
    class WarrantSnapshotExData implements IWarrantSnapshotExData {

        /**
         * Constructs a new WarrantSnapshotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IWarrantSnapshotExData);

        /** WarrantSnapshotExData conversionRate. */
        public conversionRate: number;

        /** WarrantSnapshotExData warrantType. */
        public warrantType: common.WarrantType;

        /** WarrantSnapshotExData strikePrice. */
        public strikePrice: number;

        /** WarrantSnapshotExData maturityTime. */
        public maturityTime: string;

        /** WarrantSnapshotExData endTradeTime. */
        public endTradeTime: string;

        /** WarrantSnapshotExData owner. */
        public owner: common.ISecurity;

        /** WarrantSnapshotExData recoveryPrice. */
        public recoveryPrice: number;

        /** WarrantSnapshotExData streetVolumn. */
        public streetVolumn: (number|Long);

        /** WarrantSnapshotExData issueVolumn. */
        public issueVolumn: (number|Long);

        /** WarrantSnapshotExData streetRate. */
        public streetRate: number;

        /** WarrantSnapshotExData delta. */
        public delta: number;

        /** WarrantSnapshotExData impliedVolatility. */
        public impliedVolatility: number;

        /** WarrantSnapshotExData premium. */
        public premium: number;

        /** WarrantSnapshotExData maturityTimestamp. */
        public maturityTimestamp: number;

        /** WarrantSnapshotExData endTradeTimestamp. */
        public endTradeTimestamp: number;

        /** WarrantSnapshotExData leverage. */
        public leverage: number;

        /** WarrantSnapshotExData ipop. */
        public ipop: number;

        /** WarrantSnapshotExData breakEvenPoint. */
        public breakEvenPoint: number;

        /** WarrantSnapshotExData conversionPrice. */
        public conversionPrice: number;

        /** WarrantSnapshotExData priceRecoveryRatio. */
        public priceRecoveryRatio: number;

        /** WarrantSnapshotExData score. */
        public score: number;

        /** WarrantSnapshotExData upperStrikePrice. */
        public upperStrikePrice: number;

        /** WarrantSnapshotExData lowerStrikePrice. */
        public lowerStrikePrice: number;

        /** WarrantSnapshotExData inLinePriceStatus. */
        public inLinePriceStatus: common.PriceType;

        /** WarrantSnapshotExData issuerCode. */
        public issuerCode: string;

        /**
         * Creates a new WarrantSnapshotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarrantSnapshotExData instance
         */
        public static create(properties?: common.IWarrantSnapshotExData): common.WarrantSnapshotExData;

        /**
         * Encodes the specified WarrantSnapshotExData message. Does not implicitly {@link common.WarrantSnapshotExData.verify|verify} messages.
         * @param message WarrantSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IWarrantSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WarrantSnapshotExData message, length delimited. Does not implicitly {@link common.WarrantSnapshotExData.verify|verify} messages.
         * @param message WarrantSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IWarrantSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WarrantSnapshotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarrantSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.WarrantSnapshotExData;

        /**
         * Decodes a WarrantSnapshotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarrantSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.WarrantSnapshotExData;

        /**
         * Verifies a WarrantSnapshotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WarrantSnapshotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WarrantSnapshotExData
         */
        public static fromObject(object: { [k: string]: any }): common.WarrantSnapshotExData;

        /**
         * Creates a plain object from a WarrantSnapshotExData message. Also converts values to other types if specified.
         * @param message WarrantSnapshotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.WarrantSnapshotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WarrantSnapshotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WarrantSnapshotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IndexSnapshotExData. */
    interface IIndexSnapshotExData {

        /** IndexSnapshotExData raiseCount */
        raiseCount: number;

        /** IndexSnapshotExData fallCount */
        fallCount: number;

        /** IndexSnapshotExData equalCount */
        equalCount: number;
    }

    /** Represents an IndexSnapshotExData. */
    class IndexSnapshotExData implements IIndexSnapshotExData {

        /**
         * Constructs a new IndexSnapshotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IIndexSnapshotExData);

        /** IndexSnapshotExData raiseCount. */
        public raiseCount: number;

        /** IndexSnapshotExData fallCount. */
        public fallCount: number;

        /** IndexSnapshotExData equalCount. */
        public equalCount: number;

        /**
         * Creates a new IndexSnapshotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IndexSnapshotExData instance
         */
        public static create(properties?: common.IIndexSnapshotExData): common.IndexSnapshotExData;

        /**
         * Encodes the specified IndexSnapshotExData message. Does not implicitly {@link common.IndexSnapshotExData.verify|verify} messages.
         * @param message IndexSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IIndexSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IndexSnapshotExData message, length delimited. Does not implicitly {@link common.IndexSnapshotExData.verify|verify} messages.
         * @param message IndexSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IIndexSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IndexSnapshotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IndexSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.IndexSnapshotExData;

        /**
         * Decodes an IndexSnapshotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IndexSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.IndexSnapshotExData;

        /**
         * Verifies an IndexSnapshotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IndexSnapshotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IndexSnapshotExData
         */
        public static fromObject(object: { [k: string]: any }): common.IndexSnapshotExData;

        /**
         * Creates a plain object from an IndexSnapshotExData message. Also converts values to other types if specified.
         * @param message IndexSnapshotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.IndexSnapshotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IndexSnapshotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IndexSnapshotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlateSnapshotExData. */
    interface IPlateSnapshotExData {

        /** PlateSnapshotExData raiseCount */
        raiseCount: number;

        /** PlateSnapshotExData fallCount */
        fallCount: number;

        /** PlateSnapshotExData equalCount */
        equalCount: number;
    }

    /** Represents a PlateSnapshotExData. */
    class PlateSnapshotExData implements IPlateSnapshotExData {

        /**
         * Constructs a new PlateSnapshotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPlateSnapshotExData);

        /** PlateSnapshotExData raiseCount. */
        public raiseCount: number;

        /** PlateSnapshotExData fallCount. */
        public fallCount: number;

        /** PlateSnapshotExData equalCount. */
        public equalCount: number;

        /**
         * Creates a new PlateSnapshotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlateSnapshotExData instance
         */
        public static create(properties?: common.IPlateSnapshotExData): common.PlateSnapshotExData;

        /**
         * Encodes the specified PlateSnapshotExData message. Does not implicitly {@link common.PlateSnapshotExData.verify|verify} messages.
         * @param message PlateSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPlateSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlateSnapshotExData message, length delimited. Does not implicitly {@link common.PlateSnapshotExData.verify|verify} messages.
         * @param message PlateSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPlateSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlateSnapshotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlateSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.PlateSnapshotExData;

        /**
         * Decodes a PlateSnapshotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlateSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.PlateSnapshotExData;

        /**
         * Verifies a PlateSnapshotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlateSnapshotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlateSnapshotExData
         */
        public static fromObject(object: { [k: string]: any }): common.PlateSnapshotExData;

        /**
         * Creates a plain object from a PlateSnapshotExData message. Also converts values to other types if specified.
         * @param message PlateSnapshotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.PlateSnapshotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlateSnapshotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlateSnapshotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FutureSnapshotExData. */
    interface IFutureSnapshotExData {

        /** FutureSnapshotExData lastSettlePrice */
        lastSettlePrice: number;

        /** FutureSnapshotExData position */
        position: number;

        /** FutureSnapshotExData positionChange */
        positionChange: number;

        /** FutureSnapshotExData lastTradeTime */
        lastTradeTime: string;

        /** FutureSnapshotExData lastTradeTimestamp */
        lastTradeTimestamp?: (number|null);

        /** FutureSnapshotExData isMainContract */
        isMainContract: boolean;
    }

    /** Represents a FutureSnapshotExData. */
    class FutureSnapshotExData implements IFutureSnapshotExData {

        /**
         * Constructs a new FutureSnapshotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IFutureSnapshotExData);

        /** FutureSnapshotExData lastSettlePrice. */
        public lastSettlePrice: number;

        /** FutureSnapshotExData position. */
        public position: number;

        /** FutureSnapshotExData positionChange. */
        public positionChange: number;

        /** FutureSnapshotExData lastTradeTime. */
        public lastTradeTime: string;

        /** FutureSnapshotExData lastTradeTimestamp. */
        public lastTradeTimestamp: number;

        /** FutureSnapshotExData isMainContract. */
        public isMainContract: boolean;

        /**
         * Creates a new FutureSnapshotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FutureSnapshotExData instance
         */
        public static create(properties?: common.IFutureSnapshotExData): common.FutureSnapshotExData;

        /**
         * Encodes the specified FutureSnapshotExData message. Does not implicitly {@link common.FutureSnapshotExData.verify|verify} messages.
         * @param message FutureSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IFutureSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FutureSnapshotExData message, length delimited. Does not implicitly {@link common.FutureSnapshotExData.verify|verify} messages.
         * @param message FutureSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IFutureSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FutureSnapshotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FutureSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.FutureSnapshotExData;

        /**
         * Decodes a FutureSnapshotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FutureSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.FutureSnapshotExData;

        /**
         * Verifies a FutureSnapshotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FutureSnapshotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FutureSnapshotExData
         */
        public static fromObject(object: { [k: string]: any }): common.FutureSnapshotExData;

        /**
         * Creates a plain object from a FutureSnapshotExData message. Also converts values to other types if specified.
         * @param message FutureSnapshotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.FutureSnapshotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FutureSnapshotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FutureSnapshotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TrustSnapshotExData. */
    interface ITrustSnapshotExData {

        /** TrustSnapshotExData dividendYield */
        dividendYield: number;

        /** TrustSnapshotExData aum */
        aum: number;

        /** TrustSnapshotExData outstandingUnits */
        outstandingUnits: (number|Long);

        /** TrustSnapshotExData netAssetValue */
        netAssetValue: number;

        /** TrustSnapshotExData premium */
        premium: number;

        /** TrustSnapshotExData assetClass */
        assetClass: common.AssetClass;
    }

    /** Represents a TrustSnapshotExData. */
    class TrustSnapshotExData implements ITrustSnapshotExData {

        /**
         * Constructs a new TrustSnapshotExData.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ITrustSnapshotExData);

        /** TrustSnapshotExData dividendYield. */
        public dividendYield: number;

        /** TrustSnapshotExData aum. */
        public aum: number;

        /** TrustSnapshotExData outstandingUnits. */
        public outstandingUnits: (number|Long);

        /** TrustSnapshotExData netAssetValue. */
        public netAssetValue: number;

        /** TrustSnapshotExData premium. */
        public premium: number;

        /** TrustSnapshotExData assetClass. */
        public assetClass: common.AssetClass;

        /**
         * Creates a new TrustSnapshotExData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TrustSnapshotExData instance
         */
        public static create(properties?: common.ITrustSnapshotExData): common.TrustSnapshotExData;

        /**
         * Encodes the specified TrustSnapshotExData message. Does not implicitly {@link common.TrustSnapshotExData.verify|verify} messages.
         * @param message TrustSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ITrustSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TrustSnapshotExData message, length delimited. Does not implicitly {@link common.TrustSnapshotExData.verify|verify} messages.
         * @param message TrustSnapshotExData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ITrustSnapshotExData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TrustSnapshotExData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TrustSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.TrustSnapshotExData;

        /**
         * Decodes a TrustSnapshotExData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TrustSnapshotExData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.TrustSnapshotExData;

        /**
         * Verifies a TrustSnapshotExData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TrustSnapshotExData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TrustSnapshotExData
         */
        public static fromObject(object: { [k: string]: any }): common.TrustSnapshotExData;

        /**
         * Creates a plain object from a TrustSnapshotExData message. Also converts values to other types if specified.
         * @param message TrustSnapshotExData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.TrustSnapshotExData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TrustSnapshotExData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TrustSnapshotExData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** AssetClass enum. */
    enum AssetClass {
        AssetClass_Unknow = 0,
        AssetClass_Stock = 1,
        AssetClass_Bond = 2,
        AssetClass_Commodity = 3,
        AssetClass_CurrencyMarket = 4,
        AssetClass_Future = 5,
        AssetClass_Swap = 6
    }

    /** SecurityType enum. */
    enum SecurityType {
        SecurityType_Unknown = 0,
        SecurityType_Bond = 1,
        SecurityType_Bwrt = 2,
        SecurityType_Eqty = 3,
        SecurityType_Trust = 4,
        SecurityType_Warrant = 5,
        SecurityType_Index = 6,
        SecurityType_Plate = 7,
        SecurityType_Drvt = 8,
        SecurityType_PlateSet = 9,
        SecurityType_Future = 10
    }

    /** OptionType enum. */
    enum OptionType {
        OptionType_Unknown = 0,
        OptionType_Call = 1,
        OptionType_Put = 2
    }

    /** IndexOptionType enum. */
    enum IndexOptionType {
        IndexOptionType_Unknown = 0,
        IndexOptionType_Normal = 1,
        IndexOptionType_Small = 2
    }

    /** OptionAreaType enum. */
    enum OptionAreaType {
        OptionAreaType_Unknown = 0,
        OptionAreaType_American = 1,
        OptionAreaType_European = 2,
        OptionAreaType_Bermuda = 3
    }

    /** PlateSetType enum. */
    enum PlateSetType {
        PlateSetType_All = 0,
        PlateSetType_Industry = 1,
        PlateSetType_Region = 2,
        PlateSetType_Concept = 3,
        PlateSetType_Other = 4
    }

    /** WarrantType enum. */
    enum WarrantType {
        WarrantType_Unknown = 0,
        WarrantType_Buy = 1,
        WarrantType_Sell = 2,
        WarrantType_Bull = 3,
        WarrantType_Bear = 4,
        WarrantType_InLine = 5
    }

    /** PriceType enum. */
    enum PriceType {
        PriceType_Unknow = 0,
        PriceType_Outside = 1,
        PriceType_WithIn = 2
    }

    /** WarrantStatus enum. */
    enum WarrantStatus {
        WarrantStatus_Unknow = 0,
        WarrantStatus_Normal = 1,
        WarrantStatus_Suspend = 2,
        WarrantStatus_StopTrade = 3,
        WarrantStatus_PendingListing = 4
    }

    /** Properties of a TrdFilterConditions. */
    interface ITrdFilterConditions {

        /** TrdFilterConditions codeList */
        codeList?: (string[]|null);

        /** TrdFilterConditions idList */
        idList?: ((number|Long)[]|null);

        /** TrdFilterConditions beginTime */
        beginTime?: (string|null);

        /** TrdFilterConditions endTime */
        endTime?: (string|null);

        /** TrdFilterConditions orderIDExList */
        orderIDExList?: (string[]|null);

        /** TrdFilterConditions filterMarket */
        filterMarket?: (number|null);
    }

    /** 持仓过滤条件 */
    class TrdFilterConditions implements ITrdFilterConditions {

        /**
         * Constructs a new TrdFilterConditions.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ITrdFilterConditions);

        /** TrdFilterConditions codeList. */
        public codeList: string[];

        /** TrdFilterConditions idList. */
        public idList: (number|Long)[];

        /** TrdFilterConditions beginTime. */
        public beginTime: string;

        /** TrdFilterConditions endTime. */
        public endTime: string;

        /** TrdFilterConditions orderIDExList. */
        public orderIDExList: string[];

        /** TrdFilterConditions filterMarket. */
        public filterMarket: number;

        /**
         * Creates a new TrdFilterConditions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TrdFilterConditions instance
         */
        public static create(properties?: common.ITrdFilterConditions): common.TrdFilterConditions;

        /**
         * Encodes the specified TrdFilterConditions message. Does not implicitly {@link common.TrdFilterConditions.verify|verify} messages.
         * @param message TrdFilterConditions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ITrdFilterConditions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TrdFilterConditions message, length delimited. Does not implicitly {@link common.TrdFilterConditions.verify|verify} messages.
         * @param message TrdFilterConditions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ITrdFilterConditions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TrdFilterConditions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TrdFilterConditions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.TrdFilterConditions;

        /**
         * Decodes a TrdFilterConditions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TrdFilterConditions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.TrdFilterConditions;

        /**
         * Verifies a TrdFilterConditions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TrdFilterConditions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TrdFilterConditions
         */
        public static fromObject(object: { [k: string]: any }): common.TrdFilterConditions;

        /**
         * Creates a plain object from a TrdFilterConditions message. Also converts values to other types if specified.
         * @param message TrdFilterConditions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.TrdFilterConditions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TrdFilterConditions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TrdFilterConditions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MaxTrdQtys. */
    interface IMaxTrdQtys {

        /** MaxTrdQtys maxCashBuy */
        maxCashBuy: number;

        /** MaxTrdQtys maxCashAndMarginBuy */
        maxCashAndMarginBuy?: (number|null);

        /** MaxTrdQtys maxPositionSell */
        maxPositionSell: number;

        /** MaxTrdQtys maxSellShort */
        maxSellShort?: (number|null);

        /** MaxTrdQtys maxBuyBack */
        maxBuyBack?: (number|null);

        /** MaxTrdQtys longRequiredIM */
        longRequiredIM?: (number|null);

        /** MaxTrdQtys shortRequiredIM */
        shortRequiredIM?: (number|null);
    }

    /** 最大可交易数量 */
    class MaxTrdQtys implements IMaxTrdQtys {

        /**
         * Constructs a new MaxTrdQtys.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IMaxTrdQtys);

        /** MaxTrdQtys maxCashBuy. */
        public maxCashBuy: number;

        /** MaxTrdQtys maxCashAndMarginBuy. */
        public maxCashAndMarginBuy: number;

        /** MaxTrdQtys maxPositionSell. */
        public maxPositionSell: number;

        /** MaxTrdQtys maxSellShort. */
        public maxSellShort: number;

        /** MaxTrdQtys maxBuyBack. */
        public maxBuyBack: number;

        /** MaxTrdQtys longRequiredIM. */
        public longRequiredIM: number;

        /** MaxTrdQtys shortRequiredIM. */
        public shortRequiredIM: number;

        /**
         * Creates a new MaxTrdQtys instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MaxTrdQtys instance
         */
        public static create(properties?: common.IMaxTrdQtys): common.MaxTrdQtys;

        /**
         * Encodes the specified MaxTrdQtys message. Does not implicitly {@link common.MaxTrdQtys.verify|verify} messages.
         * @param message MaxTrdQtys message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IMaxTrdQtys, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MaxTrdQtys message, length delimited. Does not implicitly {@link common.MaxTrdQtys.verify|verify} messages.
         * @param message MaxTrdQtys message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IMaxTrdQtys, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaxTrdQtys message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MaxTrdQtys
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.MaxTrdQtys;

        /**
         * Decodes a MaxTrdQtys message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MaxTrdQtys
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.MaxTrdQtys;

        /**
         * Verifies a MaxTrdQtys message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MaxTrdQtys message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaxTrdQtys
         */
        public static fromObject(object: { [k: string]: any }): common.MaxTrdQtys;

        /**
         * Creates a plain object from a MaxTrdQtys message. Also converts values to other types if specified.
         * @param message MaxTrdQtys
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.MaxTrdQtys, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaxTrdQtys to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MaxTrdQtys
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position positionID */
        positionID: (number|Long);

        /** Position positionSide */
        positionSide: common.PositionSide;

        /** Position code */
        code: string;

        /** Position name */
        name: string;

        /** Position qty */
        qty: number;

        /** Position canSellQty */
        canSellQty: number;

        /** Position price */
        price: number;

        /** Position costPrice */
        costPrice?: (number|null);

        /** Position val */
        val: number;

        /** Position plVal */
        plVal: number;

        /** Position plRatio */
        plRatio?: (number|null);

        /** Position secMarket */
        secMarket?: (common.TrdSecMarket|null);

        /** Position tdPlVal */
        tdPlVal?: (number|null);

        /** Position tdTrdVal */
        tdTrdVal?: (number|null);

        /** Position tdBuyVal */
        tdBuyVal?: (number|null);

        /** Position tdBuyQty */
        tdBuyQty?: (number|null);

        /** Position tdSellVal */
        tdSellVal?: (number|null);

        /** Position tdSellQty */
        tdSellQty?: (number|null);

        /** Position unrealizedPL */
        unrealizedPL?: (number|null);

        /** Position realizedPL */
        realizedPL?: (number|null);

        /** Position currency */
        currency?: (common.Currency|null);

        /** Position trdMarket */
        trdMarket?: (common.TrdMarket|null);
    }

    /** 持仓 */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPosition);

        /** Position positionID. */
        public positionID: (number|Long);

        /** Position positionSide. */
        public positionSide: common.PositionSide;

        /** Position code. */
        public code: string;

        /** Position name. */
        public name: string;

        /** Position qty. */
        public qty: number;

        /** Position canSellQty. */
        public canSellQty: number;

        /** Position price. */
        public price: number;

        /** Position costPrice. */
        public costPrice: number;

        /** Position val. */
        public val: number;

        /** Position plVal. */
        public plVal: number;

        /** Position plRatio. */
        public plRatio: number;

        /** Position secMarket. */
        public secMarket: common.TrdSecMarket;

        /** Position tdPlVal. */
        public tdPlVal: number;

        /** Position tdTrdVal. */
        public tdTrdVal: number;

        /** Position tdBuyVal. */
        public tdBuyVal: number;

        /** Position tdBuyQty. */
        public tdBuyQty: number;

        /** Position tdSellVal. */
        public tdSellVal: number;

        /** Position tdSellQty. */
        public tdSellQty: number;

        /** Position unrealizedPL. */
        public unrealizedPL: number;

        /** Position realizedPL. */
        public realizedPL: number;

        /** Position currency. */
        public currency: common.Currency;

        /** Position trdMarket. */
        public trdMarket: common.TrdMarket;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: common.IPosition): common.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link common.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link common.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): common.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Position
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** PositionSide enum. */
    enum PositionSide {
        PositionSide_Long = 0,
        PositionSide_Unknown = -1,
        PositionSide_Short = 1
    }
}

/** Namespace notify. */
export namespace notify {

    /** Properties of an Event. */
    interface IEvent {

        /** Event retType */
        retType: number;

        /** Event retMsg */
        retMsg?: (string|null);

        /** Event errCode */
        errCode?: (number|null);

        /** Event s2c */
        s2c?: (notify.Event.IS2C|null);
    }

    /** 事件通知 */
    class Event implements IEvent {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IEvent);

        /** Event retType. */
        public retType: number;

        /** Event retMsg. */
        public retMsg: string;

        /** Event errCode. */
        public errCode: number;

        /** Event s2c. */
        public s2c?: (notify.Event.IS2C|null);

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: notify.IEvent): notify.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link notify.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link notify.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): notify.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Event
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Event {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C type */
            type: common.NotifyType;

            /** S2C event */
            event?: (common.IGtwEvent|null);

            /** S2C programStatus */
            programStatus?: (common.IProgramStatus|null);

            /** S2C connectStatus */
            connectStatus?: (common.IConnectStatus|null);

            /** S2C qotRight */
            qotRight?: (common.IQotRight|null);

            /** S2C apiLevel */
            apiLevel?: (common.IAPILevel|null);

            /** S2C apiQuota */
            apiQuota?: (common.IAPIQuota|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: notify.Event.IS2C);

            /** S2C type. */
            public type: common.NotifyType;

            /** S2C event. */
            public event?: (common.IGtwEvent|null);

            /** S2C programStatus. */
            public programStatus?: (common.IProgramStatus|null);

            /** S2C connectStatus. */
            public connectStatus?: (common.IConnectStatus|null);

            /** S2C qotRight. */
            public qotRight?: (common.IQotRight|null);

            /** S2C apiLevel. */
            public apiLevel?: (common.IAPILevel|null);

            /** S2C apiQuota. */
            public apiQuota?: (common.IAPIQuota|null);

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: notify.Event.IS2C): notify.Event.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link notify.Event.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: notify.Event.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link notify.Event.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: notify.Event.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.Event.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.Event.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): notify.Event.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: notify.Event.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Deal. */
    interface IDeal {

        /** Deal retType */
        retType: number;

        /** Deal retMsg */
        retMsg?: (string|null);

        /** Deal errCode */
        errCode?: (number|null);

        /** Deal s2c */
        s2c?: (notify.Deal.IS2C|null);
    }

    /** 成交推送 */
    class Deal implements IDeal {

        /**
         * Constructs a new Deal.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IDeal);

        /** Deal retType. */
        public retType: number;

        /** Deal retMsg. */
        public retMsg: string;

        /** Deal errCode. */
        public errCode: number;

        /** Deal s2c. */
        public s2c?: (notify.Deal.IS2C|null);

        /**
         * Creates a new Deal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Deal instance
         */
        public static create(properties?: notify.IDeal): notify.Deal;

        /**
         * Encodes the specified Deal message. Does not implicitly {@link notify.Deal.verify|verify} messages.
         * @param message Deal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Deal message, length delimited. Does not implicitly {@link notify.Deal.verify|verify} messages.
         * @param message Deal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Deal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Deal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.Deal;

        /**
         * Decodes a Deal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Deal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.Deal;

        /**
         * Verifies a Deal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Deal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Deal
         */
        public static fromObject(object: { [k: string]: any }): notify.Deal;

        /**
         * Creates a plain object from a Deal message. Also converts values to other types if specified.
         * @param message Deal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.Deal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Deal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Deal
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Deal {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C header */
            header: common.ITrdHeader;

            /** S2C order */
            order: common.IOrderFill;
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: notify.Deal.IS2C);

            /** S2C header. */
            public header: common.ITrdHeader;

            /** S2C order. */
            public order: common.IOrderFill;

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: notify.Deal.IS2C): notify.Deal.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link notify.Deal.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: notify.Deal.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link notify.Deal.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: notify.Deal.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.Deal.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.Deal.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): notify.Deal.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: notify.Deal.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an Order. */
    interface IOrder {

        /** Order retType */
        retType: number;

        /** Order retMsg */
        retMsg?: (string|null);

        /** Order errCode */
        errCode?: (number|null);

        /** Order s2c */
        s2c?: (notify.Order.IS2C|null);
    }

    /** 订单推送 */
    class Order implements IOrder {

        /**
         * Constructs a new Order.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IOrder);

        /** Order retType. */
        public retType: number;

        /** Order retMsg. */
        public retMsg: string;

        /** Order errCode. */
        public errCode: number;

        /** Order s2c. */
        public s2c?: (notify.Order.IS2C|null);

        /**
         * Creates a new Order instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Order instance
         */
        public static create(properties?: notify.IOrder): notify.Order;

        /**
         * Encodes the specified Order message. Does not implicitly {@link notify.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link notify.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.Order;

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.Order;

        /**
         * Verifies an Order message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Order
         */
        public static fromObject(object: { [k: string]: any }): notify.Order;

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @param message Order
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Order to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Order
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Order {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C header */
            header: common.ITrdHeader;

            /** S2C order */
            order: common.IOrder;
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: notify.Order.IS2C);

            /** S2C header. */
            public header: common.ITrdHeader;

            /** S2C order. */
            public order: common.IOrder;

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: notify.Order.IS2C): notify.Order.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link notify.Order.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: notify.Order.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link notify.Order.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: notify.Order.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.Order.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.Order.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): notify.Order.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: notify.Order.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a BasicQot. */
    interface IBasicQot {

        /** BasicQot retType */
        retType: number;

        /** BasicQot retMsg */
        retMsg?: (string|null);

        /** BasicQot errCode */
        errCode?: (number|null);

        /** BasicQot s2c */
        s2c?: (notify.BasicQot.IS2C|null);
    }

    /** 实时报价 */
    class BasicQot implements IBasicQot {

        /**
         * Constructs a new BasicQot.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IBasicQot);

        /** BasicQot retType. */
        public retType: number;

        /** BasicQot retMsg. */
        public retMsg: string;

        /** BasicQot errCode. */
        public errCode: number;

        /** BasicQot s2c. */
        public s2c?: (notify.BasicQot.IS2C|null);

        /**
         * Creates a new BasicQot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BasicQot instance
         */
        public static create(properties?: notify.IBasicQot): notify.BasicQot;

        /**
         * Encodes the specified BasicQot message. Does not implicitly {@link notify.BasicQot.verify|verify} messages.
         * @param message BasicQot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IBasicQot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BasicQot message, length delimited. Does not implicitly {@link notify.BasicQot.verify|verify} messages.
         * @param message BasicQot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IBasicQot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BasicQot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BasicQot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.BasicQot;

        /**
         * Decodes a BasicQot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BasicQot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.BasicQot;

        /**
         * Verifies a BasicQot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BasicQot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BasicQot
         */
        public static fromObject(object: { [k: string]: any }): notify.BasicQot;

        /**
         * Creates a plain object from a BasicQot message. Also converts values to other types if specified.
         * @param message BasicQot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.BasicQot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BasicQot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BasicQot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BasicQot {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C basicQotList */
            basicQotList?: (common.IBasicQot[]|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: notify.BasicQot.IS2C);

            /** S2C basicQotList. */
            public basicQotList: common.IBasicQot[];

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: notify.BasicQot.IS2C): notify.BasicQot.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link notify.BasicQot.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: notify.BasicQot.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link notify.BasicQot.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: notify.BasicQot.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.BasicQot.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.BasicQot.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): notify.BasicQot.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: notify.BasicQot.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace order. */
export namespace order {

    /** Properties of a CreateReq. */
    interface ICreateReq {

        /** CreateReq c2s */
        c2s: order.CreateReq.IC2S;
    }

    /** 下单请求 */
    class CreateReq implements ICreateReq {

        /**
         * Constructs a new CreateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: order.ICreateReq);

        /** CreateReq c2s. */
        public c2s: order.CreateReq.IC2S;

        /**
         * Creates a new CreateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateReq instance
         */
        public static create(properties?: order.ICreateReq): order.CreateReq;

        /**
         * Encodes the specified CreateReq message. Does not implicitly {@link order.CreateReq.verify|verify} messages.
         * @param message CreateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: order.ICreateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateReq message, length delimited. Does not implicitly {@link order.CreateReq.verify|verify} messages.
         * @param message CreateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: order.ICreateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): order.CreateReq;

        /**
         * Decodes a CreateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): order.CreateReq;

        /**
         * Verifies a CreateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateReq
         */
        public static fromObject(object: { [k: string]: any }): order.CreateReq;

        /**
         * Creates a plain object from a CreateReq message. Also converts values to other types if specified.
         * @param message CreateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: order.CreateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CreateReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S packetID */
            packetID: common.IPacketID;

            /** C2S header */
            header: common.ITrdHeader;

            /** C2S trdSide */
            trdSide: common.TrdSide;

            /** C2S orderType */
            orderType: common.OrderType;

            /** C2S code */
            code: string;

            /** C2S qty */
            qty: number;

            /** C2S price */
            price: number;

            /** C2S adjustPrice */
            adjustPrice?: (boolean|null);

            /** C2S adjustSideAndLimit */
            adjustSideAndLimit?: (number|null);

            /** C2S secMarket */
            secMarket: common.TrdSecMarket;

            /** C2S remark */
            remark?: (string|null);

            /** C2S timeInForce */
            timeInForce?: (common.TimeInForce|null);

            /** C2S fillOutsideRTH */
            fillOutsideRTH?: (boolean|null);

            /** C2S auxPrice */
            auxPrice?: (number|null);

            /** C2S trailType */
            trailType?: (common.TrailType|null);

            /** C2S trailValue */
            trailValue?: (number|null);

            /** C2S trailSpread */
            trailSpread?: (number|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: order.CreateReq.IC2S);

            /** C2S packetID. */
            public packetID: common.IPacketID;

            /** C2S header. */
            public header: common.ITrdHeader;

            /** C2S trdSide. */
            public trdSide: common.TrdSide;

            /** C2S orderType. */
            public orderType: common.OrderType;

            /** C2S code. */
            public code: string;

            /** C2S qty. */
            public qty: number;

            /** C2S price. */
            public price: number;

            /** C2S adjustPrice. */
            public adjustPrice: boolean;

            /** C2S adjustSideAndLimit. */
            public adjustSideAndLimit: number;

            /** C2S secMarket. */
            public secMarket: common.TrdSecMarket;

            /** C2S remark. */
            public remark: string;

            /** C2S timeInForce. */
            public timeInForce: common.TimeInForce;

            /** C2S fillOutsideRTH. */
            public fillOutsideRTH: boolean;

            /** C2S auxPrice. */
            public auxPrice: number;

            /** C2S trailType. */
            public trailType: common.TrailType;

            /** C2S trailValue. */
            public trailValue: number;

            /** C2S trailSpread. */
            public trailSpread: number;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: order.CreateReq.IC2S): order.CreateReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link order.CreateReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: order.CreateReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link order.CreateReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: order.CreateReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): order.CreateReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): order.CreateReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): order.CreateReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: order.CreateReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CreateRes. */
    interface ICreateRes {

        /** CreateRes retType */
        retType: number;

        /** CreateRes retMsg */
        retMsg?: (string|null);

        /** CreateRes errCode */
        errCode?: (number|null);

        /** CreateRes s2c */
        s2c?: (order.CreateRes.IS2C|null);
    }

    /** 下单响应 */
    class CreateRes implements ICreateRes {

        /**
         * Constructs a new CreateRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: order.ICreateRes);

        /** CreateRes retType. */
        public retType: number;

        /** CreateRes retMsg. */
        public retMsg: string;

        /** CreateRes errCode. */
        public errCode: number;

        /** CreateRes s2c. */
        public s2c?: (order.CreateRes.IS2C|null);

        /**
         * Creates a new CreateRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRes instance
         */
        public static create(properties?: order.ICreateRes): order.CreateRes;

        /**
         * Encodes the specified CreateRes message. Does not implicitly {@link order.CreateRes.verify|verify} messages.
         * @param message CreateRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: order.ICreateRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRes message, length delimited. Does not implicitly {@link order.CreateRes.verify|verify} messages.
         * @param message CreateRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: order.ICreateRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): order.CreateRes;

        /**
         * Decodes a CreateRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): order.CreateRes;

        /**
         * Verifies a CreateRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRes
         */
        public static fromObject(object: { [k: string]: any }): order.CreateRes;

        /**
         * Creates a plain object from a CreateRes message. Also converts values to other types if specified.
         * @param message CreateRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: order.CreateRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CreateRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C header */
            header: common.ITrdHeader;

            /** S2C orderID */
            orderID?: (number|Long|null);

            /** S2C orderIDEx */
            orderIDEx?: (string|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: order.CreateRes.IS2C);

            /** S2C header. */
            public header: common.ITrdHeader;

            /** S2C orderID. */
            public orderID: (number|Long);

            /** S2C orderIDEx. */
            public orderIDEx: string;

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: order.CreateRes.IS2C): order.CreateRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link order.CreateRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: order.CreateRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link order.CreateRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: order.CreateRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): order.CreateRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): order.CreateRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): order.CreateRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: order.CreateRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a FeeReq. */
    interface IFeeReq {

        /** FeeReq c2s */
        c2s: order.FeeReq.IC2S;
    }

    /** 订单费用请求 */
    class FeeReq implements IFeeReq {

        /**
         * Constructs a new FeeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: order.IFeeReq);

        /** FeeReq c2s. */
        public c2s: order.FeeReq.IC2S;

        /**
         * Creates a new FeeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeeReq instance
         */
        public static create(properties?: order.IFeeReq): order.FeeReq;

        /**
         * Encodes the specified FeeReq message. Does not implicitly {@link order.FeeReq.verify|verify} messages.
         * @param message FeeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: order.IFeeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeeReq message, length delimited. Does not implicitly {@link order.FeeReq.verify|verify} messages.
         * @param message FeeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: order.IFeeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): order.FeeReq;

        /**
         * Decodes a FeeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): order.FeeReq;

        /**
         * Verifies a FeeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeeReq
         */
        public static fromObject(object: { [k: string]: any }): order.FeeReq;

        /**
         * Creates a plain object from a FeeReq message. Also converts values to other types if specified.
         * @param message FeeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: order.FeeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeeReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FeeReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S header */
            header: common.ITrdHeader;

            /** C2S orderIdExList */
            orderIdExList?: (string[]|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: order.FeeReq.IC2S);

            /** C2S header. */
            public header: common.ITrdHeader;

            /** C2S orderIdExList. */
            public orderIdExList: string[];

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: order.FeeReq.IC2S): order.FeeReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link order.FeeReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: order.FeeReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link order.FeeReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: order.FeeReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): order.FeeReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): order.FeeReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): order.FeeReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: order.FeeReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a FeeRes. */
    interface IFeeRes {

        /** FeeRes retType */
        retType: number;

        /** FeeRes retMsg */
        retMsg?: (string|null);

        /** FeeRes errCode */
        errCode?: (number|null);

        /** FeeRes s2c */
        s2c?: (order.FeeRes.IS2C|null);
    }

    /** 订单费用响应 */
    class FeeRes implements IFeeRes {

        /**
         * Constructs a new FeeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: order.IFeeRes);

        /** FeeRes retType. */
        public retType: number;

        /** FeeRes retMsg. */
        public retMsg: string;

        /** FeeRes errCode. */
        public errCode: number;

        /** FeeRes s2c. */
        public s2c?: (order.FeeRes.IS2C|null);

        /**
         * Creates a new FeeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeeRes instance
         */
        public static create(properties?: order.IFeeRes): order.FeeRes;

        /**
         * Encodes the specified FeeRes message. Does not implicitly {@link order.FeeRes.verify|verify} messages.
         * @param message FeeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: order.IFeeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeeRes message, length delimited. Does not implicitly {@link order.FeeRes.verify|verify} messages.
         * @param message FeeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: order.IFeeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): order.FeeRes;

        /**
         * Decodes a FeeRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): order.FeeRes;

        /**
         * Verifies a FeeRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeeRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeeRes
         */
        public static fromObject(object: { [k: string]: any }): order.FeeRes;

        /**
         * Creates a plain object from a FeeRes message. Also converts values to other types if specified.
         * @param message FeeRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: order.FeeRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeeRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeeRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FeeRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C header */
            header: common.ITrdHeader;

            /** S2C orderFeeList */
            orderFeeList?: (common.IOrderFee[]|null);
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: order.FeeRes.IS2C);

            /** S2C header. */
            public header: common.ITrdHeader;

            /** S2C orderFeeList. */
            public orderFeeList: common.IOrderFee[];

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: order.FeeRes.IS2C): order.FeeRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link order.FeeRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: order.FeeRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link order.FeeRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: order.FeeRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): order.FeeRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): order.FeeRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): order.FeeRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: order.FeeRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace sub. */
export namespace sub {

    /** Properties of a ToggleReq. */
    interface IToggleReq {

        /** ToggleReq c2s */
        c2s: sub.ToggleReq.IC2S;
    }

    /** 订阅 or 取消订阅请求 */
    class ToggleReq implements IToggleReq {

        /**
         * Constructs a new ToggleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sub.IToggleReq);

        /** ToggleReq c2s. */
        public c2s: sub.ToggleReq.IC2S;

        /**
         * Creates a new ToggleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToggleReq instance
         */
        public static create(properties?: sub.IToggleReq): sub.ToggleReq;

        /**
         * Encodes the specified ToggleReq message. Does not implicitly {@link sub.ToggleReq.verify|verify} messages.
         * @param message ToggleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sub.IToggleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToggleReq message, length delimited. Does not implicitly {@link sub.ToggleReq.verify|verify} messages.
         * @param message ToggleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sub.IToggleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToggleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToggleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.ToggleReq;

        /**
         * Decodes a ToggleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToggleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.ToggleReq;

        /**
         * Verifies a ToggleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToggleReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToggleReq
         */
        public static fromObject(object: { [k: string]: any }): sub.ToggleReq;

        /**
         * Creates a plain object from a ToggleReq message. Also converts values to other types if specified.
         * @param message ToggleReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sub.ToggleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToggleReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToggleReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ToggleReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S securityList */
            securityList?: (common.ISecurity[]|null);

            /** C2S subTypeList */
            subTypeList?: (common.SubType[]|null);

            /** C2S isSubOrUnSub */
            isSubOrUnSub: boolean;

            /** C2S isRegOrUnRegPush */
            isRegOrUnRegPush?: (boolean|null);

            /** C2S regPushRehabTypeList */
            regPushRehabTypeList?: (number[]|null);

            /** C2S isFirstPush */
            isFirstPush?: (boolean|null);

            /** C2S isUnsubAll */
            isUnsubAll?: (boolean|null);

            /** C2S isSubOrderBookDetail */
            isSubOrderBookDetail?: (boolean|null);

            /** C2S extendedTime */
            extendedTime?: (boolean|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: sub.ToggleReq.IC2S);

            /** C2S securityList. */
            public securityList: common.ISecurity[];

            /** C2S subTypeList. */
            public subTypeList: common.SubType[];

            /** C2S isSubOrUnSub. */
            public isSubOrUnSub: boolean;

            /** C2S isRegOrUnRegPush. */
            public isRegOrUnRegPush: boolean;

            /** C2S regPushRehabTypeList. */
            public regPushRehabTypeList: number[];

            /** C2S isFirstPush. */
            public isFirstPush: boolean;

            /** C2S isUnsubAll. */
            public isUnsubAll: boolean;

            /** C2S isSubOrderBookDetail. */
            public isSubOrderBookDetail: boolean;

            /** C2S extendedTime. */
            public extendedTime: boolean;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: sub.ToggleReq.IC2S): sub.ToggleReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link sub.ToggleReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sub.ToggleReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link sub.ToggleReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sub.ToggleReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.ToggleReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.ToggleReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): sub.ToggleReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sub.ToggleReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ToggleRes. */
    interface IToggleRes {

        /** ToggleRes retType */
        retType: number;

        /** ToggleRes retMsg */
        retMsg?: (string|null);

        /** ToggleRes errCode */
        errCode?: (number|null);
    }

    /** 订阅 or 取消订阅响应 */
    class ToggleRes implements IToggleRes {

        /**
         * Constructs a new ToggleRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: sub.IToggleRes);

        /** ToggleRes retType. */
        public retType: number;

        /** ToggleRes retMsg. */
        public retMsg: string;

        /** ToggleRes errCode. */
        public errCode: number;

        /**
         * Creates a new ToggleRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToggleRes instance
         */
        public static create(properties?: sub.IToggleRes): sub.ToggleRes;

        /**
         * Encodes the specified ToggleRes message. Does not implicitly {@link sub.ToggleRes.verify|verify} messages.
         * @param message ToggleRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sub.IToggleRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToggleRes message, length delimited. Does not implicitly {@link sub.ToggleRes.verify|verify} messages.
         * @param message ToggleRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sub.IToggleRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToggleRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToggleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.ToggleRes;

        /**
         * Decodes a ToggleRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToggleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.ToggleRes;

        /**
         * Verifies a ToggleRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToggleRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToggleRes
         */
        public static fromObject(object: { [k: string]: any }): sub.ToggleRes;

        /**
         * Creates a plain object from a ToggleRes message. Also converts values to other types if specified.
         * @param message ToggleRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sub.ToggleRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToggleRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToggleRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccReq. */
    interface IAccReq {

        /** AccReq c2s */
        c2s: sub.AccReq.IC2S;
    }

    /** 订阅交易推送请求 */
    class AccReq implements IAccReq {

        /**
         * Constructs a new AccReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sub.IAccReq);

        /** AccReq c2s. */
        public c2s: sub.AccReq.IC2S;

        /**
         * Creates a new AccReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccReq instance
         */
        public static create(properties?: sub.IAccReq): sub.AccReq;

        /**
         * Encodes the specified AccReq message. Does not implicitly {@link sub.AccReq.verify|verify} messages.
         * @param message AccReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sub.IAccReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccReq message, length delimited. Does not implicitly {@link sub.AccReq.verify|verify} messages.
         * @param message AccReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sub.IAccReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.AccReq;

        /**
         * Decodes an AccReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.AccReq;

        /**
         * Verifies an AccReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccReq
         */
        public static fromObject(object: { [k: string]: any }): sub.AccReq;

        /**
         * Creates a plain object from an AccReq message. Also converts values to other types if specified.
         * @param message AccReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sub.AccReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AccReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** C2S accIDList */
            accIDList?: ((number|Long)[]|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: sub.AccReq.IC2S);

            /** C2S accIDList. */
            public accIDList: (number|Long)[];

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: sub.AccReq.IC2S): sub.AccReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link sub.AccReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sub.AccReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link sub.AccReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sub.AccReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.AccReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.AccReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): sub.AccReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sub.AccReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an AccRes. */
    interface IAccRes {

        /** AccRes retType */
        retType: number;

        /** AccRes retMsg */
        retMsg?: (string|null);

        /** AccRes errCode */
        errCode?: (number|null);

        /** AccRes s2c */
        s2c?: (sub.AccRes.IS2C|null);
    }

    /** 订阅交易推送响应 */
    class AccRes implements IAccRes {

        /**
         * Constructs a new AccRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: sub.IAccRes);

        /** AccRes retType. */
        public retType: number;

        /** AccRes retMsg. */
        public retMsg: string;

        /** AccRes errCode. */
        public errCode: number;

        /** AccRes s2c. */
        public s2c?: (sub.AccRes.IS2C|null);

        /**
         * Creates a new AccRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccRes instance
         */
        public static create(properties?: sub.IAccRes): sub.AccRes;

        /**
         * Encodes the specified AccRes message. Does not implicitly {@link sub.AccRes.verify|verify} messages.
         * @param message AccRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sub.IAccRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccRes message, length delimited. Does not implicitly {@link sub.AccRes.verify|verify} messages.
         * @param message AccRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sub.IAccRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.AccRes;

        /**
         * Decodes an AccRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.AccRes;

        /**
         * Verifies an AccRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccRes
         */
        public static fromObject(object: { [k: string]: any }): sub.AccRes;

        /**
         * Creates a plain object from an AccRes message. Also converts values to other types if specified.
         * @param message AccRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sub.AccRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AccRes {

        /** Properties of a S2C. */
        interface IS2C {
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: sub.AccRes.IS2C);

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: sub.AccRes.IS2C): sub.AccRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link sub.AccRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sub.AccRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link sub.AccRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sub.AccRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.AccRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.AccRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): sub.AccRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sub.AccRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an InfoRes. */
    interface IInfoRes {

        /** InfoRes retType */
        retType: number;

        /** InfoRes retMsg */
        retMsg?: (string|null);

        /** InfoRes errCode */
        errCode?: (number|null);

        /** InfoRes s2c */
        s2c?: (sub.InfoRes.IS2C|null);
    }

    /** 获取订阅信息响应 */
    class InfoRes implements IInfoRes {

        /**
         * Constructs a new InfoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: sub.IInfoRes);

        /** InfoRes retType. */
        public retType: number;

        /** InfoRes retMsg. */
        public retMsg: string;

        /** InfoRes errCode. */
        public errCode: number;

        /** InfoRes s2c. */
        public s2c?: (sub.InfoRes.IS2C|null);

        /**
         * Creates a new InfoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InfoRes instance
         */
        public static create(properties?: sub.IInfoRes): sub.InfoRes;

        /**
         * Encodes the specified InfoRes message. Does not implicitly {@link sub.InfoRes.verify|verify} messages.
         * @param message InfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sub.IInfoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InfoRes message, length delimited. Does not implicitly {@link sub.InfoRes.verify|verify} messages.
         * @param message InfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sub.IInfoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InfoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.InfoRes;

        /**
         * Decodes an InfoRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.InfoRes;

        /**
         * Verifies an InfoRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InfoRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InfoRes
         */
        public static fromObject(object: { [k: string]: any }): sub.InfoRes;

        /**
         * Creates a plain object from an InfoRes message. Also converts values to other types if specified.
         * @param message InfoRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sub.InfoRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InfoRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InfoRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InfoRes {

        /** Properties of a S2C. */
        interface IS2C {

            /** S2C connSubInfoList */
            connSubInfoList?: (common.IConnSubInfo[]|null);

            /** S2C totalUsedQuota */
            totalUsedQuota: number;

            /** S2C remainQuota */
            remainQuota: number;
        }

        /** Represents a S2C. */
        class S2C implements IS2C {

            /**
             * Constructs a new S2C.
             * @param [properties] Properties to set
             */
            constructor(properties?: sub.InfoRes.IS2C);

            /** S2C connSubInfoList. */
            public connSubInfoList: common.IConnSubInfo[];

            /** S2C totalUsedQuota. */
            public totalUsedQuota: number;

            /** S2C remainQuota. */
            public remainQuota: number;

            /**
             * Creates a new S2C instance using the specified properties.
             * @param [properties] Properties to set
             * @returns S2C instance
             */
            public static create(properties?: sub.InfoRes.IS2C): sub.InfoRes.S2C;

            /**
             * Encodes the specified S2C message. Does not implicitly {@link sub.InfoRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sub.InfoRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified S2C message, length delimited. Does not implicitly {@link sub.InfoRes.S2C.verify|verify} messages.
             * @param message S2C message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sub.InfoRes.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a S2C message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.InfoRes.S2C;

            /**
             * Decodes a S2C message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns S2C
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.InfoRes.S2C;

            /**
             * Verifies a S2C message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a S2C message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns S2C
             */
            public static fromObject(object: { [k: string]: any }): sub.InfoRes.S2C;

            /**
             * Creates a plain object from a S2C message. Also converts values to other types if specified.
             * @param message S2C
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sub.InfoRes.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this S2C to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for S2C
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an InfoReq. */
    interface IInfoReq {

        /** InfoReq c2s */
        c2s: sub.InfoReq.IC2S;
    }

    /** 获取订阅信息请求 */
    class InfoReq implements IInfoReq {

        /**
         * Constructs a new InfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sub.IInfoReq);

        /** InfoReq c2s. */
        public c2s: sub.InfoReq.IC2S;

        /**
         * Creates a new InfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InfoReq instance
         */
        public static create(properties?: sub.IInfoReq): sub.InfoReq;

        /**
         * Encodes the specified InfoReq message. Does not implicitly {@link sub.InfoReq.verify|verify} messages.
         * @param message InfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sub.IInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InfoReq message, length delimited. Does not implicitly {@link sub.InfoReq.verify|verify} messages.
         * @param message InfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sub.IInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.InfoReq;

        /**
         * Decodes an InfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.InfoReq;

        /**
         * Verifies an InfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InfoReq
         */
        public static fromObject(object: { [k: string]: any }): sub.InfoReq;

        /**
         * Creates a plain object from an InfoReq message. Also converts values to other types if specified.
         * @param message InfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sub.InfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InfoReq {

        /** Properties of a C2S. */
        interface IC2S {

            /** 是否返回所有连接的订阅状态,不传或者传 false 只返回当前连接数据 */
            isReqAllConn?: (boolean|null);
        }

        /** Represents a C2S. */
        class C2S implements IC2S {

            /**
             * Constructs a new C2S.
             * @param [properties] Properties to set
             */
            constructor(properties?: sub.InfoReq.IC2S);

            /** 是否返回所有连接的订阅状态,不传或者传 false 只返回当前连接数据 */
            public isReqAllConn: boolean;

            /**
             * Creates a new C2S instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2S instance
             */
            public static create(properties?: sub.InfoReq.IC2S): sub.InfoReq.C2S;

            /**
             * Encodes the specified C2S message. Does not implicitly {@link sub.InfoReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sub.InfoReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2S message, length delimited. Does not implicitly {@link sub.InfoReq.C2S.verify|verify} messages.
             * @param message C2S message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sub.InfoReq.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2S message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sub.InfoReq.C2S;

            /**
             * Decodes a C2S message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2S
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sub.InfoReq.C2S;

            /**
             * Verifies a C2S message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2S message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2S
             */
            public static fromObject(object: { [k: string]: any }): sub.InfoReq.C2S;

            /**
             * Creates a plain object from a C2S message. Also converts values to other types if specified.
             * @param message C2S
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sub.InfoReq.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2S to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for C2S
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
