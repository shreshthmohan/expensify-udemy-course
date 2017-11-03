export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    };
};

export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    };
};
export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    };
};

export const setStartDate = (startDate = null) => {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    };
};

export const setEndDate = (endDate = null) => {
    return {
        type: 'SET_END_DATE',
        endDate: endDate
    };
};


