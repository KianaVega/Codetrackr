export const window = {
    showInformationMessage: jest.fn()
};

export const workspace = {
    getConfiguration: jest.fn().mockReturnValue({
        get: jest.fn(),
        update: jest.fn()
    })
};

export const extensions = {
    getExtension: jest.fn()
};
