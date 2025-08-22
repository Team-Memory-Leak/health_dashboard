"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { useInsuranceCount } from "../Filters/dataRetrieval";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function ChartBarDefault() {
  const { count, loading } = useInsuranceCount("1","aa4");
  const { count: count1 } = useInsuranceCount("2","aa4");

  const chartData = [
    { response: "No", desktop: count1 },
    { response: "Yes", desktop: count },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Insurance Bar Chart</CardTitle>
        <CardDescription>Coverage breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="response"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="#0022FF" radius={8} />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total Health Coverage Responses
        </div>
      </CardFooter>
    </Card>
  );
}