"use strict";

import {toRem} from "../compressed/main.js";
import {describe, it} from "node:test";
import {equal} from "node:assert";

describe('toRem Tests', () => {
    it('return 0.25rem on toRem(\'4px\')', () => {
        const result = toRem('4px');
        equal(result, '0.25rem');
    });
    it('return 0.25rem on toRem(\'4\')', () => {
        const result = toRem('4');
        equal(result, '0.25rem');
    });
    it('return 0 on toRem(\'0px\')', () => {
        const result = toRem('0px');
        equal(result, '0');
    });
    it('return 0 on toRem(\'4pt\')', () => {
        const result = toRem('4pt');
        equal(result, '0');
    });
    it('return 0.25rem on toRem(\'0.25rem\')', () => {
        const result = toRem('0.25rem');
        equal(result, '0.25rem');
    });
})
