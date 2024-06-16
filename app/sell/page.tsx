import Image from "next/image";
import CommonPage from "@/app/ui/common-page";
import ImagePicker from "@/app/ui/sell/image-picker";

export default function Page() {
  return (
    <CommonPage>
      <div className="w-full h-full mt-20">
        <div className="flex flex-col mx-auto w-[70%] sm:flex-col md:flex-col lg:flex-col xl:flex-row">
          <div className="flex-1">
            <form className="flex flex-col max-w-lg gap-4 mb-40 mx-auto my-14">
              <div className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Content
                  </label>
                  <input
                    type="text"
                    id="content"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <ImagePicker />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="bg-purple-400">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-md shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  판매글 등록
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CommonPage>
  );
}
