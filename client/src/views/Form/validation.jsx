export const validation = (input) => {
    let errors = {};

    if (!input.name) {
        errors.name = "Debe ingresar un nombre";
    } else if (input.name.length > 10) {
        errors.name = "No puede tener más de 10 caracteres";
    } else if (!/^[a-zA-Z]+$/.test(input.name)) {
        errors.name = "Solo puede contener letras";
    }

    if (!input.hp || input.hp <= 0 || input.hp > 255) {
        errors.hp = "Debe ser mayor a 0 y menor a 255";
    }

    if (!input.attack || input.attack <= 0 || input.attack > 255) {
        errors.attack = "Debe ser mayor a 0 y menor a 255";
    }

    if (!input.defense || input.defense <= 0 || input.defense > 255) {
        errors.defense = "Debe ser mayor a 0 y menor a 255";
    }

    if (!input.speed || input.speed <= 0 || input.speed > 255) {
        errors.speed = "Debe ser mayor a 0 y menor a 255";
    }

    if (!input.height || input.height <= 0 || input.height > 255) {
        errors.height = "Debe ser mayor a 0 y menor a 255";
    }

    if (!input.weight || input.weight <= 0 || input.weight > 255) {
        errors.weight = "Debe ser mayor a 0 y menor a 255";
    }   

    if (input.types.length < 1) {
        errors.types = "Debes elegir al menos 2 tipos";
    
    }

    return errors;
};

export default validation;

