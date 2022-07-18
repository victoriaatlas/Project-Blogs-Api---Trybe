const middlewareValidate = {
    error: (_req, res) => res.status(400).json({ message: 'Invalid fields' }),
};

module.exports = middlewareValidate;