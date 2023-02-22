import config from "../../Configs/config.json"

const { SERVER_API1, SERVER_API2, SERVER_API3, SERVER_API4 } = config;

const randomServer = {
    "server": [
        {
            "id": "0", "link": SERVER_API2
        },
        {
            "id": "1", "link": SERVER_API4
        },
        {
            "id": "2", "link": SERVER_API3
        },
        {
            "id": "3", "link": SERVER_API1
        }
    ]
}
const server = randomServer["server"][Math.floor(Math.random() * randomServer["server"].length)];
export default server 
