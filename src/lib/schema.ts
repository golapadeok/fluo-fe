import { z } from "zod";

export const Member = z.object({
	memberId: z.string(),
	name: z.string(),
});

export const WorkspaceMember = Member.extend({
	email: z.string().email(),
	profileUrl: z.string().url(),
});

export const Credential = z.object({
	name: z.string(),
	description: z.string(),
});

export const Role = z.object({
	roleId: z.string(),
	name: z.string(),
	credentials: z.array(Credential),
});

export const Workspace = z.object({
	workspaceId: z.string(),
	title: z.string(),
	intro: z.string(),
	members: z.array(WorkspaceMember.pick({ name: true, profileUrl: true })), // profileImage -> profileUrl
	createDate: z.string().datetime(),
	updateDate: z.string().datetime(),
});

export const State = z.object({
	stateId: z.string(),
	name: z.string(),
});

export const Task = z.object({
	taskId: z.string(),
	title: z.string(),
	description: z.string(),
	creator: z.string(),
	managers: z.array(Member),
	state: State,
	isPrivate: z.boolean(),
	priority: z.number().int().gte(1).lte(5),
	startDate: z.string().datetime(),
	endDate: z.string().datetime(),
});

export const Tag = z.object({
	tagId: z.string(),
	name: z.string(), // tagName -> name
	colorCode: z.string(),
});

export const ErrorBody = z.object({
	message: z.string(),
});
