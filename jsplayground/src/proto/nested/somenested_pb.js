/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.mwitkow.testproto.nested.SomeMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mwitkow.testproto.nested.SomeMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mwitkow.testproto.nested.SomeMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mwitkow.testproto.nested.SomeMessage.displayName = 'proto.mwitkow.testproto.nested.SomeMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mwitkow.testproto.nested.SomeMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.mwitkow.testproto.nested.SomeMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mwitkow.testproto.nested.SomeMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.mwitkow.testproto.nested.SomeMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mwitkow.testproto.nested.SomeMessage}
 */
proto.mwitkow.testproto.nested.SomeMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mwitkow.testproto.nested.SomeMessage;
  return proto.mwitkow.testproto.nested.SomeMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mwitkow.testproto.nested.SomeMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mwitkow.testproto.nested.SomeMessage}
 */
proto.mwitkow.testproto.nested.SomeMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.mwitkow.testproto.nested.SomeMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.mwitkow.testproto.nested.SomeMessage.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mwitkow.testproto.nested.SomeMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.mwitkow.testproto.nested.SomeMessage.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.mwitkow.testproto.nested.SomeMessage} The clone.
 */
proto.mwitkow.testproto.nested.SomeMessage.prototype.cloneMessage = function() {
  return /** @type {!proto.mwitkow.testproto.nested.SomeMessage} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.mwitkow.testproto.nested.SomeMessage.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.mwitkow.testproto.nested.SomeMessage.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.mwitkow.testproto.nested);
