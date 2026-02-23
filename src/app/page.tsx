"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CompetitorTable } from "@/components/competitor-table";
import { PackageFeatures } from "@/components/package-features";
import { ShellDomainTools } from "@/components/shell-domain-tools";
import { packageInfo } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="outline" className="text-sm">
            SugarStap SEO Raporu
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Wingamb <span className="text-primary">Hızlı Seo</span>
          </h1>
        </div>

        {/* Package Info Card */}
        <Card className="mb-12 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">{packageInfo.name}</CardTitle>
            <CardDescription className="text-base">
              {packageInfo.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Fiyat</p>
                <p className="text-2xl font-bold">{packageInfo.price}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ROI & Garantiler</p>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-primary">2.5-3.5x ROI</p>
                  <p className="text-sm text-muted-foreground">
                    • 3-5 hafta net üye takibi garantisi<br/>
                    • Anahtar kelimede 1. sıra garantisi
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-12" />

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="overview">Mevcut Durum</TabsTrigger>
            <TabsTrigger value="package">Paket Detayları</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Mevcut Durum Analizi</h2>
              <p className="text-muted-foreground mb-6">
                Wingamb Durumu: 2025 çıkışlı site, aylık ~80K ziyaretçi. SEO zayıf: &quot;Deneme bonusu&quot; sıralaması 40+ dışında. 
                Üye kazanımı: Günlük 400-700. Agresif rekabet eksikliği nedeniyle geride, ama paket entegrasyonuyla hızlı sıçrama mümkün.
              </p>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Rakip Siteler Analizi</CardTitle>
                  <CardDescription>
                    Linklerimizin analizi - 3 aylık yönetim, 6 aylık sözleşme ile. Bizim linklerimiz üzerinden gelen trafik ve üye analizi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CompetitorTable />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pazar Fırsatı</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Aylık 13M+ bahis araması. Rakipler %70 black-hat: Parasite SEO, agresif anchor text, link farms. 
                    2026&apos;da E-E-A-T dengesi şart, ama agresif velocity ile hızlı kazanım mümkün.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-primary">1.8M</p>
                      <p className="text-sm text-muted-foreground">Toplam Aylık Trafik</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-primary">%60</p>
                      <p className="text-sm text-muted-foreground">Agresif Black-Hat Oranı</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-primary">%30</p>
                      <p className="text-sm text-muted-foreground">Potansiyel Boost</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="package" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">3 Aylık Premium Paket Detayları</h2>
              <PackageFeatures />
              <ShellDomainTools />
            </div>
          </TabsContent>

        </Tabs>
      </section>
    </main>
  );
}
