const { renderCreateUserEJS } = require('../utils/renderHelpers');

const renderCreateUserPage = (req, res) => {
    renderCreateUserEJS(res, '');
};

module.exports = {
    renderCreateUserPage
};