"use strict";

import {toRem} from "../src/main.js";
import {describe, it} from "node:test";
import {equal} from "node:assert";

process.env["unitTest"] = "on";

describe('toRem Tests', () => {

    it('return 0 on toRem(0)', () => {
        const result = toRem(0);
        equal(result, '0');
    });
    it('return 0 on toRem(\'0\')', () => {
        const result = toRem('0');
        equal(result, '0');
    });
    it('return 0 on toRem(\'0px\')', () => {
        const result = toRem('0px');
        equal(result, '0');
    });
    it('return 0 on toRem(\'0em\')', () => {
        const result = toRem('0em');
        equal(result, '0');
    });
    it('return 0 on toRem(\'0pt\')', () => {
        const result = toRem('0pt');
        equal(result, '0');
    });
    it('return 0 on toRem(\'0rem\')', () => {
        const result = toRem('0rem');
        equal(result, '0');
    });
    it('return 0vw on toRem(\'0vw\')', () => {
        const result = toRem('0vw');
        equal(result, '0');
    });

    it('return 0.25rem on toRem(4)', () => {
        const result = toRem(4);
        equal(result, '0.25rem');
    });
    it('return 0.25rem on toRem(\'4\')', () => {
        const result = toRem('4');
        equal(result, '0.25rem');
    });
    it('return 0.25rem on toRem(\'4px\')', () => {
        const result = toRem('4px');
        equal(result, '0.25rem');
    });
    it('return 4rem on toRem(\'4em\')', () => {
        const result = toRem('4em');
        equal(result, '4rem');
    });
    it('return 0.3332rem on toRem(\'4pt\')', () => {
        const result = toRem('4pt');
        equal(result, '0.3332rem');
    });
    it('return 0.25rem on toRem(\'0.25rem\')', () => {
        const result = toRem('0.25rem');
        equal(result, '0.25rem');
    });
    it('return 5vw on toRem(\'5vw\')', () => {
        const result = toRem('5vw');
        equal(result, '5vw');
    });

})
