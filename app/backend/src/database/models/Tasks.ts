import { Model, DataTypes } from 'sequelize';
import db from '.';

class Task extends Model {
  public id: number;
  public description: string
  public status: string
  public date: string
}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: false,
  timestamps: false,
  modelName: 'Task',
  tableName: 'tasks',
});

export default Task;
