// ***********************************************************************************
// Компонент с проверкой валидности формы дополнительных данных по учету качества воды
// ***********************************************************************************



import React from "react";

export default function ValidateDetailsReportWaterQualityAccounting(values) {
    const errors = {};
    const textErrors = [];

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
    } else if (values.northernLatitudeDegrees > 180 || values.northernLatitudeDegrees < 0) {
        textErrors.push('- Градусы северной широты не могут быть больше 180 и меньше 0')
        errors.northernLatitudeDegrees = true;
    }

    if (values.northernLatitudeMinutes === "") {
        errors.northernLatitudeMinutes = true;
        textErrors.push('Пустое поле "Минуты северной широты"')
    } else if (values.northernLatitudeMinutes > 60 || values.northernLatitudeMinutes < 0) {
        textErrors.push('- Минуты северной широты не могут быть больше 60 и меньше 0')
        errors.northernLatitudeMinutes = true;
    }

    if (values.northernLatitudeSeconds === "") {
        errors.northernLatitudeSeconds = true;
        textErrors.push('- Пустое поле "Секунды северной широты"')
    } else if (values.northernLatitudeSeconds > 60 || values.northernLatitudeSeconds < 0) {
        textErrors.push('- Секунды северной широты не могут быть больше 60 и меньше 0')
        errors.northernLatitudeSeconds = true;
    }

    if (values.easternLongitudeDegrees === "") {
        errors.easternLongitudeDegrees = true;
        textErrors.push('- Пустое поле "Градусы восточной долготы"')
    } else if (values.easternLongitudeDegrees > 180 || values.easternLongitudeDegrees < 0) {
        textErrors.push('- Градусы восточной долготы не могут быть больше 180 и меньше 0')
        errors.easternLongitudeDegrees = true;
    }

    if (values.easternLongitudeMinutes === "") {
        errors.easternLongitudeMinutes = true;
        textErrors.push('- Пустое поле "Минуты восточной долготы"')
    } else if (values.easternLongitudeMinutes > 60 || values.easternLongitudeMinutes < 0) {
        textErrors.push('- Минуты восточной долготы не могут быть больше 60 и меньше 0')
        errors.easternLongitudeMinutes = true;
    }

    if (values.easternLongitudeSeconds === "") {
        errors.easternLongitudeSeconds = true;
        textErrors.push('- Пустое поле "Секунды восточной долготы"')
    } else if (values.easternLongitudeSeconds > 60 || values.easternLongitudeSeconds < 0) {
        textErrors.push('- Секунды восточной долготы не могут быть больше 60 и меньше 0')
        errors.easternLongitudeSeconds = true;
    }

    if (values.actualDischargePollutantMgDm3 === "") {
        errors.actualDischargePollutantMgDm3 = true;
        textErrors.push('- Пустое поле "Фактический сброс загрязняющих веществ (мг/дм3)"')
    } else if (values.actualDischargePollutantMgDm3 < 0) {
        textErrors.push('- Фактический сброс загрязняющих веществ (мг/дм3) не может быть меньше 0')
        errors.actualDischargePollutantMgDm3 = true;
    }

    if (values.actualDischargePollutantKg === "") {
        errors.actualDischargePollutantKg = true;
        textErrors.push('- Пустое поле "Фактический сброс загрязняющих веществ (кг)"')
    } else if (values.actualDischargePollutantKg < 0) {
        textErrors.push('- Фактический сброс загрязняющих веществ (кг) не может быть меньше 0')
        errors.actualDischargePollutantKg = true;
    }

    if (values.actualDischargePollutantT === "") {
        errors.actualDischargePollutantT = true;
        textErrors.push('- Пустое поле "Фактический сброс загрязняющих веществ (т)"')
    } else if (values.actualDischargePollutantT < 0) {
        textErrors.push('- Фактический сброс загрязняющих веществ (т) не может быть меньше 0')
        errors.actualDischargePollutantT = true;
    }

    if (values.legallyPermissibleMgDm3 === "") {
        errors.legallyPermissibleMgDm3 = true;
        textErrors.push('- Пустое поле "Нормативно допустимый сброс загрязняющих веществ (мг/дм3)"')
    } else if (values.legallyPermissibleMgDm3 < 0) {
        textErrors.push('- Нормативно допустимый сброс загрязняющих веществ (мг/дм3) не может быть меньше 0')
        errors.legallyPermissibleMgDm3 = true;
    }

    if (values.legallyPermissibleKg === "") {
        errors.legallyPermissibleKg = true;
        textErrors.push('- Пустое поле "Нормативно допустимый сброс загрязняющих веществ (кг)"')
    } else if (values.legallyPermissibleKg < 0) {
        textErrors.push('- Нормативно допустимый сброс загрязняющих веществ (кг) не может быть меньше 0')
        errors.legallyPermissibleKg = true;
    }

    if (values.legallyPermissibleT === "") {
        errors.legallyPermissibleT = true;
        textErrors.push('- Пустое поле "Нормативно допустимый сброс загрязняющих веществ (т)"')
    } else if (values.legallyPermissibleT < 0) {
        textErrors.push('- Нормативно допустимый сброс загрязняющих веществ (т) не может быть меньше 0')
        errors.legallyPermissibleT = true;
    }

    if (values.limitSetMgDm3 === "") {
        errors.limitSetMgDm3 = true;
        textErrors.push('- Пустое поле "Установленный лимит сброса загрязняющих веществ (мг/дм3)"')
    } else if (values.limitSetMgDm3 < 0) {
        textErrors.push('- Установленный лимит сброса загрязняющих веществ (мг/дм3) не может быть меньше 0')
        errors.limitSetMgDm3 = true;
    }

    if (values.limitSetKg === "") {
        errors.limitSetKg = true;
        textErrors.push('- Пустое поле "Установленный лимит сброса загрязняющих веществ (кг)"')
    } else if (values.limitSetKg < 0) {
        textErrors.push('- Установленный лимит сброса загрязняющих веществ (кг) не может быть меньше 0')
        errors.limitSetKg = true;
    }

    if (values.limitSetT === "") {
        errors.limitSetT = true;
        textErrors.push('- Пустое поле "Установленный лимит сброса загрязняющих веществ (т)"')
    } else if (values.limitSetT < 0) {
        textErrors.push('- Установленный лимит сброса загрязняющих веществ (т) не может быть меньше 0')
        errors.limitSetT = true;
    }

    return [errors, textErrors];
}