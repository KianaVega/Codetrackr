"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensions = exports.workspace = exports.window = void 0;
exports.window = {
    showInformationMessage: jest.fn()
};
exports.workspace = {
    getConfiguration: jest.fn().mockReturnValue({
        get: jest.fn(),
        update: jest.fn()
    })
};
exports.extensions = {
    getExtension: jest.fn()
};
