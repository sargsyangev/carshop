import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-20 flex justify-between items-center">
        <Skeleton variant="text" width={470} height={90} />
        <Skeleton variant="text" width={120} height={90} />
      </div>
      <div className="w-full h-auto flex gap-x-2 max-lg:flex-col">
        <Skeleton variant="text" width={500} height={700} />
        <Skeleton variant="text" width={350} height={700} />
      </div>
      <Skeleton variant="text" width={500} height={300} />
    </div>
  );
}
