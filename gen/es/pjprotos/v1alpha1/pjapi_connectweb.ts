// @generated by protoc-gen-connect-web v0.3.2 with parameter "target=ts"
// @generated from file pjprotos/v1alpha1/pjapi.proto (package pjprotos.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateHelloRequest, CreateHelloResponse, HelloRequest, HelloResponse } from "./pjapi_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service pjprotos.v1alpha1.HelloWorldService
 */
export const HelloWorldService = {
  typeName: "pjprotos.v1alpha1.HelloWorldService",
  methods: {
    /**
     * @generated from rpc pjprotos.v1alpha1.HelloWorldService.Hello
     */
    hello: {
      name: "Hello",
      I: HelloRequest,
      O: HelloResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc pjprotos.v1alpha1.HelloWorldService.CreateHello
     */
    createHello: {
      name: "CreateHello",
      I: CreateHelloRequest,
      O: CreateHelloResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

