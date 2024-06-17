"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function ImagePicker() {
  const pickImageRef = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  function handleImageClick() {
    pickImageRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.result) {
        setPickedImage(fileReader.result.toString());
      }
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex-1 rounded-md flex flex-col gap-4">
      <div
        onClick={handleImageClick}
        className="rounded border cursor-pointer w-[10rem] h-[10rem] flex justify-center items-center text-center relative overflow-hidden"
      >
        {!pickedImage && <p className="text-sm">No image picked yet.</p>}
        {pickedImage && (
          <Image
            src={pickedImage}
            fill
            objectFit="cover"
            className="shadow-md"
            alt="Image"
          />
        )}
      </div>
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          ref={pickImageRef}
          onChange={handleImageChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
    </div>
  );
}
