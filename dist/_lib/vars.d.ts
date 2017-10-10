declare const dependencyRequests: WeakMap<object, any>;
declare const settings: {
    prefix: string;
    selectors: {
        elementContainer: string;
        errorsContainer: string[];
        asyncStatusContainer: string[];
    };
    errorMessageClasses: {
        initial: string;
        valid: string;
        invalid: string;
    };
    errorMessageDelays: {
        valid: number;
        invalid: number;
    };
    asyncDebounceTime: number;
    asyncStatusHideClass: string;
    asyncSuccessMessageDuration: number;
};
export { dependencyRequests, settings };
