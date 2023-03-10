// @generated by protoc-gen-es v0.3.0 with parameter "target=ts"
// @generated from file pjprotos/v1alpha1/pjapi.proto (package pjprotos.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message pjprotos.v1alpha1.HelloRequest
 */
export class HelloRequest extends Message<HelloRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<HelloRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "pjprotos.v1alpha1.HelloRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HelloRequest {
    return new HelloRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HelloRequest {
    return new HelloRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HelloRequest {
    return new HelloRequest().fromJsonString(jsonString, options);
  }

  static equals(a: HelloRequest | PlainMessage<HelloRequest> | undefined, b: HelloRequest | PlainMessage<HelloRequest> | undefined): boolean {
    return proto3.util.equals(HelloRequest, a, b);
  }
}

/**
 * @generated from message pjprotos.v1alpha1.CreateHelloRequest
 */
export class CreateHelloRequest extends Message<CreateHelloRequest> {
  /**
   * @generated from field: string subject = 1;
   */
  subject = "";

  constructor(data?: PartialMessage<CreateHelloRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "pjprotos.v1alpha1.CreateHelloRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateHelloRequest {
    return new CreateHelloRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateHelloRequest {
    return new CreateHelloRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateHelloRequest {
    return new CreateHelloRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateHelloRequest | PlainMessage<CreateHelloRequest> | undefined, b: CreateHelloRequest | PlainMessage<CreateHelloRequest> | undefined): boolean {
    return proto3.util.equals(CreateHelloRequest, a, b);
  }
}

/**
 * @generated from message pjprotos.v1alpha1.CreateHelloResponse
 */
export class CreateHelloResponse extends Message<CreateHelloResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string text = 2;
   */
  text = "";

  constructor(data?: PartialMessage<CreateHelloResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "pjprotos.v1alpha1.CreateHelloResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateHelloResponse {
    return new CreateHelloResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateHelloResponse {
    return new CreateHelloResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateHelloResponse {
    return new CreateHelloResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateHelloResponse | PlainMessage<CreateHelloResponse> | undefined, b: CreateHelloResponse | PlainMessage<CreateHelloResponse> | undefined): boolean {
    return proto3.util.equals(CreateHelloResponse, a, b);
  }
}

/**
 * @generated from message pjprotos.v1alpha1.HelloResponse
 */
export class HelloResponse extends Message<HelloResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string text = 2;
   */
  text = "";

  constructor(data?: PartialMessage<HelloResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "pjprotos.v1alpha1.HelloResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HelloResponse {
    return new HelloResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HelloResponse {
    return new HelloResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HelloResponse {
    return new HelloResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HelloResponse | PlainMessage<HelloResponse> | undefined, b: HelloResponse | PlainMessage<HelloResponse> | undefined): boolean {
    return proto3.util.equals(HelloResponse, a, b);
  }
}

