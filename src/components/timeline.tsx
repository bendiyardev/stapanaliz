"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { timelinePhases } from "@/lib/data";

export function Timeline() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Zaman Çizelgesi ve Bütçe</h3>
        <Badge variant="default" className="text-lg">
          Toplam: 320k TL
        </Badge>
      </div>

      <div className="space-y-8">
        {timelinePhases.map((phase, index) => {
          const progress = phase.duration === "Sürekli" ? 100 : ((index + 1) / timelinePhases.length) * 100;
          return (
            <div key={index} className="relative">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {index + 1}
                        </span>
                        {phase.phase}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {phase.description}
                      </CardDescription>
                    </div>
                    <div className="text-right ml-4">
                      <Badge variant="secondary" className="text-base mb-2 block">
                        {phase.duration}
                      </Badge>
                      <Badge variant="outline" className="text-base">
                        {phase.budget}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                {phase.duration !== "Sürekli" && (
                  <CardContent>
                    <Progress value={progress} className="h-2" />
                  </CardContent>
                )}
              </Card>
              {index < timelinePhases.length - 1 && (
                <div className="flex justify-center my-4">
                  <Separator orientation="vertical" className="h-8" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
