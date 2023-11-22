
const changeDTO = async (set, key, value) => {
    await set((DTO) => {
        let newDTO = { ...DTO };
        newDTO[key] = value;
        return newDTO;
    });
    // changeDTO 함수가 프로미스를 반환하도록 수정
};
export { changeDTO };