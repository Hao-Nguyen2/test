

import {TYPE_LOG,
    TYPE_WANR} from './constants.js';



function logger(log, type = 'log'){
    console[type](log);
}

