/**
 * Custom class for old Parse.Promise syntax
 *
 *
 * @alias Parse.Promise
 */
 class _ParsePromise extends Promise {
    "hello" = "world";
    testFn = function() {
        console.log(this.hello);
    }
 }

 export default _ParsePromise;