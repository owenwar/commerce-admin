import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";



export default async function SetupLayout({
  children,
  
}:{
  children: React.ReactNode;
}) {
  

  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }
  

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return (
    <>
      {children}
    </>
  );
};