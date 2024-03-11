export const getColumnSizeClass = (elementCount) => {
    if (elementCount === 1) {
        return 'col-12';
    } else if (elementCount === 2 || elementCount === 4) {
        return 'col-6';
    } else if (elementCount === 3) {
        return ['col-6', 'col-6', 'col-12'];
    }
    return 'col-12';
};