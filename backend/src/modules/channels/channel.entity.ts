import { IChannel } from '@/typings/channel';
import { ChannelType, channelTypes } from '@/utils/Constants';
import { AutoIncrement, Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
	tableName: 'channels'
})
class Channel extends Model implements IChannel {
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.BIGINT)
	declare id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	name!: string;

	@Column({
		type: DataType.ENUM(...channelTypes),
		allowNull: false,
		validate: {
			isIn: [channelTypes]
		}
	})
	channelType!: ChannelType;

	@CreatedAt
	@Column({ field: 'created_at' })
	declare createdAt: Date;

	@UpdatedAt
	@Column({ field: 'updated_at' })
	declare updatedAt: Date;
}

export { Channel };
export default Channel;
