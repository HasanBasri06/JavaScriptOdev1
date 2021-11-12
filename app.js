import axios from "axios";
import { Hash } from "crypto";
import { hasUncaughtExceptionCaptureCallback } from "process";

const getData = async (userId) => {

    const {data: item} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);

    console.log(item)

}

getData(2)
