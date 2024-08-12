import Loading from "@/app/cars/[id]/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const SingleCarPage = dynamic(
  () => import("@/app/_components/singlCarPage/singlCarPage"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

function Page({ params }: { params: { id: string } }) {
  return (
    <section className="w-full h-full bg-bgBaseColor">
      <Suspense fallback={<Loading />}>
        <SingleCarPage params={params} />
      </Suspense>
    </section>
  );
}

export default Page;
