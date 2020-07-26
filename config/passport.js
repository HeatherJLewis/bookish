const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { privateKey } = require('../apiCredentials')
const passport = require('passport');
const { databaseConnection } = require("../databaseConnection")

let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = privateKey;

const configurePassport = () => {

    passport.use(new JwtStrategy(options, function(jwt_payload, done) {
        const namedParameters = {
            username: jwt_payload.username
        };

        databaseConnection.any('SELECT EXISTS(SELECT * FROM users WHERE username=${username});', namedParameters)
        .then(data => {
            if (data[0].exists) {
                return done(null, jwt_payload);
            } else {
                return done(null, false);
            }
        })
    }));
}

module.exports = {
    configurePassport
}
