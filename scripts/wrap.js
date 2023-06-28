import { newDiv } from './element.js';

export default function createWrap(wrapInfo) {
    return function(...elements) {
        const newWrap = newDiv(wrapInfo);

        if(elements) {
            elements.forEach(element => {
                newWrap.append(element);
            });
        };
        
        return newWrap;
    };
};