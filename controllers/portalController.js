const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const cookies = req.cookies;
    const { username, password } = req.body; 

    const userFound = await User.findOne({ username: username }).exec();
    if (!userFound) return res.sendStatus(401);
    const passwordCheck = await bcrypt.compare(password, userFound.password);
    if (passwordCheck) {
        const roles = Object.values(userFound.roles).filter(Boolean);
        const accessToken = jwt.sign(
            {
                "userInfo": {
                    "username": userFound.username,
                    "roles": roles,
                    "psn": userFound.psn,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10m' }
        );
        const newRefreshToken = jwt.sign(
            { "username": userFound.username, },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        let newRefreshTokenArray =
            !cookies?.jwt
                ? userFound.refreshToken
                : userFound.refreshToken.filter(rt => rt !== cookies.jwt);

        if (cookies?.jwt) {
            const refreshToken = cookies.jwt;
            const tokenFound = await User.findOne({ refreshToken }).exec();

            if (!tokenFound) {
                newRefreshTokenArray = [];
            }

            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        }
        
        userFound.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        const result = await userFound.save();

        res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}



const logout = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    const refreshToken = cookies.jwt;

    const userFound = await User.findOne({ refreshToken }).exec();
    if (userFound) {
        res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'None'})
        return res.sendStatus(204);
    }

    userFound.refreshToken = userFound.refreshToken.filter(rt => rt !== refreshToken);
    const result = await userFound.save();
    console.log(result);

    res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'None'});
    res.sendStatus(204);
}



const refreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'None'});
    const userFound = await User.findOne({ refreshToken }).exec();
    if (!userFound) {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) return res.sendStatus(403);
                const hackedUser = await User.findOne({ username: decoded.username }).exec();
                hackedUser.refreshToken = [];
                await hackedUser.save();
            }
        )
        return res.sendStatus(403);
    }

    const newRefreshTokenArray = userFound.refreshToken.filter(rt => rt !== refreshToken);
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) {
                userFound.refreshToken = [...newRefreshTokenArray];
                await userFound.save();
            }
            if (err || userFound.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(userFound.roles);
            const accessToken = jwt.sign(
                {
                    "userInfo": {
                        "username": decoded.username,
                        "roles": roles,
                        "psn": userFound.psn,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            );

            const newRefreshToken = jwt.sign(
                { "username": userFound.username, },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' }
            );

            userFound.refreshToken = [...newRefreshTokenArray, newRefreshToken];
            await userFound.save();
            res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
            res.json({ accessToken })
        }
    );
}



const register = async (req, res) => {
    const { psn, username, password } = req.body;
    if (!psn || !username || !password) return res.status(400).json({ 'message': 'username and password are required.' });

    const duplicate = await User.findOne({ username: username }).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            "username": username,
            "password": hashedPassword,
            "psn": psn,
        });

        res.status(201).json({ 'success': `${username} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    login,
    logout,
    refreshToken,
    register,
}