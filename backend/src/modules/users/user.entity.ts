import type { IUser } from '@/typings/user';
import {
	AfterCreate,
	AfterUpdate,
	AllowNull,
	AutoIncrement,
	BeforeSave,
	Column,
	CreatedAt,
	DataType,
	Default,
	DeletedAt,
	IsEmail,
	Model,
	PrimaryKey,
	Table,
	Unique,
	UpdatedAt
} from 'sequelize-typescript';
import { UserSettings } from '@/modules/usersettings/usersettings.entity';
import { compare, hash } from 'bcryptjs';

@Table({
	tableName: 'users',
	defaultScope: {
		attributes: {
			exclude: ['password']
		}
	}
})
export class User extends Model implements IUser {
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.BIGINT)
	declare id: number;

	@Unique
	@AllowNull(false)
	@Column(DataType.STRING)
	declare username: string;

	@IsEmail
	@Unique
	@AllowNull(false)
	@Column(DataType.STRING)
	declare email: string;

	@Default(false)
	@Column(DataType.BOOLEAN)
	declare admin: boolean;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		defaultValue: '',
		field: 'encrypted_password'
	})
	declare password: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
		defaultValue: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
	})
	declare avatar?: string;

	@Default(false)
	@Column({
		type: DataType.BOOLEAN,
		allowNull: true
	})
	declare isEmailVerified?: boolean;

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	declare emailVerificationToken?: string;

	@Unique
	@Column({
		type: DataType.STRING,
		allowNull: true,
		field: 'reset_password_token'
	})
	declare resetPasswordToken?: string;

	@Column({
		type: DataType.DATE,
		allowNull: true,
		field: 'reset_password_sent_at'
	})
	declare resetPasswordSentAt?: Date;

	@CreatedAt
	@Column({ field: 'created_at' })
	declare createdAt: Date;

	@UpdatedAt
	@Column({ field: 'updated_at' })
	declare updatedAt: Date;

	@DeletedAt
	@Column({ field: 'deactivated_at' })
	declare deactivatedAt: Date;

	@AfterCreate
	static async createUserSettings(user: User) {
		await UserSettings.create({ userID: user.id });
	}

	@BeforeSave
	@AfterCreate
	@AfterUpdate
	static async hashPassword(instance: User) {
		if (!instance.password || ['$2b$10', '$2a$10'].some((prefix) => instance.password.startsWith(prefix))) return;

		const password = await this.generatePassword(instance.password);
		if (instance instanceof User && instance.changed('password')) {
			instance.password = password;
		}
	}

	async isCorrectPassword(password: string): Promise<boolean> {
		if (!this.password) throw new Error('No password set for this account');

		return compare(password, this.password);
	}

	static generatePassword(password: string) {
		return hash(password, 10);
	}
}
