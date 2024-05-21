export const tokenTypes = {
  USER_ACCESS: "user-access",
  PASSWORD_RESET: "password-reset",
  EMAIL_VERIFICATION: "email-verificaiton",
};

const getTokenModel = (sequelize, { DataTypes }) => {
  const Token = sequelize.define("token", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    value: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [Object.values(tokenTypes)],
      },
    },
  });

  return Token;
};

export default getTokenModel;
