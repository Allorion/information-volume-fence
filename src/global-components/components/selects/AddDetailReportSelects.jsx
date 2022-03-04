// ****************************************************************
// Компонент с данными select для форм добавления деталей к отчетам
// ****************************************************************


import React from "react";


export default function AddDetailReportSelects() {

    // Блока списков select
    const listWaterBodies = [
        'МОРЕ', 'РЕКА', 'РЕКА ПЕРЕСЫХАЮЩАЯ', 'ОЗЕРО', 'БОЛОТО', 'ВОДОХРАНИЛИЩЕ РУСЛОВОЕ, ПРУД РУСЛОВОЙ',
        'Водохранилище наливное, пруд наливной', 'Канал комплексного назначения', 'ПОДЗЕМНЫЙ ВОДНЫЙ ОБЪЕКТ',
        'ШАХТА, РУДНИК, НЕФТЕПРОМЫСЕЛ, КАРЬЕР', 'СКВАЖИНА ВЕРТИКАЛЬНОГО ДРЕНАЖА ДЛЯ ПОНИЖЕНИЯ УРОВНЯ ГРУНТОВЫХ ВОД',
        'Коллектор оросительной системы', 'Земледельческие поля орошения', 'НАКОПИТЕЛЬ', 'РЕЛЬЕФ МЕСТНОСТИ',
        'ПОЛЯ ФИЛЬТРАЦИИ', 'СЕТЬ КАНАЛИЗАЦИИ', 'ЛИВНЕВОЙ КОЛЛЕКТОР'
    ];

    const listWaterQualityCategories = [
        '- Питьевая пресная',
        'ПО - ЗАБРАННАЯ ИЗ ПРИРОДНЫХ ВОДНЫХ ОБЪЕКТОВ (КРОМЕ МОРЕЙ), В ТОМ ЧИСЛЕ ПОСЛЕ ВОДОПОДГОТОВКИ',
        'ПК - ПОЛУЧЕННАЯ И (ИЛИ) ПЕРЕДАННАЯ ИЗ СИСТЕМ ВОДОСНАБЖЕНИЯ КОММУНАЛЬНОГО НАЗНАЧЕНИЯ',
        'ПД - ПОЛУЧЕННАЯ И (ИЛИ) ПЕРЕДАННАЯ ИЗ ПРОЧИХ СИСТЕМ ВОДОСНАБЖЕНИЯ', '- Техническая пресная',
        'ТН - ЗАБРАННАЯ ИЗ ПРИРОДНЫХ ВОДНЫХ ОБЪЕКТОВ (КРОМЕ МОРЕЙ)',
        'ТД - ПОЛУЧЕННАЯ И (ИЛИ) ПЕРЕДАННАЯ ИЗ СИСТЕМ ВОДОСНАБЖЕНИЯ (ВОДООБЕСПЕЧЕНИЯ, ОБВОДНЕНИЯ)',
        'ТР - Переданная для перераспределения (переброски) стока', 'ТП - Переданная для пополнения запасов подземных вод',
        '- Морская', 'МР - ИЗ МОРЕЙ', '- Сточная', 'СК - В СИСТЕМАХ ВОДООТВЕДЕНИЯ КОММУНАЛЬНОГО НАЗНАЧЕНИЯ',
        'СД - В ПРОЧИХ СИСТЕМАХ ВОДООТВЕДЕНИЯ',
        'СТ - ВОДА СТОЧНАЯ ТРАНЗИТНАЯ, ПЕРЕДАННАЯ НА ОЧИСТНЫЕ СООРУЖЕНИЯ ДРУГИМ РЕСПОНДЕНТАМ', '- Прочие категории',
        'МН - МИНЕРАЛЬНАЯ', 'ТМ - ТЕРМАЛЬНАЯ', 'РВ - СБРОСНАЯ С РЫБОВОДНЫХ ПРУДОВ', 'КД - КОЛЛЕКТОРНО-ДРЕНАЖНАЯ',
        'РС - Сбросная с рисовых систем', 'КР - КАРЬЕРНАЯ', 'ШР - ШАХТНО-РУДНИЧНАЯ', 'БЛ - БАЛЛАСТНАЯ, ЛЬЯЛЬНАЯ',
        'ЛВ - ЛИВНЕВАЯ'
    ];

    const listWaterUseGoals = [
        '1.1. забор (изъятие) водных ресурсов из водных объектов, тыс.куб.м.',
        '1.2. забор (изъятие) водных ресурсов из поверхностных водных объектов или их частей (за исключением морей) ' +
        'для целей производства тепловой и (или) электрической энергии субъектами электроэнергетики, использующими ' +
        'прямоточные системы технического водоснабжения, тыс.куб.м. ', '1.3. забор морской воды, тыс.куб.м',
        '1.4. забор воды из водных объектов для водоснабжения населения, тыс.куб.м.',
        '2. Производство электрической энергии без забора (изъятия) водных ресурсов из водных объектов, тыс.кВт/ч',
        '3. Использование акватории водных объектов, кв.км'
    ];
// (конец) Блока списков select

    return {listWaterBodies, listWaterQualityCategories, listWaterUseGoals};

};