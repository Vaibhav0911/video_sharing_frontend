export const buildFormData = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => {
        if(val)    formData.append(key, val);
    })
    return formData;
}