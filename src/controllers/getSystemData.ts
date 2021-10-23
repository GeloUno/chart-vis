import axios from "axios";
import { URL } from "../shared/const";

export function getSystemData() {
    return axios.get(URL)
}