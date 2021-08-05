import moment from 'moment';
// import 'moment-precise-range-plugin';

/**
 * HH MM SS Convert to Sec
 * @param hhMmSs string
 * @returns any
 */
export const hhMmSsConvertToSec = (hhMmSs)=> {
    try {
        if (!hhMmSs) {
            return 0;
        }
        return moment(hhMmSs, 'HH:mm:ss').diff(moment().startOf('day'), 'seconds');
    } catch (e) {
        return 0;
    }
};

/**
 * Sec Convert to HH MM SS
 * @param sec string
 * @returns any
 */
export const secConvertToHhMmSs = (sec) => {
    try {
        return moment().startOf('day').seconds(sec).format('HH:mm:ss');
    } catch (e) {
        return '';
    }
};
