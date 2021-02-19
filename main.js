const input = document.querySelector('#input');
const inputType = document.querySelector('#inputType');
const resultType = document.querySelector('#resultType');
const convert = document.querySelector('#convert');
const clear = document.querySelector('#clear');
const output = document.querySelector('#output');

function baseConverter() {
    if (inputType.value === 'binary' && resultType.value === 'binary') {
        output.value = input.value;
    } else if (inputType.value === 'binary' && resultType.value === 'decimal') {
        output.value = parseInt(input.value, 2);
    } else if (inputType.value === 'binary' && resultType.value === 'octal') {
        const decimalVal = parseInt(input.value, 2);
        output.value = decimalVal.toString(8);
    } else if (inputType.value === 'binary' && resultType.value === 'hex') {
        const decimalVal = parseInt(input.value, 2);
        output.value = decimalVal.toString(16);
    } else if (inputType.value === 'octal' && resultType.value === 'octal') {
        output.value = input.value;
    } else if (inputType.value === 'octal' && resultType.value === 'binary') {
        const decimalVal = parseInt(input.value, 8);
        output.value = decimalVal.toString(2);
    } else if (inputType.value === 'octal' && resultType.value === 'decimal') {
        output.value = parseInt(input.value, 8);
    } else if (inputType.value === 'octal' && resultType.value === 'hex') {
        const decimalVal = parseInt(input.value, 8);
        output.value = decimalVal.toString(16);
    } else if (inputType.value === 'decimal' && resultType.value === 'decimal') {
        output.value = input.value;
    } else if (inputType.value === 'decimal' && resultType.value === 'binary') {
        const val = parseInt(input.value, 10);
        output.value = val.toString(2);
    } else if (inputType.value === 'decimal' && resultType.value === 'octal') {
        const val = parseInt(input.value, 10);
        output.value = val.toString(8);
    } else if (inputType.value === 'decimal' && resultType.value === 'hex') {
        const val = parseInt(input.value, 10);
        output.value = val.toString(16);
    } else if (inputType.value === 'hex' && resultType.value === 'hex') {
        output.value = input.value;
    } else if (inputType.value === 'hex' && resultType.value === 'binary') {
        const decimalVal = parseInt(input.value, 16);
        output.value = decimalVal.toString(2);
    } else if (inputType.value === 'hex' && resultType.value === 'octal') {
        const decimalVal = parseInt(input.value, 16);
        output.value = decimalVal.toString(8);
    } else if (inputType.value === 'hex' && resultType.value === 'decimal') {
        output.value = parseInt(input.value, 16);
    }
}

clear.addEventListener('click', () => {
    input.value = '0';
    output.value = '';
});

convert.addEventListener('click', baseConverter);
