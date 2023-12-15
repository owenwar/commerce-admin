import { authMiddleware } from "@clerk/nextjs";
 
// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/api/:path*"],
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// Without a defined matcher, this one line applies next-auth to the entire project
// export { default } from "next-auth/middleware"

// Applies next-auth only to the matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = { mathcer: ["/extra", "/dashboard"] }