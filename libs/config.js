module.exports = {
    database: "ntask",
    username: "root",
    password: "root",
    params: {
        dialect: "mysql",
        host: "localhost",
        define: {
            underscored: true
        }
    },
    jwtSecret: "Nta$k_AP1",
    jwtSession: {session: false}
};