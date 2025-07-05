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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Welcome Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#2F3C33' }}>
            Dashboard Saya
          </h1>
          <p className="text-xl" style={{ color: '#48524A' }}>
            Kelola pinjaman dan jaminan crypto Anda dengan mudah dan aman
          </p>
        </div>

        {/* Stats Overview Cards */}
        {loading ? (
          <SkeletonLoader type="stats" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white shadow-sm border-2 hover:shadow-md transition-shadow duration-200" 
                  style={{ borderColor: '#F3FFDE' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-semibold uppercase tracking-wider mb-1" 
                              style={{ color: '#48524A' }}>
                      Total Jaminan
                    </CardTitle>
                    <div className="text-3xl font-bold" style={{ color: '#2F3C33' }}>
                      1,734,000.00 IDRX
                    </div>
                  </div>
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#85CC17' }}>
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" style={{ color: '#85CC17' }} />
                  <span style={{ color: '#85CC17' }} className="font-semibold">+5.2%</span>
                  <span style={{ color: '#48524A' }} className="ml-1">dari bulan lalu</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-2 hover:shadow-md transition-shadow duration-200" 
                  style={{ borderColor: '#F3FFDE' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-semibold uppercase tracking-wider mb-1" 
                              style={{ color: '#48524A' }}>
                      Pinjaman Aktif
                    </CardTitle>
                    <div className="text-3xl font-bold" style={{ color: '#2F3C33' }}>
                      75,000,000 IDRX
                    </div>
                  </div>
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#85CC17' }}>
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm" style={{ color: '#48524A' }}>
                  <span className="font-semibold">2</span> pinjaman aktif saat ini
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-2 hover:shadow-md transition-shadow duration-200" 
                  style={{ borderColor: '#F3FFDE' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-semibold uppercase tracking-wider mb-1" 
                              style={{ color: '#48524A' }}>
                      Health Factor
                    </CardTitle>
                    <div className="text-3xl font-bold" style={{ color: '#85CC17' }}>
                      2.45
                    </div>
                  </div>
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#85CC17' }}>
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm" style={{ color: '#48524A' }}>
                  Status: <span className="font-semibold" style={{ color: '#85CC17' }}>Sangat Aman</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Actions Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#2F3C33' }}>
              Aksi Cepat
            </h2>
            <p className="text-lg" style={{ color: '#48524A' }}>
              Pilih tindakan yang ingin Anda lakukan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/apply" className="block group">
              <div className="p-6 rounded-xl border-2 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105" 
                   style={{ borderColor: '#F3FFDE' }}>
                <div className="text-center">
                  <div className="p-4 rounded-full inline-block mb-4" style={{ backgroundColor: '#85CC17' }}>
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#2F3C33' }}>
                    Tambah Pinjaman
                  </h3>
                  <p className="text-sm" style={{ color: '#48524A' }}>
                    Ajukan pinjaman baru dengan jaminan crypto
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/loans" className="block group">
              <div className="p-6 rounded-xl border-2 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105" 
                   style={{ borderColor: '#F3FFDE' }}>
                <div className="text-center">
                  <div className="p-4 rounded-full inline-block mb-4" style={{ backgroundColor: '#48524A' }}>
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#2F3C33' }}>
                    Kelola Pinjaman
                  </h3>
                  <p className="text-sm" style={{ color: '#48524A' }}>
                    Pantau dan kelola pinjaman yang sedang berjalan
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/manage-collateral" className="block group">
              <div className="p-6 rounded-xl border-2 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105" 
                   style={{ borderColor: '#F3FFDE' }}>
                <div className="text-center">
                  <div className="p-4 rounded-full inline-block mb-4" style={{ backgroundColor: '#48524A' }}>
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#2F3C33' }}>
                    Kelola Jaminan
                  </h3>
                  <p className="text-sm" style={{ color: '#48524A' }}>
                    Tambah atau tarik jaminan crypto Anda
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Portfolio Overview - Takes 2 columns */}
          <div className="xl:col-span-2">
            <Card className="bg-white shadow-sm border-2" style={{ borderColor: '#F3FFDE' }}>
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold" style={{ color: '#2F3C33' }}>
                      Portfolio Jaminan
                    </CardTitle>
                    <CardDescription className="text-base mt-1" style={{ color: '#48524A' }}>
                      Aset crypto yang digunakan sebagai jaminan
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold" style={{ color: '#48524A' }}>Total Nilai</div>
                    <div className="text-xl font-bold" style={{ color: '#2F3C33' }}>1,730,000 IDRX</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <SkeletonLoader type="card" />
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 rounded-xl border-2" 
                         style={{ borderColor: '#F3FFDE' }}>
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg font-bold">BTC</span>
                        </div>
                        <div>
                          <p className="font-bold text-lg" style={{ color: '#2F3C33' }}>Bitcoin</p>
                          <p className="text-sm" style={{ color: '#48524A' }}>0.25 BTC</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl" style={{ color: '#2F3C33' }}>1,700,000.00 IDRX</p>
                        <div className="flex items-center justify-end mt-1">
                          <ArrowUpRight className="h-4 w-4 mr-1" style={{ color: '#85CC17' }} />
                          <p className="text-sm font-semibold" style={{ color: '#85CC17' }}>+2.3%</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-6 rounded-xl border-2" 
                         style={{ borderColor: '#F3FFDE' }}>
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg font-bold">ETH</span>
                        </div>
                        <div>
                          <p className="font-bold text-lg" style={{ color: '#2F3C33' }}>Ethereum</p>
                          <p className="text-sm" style={{ color: '#48524A' }}>0.8 ETH</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl" style={{ color: '#2F3C33' }}>30,000.00 IDRX</p>
                        <div className="flex items-center justify-end mt-1">
                          <ArrowDownRight className="h-4 w-4 mr-1 text-red-500" />
                          <p className="text-sm font-semibold text-red-500">-1.2%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions - Takes 1 column */}
          <div className="xl:col-span-1">
            <Card className="bg-white shadow-sm border-2" style={{ borderColor: '#F3FFDE' }}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold" style={{ color: '#2F3C33' }}>
                  Aktivitas Terbaru
                </CardTitle>
                <CardDescription className="text-base mt-1" style={{ color: '#48524A' }}>
                  Transaksi dan aktivitas terkini
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <SkeletonLoader type="table" />
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border-2" style={{ borderColor: '#F3FFDE' }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold" style={{ color: '#2F3C33' }}>Pinjaman</span>
                        <span className="text-xs" style={{ color: '#48524A' }}>10 Jun 2024</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: '#48524A' }}>50,000,000 IDRX</span>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold text-white"
                              style={{ backgroundColor: '#85CC17' }}>
                          Berhasil
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border-2" style={{ borderColor: '#F3FFDE' }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold" style={{ color: '#2F3C33' }}>Deposit</span>
                        <span className="text-xs" style={{ color: '#48524A' }}>8 Jun 2024</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: '#48524A' }}>0.15 BTC</span>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold text-white"
                              style={{ backgroundColor: '#85CC17' }}>
                          Berhasil
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border-2" style={{ borderColor: '#F3FFDE' }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold" style={{ color: '#2F3C33' }}>Pembayaran</span>
                        <span className="text-xs" style={{ color: '#48524A' }}>5 Jun 2024</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: '#48524A' }}>2,500,000 IDRX</span>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold text-white"
                              style={{ backgroundColor: '#85CC17' }}>
                          Berhasil
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;