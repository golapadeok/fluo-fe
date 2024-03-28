export const mockWorkspaces = [
	{
		workspaceId: "1",
		title: "Example Workspace",
		description: "This is an example workspace",
		imageUrl: "https://example.com/image.jpg",
		createDate: "2023-06-08T10:30:00Z",
		states: [
			{
				stateId: "state1",
				name: "To Do",
			},
			{
				stateId: "state2",
				name: "In Progress",
			},
		],
		tasks: [
			{
				taskId: "task1",
				title: "Task 1",
				description: "This is task 1",
				creator: "user1",
				isPrivate: false,
				priority: 1,
				startDate: "2023-06-08T10:30:00Z",
				endDate: "2023-06-10T10:30:00Z",
				managers: [
					{
						memberId: "user1",
						name: "John Doe",
						email: "john@example.com",
						profileUrl: "https://example.com/profile1.jpg",
					},
				],
				state: {
					stateId: "state1",
					name: "To Do",
				},
				tag: {
					id: "tag1",
					tagName: "Bug",
					colorCode: "#FF0000",
				},
			},
		],
		members: [
			{
				memberId: "user1",
				name: "John Doe",
				email: "john@example.com",
				profileUrl: "https://example.com/profile1.jpg",
			},
			{
				memberId: "user2",
				name: "Jane Smith",
				email: "jane@example.com",
				profileUrl: "https://example.com/profile2.jpg",
			},
		],
		tags: [
			{
				id: "tag1",
				tagName: "Bug",
				colorCode: "#FF0000",
			},
			{
				id: "tag2",
				tagName: "Enhancement",
				colorCode: "#00FF00",
			},
		],
	},
];

export const mockRoles = {
	items: [
		{
			roleId: "role1",
			name: "Admin",
			credentials: [
				{
					name: "Create User",
					description: "Allows creating new user accounts",
				},
				{
					name: "Delete User",
					description: "Allows deleting user accounts",
				},
				{
					name: "Manage Roles",
					description: "Allows managing user roles and permissions",
				},
			],
		},
		{
			roleId: "role2",
			name: "Manager",
			credentials: [
				{
					name: "View Reports",
					description: "Allows viewing sales reports",
				},
				{
					name: "Generate Invoices",
					description: "Allows generating invoices for customers",
				},
			],
		},
		{
			roleId: "role3",
			name: "Employee",
			credentials: [
				{
					name: "Submit Timesheet",
					description: "Allows submitting timesheets for work hours",
				},
				{
					name: "Request Leave",
					description: "Allows requesting time off or leave",
				},
			],
		},
	],
};

export const mockMembers = {
	members: [
		{
			memberId: "user1",
			name: "John Doe",
			email: "john@example.com",
			profileUrl: "https://example.com/profile1.jpg",
			role: {
				roleId: "role1",
				name: "Admin",
			},
		},
		{
			memberId: "user2",
			name: "Jane Smith",
			email: "jane@example.com",
			profileUrl: "https://example.com/profile2.jpg",
			role: {
				roleId: "role2",
				name: "Manager",
			},
		},
		{
			memberId: "user3",
			name: "Mike Johnson",
			email: "mike@example.com",
			profileUrl: "https://example.com/profile3.jpg",
			role: {
				roleId: "role3",
				name: "Employee",
			},
		},
		{
			memberId: "user4",
			name: "Emily Brown",
			email: "emily@example.com",
			profileUrl: "https://example.com/profile4.jpg",
			role: {
				roleId: "role2",
				name: "Manager",
			},
		},
		{
			memberId: "user5",
			name: "David Lee",
			email: "david@example.com",
			profileUrl: "https://example.com/profile5.jpg",
			role: {
				roleId: "role3",
				name: "Employee",
			},
		},
	],
};
