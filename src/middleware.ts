// //Middle ware code is pending
// yaha pe line 5 chek karnege

// plusgin system ken ader mein jo bhi apiRoutes hai amatach karta hai hamara to wo repsonse dedo
// jo api orute mein wha par register wah par register kiya hai

// the pligins would able to register routes iwath out next js involvement,

// "Plugin" foleder ke ander mein route and api regesater katende to sare route block ho jayenge if cookirs is not HermesInternal.

import pluginSystem from "@/bootstrap";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const apiData = pluginSystem.getAllApiRoutes();
  
}
