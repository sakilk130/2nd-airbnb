import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '../libs/prismadb';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) return null;
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    if (!user) return null;
    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      emailVerified: user?.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    console.error(error);
    return null;
  }
}
