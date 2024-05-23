import {parseISO, differenceInSeconds, format} from 'date-fns';


const formatRelative = (dataISO: string):string => {
    const date = parseISO(dataISO);
    const now = new Date();

    const difInSeconds = differenceInSeconds(now, date);

    if(difInSeconds < 60) {
        return `${difInSeconds} s`;
    } 

    const difInMinutes = Math.round(difInSeconds / 60);
    if(difInMinutes < 60) {
        return `${difInMinutes} m`;
    }

    const difInHours = Math.floor(difInMinutes / 60);
    if(difInHours < 60) {
        return `${difInHours} h`;
    }

    const difInDays = Math.floor(difInHours / 24);
    if(difInDays < 7) {
        return `${difInDays} d`;
    }

    const difInWeeks = Math.floor(difInDays / 7);
    if(difInWeeks < 4) {
        return `${difInWeeks} sem`;
    }

    const difInMonths = Math.floor(difInDays / 30 );
    if(difInMonths < 12) {
        return `${difInMonths} m`;
    }

    return format(date, 'dd/MM/yyyy');

}

export const dataUtils = {
    formatRelative,
}