import { NextResponse } from "next/server";

import "@/core/app/config/di-container/project";
import { createProjectUseCase } from "@/core/app/usecases/project/create-project-usecase";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdProject = await createProjectUseCase.execute(body);
    return NextResponse.json(createdProject);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 405, headers: { "content-type": "application/json" } }
    );
  }
}
