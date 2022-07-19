const erros = {
    messages: (value) => {
        let e = {};
        if (value === 'displayName') {
            e = new Error('"displayName" length must be at least 8 characters long');
            e.status = 400;
            throw e;
        }
        if (value === 'email') {
            e = new Error('"email" must be a valid email');
            e.status = 400;
            throw e;
        }
        if (value === 'password') {
            e = new Error('password" length must be at least 6 characters lonl');
            e.status = 400;
            throw e;
        }

        return e;
    },
};

module.exports = erros;