import {
	pgTable,
	serial,
	integer,
	text,
	timestamp,
	pgEnum, boolean
} from 'drizzle-orm/pg-core';


export const Profiletype = pgEnum('Profiletype',[
	'Planet',
	'Moon',
	'Satellite',
	'System'
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
]);




export const profile = pgTable('profile', {
	id: serial('id').primaryKey().notNull().unique(),
	SocialID: serial('SocialID').notNull(),
	name: text('name').notNull(),
	handle: text('handle'),
	pronouns: text('pronouns'),
	age: integer('age').notNull().default(13),
	type: Profiletype('ProfileType'),
	color: text('color'),

	archived: boolean('archived').default(false),

	bio: text('bio'),
	profilepic: text('profilepic'),

	spuserid: text('spuserid'),
	spid: text('spid'),
	pkuserid: text('pkuserid'),
});
export const frontstatuslog = pgTable('frontstatuslog', {
	id: serial('id').primaryKey().notNull().unique(),
	status:FrontStatus('FrontStatus').default('None'),
	startdate: timestamp('startdate').notNull(),
	enddate: timestamp('enddate')
});
export const frontinglog = pgTable('frontinglog', {
	id: serial('id').primaryKey().notNull().unique(),
	fronter:serial('fronter').references(()=>profile.id), //foreign key
	status: ProfileStatus('FrontingStatus').default('Completely'),
	substatus: ProfileSubstatus('ProfileSubstatus').default('none'),
	startdate: timestamp('startdate').notNull(),
	enddate: timestamp('enddate')
});
export const consciousnesslog = pgTable('consciousnesslog', {
	id: serial('id').primaryKey().notNull().unique(),
	ConMember:serial('ConMember').references(()=>profile.id),
	status: ProfileStatus('consciousnessStatus').default('Completely'),
	substatus: ProfileSubstatus('ProfileSubstatus').default('none'),
	startdate: timestamp('startdate').notNull(),
	enddate: timestamp('enddate')
});