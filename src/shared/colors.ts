import { TypeDataSystem } from '../models/TypeDataSystem';

export enum ColorBackgroundSystem {
    Error = "hsl(0, 75%, 54%)",
    Warning = 'hsl(38, 56%, 54%)',
    Operations = 'hsl(208, 96%, 57%)'
}

export function getColorType(type: TypeDataSystem): ColorBackgroundSystem {

    switch (type.typeData) {
        case 'Errors': return ColorBackgroundSystem.Error
        case 'Warnings': return ColorBackgroundSystem.Warning
        case 'Operations': return ColorBackgroundSystem.Operations

    }
}

export const colorDark = '#777780';