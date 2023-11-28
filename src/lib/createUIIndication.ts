interface StartEndArgs {
    delay?: number;
    startValue?: any;
    endValue?: any;
}

interface DelayedEndArgs {
    delay?: number;
    value?: any;
}


const createUIIndication = (stateSet: any) => {
    return {
        start: (startValue: any = true) => stateSet(startValue),
        end: (endValue: any = false) => stateSet(endValue),
        startEnd: (args: StartEndArgs) => {
            const { delay = 1500, startValue = true, endValue = false } = args
            stateSet(startValue);
            setTimeout(() => {
                stateSet(endValue);
            }, delay);
        },
        delayed: (args: DelayedEndArgs) => {
            const { delay = 1500, value = false } = args
            setTimeout(() => {
                stateSet(value);
            }, delay);
        }
    };
};

export default createUIIndication;
