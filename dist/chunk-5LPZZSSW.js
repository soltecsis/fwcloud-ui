import"./chunk-GAL4ENT6.js";var d=function(r,e){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},d(r,e)};function b(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+e+" is not a constructor or null");function t(){this.constructor=r}d(r,e),r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function a(r){if(!r)throw new TypeError("Assertion failed")}function u(){}function c(r){return typeof r=="object"&&r!==null||typeof r=="function"}function h(r){if(typeof r!="function")return!1;var e=!1;try{new r({start:function(){e=!0}})}catch{}return e}function f(r){return!!c(r)&&typeof r.getReader=="function"}function l(r){return!!c(r)&&typeof r.getWriter=="function"}function R(r){return!!c(r)&&!!f(r.readable)&&!!l(r.writable)}function m(r){try{return r.getReader({mode:"byob"}).releaseLock(),!0}catch{return!1}}function k(r){a(function(t){return!!h(t)&&!!f(new t)}(r));var e=function(t){try{return new t({type:"bytes"}),!0}catch{return!1}}(r);return function(t,n){var i=(n===void 0?{}:n).type;if((i=w(i))!=="bytes"||e||(i=void 0),t.constructor===r&&(i!=="bytes"||m(t)))return t;if(i==="bytes"){var o=v(t,{type:i});return new r(o)}return o=v(t),new r(o)}}function v(r,e){var t=(e===void 0?{}:e).type;return a(f(r)),a(r.locked===!1),(t=w(t))==="bytes"?new S(r):new P(r)}function w(r){var e=r+"";if(e==="bytes")return e;if(r===void 0)return r;throw new RangeError("Invalid type is specified")}var W=function(){function r(e){this._underlyingReader=void 0,this._readerMode=void 0,this._readableStreamController=void 0,this._pendingRead=void 0,this._underlyingStream=e,this._attachDefaultReader()}return r.prototype.start=function(e){this._readableStreamController=e},r.prototype.cancel=function(e){return a(this._underlyingReader!==void 0),this._underlyingReader.cancel(e)},r.prototype._attachDefaultReader=function(){if(this._readerMode!=="default"){this._detachReader();var e=this._underlyingStream.getReader();this._readerMode="default",this._attachReader(e)}},r.prototype._attachReader=function(e){var t=this;a(this._underlyingReader===void 0),this._underlyingReader=e;var n=this._underlyingReader.closed;n&&n.then(function(){return t._finishPendingRead()}).then(function(){e===t._underlyingReader&&t._readableStreamController.close()},function(i){e===t._underlyingReader&&t._readableStreamController.error(i)}).catch(u)},r.prototype._detachReader=function(){this._underlyingReader!==void 0&&(this._underlyingReader.releaseLock(),this._underlyingReader=void 0,this._readerMode=void 0)},r.prototype._pullWithDefaultReader=function(){var e=this;this._attachDefaultReader();var t=this._underlyingReader.read().then(function(n){var i=e._readableStreamController;n.done?e._tryClose():i.enqueue(n.value)});return this._setPendingRead(t),t},r.prototype._tryClose=function(){try{this._readableStreamController.close()}catch{}},r.prototype._setPendingRead=function(e){var t,n=this,i=function(){n._pendingRead===t&&(n._pendingRead=void 0)};this._pendingRead=t=e.then(i,i)},r.prototype._finishPendingRead=function(){var e=this;if(this._pendingRead){var t=function(){return e._finishPendingRead()};return this._pendingRead.then(t,t)}},r}(),P=function(r){function e(){return r!==null&&r.apply(this,arguments)||this}return b(e,r),e.prototype.pull=function(){return this._pullWithDefaultReader()},e}(W);function g(r){return new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}var S=function(r){function e(t){var n=this,i=m(t);return(n=r.call(this,t)||this)._supportsByob=i,n}return b(e,r),Object.defineProperty(e.prototype,"type",{get:function(){return"bytes"},enumerable:!1,configurable:!0}),e.prototype._attachByobReader=function(){if(this._readerMode!=="byob"){a(this._supportsByob),this._detachReader();var t=this._underlyingStream.getReader({mode:"byob"});this._readerMode="byob",this._attachReader(t)}},e.prototype.pull=function(){if(this._supportsByob){var t=this._readableStreamController.byobRequest;if(t)return this._pullWithByobRequest(t)}return this._pullWithDefaultReader()},e.prototype._pullWithByobRequest=function(t){var n=this;this._attachByobReader();var i=new Uint8Array(t.view.byteLength),o=this._underlyingReader.read(i).then(function(s){var _,p,y;n._readableStreamController,s.done?(n._tryClose(),t.respond(0)):(_=s.value,p=t.view,y=g(_),g(p).set(y,0),t.respond(s.value.byteLength))});return this._setPendingRead(o),o},e}(W);function B(r){return a(function(e){return!!h(e)&&!!l(new e)}(r)),function(e){if(e.constructor===r)return e;var t=C(e);return new r(t)}}function C(r){a(l(r)),a(r.locked===!1);var e=r.getWriter();return new E(e)}var E=function(){function r(e){var t=this;this._writableStreamController=void 0,this._pendingWrite=void 0,this._state="writable",this._storedError=void 0,this._underlyingWriter=e,this._errorPromise=new Promise(function(n,i){t._errorPromiseReject=i}),this._errorPromise.catch(u)}return r.prototype.start=function(e){var t=this;this._writableStreamController=e,this._underlyingWriter.closed.then(function(){t._state="closed"}).catch(function(n){return t._finishErroring(n)})},r.prototype.write=function(e){var t=this,n=this._underlyingWriter;if(n.desiredSize===null)return n.ready;var i=n.write(e);i.catch(function(s){return t._finishErroring(s)}),n.ready.catch(function(s){return t._startErroring(s)});var o=Promise.race([i,this._errorPromise]);return this._setPendingWrite(o),o},r.prototype.close=function(){var e=this;return this._pendingWrite===void 0?this._underlyingWriter.close():this._finishPendingWrite().then(function(){return e.close()})},r.prototype.abort=function(e){if(this._state!=="errored")return this._underlyingWriter.abort(e)},r.prototype._setPendingWrite=function(e){var t,n=this,i=function(){n._pendingWrite===t&&(n._pendingWrite=void 0)};this._pendingWrite=t=e.then(i,i)},r.prototype._finishPendingWrite=function(){var e=this;if(this._pendingWrite===void 0)return Promise.resolve();var t=function(){return e._finishPendingWrite()};return this._pendingWrite.then(t,t)},r.prototype._startErroring=function(e){var t=this;if(this._state==="writable"){this._state="erroring",this._storedError=e;var n=function(){return t._finishErroring(e)};this._pendingWrite===void 0?n():this._finishPendingWrite().then(n,n),this._writableStreamController.error(e)}},r.prototype._finishErroring=function(e){this._state==="writable"&&this._startErroring(e),this._state==="erroring"&&(this._state="errored",this._errorPromiseReject(this._storedError))},r}();function O(r){return a(function(e){return!!h(e)&&!!R(new e)}(r)),function(e){if(e.constructor===r)return e;var t=j(e);return new r(t)}}function j(r){a(R(r));var e=r.readable,t=r.writable;a(e.locked===!1),a(t.locked===!1);var n,i=e.getReader();try{n=t.getWriter()}catch(o){throw i.releaseLock(),o}return new T(i,n)}var T=function(){function r(e,t){var n=this;this._transformStreamController=void 0,this._onRead=function(i){if(!i.done)return n._transformStreamController.enqueue(i.value),n._reader.read().then(n._onRead)},this._onError=function(i){n._flushReject(i),n._transformStreamController.error(i),n._reader.cancel(i).catch(u),n._writer.abort(i).catch(u)},this._onTerminate=function(){n._flushResolve(),n._transformStreamController.terminate();var i=new TypeError("TransformStream terminated");n._writer.abort(i).catch(u)},this._reader=e,this._writer=t,this._flushPromise=new Promise(function(i,o){n._flushResolve=i,n._flushReject=o})}return r.prototype.start=function(e){this._transformStreamController=e,this._reader.read().then(this._onRead).then(this._onTerminate,this._onError);var t=this._reader.closed;t&&t.then(this._onTerminate,this._onError)},r.prototype.transform=function(e){return this._writer.write(e)},r.prototype.flush=function(){var e=this;return this._writer.close().then(function(){return e._flushPromise})},r}();export{k as createReadableStreamWrapper,O as createTransformStreamWrapper,v as createWrappingReadableSource,j as createWrappingTransformer,C as createWrappingWritableSink,B as createWritableStreamWrapper};