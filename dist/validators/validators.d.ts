declare const _default: ({
    validator: (control: any, dependencyNames: any) => {
        [x: string]: boolean;
    };
    preprocessor: (control: any, dependencyNames: any) => any;
    messager: (control: any, dependencyNames: any) => string;
    validatorName: string;
} | {
    validator(control: any, pattern: any): {
        [x: string]: boolean;
    };
    preprocessor(control: any, pattern: any): any;
    validatorName: string;
} | {
    validator(control: any, equalsTo: any): {
        [x: string]: boolean;
    };
    messager(control: any, validatorConfigs: any): string;
    validatorName: string;
} | {
    validator(control: any): {
        [x: string]: boolean;
    };
    messager(control: any): string;
    directiveName: string;
    validatorName: string;
    checkbox: boolean;
} | {
    validator: (control: any, configs: any) => Promise<void> | Promise<{}>;
    preprocessor: (control: any, configs: any, baseConfigs: any) => any;
    messager: (control: any) => string;
    validatorName: string;
    async: boolean;
})[];
export default _default;
