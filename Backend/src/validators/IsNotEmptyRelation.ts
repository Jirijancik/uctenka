import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

/**
 * Relation validator.
 * This validator checks if the value is an array and if it's not empty.
 * @param validationOptions
 * @returns {Function} A validation function that can be used in the class-validator library.
 */
export function IsNotEmptyRelation(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isNotEmptyRelation',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return Array.isArray(value) && value.length > 0;
        },
      },
    });
  };
}
