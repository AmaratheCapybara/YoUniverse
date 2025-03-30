import type { IUserSettings } from '@/typings/usersettings';
import {
	Column,
	CreatedAt,
	DataType,
	Model,
	Table,
	UpdatedAt
} from 'sequelize-typescript';

@Table({
	tableName: 'usersettings'
})
export class UserSettings extends Model implements IUserSettings {
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		primaryKey: true
	})
	declare userID: number;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare about?: string | null;

	@CreatedAt
	@Column({ field: 'created_at' })
	declare createdAt: Date;

	@UpdatedAt
	@Column({ field: 'updated_at' })
	declare updatedAt: Date;

	@Column({
		type: DataType.ARRAY(DataType.INTEGER),
		allowNull: true
	})
	declare blockedUsers?: number[];

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare pronouns?: string | null;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare age?: string | null;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: true
	})
	declare private: boolean | null;

	@Column({
		type: DataType.ARRAY(DataType.INTEGER),
		allowNull: true
	})
	declare systems?: number[] | null;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare frontingStatus?: string | null;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare profileType?: string | null;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare ageRange?: string | null;

	@Column({
		type: DataType.STRING,
		allowNull: true,
		defaultValue: 'dark'
	})
	declare theme: string;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
		defaultValue: true
	})
	declare notifications: boolean;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare colorScheme?: string | null;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare invitationToken?: string | null;

	@Column({
		type: DataType.DATE,
		allowNull: true
	})
	declare invitationCreatedAt?: Date | null;

	@Column({
		type: DataType.DATE,
		allowNull: true
	})
	declare invitationSentAt?: Date | null;

	@Column({
		type: DataType.DATE,
		allowNull: true
	})
	declare invitationAcceptedAt?: Date | null;

	@Column({
		type: DataType.INTEGER,
		allowNull: true
	})
	declare invitationLimit?: number | null;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare invitedByType?: string | null;

	@Column({
		type: DataType.INTEGER,
		allowNull: true
	})
	declare invitedByID?: number | null;

	@Column({
		type: DataType.INTEGER,
		allowNull: true
	})
	declare invitationsCount?: number | null;
}
