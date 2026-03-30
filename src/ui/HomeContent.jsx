import { ChartAreaInteractive } from "@/components/AreaChartInteractive";
import { AvatarDemo } from "@/components/AvatarDemo";
import { AvatarGroupCountExample } from "@/components/AvatarGroup";
import { ChartBarLabelCustom } from "@/components/BarChartLabelCustom";

function HomeContent() {
  return (
    <div className="flex-1 flex flex-col mt-6">
      <div className="px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="py-6 border border-border rounded-xl bg-linear-to-t from-primary/3 to transparent shadow-sm">
          <div className="flex items-center justify-center gap-4 lg:gap-2 pl-2 xl:pl-0">
            <AvatarDemo
              className={`w-14 h-14 `}
              src="https://i.pravatar.cc/150?img=12"
            />
            <div>
              <p className="font-serif tracking-wide text-xl">Nithin TN</p>
              <p className="text-sm text-muted-foreground font-medium">
                Software Developer
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 border border-border rounded-xl bg-linear-to-t from-primary/3 to transparent shadow-sm">
          <div className="flex flex-col items-center gap-1">
            <p className="items-self-start font-serif tracking-wide text-lg font-medium">
              Department Members
            </p>
            <AvatarGroupCountExample />
          </div>
        </div>
        <div className="py-6 col-span-2 border border-border rounded-xl bg-linear-to-t from-primary/3 to transparent shadow-sm">
          <div className="flex flex-col justify-center items-center ">
            <p className=" text-lg mt-2">Good Morning, Nithin TN</p>
            <p className="text-muted-foreground text-sm">
              Have a Productive Day!
            </p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 px-20 lg:px-10 mt-10">
        <ChartBarLabelCustom className={`shadow-xl`} />
        <ChartAreaInteractive className={`lg:col-span-2 shadow-xl`} />
      </div>
    </div>
  );
}

export default HomeContent;
