"use server";

import supabase from "@/app/lib/supabseClient";
import prismaClient from "@/prisma/client.prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuid } from "uuid";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  image: z.string(),
  address: z.string(),
  price: z.coerce.number(),
  views: z.number(),
  createdDt: z.string(),
  updatedDt: z.string(),
  userId: z.string(),
});

const RegisterProduct = FormSchema.omit({
  id: true,
  views: true,
  image: true,
  createdDt: true,
  updatedDt: true,
  userId: true,
});

export async function registerProduct(formData: FormData) {
  // const rawFormData = Object.fromEntries(formData.entries());

  const { title, content, address, price } = RegisterProduct.parse({
    title: formData.get("title"),
    content: formData.get("content"),
    address: formData.get("address"),
    price: formData.get("price"),
  });

  const image = formData.get("image") as File;

  if (!image || image.size === 0) {
    console.error("No image selected or invalid image file.");
    return;
  }

  const fileName = `${uuid()}_${image.name}`;

  try {
    const { data, error } = await supabase.storage
      .from("product")
      .upload(`public/${fileName}`, image);

    if (error) {
      console.error("Error uploading image:", error);
      return;
    }

    const { publicUrl } = supabase.storage
      .from("product")
      .getPublicUrl(`public/${fileName}`).data;

    console.log(publicUrl);

    await prismaClient.product.create({
      data: {
        title,
        content,
        address,
        image: publicUrl,
        price,
        userId: "4c5526d3-7bdc-461d-b6c1-1742f9a03420",
      },
    });

    console.log("Public URL for the upload image:", publicUrl);
  } catch (error) {
    console.error("Error uploading image to Supabase", error);
  }

  revalidatePath("/buy");
  redirect("/buy");
}
