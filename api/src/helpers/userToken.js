<<<<<<< HEAD
import jwt from "jsonwebtoken";
=======
import jwt from 'jsonwebtoken';
>>>>>>> 327078374f4899d58c8dfbefee3b4b88897c2c48

function generateToken(user) {
  if (user) {
    let token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.jwtSecret,
      {
        expiresIn: 18000, // 5 hours in seconds
      }
    );
    return token;
  }
}

<<<<<<< HEAD
const resetPasswordToken = (user) => {
  if (user) {
    let token = jwt.sign(
      {
        id: user._id,
      },
      process.env.jwtSecret,
      {
        expiresIn: 1800, // 5 hours in seconds
      }
    );
    return token;
  }
};

export { resetPasswordToken, generateToken };
=======
export { generateToken };
>>>>>>> 327078374f4899d58c8dfbefee3b4b88897c2c48
