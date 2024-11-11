"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import flwr.proto.node_pb2
import google.protobuf.descriptor
import google.protobuf.message
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

class Fab(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    HASH_STR_FIELD_NUMBER: builtins.int
    CONTENT_FIELD_NUMBER: builtins.int
    WHL_FIELD_NUMBER: builtins.int
    hash_str: typing.Text
    """This field is the hash of the data field. It is used to identify the data.
    The hash is calculated using the SHA-256 algorithm and is represented as a
    hex string (sha256hex).
    """

    content: builtins.bytes
    """This field contains the fab file contents a one bytes blob."""

    whl: builtins.bytes
    """This field carries a Python wheel"""

    def __init__(self,
        *,
        hash_str: typing.Text = ...,
        content: builtins.bytes = ...,
        whl: builtins.bytes = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["content",b"content","hash_str",b"hash_str","whl",b"whl"]) -> None: ...
global___Fab = Fab

class GetFabRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    NODE_FIELD_NUMBER: builtins.int
    HASH_STR_FIELD_NUMBER: builtins.int
    @property
    def node(self) -> flwr.proto.node_pb2.Node: ...
    hash_str: typing.Text
    def __init__(self,
        *,
        node: typing.Optional[flwr.proto.node_pb2.Node] = ...,
        hash_str: typing.Text = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["node",b"node"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["hash_str",b"hash_str","node",b"node"]) -> None: ...
global___GetFabRequest = GetFabRequest

class GetFabResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    FAB_FIELD_NUMBER: builtins.int
    @property
    def fab(self) -> global___Fab: ...
    def __init__(self,
        *,
        fab: typing.Optional[global___Fab] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["fab",b"fab"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["fab",b"fab"]) -> None: ...
global___GetFabResponse = GetFabResponse
