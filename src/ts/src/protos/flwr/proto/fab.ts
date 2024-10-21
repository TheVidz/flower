// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "flwr/proto/fab.proto" (package "flwr.proto", syntax proto3)
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
import { Node } from "./node";
/**
 * @generated from protobuf message flwr.proto.Fab
 */
export interface Fab {
    /**
     * This field is the hash of the data field. It is used to identify the data.
     * The hash is calculated using the SHA-256 algorithm and is represented as a
     * hex string (sha256hex).
     *
     * @generated from protobuf field: string hash_str = 1;
     */
    hashStr: string;
    /**
     * This field contains the fab file contents a one bytes blob.
     *
     * @generated from protobuf field: bytes content = 2;
     */
    content: Uint8Array;
}
/**
 * @generated from protobuf message flwr.proto.GetFabRequest
 */
export interface GetFabRequest {
    /**
     * @generated from protobuf field: flwr.proto.Node node = 1;
     */
    node?: Node;
    /**
     * @generated from protobuf field: string hash_str = 2;
     */
    hashStr: string;
}
/**
 * @generated from protobuf message flwr.proto.GetFabResponse
 */
export interface GetFabResponse {
    /**
     * @generated from protobuf field: flwr.proto.Fab fab = 1;
     */
    fab?: Fab;
}
// @generated message type with reflection information, may provide speed optimized methods
class Fab$Type extends MessageType<Fab> {
    constructor() {
        super("flwr.proto.Fab", [
            { no: 1, name: "hash_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "content", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<Fab>): Fab {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.hashStr = "";
        message.content = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<Fab>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Fab): Fab {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string hash_str */ 1:
                    message.hashStr = reader.string();
                    break;
                case /* bytes content */ 2:
                    message.content = reader.bytes();
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
    internalBinaryWrite(message: Fab, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string hash_str = 1; */
        if (message.hashStr !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.hashStr);
        /* bytes content = 2; */
        if (message.content.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.content);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message flwr.proto.Fab
 */
export const Fab = new Fab$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFabRequest$Type extends MessageType<GetFabRequest> {
    constructor() {
        super("flwr.proto.GetFabRequest", [
            { no: 1, name: "node", kind: "message", T: () => Node },
            { no: 2, name: "hash_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetFabRequest>): GetFabRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.hashStr = "";
        if (value !== undefined)
            reflectionMergePartial<GetFabRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFabRequest): GetFabRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* flwr.proto.Node node */ 1:
                    message.node = Node.internalBinaryRead(reader, reader.uint32(), options, message.node);
                    break;
                case /* string hash_str */ 2:
                    message.hashStr = reader.string();
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
    internalBinaryWrite(message: GetFabRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* flwr.proto.Node node = 1; */
        if (message.node)
            Node.internalBinaryWrite(message.node, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string hash_str = 2; */
        if (message.hashStr !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.hashStr);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message flwr.proto.GetFabRequest
 */
export const GetFabRequest = new GetFabRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFabResponse$Type extends MessageType<GetFabResponse> {
    constructor() {
        super("flwr.proto.GetFabResponse", [
            { no: 1, name: "fab", kind: "message", T: () => Fab }
        ]);
    }
    create(value?: PartialMessage<GetFabResponse>): GetFabResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetFabResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFabResponse): GetFabResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* flwr.proto.Fab fab */ 1:
                    message.fab = Fab.internalBinaryRead(reader, reader.uint32(), options, message.fab);
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
    internalBinaryWrite(message: GetFabResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* flwr.proto.Fab fab = 1; */
        if (message.fab)
            Fab.internalBinaryWrite(message.fab, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message flwr.proto.GetFabResponse
 */
export const GetFabResponse = new GetFabResponse$Type();