import axios from "axios";
import {API_BASE_URL} from "../../App";
import {changeDTO} from "../../store/changeDTO";

export async function rememberMyEmail(name, hp, setInputValue) {
    try {
        const response = await axios.get(`${API_BASE_URL}/member/findMyEmail`, {
            params: {
                name: name,
                hp: hp
            }
        });
        const email = response.data;
        await changeDTO(setInputValue, 'email', '이메일은 "' + response.data + '"입니다.');
    } catch (err) {

        await changeDTO(setInputValue, 'email', '이메일을 찾을 수 없습니다.');
    }
}