import { pgTable, serial, text, integer, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import {sql} from "drizzle-orm";
//for auth
export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});
//Site set up

export const AccountType = pgEnum("AccountType",
    [
        'Singlet',
        'Polyfragmented',
        'Median',
        'System'
    ]);

export const Profiletype = pgEnum('Profiletype',[
    'Planet',
    'Moon',
    'Satellite',
    'System'
]);
export const MaturityType = pgEnum('MaturityType',[
    'AgeSlider',
    'Eternal',
    'Elderly',
    'Adult',
    'Adolescent',
    'Child',
    'Ageless'
]);
export const FrontStatus= pgEnum('FrontStatus',[
    'Alert',
    'Blurry',
    'Rapid Switching',
    'Dissociated',
    'Sleeping',
    'Triggered',
    'fatigued',
    'None',
    'Dysphoric'
]);
export const ProfileStatus = pgEnum('FrontingStatus',[
    'Completely',
    'Partially',
    'not'
]);
export const ProfileSubstatus = pgEnum('ProfileSubstatus',[
    'Triggered',
    'Frontstuck',
    'Amnestic', //it means having amnesia
    'none'
])







//tables
export const account = pgTable('account', {
	id: serial('id').primaryKey().notNull(),
	name: text('name').notNull(),
	age: integer('age').notNull().default(13),
    type:AccountType('AccountType').array().notNull().default(sql`'ARRAY[]'::AccountType[]`),
    profiles: serial('ProfileID').references('profile').array().default(sql`'ARRAY[]'::serial[]`),
    systems: serial('ProfileID').references('profile').array().default(sql`'ARRAY[]'::serial[]`),
    headmates: serial('ProfileID').references('profile').array().default(sql`'ARRAY[]'::serial[]`),
    fronters: serial('ProfileID').references('profile').array().default(sql`'ARRAY[]'::serial[]`)
});
export const profile = pgTable('profile', {
    id: serial('id').primaryKey().notNull(),
    SocialID: serial('SocialID').notNull(),
    name: text('name').notNull(),
    age: integer('age').notNull().default(13),
    type: Profiletype('ProfileType'),
    maturity: MaturityType('MaturityType').array().default(sql`'ARRAY[]'::MaturityType[]`),
    bio: text('bio'),
    profilepic: text('profilepic')
});
export const frontstatuslog = pgTable('frontstatuslog', {
    id: serial('id').primaryKey().notNull(),
    status:FrontStatus('FrontStatus').default('none'),
    startdate: timestamp('startdate').notNull(),
    enddate: timestamp('enddate')
});
export const frontinglog = pgTable('frontinglog', {
    id: serial('id').primaryKey().notNull(),
    fronter:serial('fronter'), //foreign key
    status: ProfileStatus('FrontingStatus').default('Completely'),
    substatus: ProfileSubstatus('ProfileSubstatus').default('none'),
    startdate: timestamp('startdate').notNull(),
    enddate: timestamp('enddate')
});
export const consciousnesslog = pgTable('consciousnesslog', {
    id: serial('id').primaryKey().notNull(),
    status: ProfileStatus('consciousnessStatus').default('Completely'),
    substatus: ProfileSubstatus('ProfileSubstatus').default('none'),
    startdate: timestamp('startdate').notNull(),
    enddate: timestamp('enddate').default(undefined)
})
