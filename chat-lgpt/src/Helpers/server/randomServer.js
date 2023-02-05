import config from "../../Configs/config.json"
import token from "../../Configs/token.json"

const { SERVER_API, SERVER_API1, SERVER_API2, SERVER_API3, SERVER_API4 } = config;
const { API_TOKEN, API_TOKEN1, API_TOKEN2, API_TOKEN3 } = token;

const randomServer = {
    "server": [
        {
            "id": "0", "link": SERVER_API2, "token": ""
        },
        {
            "id": "1", "link": SERVER_API, "token": API_TOKEN
        },
        {
            "id": "2", "link": SERVER_API, "token": API_TOKEN1
        },
        {
            "id": "3", "link": SERVER_API, "token": API_TOKEN2
        },
        {
            "id": "4", "link": SERVER_API, "token": API_TOKEN3
        },
        {
            "id": "5", "link": SERVER_API4, "token": ""
        },
        {
            "id": "6", "link": SERVER_API3, "token": ""
        },
        {
            "id": "7", "link": SERVER_API1, "token": ""
        }
    ]
}
const server = randomServer["server"][Math.floor(Math.random() * randomServer["server"].length)];
export default server 
