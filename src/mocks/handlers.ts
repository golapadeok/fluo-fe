import { mockWorkspaces, mockRoles, mockMembers } from "@/mocks/data";
import { HttpResponse, http } from "msw";

export const handlers = [
	http.get("/workspaces/:workspaceId", ({ params }) => {
		const { workspaceId } = params;

		const workspace = mockWorkspaces.find(
			(data) => data.workspaceId === workspaceId,
		);

		if (!workspace) return HttpResponse.error();

		return HttpResponse.json(workspace, {
			status: 200,
		});
	}),
	http.put("/workspaces/:workspaceId", async ({ params, request }) => {
		const { workspaceId } = params;
		const title = await request.json();
		const workspace = mockWorkspaces.find(
			(data) => data.workspaceId === workspaceId,
		);

		if (!workspace || !title) return HttpResponse.error();

		workspace.title = title.toString();

		return HttpResponse.json(workspace, {
			status: 201,
		});
	}),
	http.delete("/workspaces/:workspaceId", ({ params }) => {
		const { workspaceId } = params;

		if (!workspaceId) return HttpResponse.error();

		return HttpResponse.json(
			{ message: "삭제했습니다" },
			{
				status: 200,
			},
		);
	}),
	http.get("/workspaces/:workspaceId/role", ({ params }) => {
		const { workspaceId } = params;

		if (!workspaceId) return HttpResponse.error();

		return HttpResponse.json(mockRoles, {
			status: 200,
		});
	}),
	http.get("/workspaces/:workspaceId/members", ({ params }) => {
		const { workspaceId } = params;

		if (!workspaceId) return HttpResponse.error();

		return HttpResponse.json(mockMembers, {
			status: 200,
		});
	}),
];
