import bcrypt from 'bcryptjs';

import User from '../models/user.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, '_id email firstName lastName');

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch users.' });
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: 'Invalid Password.' });

    res.status(200).json({ result: user });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const signUp = async (req, res) => {
  const { email, password, passwordConfirmation, firstName, lastName } =
    req.body;

  try {
    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ message: 'User with this email already exists.' });

    if (password !== passwordConfirmation)
      return res.status(400).json({ message: 'Passwords do no match.' });

    const hashPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashPassword,
      firstName,
      lastName,
    });

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
