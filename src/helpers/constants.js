const GET_CONSTANT = {
    HEADER_ACCESS : {
        'headers': {  'x-access-token': localStorage.getItem("token") }
    }
}

const GET_URL = {
    TWEETS : "/tweets"
}

module.exports = {
    GET_CONSTANT,
    GET_URL
};