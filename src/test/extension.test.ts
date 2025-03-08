import { expect } from 'chai';
import * as assert from 'assert';
import { mock } from 'ts-mockito'; // Ensure this is the correct library for mock
import { SomeClass } from '../classes/SomeClass.js'; // Adjust the import path as needed
import * as vscode from 'vscode';
import * as sinon from 'sinon';
import { describe, it, suite, beforeEach, afterEach, test } from 'mocha'; // or 'jest'

// Example usage of mock
const myMock = mock(SomeClass);

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as myExtension from '../../extension';

describe('Sample Test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});

suite('Extension Test Suite', () => {
    let showMessageStub: sinon.SinonStub;

    beforeEach(() => {
        // Mocking vscode.window.showInformationMessage
        showMessageStub = sinon.stub(vscode.window, 'showInformationMessage').returns(Promise.resolve({} as vscode.MessageItem));
    });

    afterEach(() => {
        showMessageStub.restore(); // Restore the stub after each test
    });

    test('Sample test', async () => {
        const result = await vscode.window.showInformationMessage('Test Message');
        assert.strictEqual(result, undefined); // Or assert whatever behavior you're testing
    });
});
