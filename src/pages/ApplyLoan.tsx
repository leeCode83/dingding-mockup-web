// Path: src/pages/ApplyLoan.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel, // Keep for potential future use or if styling is easier for single item
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; //
import { Calculator, AlertCircle, CheckCircle, ArrowRight, Wallet, TrendingUp, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyLoan = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const navigate = useNavigate();

  // State untuk mengelola tampilan langkah tutorial
  const [currentTutorialStepIndex, setCurrentTutorialStepIndex] = useState(0); //
  const [isTutorialOpen, setIsTutorialOpen] = useState(false); //

  const totalCollateralValueUSD = 12500;
  const maxLTV = 2/3;   //perbadingan jumlah pinjaman yang dimiliki dengan jaminan yang dimiliki
  const usdToIdrRate = 15800;
  const maxLoanableUSD = totalCollateralValueUSD * maxLTV;
  const maxLoanableIDRX = maxLoanableUSD * usdToIdrRate;
  const isLoanAmountExceeded = parseFloat(loanAmount) > maxLoanableIDRX;

  const calculateRepayments = () => {
    const amount = parseFloat(loanAmount) || 0;
    const interestRate = 8.5;
    const monthlyPayment = duration ? (amount * (1 + interestRate/100)) / parseInt(duration) : 0;
    return { monthlyPayment };
  };
  
  const { monthlyPayment } = calculateRepayments();

  // Definisi langkah-langkah tutorial dengan fokus pada highlight deskriptif
  const tutorialSteps = [
    {
      key: 'step1-collateral-summary',
      title: "Langkah 1: Periksa Ringkasan Limit",
      description: "Pertama, perhatikan bagian kartu di atas formulir. Di sini Anda akan melihat 'Total Jaminan Anda' dan 'Maksimal Pinjaman' yang bisa Anda ajukan dalam IDRX. Nilai ini dihitung otomatis berdasarkan aset kripto yang Anda miliki.",
    },
    {
      key: 'step2-loan-amount',
      title: "Langkah 2: Isi Jumlah Pinjaman",
      description: "Fokus pada kolom input 'Jumlah Pinjaman (IDRX)'. Masukkan jumlah IDRX yang ingin Anda pinjam. Pastikan angka yang Anda masukkan tidak melebihi 'Maksimal Pinjaman' yang tertera di ringkasan limit Anda.",
    },
    {
      key: 'step3-duration',
      title: "Langkah 3: Pilih Jangka Waktu",
      description: "Selanjutnya, gunakan dropdown 'Jangka Waktu (Bulan)' untuk memilih durasi pinjaman Anda. Pilihan ini akan mempengaruhi perhitungan cicilan bulanan Anda.",
    },
    {
      key: 'step4-loan-summary',
      title: "Langkah 4: Tinjau Ringkasan Pinjaman",
      description: "Lihatlah kartu 'Ringkasan Pinjaman' di sisi kanan. Ini adalah tempat di mana Anda dapat melihat detail pinjaman yang telah Anda masukkan, termasuk estimasi 'Pembayaran Bulanan' dan 'Suku Bunga'. Pastikan semua sudah sesuai.",
    },
    {
      key: 'step5-submit-button',
      title: "Langkah 5: Ajukan Pinjaman",
      description: "Setelah meninjau semua detail dan memastikan semuanya benar, klik tombol 'Ajukan Pinjaman'. Jika aplikasi Anda memenuhi syarat, dana akan langsung cair ke wallet Anda dalam beberapa menit.",
    },
  ]; //

  const currentTutorialStep = tutorialSteps[currentTutorialStepIndex]; 

  const handleNextTutorialStep = () => {
    setCurrentTutorialStepIndex((prevIndex) =>
      Math.min(prevIndex + 1, tutorialSteps.length - 1)
    );
  }; //

  const handlePreviousTutorialStep = () => {
    setCurrentTutorialStepIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }; //

  const handleSubmit = () => {
    if (isLoanAmountExceeded) return;
    setLoading(true);
    setTimeout(() => {
      setApplicationSubmitted(true);
      setLoading(false);
    }, 2000);
  };
  
  const proceedToDashboard = () => navigate('/dashboard');

  if (applicationSubmitted) {
    return (
        <div className="min-h-screen bg-background"><Navbar />
            <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="max-w-2xl mx-auto text-center">
                <Card className="border-sage-green-500">
                <CardContent className="pt-6">
                    <CheckCircle className="w-16 h-16 text-lime-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-forest-green-800">Aplikasi Pinjaman Terkirim!</h2>
                    <p className="text-forest-green-600 mb-6">Selamat! Aplikasi pinjaman Anda sedang diproses. Dana akan cair ke wallet Anda dalam 5-15 menit.</p>
                    <div className="bg-cream-50 p-4 rounded-lg mb-6 text-left border border-sage-green-500">
                    <div className="text-sm space-y-2">
                        <div className="flex justify-between"><span className="text-forest-green-600">Jumlah Pinjaman:</span><span className="font-medium text-forest-green-800">Rp {parseFloat(loanAmount).toLocaleString('id-ID')}</span></div>
                        <div className="flex justify-between"><span className="text-forest-green-600">Jangka Waktu:</span><span className="font-medium text-forest-green-800">{duration} Bulan</span></div>
                        <div className="flex justify-between"><span className="text-forest-green-600">Cicilan Bulanan:</span><span className="font-medium text-forest-green-800">Rp {monthlyPayment.toLocaleString('id-ID')}</span></div>
                    </div>
                    </div>
                    <Button className="w-full" size="lg" onClick={proceedToDashboard}>Kembali ke Dashboard <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </CardContent>
                </Card>
            </div>
            </div><Footer />
        </div>
    );
  }

  return (
    <Dialog open={isTutorialOpen} onOpenChange={setIsTutorialOpen}> {/* */}
      <div className="min-h-screen bg-background"><Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8"><h1 className="text-3xl font-bold mb-2 text-forest-green-800">Ajukan Pinjaman</h1><p className="text-forest-green-600">Dapatkan IDRX dengan mudah berdasarkan jaminan yang Anda miliki.</p></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Application Form */}
              <Card className="border-sage-green-500">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-forest-green-800">Detail Pinjaman</CardTitle>
                      <CardDescription className="text-forest-green-600">Isi form berikut untuk mengajukan pinjaman.</CardDescription>
                    </div>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon" className="flex-shrink-0" onClick={() => setCurrentTutorialStepIndex(0)}> {/* */}
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Card className="bg-cream-50 border-sage-green-500">
                    <CardContent className="pt-4 space-y-3">
                      <div className="flex justify-between items-center text-sm"><span className="text-forest-green-600 flex items-center"><Wallet className="w-4 h-4 mr-2"/>Total Jaminan Anda</span><span className="font-medium text-forest-green-800">${totalCollateralValueUSD.toLocaleString('en-US')}</span></div>
                      <div className="flex justify-between items-center text-sm"><span className="text-forest-green-600 flex items-center"><TrendingUp className="w-4 h-4 mr-2"/>Maksimal Pinjaman</span><span className="font-medium text-lime-green-500">Rp {maxLoanableIDRX.toLocaleString('id-ID')}</span></div>
                    </CardContent>
                  </Card>
                  <div className="space-y-2">
                    <Label htmlFor="amount" className="text-forest-green-700">Jumlah Pinjaman (IDRX)</Label>
                    <Input id="amount" type="number" placeholder="50000000" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} className={`border-sage-green-500 ${isLoanAmountExceeded ? "border-red-500 focus-visible:ring-red-500" : ""}`}/>
                    {isLoanAmountExceeded && (<Alert variant="destructive" className="mt-2 text-xs border-red-500"><AlertCircle className="h-4 w-4" /><AlertDescription>Jumlah pinjaman melebihi batas maksimal.</AlertDescription></Alert>)}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration" className="text-forest-green-700">Jangka Waktu (Bulan)</Label>
                    <Select value={duration} onValueChange={setDuration}><SelectTrigger className="border-sage-green-500"><SelectValue placeholder="Pilih jangka waktu" /></SelectTrigger><SelectContent className="border-sage-green-500"><SelectItem value="6">6 Bulan</SelectItem><SelectItem value="12">12 Bulan</SelectItem><SelectItem value="18">18 Bulan</SelectItem><SelectItem value="24">24 Bulan</SelectItem></SelectContent></Select>
                  </div>
                </CardContent>
              </Card>

              {/* Loan Summary */}
              <Card className="border-sage-green-500">
                <CardHeader><CardTitle className="flex items-center text-forest-green-800"><Calculator className="w-5 h-5 mr-2" />Ringkasan Pinjaman</CardTitle><CardDescription className="text-forest-green-600">Perhitungan berdasarkan input Anda.</CardDescription></CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center"><span className="text-forest-green-600">Jumlah Pinjaman</span><span className="font-medium text-forest-green-800">{loanAmount ? `Rp ${parseFloat(loanAmount).toLocaleString('id-ID')}` : '-'}</span></div>
                    <div className="flex justify-between items-center"><span className="text-forest-green-600">Jangka Waktu</span><span className="font-medium text-forest-green-800">{duration ? `${duration} Bulan` : '-'}</span></div>
                    <div className="flex justify-between items-center"><span className="text-forest-green-600">Suku Bunga</span><span className="font-medium text-forest-green-800">8.5% per tahun</span></div>
                    <div className="flex justify-between items-center text-lg"><span className="text-forest-green-600">Pembayaran Bulanan</span><span className="font-bold text-lime-green-500">{monthlyPayment > 0 ? `Rp ${monthlyPayment.toLocaleString('id-ID')}` : '-'}</span></div>
                    <div className="flex justify-between items-center"><span className="text-forest-green-600">LTV Setelah Pinjaman</span><Badge variant="outline" className="border-sage-green-500 text-sage-green-700">{loanAmount ? `${((parseFloat(loanAmount) / usdToIdrRate) / totalCollateralValueUSD * 100).toFixed(2)}%` : '0.00%'}</Badge></div>
                  </div>
                  <div className="border-t border-sage-green-500 pt-4">
                    <Button className="w-full" size="lg" onClick={handleSubmit} disabled={!loanAmount || !duration || loading || isLoanAmountExceeded}>{loading ? "Memproses Aplikasi..." : "Ajukan Pinjaman"}</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <DialogContent className="sm:max-w-[425px] border-sage-green-500">
        <DialogHeader>
          <DialogTitle className="text-forest-green-800">Cara Mengajukan Pinjaman</DialogTitle>
        </DialogHeader>
        <Card className="border-sage-green-500">
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
              <h3 className="text-lg font-semibold text-center text-forest-green-800">{currentTutorialStep.title}</h3> {/* */}
              <p className="text-sm text-forest-green-600 text-center">{currentTutorialStep.description}</p> {/* */}
              <div className="flex justify-between w-full mt-4">
                <Button
                  variant="outline"
                  onClick={handlePreviousTutorialStep}
                  disabled={currentTutorialStepIndex === 0}
                >
                  Kembali
                </Button>
                {currentTutorialStepIndex < tutorialSteps.length - 1 ? (
                  <Button onClick={handleNextTutorialStep}>Lanjut</Button>
                ) : (
                  <Button onClick={() => setIsTutorialOpen(false)}>Selesai</Button> 
                )}
              </div>
            </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyLoan;