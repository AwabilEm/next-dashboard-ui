import { auth } from "@clerk/nextjs/server";

// export let role: string | null = null;

// auth().then(authResult => {
//   role = (authResult.sessionClaims?.metadata as { role?: string })?.role || null;
// });



// const { userId, sessionClaims } = auth();
// const role =(sessionClaims?.metadata as {role?: string})?.role

export let CurrentUserId: string | null = null;
export let role: string | null = null;

auth().then(authResult => {
    CurrentUserId = authResult.userId || null;
  role = (authResult.sessionClaims?.metadata as { role?: string })?.role || null;
});
