// import komponen shadcn yang dibutuhkan (button, card, dll)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

//untuk berpindah halaman, misalnya dari homepage ke FAQ
//Tidak menggunakan <a> karena dengan Link, web tidak perlu
// memuat seluruh halaman, jadi lebih cepat loadingnya
import { Link } from "react-router-dom";

//Navbar dan Footer Section merupakan komponen buatan sendiri
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

//import untuk menggunakan ikon-ikon dari react untuk membuat informasi lebih bagus
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cream-50" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-forest-green-800">
              Pinjaman Mudah untuk{" "}
              <span className="text-lime-green-500">
                UMKM Indonesia
              </span>
            </h1>
            <p className="text-xl text-forest-green-600 max-w-2xl mx-auto">
              Dapatkan pinjaman dalam IDRX dengan menggunakan crypto sebagai jaminan. 
              Proses cepat, aman, dan tanpa ribet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="px-8 py-6 text-lg">
                  Ajukan Pinjaman Sekarang
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  Lihat Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-green-800">Cara Kerja Dingdong Loans</h2>
          <p className="text-forest-green-600 text-lg max-w-2xl mx-auto">
            Proses sederhana dalam 3 langkah untuk mendapatkan pinjaman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-sage-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-sage-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <CardTitle className="text-forest-green-800">Deposit Crypto</CardTitle>
              <CardDescription className="text-forest-green-600">
                Setorkan aset crypto Anda sebagai jaminan untuk mendapatkan pinjaman
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center border-sage-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-sage-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <CardTitle className="text-forest-green-800">Tentukan Jumlah</CardTitle>
              <CardDescription className="text-forest-green-600">
                Pilih jumlah IDRX yang ingin dipinjam berdasarkan nilai jaminan Anda
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center border-sage-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-sage-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <CardTitle className="text-forest-green-800">Terima Pinjaman</CardTitle>
              <CardDescription className="text-forest-green-600">
                Dapatkan IDRX langsung ke wallet Anda dan gunakan untuk kebutuhan bisnis
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-green-800">Mengapa Pilih Dingdong Loans?</h2>
            <p className="text-forest-green-600 text-lg max-w-2xl mx-auto">
              Solusi pinjaman modern yang dirancang khusus untuk UMKM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-sage-green-500 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-lime-green-500 mx-auto mb-4" />
                <CardTitle className="text-lg text-forest-green-800">Proses Cepat</CardTitle>
                <CardDescription className="text-forest-green-600">
                  Persetujuan dalam hitungan menit, bukan hari
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sage-green-500 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-sage-green-500 mx-auto mb-4" />
                <CardTitle className="text-lg text-forest-green-800">100% Aman</CardTitle>
                <CardDescription className="text-forest-green-600">
                  Teknologi blockchain untuk keamanan maksimal
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sage-green-500 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-lime-green-500 mx-auto mb-4" />
                <CardTitle className="text-lg text-forest-green-800">Bunga Kompetitif</CardTitle>
                <CardDescription className="text-forest-green-600">
                  Suku bunga rendah dan transparan
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sage-green-500 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <CheckCircle className="w-12 h-12 text-sage-green-500 mx-auto mb-4" />
                <CardTitle className="text-lg text-forest-green-800">Tanpa Ribet</CardTitle>
                <CardDescription className="text-forest-green-600">
                  Tidak perlu cek skor kredit tradisional
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-sage-green-500 rounded-2xl p-12 text-center text-white border border-sage-green-600">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabung dengan ribuan UMKM yang sudah merasakan kemudahan Dingdong Loans
          </p>
          <Link to="/apply">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Mulai Sekarang
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;