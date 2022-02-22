import React from "react";

export default function ValidateFormAddingInformation(values) {
    const errors = {};
    if (values.waterIntakeNumber === "") {
        errors.waterIntakeNumber = true;
    }

    if (values.northernLatitudeDegrees === "") {
        errors.northernLatitudeDegrees = true;
    }else if (values.northernLatitudeDegrees > 180 || values.northernLatitudeDegrees < 0) {
        errors.northernLatitudeDegrees = true;
    }

    if (values.northernLatitudeMinutes === "") {
        errors.northernLatitudeMinutes = true;
    }else if (values.northernLatitudeMinutes > 60 || values.northernLatitudeMinutes < 0) {
        errors.northernLatitudeMinutes = true;
    }

    if (values.northernLatitudeSeconds === "") {
        errors.northernLatitudeSeconds = true;
    }else if (values.northernLatitudeSeconds > 60 || values.northernLatitudeSeconds < 0) {
        errors.northernLatitudeSeconds = true;
    }

    if (values.easternLongitudeDegrees === "") {
        errors.easternLongitudeDegrees = true;
    }else if (values.easternLongitudeDegrees > 180 || values.easternLongitudeDegrees < 0) {
        errors.easternLongitudeDegrees = true;
    }

    if (values.easternLongitudeMinutes === "") {
        errors.easternLongitudeMinutes = true;
    }else if (values.easternLongitudeMinutes > 60 || values.easternLongitudeMinutes < 0) {
        errors.easternLongitudeMinutes = true;
    }

    if (values.easternLongitudeSeconds === "") {
        errors.easternLongitudeSeconds = true;
    }else if (values.easternLongitudeSeconds > 60 || values.easternLongitudeSeconds < 0) {
        errors.easternLongitudeSeconds = true;
    }

    if (values.volumePermissibleFence === "") {
        errors.volumePermissibleFence = true;
    }else if (values.volumePermissibleFence < 0) {
        errors.volumePermissibleFence = true;
    }

    if (values.fullVolume === "") {
        errors.fullVolume = true;
    }else if (values.fullVolume < 0) {
        errors.fullVolume = true;
    }

    if (values.firstMonth === "") {
        errors.firstMonth = true;
    }else if (values.firstMonth < 0) {
        errors.firstMonth = true;
    }

    if (values.secondMonth === "") {
        errors.secondMonth = true;
    }else if (values.secondMonth < 0) {
        errors.secondMonth = true;
    }

    if (values.thirdMonth === "") {
        errors.thirdMonth = true;
    }else if (values.thirdMonth < 0) {
        errors.thirdMonth = true;
    }

    if (+values.firstMonth + +values.secondMonth + +values.thirdMonth > +values.fullVolume) {
        errors.firstMonth = true;
        errors.secondMonth = true;
        errors.thirdMonth = true;
        errors.fullVolume = true;
    }else if(+values.firstMonth + +values.secondMonth + +values.thirdMonth < +values.fullVolume) {
        errors.firstMonth = true;
        errors.secondMonth = true;
        errors.thirdMonth = true;
        errors.fullVolume = true;
    }

    return errors;
}