import CommonPage from "@/app/ui/common-page";
import Form from "@/app/ui/sell/form";

export default function Page() {
  return (
    <CommonPage>
      <div className="w-full h-full mt-20">
        <div className="flex flex-col mx-auto w-[70%] sm:flex-col md:flex-col lg:flex-col xl:flex-row">
          <div className="flex-1">
            <Form />
          </div>
        </div>
      </div>
    </CommonPage>
  );
}
