export enum orderTypeEnum {
    capacitor = "fecapacitormale",
    resistor = "resistor",
    transistor = "transistor"
  }

export interface order {
    type: orderTypeEnum,
    nominal_capacitance: number,    // float
    working_voltage: number,        // number
    tolerance: number,              // float - between zero and one
    working_temperature: number,    // number
    temperature_coefficient: number // float - between zero and one
}