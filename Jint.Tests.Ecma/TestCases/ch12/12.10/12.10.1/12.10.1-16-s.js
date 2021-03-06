/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch12/12.10/12.10.1/12.10.1-16-s.js
 * @description Strict Mode - SyntaxError is thrown when the RHS of an object indexer assignment utilizes WithStatement
 * @onlyStrict
 */


function testcase() {
        "use strict";

        try {
            eval("var obj = {}; obj['get'] = function (a) { with(a){} };  ");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
