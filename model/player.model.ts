const playerModel = (sequelize, Sequelize) => {
  const player = sequelize.define(
    'player',
    {
      pid: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: 'pid',
      },
      name: { type: Sequelize.STRING(50), allowNull: true, field: 'name' },
      age: { type: Sequelize.INTEGER(11), allowNull: true, field: 'age' },
      address: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'address',
      },
      phone: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'phone',
      },
      position: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'position',
      },
    },
    {
      tableName: 'player',
    },
  );
  return player;
};

export { playerModel };
