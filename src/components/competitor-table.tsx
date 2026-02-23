"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { competitors } from "@/lib/data";

export function CompetitorTable() {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Site</TableHead>
            <TableHead>Aylık Trafik</TableHead>
            <TableHead>Günlük Üye Kazanımı</TableHead>
            <TableHead>Domain Rating (DR)</TableHead>
            <TableHead>Teknik Operasyon Detayları</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {competitors.map((competitor) => (
            <TableRow key={competitor.site}>
              <TableCell className="font-medium">{competitor.site}</TableCell>
              <TableCell>
                <Badge variant="secondary">{competitor.monthlyTraffic}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{competitor.dailyMembers}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="default">{competitor.domainRating}</Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {competitor.tactics}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
