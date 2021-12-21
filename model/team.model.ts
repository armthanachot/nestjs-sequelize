const teamModel = (sequelize, Sequelize) => {
  const team = sequelize.define(
    'team',
    {
      tid: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: 'tid',
      },
      name: { type: Sequelize.STRING(50), allowNull: false, field: 'name' },
      league: { type: Sequelize.STRING(50), allowNull: false, field: 'league' },
    },
    {
      tableName: 'team',
    },
  );

  return team;
};

export { teamModel };
