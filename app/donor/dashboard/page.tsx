"use client";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  LucideIcon,
} from "lucide-react";

import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Key } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function DonorDashboard() {
  const { data: session, status } = useSession();
  return (
    <div>
      <div className="flex flex-col gap-5  w-full" suppressHydrationWarning>
        <div className="flex justify-between">
          {/* <PageTitle title="Dashboard" /> */}
          <PageTitle title={`${session?.user?.name}`}/>
          <Button
            onClick={() =>
              signOut({ callbackUrl: "http://localhost:3000/login" })
            }
            variant="secondary"
          >
            Sign Out
          </Button>
        </div>
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map(
            (
              d: {
                amount: string;
                discription: string;
                icon: LucideIcon;
                label: string;
              },
              i: Key | null | undefined
            ) => (
              <Card
                key={i}
                amount={d.amount}
                discription={d.discription}
                icon={d.icon}
                label={d.label}
              />
            )
          )}
        </section>
        <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>

            <BarChart />
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Recent Orders</p>
              <p className="text-sm text-gray-400">
                You made 265 sales this month.
              </p>
            </section>
            {uesrSalesData.map((d, i) => (
              <SalesCard
                key={i}
                email={d.email}
                name={d.name}
                saleAmount={d.saleAmount}
              />
            ))}
          </CardContent>
          {/*  */}
        </section>
      </div>
    </div>
  );
}
