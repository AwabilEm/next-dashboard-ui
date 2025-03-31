import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { routeAccessMap } from "./lib/settings";
import { NextResponse } from "next/server";

const matchers = Object.keys(routeAccessMap).map((route)=>({
  matcher:createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route]
}))

console.log(matchers)
export default clerkMiddleware( async(auth, req) => {
  // if (isProtectedRoute(req)) await auth.protect()

const { sessionClaims } = await auth();
const role =(sessionClaims?.metadata as {role?: string})?.role;
for(const {matcher, allowedRoles} of matchers){
  if(matcher(req) && !allowedRoles.includes(role!)){
    return NextResponse.redirect(new URL(`/${role}`,req.url));
  }
}

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};



// export default clerkMiddleware(async (auth, req) => {
//   const authResult = await auth();
  
//   if (!authResult.sessionId) {
//     return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect unauthenticated users
//   }

//   const role = (authResult.sessionClaims?.metadata as { role?: string })?.role;

//   if (!role) {
//     console.error("❌ Role is undefined! Check Clerk metadata.");
//     return NextResponse.redirect(new URL("/error", req.url));
//   }

//   for (const { matcher, allowedRoles } of matchers) {
//     if (matcher(req) && !allowedRoles.includes(role)) {
//       return NextResponse.redirect(new URL(`/${role}`, req.url));
//     }
//   }
// });
