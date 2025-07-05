import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";
import { TrendingUp, Wallet, CreditCard, Plus, Eye, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F1DE' }}>
      <Navbar />
      
      <div className="container mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: '#2F3C33' }}>Dashboard Saya</h1>
          <p className="text-lg" style={{ color: '#48524A' }}>Kelola pinjaman dan jaminan crypto Anda dengan mudah</p>
        </div>

        {/* Stats Overview */}
        {loading ? (
          <SkeletonLoader type="stats" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white shadow-lg border-2" style={{ borderColor: '#48524A' }}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#48524A' }}>
                    Total Jaminan
                  </CardTitle>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#85CC17' }}>
                    <Wallet className="h-5 w-5 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold mb-2" style={{ color: '#2F3C33' }}>
                  1,734,000.00 IDRX
                </div>
                <div className="flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" style={{ color: '#85CC17' }} />
                  <span style={{ color: '#85CC17' }} className="font-medium">+5.2%</span>
                  <span style={{ color: '#48524A' }} className="ml-1">dari bulan lalu</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-2" style={{ borderColor: '#48524A' }}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#48524A' }}>
                    Pinjaman Aktif
                  </CardTitle>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#85CC17' }}>
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold mb-2" style={{ color: '#2F3C33' }}>
                  75,000,000 IDRX
                </div>
                <div className="text-sm" style={{ color: '#48524A' }}>
                  <span className="font-medium">2</span> pinjaman aktif
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-2" style={{ borderColor: '#48524A' }}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#48524A' }}>
                    Health Factor
                  </CardTitle>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#85CC17' }}>
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold mb-2" style={{ color: '#85CC17' }}>
                  2.45
                </div>
                <div className="text-sm" style={{ color: '#48524A' }}>
                  <span className="font-medium">Status:</span> Aman
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#2F3C33' }}>Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/apply" className="block">
              <Button className="w-full h-16 text-lg font-semibold" style={{ backgroundColor: '#85CC17' }}>
                <Plus className="w-5 h-5 mr-3" />
                Tambah Pinjaman
              </Button>
            </Link>
            <Link to="/loans" className="block">
              <Button variant="outline" className="w-full h-16 text-lg font-semibold bg-white border-2" 
                style={{ borderColor: '#48524A', color: '#2F3C33' }}>
                <Eye className="w-5 h-5 mr-3" />
                Kelola Pinjaman
              </Button>
            </Link>
            <Link to="/manage-collateral" className="block">
              <Button variant="outline" className="w-full h-16 text-lg font-semibold bg-white border-2" 
                style={{ borderColor: '#48524A', color: '#2F3C33' }}>
                <Wallet className="w-5 h-5 mr-3" />
                Kelola Jaminan
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Portfolio Overview */}
          <Card className="bg-white shadow-lg border-2" style={{ borderColor: '#48524A' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold" style={{ color: '#2F3C33' }}>Portfolio Jaminan</CardTitle>
              <CardDescription className="text-base" style={{ color: '#48524A' }}>
                Aset crypto yang digunakan sebagai jaminan
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <SkeletonLoader type="card" />
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl border-2" 
                    style={{ borderColor: '#48524A', backgroundColor: '#F3F1DE' }}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">BTC</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg" style={{ color: '#2F3C33' }}>Bitcoin</p>
                        <p className="text-sm" style={{ color: '#48524A' }}>0.25 BTC</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg" style={{ color: '#2F3C33' }}>1,700,000.00 IDRX</p>
                      <div className="flex items-center justify-end">
                        <ArrowUpRight className="h-4 w-4 mr-1" style={{ color: '#85CC17' }} />
                        <p className="text-sm font-medium" style={{ color: '#85CC17' }}>+2.3%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl border-2" 
                    style={{ borderColor: '#48524A', backgroundColor: '#F3F1DE' }}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">ETH</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg" style={{ color: '#2F3C33' }}>Ethereum</p>
                        <p className="text-sm" style={{ color: '#48524A' }}>0.8 ETH</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg" style={{ color: '#2F3C33' }}>30,000,000.00 IDRX</p>
                      <div className="flex items-center justify-end">
                        <ArrowDownRight className="h-4 w-4 mr-1 text-red-500" />
                        <p className="text-sm font-medium text-red-500">-1.2%</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-white shadow-lg border-2" style={{ borderColor: '#48524A' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold" style={{ color: '#2F3C33' }}>Transaksi Terbaru</CardTitle>
              <CardDescription className="text-base" style={{ color: '#48524A' }}>
                Aktivitas terbaru pada akun Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <SkeletonLoader type="table" />
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-4 p-3 rounded-lg font-semibold text-sm" 
                    style={{ backgroundColor: '#F3F1DE', color: '#2F3C33' }}>
                    <span>Tanggal</span>
                    <span>Tipe</span>
                    <span>Jumlah</span>
                    <span>Status</span>
                  </div>
                  
                                                         <div className="grid grid-cols-4 gap-4 p-3 border-b" style={{ borderColor: '#F3F1DE' }}>
                      <span className="text-sm" style={{ color: '#48524A' }}>10 Jun 2024</span>
                      <span className="text-sm" style={{ color: '#48524A' }}>Pinjaman</span>
                      <span className="text-sm font-medium" style={{ color: '#2F3C33' }}>50,000,000 IDRX</span>
                      <span 
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
                        style={{ backgroundColor: '#85CC17' }}
                      >
                        Berhasil
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 p-3 border-b" style={{ borderColor: '#F3F1DE' }}>
                      <span className="text-sm" style={{ color: '#48524A' }}>8 Jun 2024</span>
                      <span className="text-sm" style={{ color: '#48524A' }}>Deposit</span>
                      <span className="text-sm font-medium" style={{ color: '#2F3C33' }}>0.15 BTC</span>
                      <span 
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
                        style={{ backgroundColor: '#85CC17' }}
                      >
                        Berhasil
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 p-3">
                      <span className="text-sm" style={{ color: '#48524A' }}>5 Jun 2024</span>
                      <span className="text-sm" style={{ color: '#48524A' }}>Pembayaran</span>
                      <span className="text-sm font-medium" style={{ color: '#2F3C33' }}>2,500,000 IDRX</span>
                      <span 
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
                        style={{ backgroundColor: '#85CC17' }}
                      >
                        Berhasil
                      </span>
                    </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;