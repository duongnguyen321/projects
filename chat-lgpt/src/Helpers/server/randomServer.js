import config from "../../Configs/config.json";

const servers = [
    { id: "0", link: config.SERVER_API2 },
    { id: "1", link: config.SERVER_API4 },
    { id: "2", link: config.SERVER_API3 },
    { id: "3", link: config.SERVER_API1 },
];

const server = servers[Math.floor(Math.random() * servers.length)];
export default server;
