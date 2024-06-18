"use server";

import prismaClient from "@/prisma/client.prisma";

export async function fetchAllProducts() {
  return await prismaClient.product.findMany();
}
