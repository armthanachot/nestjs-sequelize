import { Sequelize } from 'sequelize';
import { teamModel } from 'model/team.model';
import { playerModel } from 'model/player.model';
const sequelize = new Sequelize('nest_sequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

const db = {
  Sequelize,
  sequelize,
  player: playerModel(sequelize, Sequelize),
  team: teamModel(sequelize, Sequelize),
};

db.team.hasMany(db.player, {
  foreignKey: { name: 'tid', field: 'tid' },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export { db };
