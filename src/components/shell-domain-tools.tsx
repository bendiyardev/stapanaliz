"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function ShellDomainTools() {
  const tools = [
    "Cloudflare Protected Sites • Thunder Strike",
    "HTTP/2 Tsunami • High Volume Flood",
    "TLS 1.3 Piercer • Akamai/Amazon Bypass",
    "Ahrefs Gelişmiş plan ($449/ay)",
    "GA4",
    "Google Indexing API",
    "AI destekli optimizasyon ( Opus 4.5 Api ): Input 20k → $0.10, Output 5k → $0.125",
    "Hitbot ($800/ay)",
    "Shelldomain",
  ];

  return (
    <div className="space-y-6 mt-8">
      {/* ShellDomain Pricing Section */}
      <Card>
        <CardHeader>
          <CardTitle>ShellDomainler Fiyat Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src="https://i.hizliresim.com/5v885r7.png"
                    alt="ShellDomain Fiyat Listesi"
                    width={800}
                    height={600}
                    className="rounded-lg border"
                    unoptimized
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="flex justify-center p-4">
                  <Image
                    src="https://i.hizliresim.com/5v885r7.png"
                    alt="ShellDomain Fiyat Listesi"
                    width={1200}
                    height={900}
                    className="rounded-lg"
                    unoptimized
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Technical Tools Section */}
      <Card>
        <CardHeader>
          <CardTitle>Kullanacağımız Araçlar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="default" className="text-base">
              11 Sunucumuz aktif
            </Badge>
          </div>
          <div className="grid gap-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 border rounded-lg hover:bg-accent transition-colors"
              >
                <span className="text-primary font-bold">•</span>
                <span className="text-sm font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
