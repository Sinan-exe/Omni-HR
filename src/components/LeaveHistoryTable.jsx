import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const leaveData = [
  {
    date: "2025-03-15",
    leaveType: "Annual Leave",
    reason: "Family vacation",
    status: "approved",
  },
  {
    date: "2025-03-01",
    leaveType: "Sick Leave",
    reason: "Fever and cold",
    status: "approved",
  },
  {
    date: "2025-02-20",
    leaveType: "Emergency Leave",
    reason: "Family emergency",
    status: "approved",
  },
  {
    date: "2025-02-10",
    leaveType: "Annual Leave",
    reason: "Personal trip",
    status: "rejected",
  },
  {
    date: "2025-01-28",
    leaveType: "Unpaid Leave",
    reason: "Personal work",
    status: "pending",
  },
  {
    date: "2025-01-14",
    leaveType: "Sick Leave",
    reason: "Medical procedure",
    status: "approved",
  },
  {
    date: "2025-01-05",
    leaveType: "Annual Leave",
    reason: "New year holidays",
    status: "approved",
  },
  {
    date: "2024-12-24",
    leaveType: "Annual Leave",
    reason: "Christmas holidays",
    status: "approved",
  },
  {
    date: "2024-12-10",
    leaveType: "Sick Leave",
    reason: "Flu and rest",
    status: "approved",
  },
  {
    date: "2024-11-25",
    leaveType: "Emergency Leave",
    reason: "Accident in family",
    status: "approved",
  },
  {
    date: "2024-11-10",
    leaveType: "Unpaid Leave",
    reason: "Home renovation",
    status: "rejected",
  },
  {
    date: "2024-10-30",
    leaveType: "Annual Leave",
    reason: "Wedding anniversary trip",
    status: "approved",
  },
  {
    date: "2024-10-15",
    leaveType: "Sick Leave",
    reason: "Back pain",
    status: "approved",
  },
];

const statusStyles = {
  approved: "bg-emerald-50 text-emerald-700",
  rejected: "bg-red-50 text-red-600",
  pending: "bg-amber-50 text-amber-600",
};

export function LeaveHistoryTable() {
  return (
    <Table className={`border border-border rounded-xl`}>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Leave Type</TableHead>
          <TableHead>Reason</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaveData.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="text-muted-foreground text-sm">
              {new Date(row.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </TableCell>
            <TableCell className="font-medium">{row.leaveType}</TableCell>
            <TableCell className="text-muted-foreground">
              {row.reason}
            </TableCell>
            <TableCell>
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[row.status]}`}
              >
                {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
