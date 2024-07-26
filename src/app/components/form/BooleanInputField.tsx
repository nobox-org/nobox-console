type BooleanFieldProps = {
    value: boolean;
    onChange: (value: boolean) => void;
};

export const BooleanField = ({ onChange, value }: BooleanFieldProps) => {
    const trueButtonClass = `inline-flex items-center px-4 py-2 text-sm font-medium border border-blue-900 rounded-s-lg hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${value !== undefined && value === true ? "z-10 ring-blue-500 bg-blue-900 text-white" : "text-blue-900"}`;
    const falseButtonClass = `inline-flex items-center px-4 py-2 text-sm font-medium border-t border-r border-b border-blue-900 rounded-e-lg hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${value !== undefined && value === false ? "z-10 ring-blue-500 bg-blue-900 text-white" : "text-blue-900"}`;

    return (
        <div className="flex items-center mb-4">
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                    onClick={() => onChange(true)}
                    type="button"
                    className={trueButtonClass}
                >
                    True
                </button>
                <button
                    onClick={() => onChange(false)}
                    type="button"
                    className={falseButtonClass}
                >
                    False
                </button>
            </div>
        </div>
    );
};
