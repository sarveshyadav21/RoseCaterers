import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import OrdersTable from "@/components/dashboard/OrdersTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Orders" value="128" />
        <StatCard title="Revenue" value="₹4.5L" />
        <StatCard title="Active Events" value="12" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <RevenueChart />
        <OrdersTable />
      </div>
    </div>
  );
}
