module.exports = {
    mongourl:'mongodb://localhost:27017/condor',
    port:8800,

    sessionOps: {
        secret:'thisismyspecialsecret',
        resave:false,
        saveUninitialized: false
    }

}