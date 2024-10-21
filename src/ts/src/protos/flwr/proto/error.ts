// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "flwr/proto/error.proto" (package "flwr.proto", syntax proto3)
// tslint:disable
//
// Copyright 2024 Flower Labs GmbH. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ==============================================================================
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message flwr.proto.Error
 */
export interface Error {
    /**
     * @generated from protobuf field: sint64 code = 1;
     */
    code: bigint;
    /**
     * @generated from protobuf field: string reason = 2;
     */
    reason: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Error$Type extends MessageType<Error> {
    constructor() {
        super("flwr.proto.Error", [
            { no: 1, name: "code", kind: "scalar", T: 18 /*ScalarType.SINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Error>): Error {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.code = 0n;
        message.reason = "";
        if (value !== undefined)
            reflectionMergePartial<Error>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Error): Error {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* sint64 code */ 1:
                    message.code = reader.sint64().toBigInt();
                    break;
                case /* string reason */ 2:
                    message.reason = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Error, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* sint64 code = 1; */
        if (message.code !== 0n)
            writer.tag(1, WireType.Varint).sint64(message.code);
        /* string reason = 2; */
        if (message.reason !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message flwr.proto.Error
 */
export const Error = new Error$Type();