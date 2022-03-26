import jwt from 'jsonwebtoken';

export default function authMiddleWare(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];

    // tokens created with email + pw are < 500
    // users logging in with google are provided a token, which is verified here
    const customAuth = token.length < 500;

    let decodedToken;

    if (token && customAuth) {
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    } else {
      decodedToken = jwt.decode(token);
    }

    if (decodedToken) next();
  } catch (error) {
    res.status(401).send(error.message);
  }
}
