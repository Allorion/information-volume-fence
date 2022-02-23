import React from "react";

export default function ValidateFormAddingInformation(values) {
    const errors = {};
    const textErrors = [];

    if (values.waterIntakeNumber === "") {
        errors.waterIntakeNumber = true;
        textErrors.push('- Пустое поле "Номер водозабора"')
    }

    if (values.northernLatitudeDegrees === "") {
        errors.northernLatitudeDegrees = true;
        textErrors.push('- Пустое поле "Градусы северной широты"')
    }else if (values.northernLatitudeDegrees > 180 || values.northernLatitudeDegrees < 0) {
        textErrors.push('- Градусы северной широты не могут быть больше 180 и меньше 0')
        errors.northernLatitudeDegrees = true;
    }

    if (values.northernLatitudeMinutes === "") {
        errors.northernLatitudeMinutes = true;
        textErrors.push('Пустое поле "Минуты северной широты"')
    }else if (values.northernLatitudeMinutes > 60 || values.northernLatitudeMinutes < 0) {
        textErrors.push('- Минуты северной широты не могут быть больше 60 и меньше 0')
        errors.northernLatitudeMinutes = true;
    }

    if (values.northernLatitudeSeconds === "") {
        errors.northernLatitudeSeconds = true;
        textErrors.push('- Пустое поле "Секунды северной широты"')
    }else if (values.northernLatitudeSeconds > 60 || values.northernLatitudeSeconds < 0) {
        textErrors.push('- Секунды северной широты не могут быть больше 60 и меньше 0')
        errors.northernLatitudeSeconds = true;
    }

    if (values.easternLongitudeDegrees === "") {
        errors.easternLongitudeDegrees = true;
        textErrors.push('- Пустое поле "Градусы восточной долготы"')
    }else if (values.easternLongitudeDegrees > 180 || values.easternLongitudeDegrees < 0) {
        textErrors.push('- Градусы восточной долготы не могут быть больше 180 и меньше 0')
        errors.easternLongitudeDegrees = true;
    }

    if (values.easternLongitudeMinutes === "") {
        errors.easternLongitudeMinutes = true;
        textErrors.push('- Пустое поле "Минуты восточной долготы"')
    }else if (values.easternLongitudeMinutes > 60 || values.easternLongitudeMinutes < 0) {
        textErrors.push('- Минуты восточной долготы не могут быть больше 60 и меньше 0')
        errors.easternLongitudeMinutes = true;
    }

    if (values.easternLongitudeSeconds === "") {
        errors.easternLongitudeSeconds = true;
        textErrors.push('- Пустое поле "Секунды восточной долготы"')
    }else if (values.easternLongitudeSeconds > 60 || values.easternLongitudeSeconds < 0) {
        textErrors.push('- Секунды восточной долготы не могут быть больше 60 и меньше 0')
        errors.easternLongitudeSeconds = true;
    }

    if (values.volumePermissibleFence === "") {
        errors.volumePermissibleFence = true;
        textErrors.push('- Пустое поле "Объем допустимого забора"')
    }else if (values.volumePermissibleFence < 0) {
        textErrors.push('- Объем допустимого забора не может быть меньше 0')
        errors.volumePermissibleFence = true;
    }

    if (values.fullVolume === "") {
        errors.fullVolume = true;
        textErrors.push('- Пустое поле "Фактического объема забора"')
    }else if (values.fullVolume < 0) {
        textErrors.push('- Фактический объем забора не может быть меньше 0')
        errors.fullVolume = true;
    }

    if (values.firstMonth === "") {
        errors.firstMonth = true;
        textErrors.push('- Пустое поле "Объема за первый месяц квартала"')
    }else if (values.firstMonth < 0) {
        textErrors.push('- Объем за первый месяц не может быть меньше 0')
        errors.firstMonth = true;
    }

    if (values.secondMonth === "") {
        errors.secondMonth = true;
        textErrors.push('- Пустое поле "Объема за второй месяц квартала"')
    }else if (values.secondMonth < 0) {
        textErrors.push('- Объем за второй месяц не может быть меньше 0')
        errors.secondMonth = true;
    }

    if (values.thirdMonth === "") {
        errors.thirdMonth = true;
        textErrors.push('- Пустое поле "Объема за третий месяц квартала"')
    }else if (values.thirdMonth < 0) {
        textErrors.push('- Объем за третий месяц не может быть меньше 0')
        errors.thirdMonth = true;
    }

    if (+values.firstMonth + +values.secondMonth + +values.thirdMonth > +values.fullVolume) {
        errors.firstMonth = true;
        errors.secondMonth = true;
        errors.thirdMonth = true;
        errors.fullVolume = true;
        textErrors.push('- Объем за три месяца не может быть больше фактического объема забора')
    }else if(+values.firstMonth + +values.secondMonth + +values.thirdMonth < +values.fullVolume) {
        errors.firstMonth = true;
        errors.secondMonth = true;
        errors.thirdMonth = true;
        errors.fullVolume = true;
        textErrors.push('- Объем за три месяца не может быть меньше фактического объема забора')
    }

    return [errors, textErrors];
}