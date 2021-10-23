import axios from "axios";
import { URL } from "../shared/constants";
import { SystemData } from '../models/systemData';
import { AxiosResponse } from 'axios';

// export function getSystemData() {
//     return axios.get(URL)
// }

export class ErrorSystem extends Error {
    code: string;
    constructor(code: string, message: string) {
        super(message);
        this.code = code
    }

}

export async function getSystemData(): Promise<AxiosResponse<SystemData>> {
    try {
        const data: AxiosResponse<SystemData> = await axios.get(URL)
        return data

    } catch (error: unknown) {

        if (axios.isAxiosError(error)) {
            if (error.code) {
                throw new ErrorSystem(error.code, error.message)
            }
            throw new ErrorSystem('404', error.message)
        }
        throw new ErrorSystem('404', "error fetch data")
    }
}