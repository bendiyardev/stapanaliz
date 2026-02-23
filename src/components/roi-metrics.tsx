"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { roiMetrics, packageInfo } from "@/lib/data";

export function ROIMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {roiMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{metric.period}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Trafik:</span>
                <Badge variant="secondary">{metric.traffic}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Üye:</span>
                <Badge variant="outline">{metric.members}</Badge>
              </div>
              {metric.dailyMembers && (
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-sm text-muted-foreground">Günlük Üye:</span>
                  <Badge variant="default" className="text-sm">
                    {metric.dailyMembers}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle>Paket ROI Özeti</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Yatırım:</span>
            <Badge variant="destructive" className="text-lg">
              {packageInfo.discountedPrice}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Beklenen Getiri:</span>
            <Badge variant="default" className="text-lg">
              15M+ TL
            </Badge>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-sm font-medium">ROI:</span>
            <Badge variant="secondary" className="text-lg">
              {packageInfo.roi}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
