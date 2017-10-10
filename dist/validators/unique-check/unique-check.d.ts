declare const _default: {
    validator: (control: any, configs: any) => Promise<void> | Promise<{}>;
    preprocessor: (control: any, configs: any, baseConfigs: any) => any;
    messager: (control: any) => string;
    validatorName: string;
    async: boolean;
};
export default _default;
