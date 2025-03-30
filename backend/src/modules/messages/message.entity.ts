import { AutoIncrement, Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { IMessage } from '@/typings/message';
@Table({
	tableName: 'messages'
})
export class Message extends Model implements IMessage {
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.BIGINT)
	declare id: number;

	@Column({
		type: DataType.TEXT,
		allowNull: false
	})
	content!: string;

	@CreatedAt
	@Column({ field: 'created_at' })
	declare createdAt: Date;

	@UpdatedAt
	@Column({ field: 'updated_at' })
	declare updatedAt: Date;

	@CreatedAt
	@Column({ field: 'read_at' })
	declare readAt: Date;
}
