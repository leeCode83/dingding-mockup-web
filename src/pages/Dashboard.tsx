import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";
import { TrendingUp, Wallet, CreditCard, Plus, Eye } from "lucide-react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-forest-green-800">Dashboard Saya</h1>
          <p className="text-forest-green-600">Kelola pinjaman dan jaminan crypto Anda</p>
        </div>

        {/* Stats Overview */}
        {loading ? (
          <SkeletonLoader type="stats" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-forest-green-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-forest-green-700">Total Jaminan</CardTitle>
                <Wallet className="h-4 w-4 text-forest-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-forest-green-800">1,734,000.00 IDRX</div>
                <p className="text-xs text-forest-green-600">
                  <span className="text-lime-green-500">+5.2%</span> dari bulan lalu
                </p>
              </CardContent>
            </Card>
            <Card className="border-forest-green-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-forest-green-700">Pinjaman Aktif</CardTitle>
                <CreditCard className="h-4 w-4 text-forest-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-forest-green-800">75,000,000 IDRX</div>
                <p className="text-xs text-forest-green-600">2 pinjaman aktif</p>
              </CardContent>
            </Card>
            <Card className="border-forest-green-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-forest-green-700">Health Factor</CardTitle>
                <TrendingUp className="h-4 w-4 text-forest-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-lime-green-500">2.45</div>
                <p className="text-xs text-forest-green-600">Status aman</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link to="/apply">
            <Button className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Tambah Pinjaman
            </Button>
          </Link>
          <Link to="/loans">
            <Button variant="outline" className="w-full">
              <Eye className="w-4 h-4 mr-2" />
              Kelola Pinjaman
            </Button>
          </Link>
          <Link to="/manage-collateral">
            <Button variant="outline" className="w-full">
              <Wallet className="w-4 h-4 mr-2" />
              Kelola Jaminan
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Portfolio Overview */}
          <Card className="border-forest-green-700">
            <CardHeader>
              <CardTitle className="text-forest-green-800">Portfolio Jaminan</CardTitle>
              <CardDescription className="text-forest-green-600">Aset crypto yang digunakan sebagai jaminan</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <SkeletonLoader type="card" />
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-forest-green-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">BTC</span>
                      </div>
                      <div>
                        <p className="font-medium text-forest-green-800">Bitcoin</p>
                        <p className="text-sm text-forest-green-600">0.25 BTC</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-forest-green-800">1,700,000.00 IDRX</p>
                      <p className="text-sm text-lime-green-500">+2.3%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-forest-green-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">ETH</span>
                      </div>
                      <div>
                        <p className="font-medium text-forest-green-800">Ethereum</p>
                        <p className="text-sm text-forest-green-600">0.8 ETH</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-forest-green-800">30,000,000.00 IDRX</p>
                      <p className="text-sm text-red-500">-1.2%</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="border-forest-green-700">
            <CardHeader>
              <CardTitle className="text-forest-green-800">Transaksi Terbaru</CardTitle>
              <CardDescription className="text-forest-green-600">Aktivitas terbaru pada akun Anda</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <SkeletonLoader type="table" />
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow className="border-forest-green-700">
                      <TableHead className="text-forest-green-700">Tanggal</TableHead>
                      <TableHead className="text-forest-green-700">Tipe</TableHead>
                      <TableHead className="text-forest-green-700">Jumlah</TableHead>
                      <TableHead className="text-forest-green-700">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-forest-green-700">
                      <TableCell className="text-forest-green-600">10 Jun 2024</TableCell>
                      <TableCell className="text-forest-green-600">Pinjaman</TableCell>
                      <TableCell className="text-forest-green-600">50,000,000 IDRX</TableCell>
                      <TableCell><Badge variant="default" className="bg-lime-green-500 text-white">Berhasil</Badge></TableCell>
                    </TableRow>
                    <TableRow className="border-forest-green-700">
                      <TableCell className="text-forest-green-600">8 Jun 2024</TableCell>
                      <TableCell className="text-forest-green-600">Deposit</TableCell>
                      <TableCell className="text-forest-green-600">0.15 BTC</TableCell>
                      <TableCell><Badge variant="default" className="bg-lime-green-500 text-white">Berhasil</Badge></TableCell>
                    </TableRow>
                    <TableRow className="border-forest-green-700">
                      <TableCell className="text-forest-green-600">5 Jun 2024</TableCell>
                      <TableCell className="text-forest-green-600">Pembayaran</TableCell>
                      <TableCell className="text-forest-green-600">2,500,000 IDRX</TableCell>
                      <TableCell><Badge variant="default" className="bg-lime-green-500 text-white">Berhasil</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
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