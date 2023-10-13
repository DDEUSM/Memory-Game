import BoneUrl from '../assets/images/icons/bone.svg';
import BookUrl from '../assets/images/icons/book.svg';
import BatteryUrl from '../assets/images/icons/battery.svg';
import DollarUrl from '../assets/images/icons/dollar.svg';
import DiscountUrl from '../assets/images/icons/discountTag.svg';
import AlphabetUrl from '../assets/images/icons/alphabet-greek.svg';
import { CardObjectType } from '../reducers/CardReducer';

export const arrUrl = [ BoneUrl, BookUrl, BatteryUrl, DollarUrl, DiscountUrl, AlphabetUrl ];

export const DataCards : CardObjectType[] = [
    {
        id : 0,
        url : BoneUrl,
        group : 1,
        status : 'hidden'
    },
    {
        id : 1,
        url : BoneUrl,
        group : 1,
        status : 'hidden'
    },
    {
        id : 2,
        url : BookUrl,
        group : 2,
        status : 'hidden'
    },
    {
        id : 3,
        url : BookUrl,
        group : 2,
        status : 'hidden'
    },
    {
        id : 4,
        url : BatteryUrl,
        group : 3,
        status : 'hidden'
    },
    {
        id : 5,
        url : BatteryUrl,
        group : 3,
        status : 'hidden'
    },
    {
        id : 6,
        url : DiscountUrl,
        group : 4,
        status : 'hidden'
    },
    {
        id : 7,
        url : DiscountUrl,
        group : 4,
        status : 'hidden'
    },
    {
        id : 8,
        url : DollarUrl,
        group : 5,
        status : 'hidden'
    },
    {
        id : 9,
        url : DollarUrl,
        group : 5,
        status : 'hidden'
    },
    {
        id : 10,
        url : AlphabetUrl,
        group : 6,
        status : 'hidden'
    },
    {
        id : 11,
        url : AlphabetUrl,
        group : 6,
        status : 'hidden'
    },

];

