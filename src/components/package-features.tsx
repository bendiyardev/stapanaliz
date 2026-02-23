"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { packageFeatures } from "@/lib/data";

export function PackageFeatures() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {packageFeatures.map((feature, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              {feature.value && (
                <Badge variant="secondary" className="ml-2">
                  {feature.value}
                </Badge>
              )}
            </div>
            <CardDescription className="mt-2">
              {feature.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {feature.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
