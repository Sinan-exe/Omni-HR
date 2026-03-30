import { IconTrendingUp } from "@tabler/icons-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with a custom label";

const chartData = [
  { department: "Sales", count: 27 },
  { department: "Engineering", count: 45 },
  { department: "Marketing", count: 18 },
  { department: "HR", count: 12 },
  { department: "Finance", count: 20 },
  { department: "Operations", count: 33 },
];

const chartConfig = {
  count: {
    label: "Headcount",
    color: "var(--chart-1)",
  },
  label: {
    color: "var(--background)",
  },
};

export function ChartBarLabelCustom({ className }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Department - HeadCount</CardTitle>
        <CardDescription>All Departments</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} layout="vertical" margin={{ right: 16 }}>
            <CartesianGrid horizontal={false} />

            <YAxis
              dataKey="department"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />

            <XAxis dataKey="count" type="number" hide />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Bar dataKey="count" fill="var(--color-count)" radius={4}>
              <LabelList
                dataKey="department"
                position="insideLeft"
                offset={8}
                className="fill-[var(--color-label)]"
                fontSize={12}
              />
              <LabelList
                dataKey="count"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month
          <IconTrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing headcount across all departments
        </div>
      </CardFooter>
    </Card>
  );
}
