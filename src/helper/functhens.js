export const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
};
export const isInCart = (state, id) => {
    const result = !!state.selectedItem.find((item) => item.id === id);
    return result;
};
export const quantityCount = (state, id) => {
    const index = state.selectedItem.findIndex((item) => item.id === id);
    if (index === -1) {
        return false;
    } else {
        return state.selectedItem[index].quantity;
    }
};
export const validation = (data) => {
    const errors = {};
    if (data.userName && !data.userName.trim()) {
        errors.userName = "username is empty";
    } else if (data.userName && data.userName.trim().length < 3) {
        errors.userName = "username is short";
    } else {
        delete errors.userName;
    }

    if (
        data.email &&
        !/^([a-zA-Z0-9\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            data.email
        )
    ) {
        errors.email = "email is invalid";
    } else {
        delete errors.email;
    }

    if (
        data.password &&
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data.password)
    ) {
        errors.password =
            "password must contain at least 8 characters including letters and numbers.";
    } else {
        delete errors.password;
    }
    if (data.confirmPassword && data.password !== data.confirmPassword) {
        errors.confirmPassword = "passwords is not match";
    }
    return errors;
};
