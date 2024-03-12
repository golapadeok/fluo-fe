import { HttpResponse, http } from "msw";

export const handlers = [
	http.get("/", () => {
		return HttpResponse.json({ intros: ["hi", "hello"] }, { status: 200 });
	}),
];
