import { LeaveHistoryTable } from "@/components/LeaveHistoryTable";
import { ChartRadialShape } from "@/components/RadialChartShape";

function LeaveContent() {
  return (
    <div className="flex-1 flex flex-col mt-6 xl:overflow-hidden lg:overflow-visible">
      <div className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 px-6 gap-4 pt-1">
        <div>
          <ChartRadialShape label="Annual Leave" used={15} total={30} />
        </div>
        <div>
          <ChartRadialShape label="Sick Leave" used={6} total={8} />
        </div>
        <div>
          <ChartRadialShape label="Short Leave" used={4} total={8} />
        </div>
        <div>
          <ChartRadialShape label="Compensatory Day Off" used={2} total={15} />
        </div>
        <div>
          <ChartRadialShape label="Bereavement Leave" used={0} total={30} />
        </div>
      </div>
      <div className=" xl:mt-6 lg:mt-4  mt-3 px-6 overflow-y-auto">
        <div className="flex flex-col gap-4 border-2 border-border rounded-xl p-4 shadow-sm">
          <h2 className="w-fit bg-accent text-accent-foreground rounded-xl font-serif text-xl border border-border p-2">
            Past Leaves & Holidays
          </h2>
          <LeaveHistoryTable />
        </div>
      </div>
    </div>
  );
}

export default LeaveContent;
