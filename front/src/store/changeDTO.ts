
const changeDTO = async (set, key, value) => {
    await set((DTO) => {
        let newDTO = {...DTO};
        newDTO[key] = value;
        return newDTO;
    });
}
export {changeDTO}