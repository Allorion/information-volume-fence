// ***************************************************************************
// Компонент с проверкой валидности формы дополнительных данных по сбросу воды
// ***************************************************************************


import React from "react";


export default function ValidateDetailsReportsVolumeDischarge(values) {

    // Создаем объект с ошибками
    const errors = {};

    // Создаем массив с текстом ошибок
    const textErrors = [];


    // Блок проверки полей
    if (values.nameWaterObjectCode === 'Код водного объекта') {
        errors.nameWaterObjectCode = true;
        textErrors.push('- Вы не выбрали водный объект')
    }

    if (values.waterOutletNumber === "") {
        errors.waterOutletNumber = true;
        textErrors.push('- Пустое поле "Номер водовыпуска"')
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

    if (values.amountPermissibleDischarge === "") {
        errors.amountPermissibleDischarge = true;
        textErrors.push('- Пустое поле "Объем допустимого сброса"')
    }else if (values.amountPermissibleDischarge < 0) {
        textErrors.push('- Объем допустимого сброса не может быть меньше 0')
        errors.amountPermissibleDischarge = true;
    }

    if (values.fullVolume === "") {
        errors.fullVolume = true;
        textErrors.push('- Пустое поле "Фактического объема сброса"')
    }else if (values.fullVolume < 0) {
        textErrors.push('- Фактический объем сброса не может быть меньше 0')
        errors.fullVolume = true;
    }

    if (values.withoutCleaning === "") {
        errors.withoutCleaning = true;
        textErrors.push('- Не указано количество загрязненных вод без очистки')
    }else if (values.withoutCleaning < 0) {
        textErrors.push('- Количество загрязненных вод без очистки не может быть меньше 0')
        errors.withoutCleaning = true;
    }

    if (values.insufficientlyCleaned === "") {
        errors.insufficientlyCleaned = true;
        textErrors.push('- Не указано количество недостаточно очищенных вод')
    }else if (values.insufficientlyCleaned < 0) {
        textErrors.push('- Количество недостаточно очищенных вод не может быть меньше 0')
        errors.insufficientlyCleaned = true;
    }

    if (values.normativelyPure === "") {
        errors.normativelyPure = true;
        textErrors.push('- Не указано количество нормативночистых вод (без очистки)')
    }else if (values.normativelyPure < 0) {
        textErrors.push('- Количество нормативночистых вод (без очистки) не может быть меньше 0')
        errors.normativelyPure = true;
    }

    if (values.biological === "") {
        errors.biological = true;
        textErrors.push('- Не указано количество нормативно очищенных вод биологической очисткой')
    }else if (values.biological < 0) {
        textErrors.push('- Количество нормативно очищенных вод биологической очисткой не может быть меньше 0')
        errors.biological = true;
    }

    if (values.physicoChemical === "") {
        errors.physicoChemical = true;
        textErrors.push('- Не указано количество нормативно очищенных вод физико-химической очисткой')
    }else if (values.physicoChemical < 0) {
        textErrors.push('- Количество нормативно очищенных вод физико-химической очисткой не может быть меньше 0')
        errors.physicoChemical = true;
    }

    if (values.mechanical === "") {
        errors.mechanical = true;
        textErrors.push('- Не указано количество нормативно очищенных вод механической очисткой')
    }else if (values.mechanical < 0) {
        textErrors.push('- Количество нормативно очищенных вод механической очисткой не может быть меньше 0')
        errors.mechanical = true;
    }

    if (+values.withoutCleaning + +values.insufficientlyCleaned + +values.normativelyPure + +values.biological
        + +values.physicoChemical + +values.mechanical > +values.fullVolume) {
        errors.withoutCleaning = true;
        errors.insufficientlyCleaned = true;
        errors.normativelyPure = true;
        errors.biological = true;
        errors.physicoChemical = true;
        errors.mechanical = true;
        errors.fullVolume = true;
        textErrors.push('- Количество вод различной очистки не может быть больше количества фактически отведенных вод');
    } else if (+values.withoutCleaning + +values.insufficientlyCleaned + +values.normativelyPure + +values.biological
        + +values.physicoChemical + +values.mechanical < +values.fullVolume) {
        errors.withoutCleaning = true;
        errors.insufficientlyCleaned = true;
        errors.normativelyPure = true;
        errors.biological = true;
        errors.physicoChemical = true;
        errors.mechanical = true;
        errors.fullVolume = true;
        textErrors.push('- Количество вод различной очистки не может быть меньше количества фактически отведенных вод');
    }
    // (конец) Блок проверки полей

    // Возвращаем в родительский компонент поля с ошибками и текстом ошибки
    return [errors, textErrors];
};
